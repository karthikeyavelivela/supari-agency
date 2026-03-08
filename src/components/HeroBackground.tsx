'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Particles
    const particlesGeometry = new THREE.BufferGeometry()
    const count = 2000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
      colors[i] = Math.random() * 0.5 + 0.5 // R range 0.5-1.0
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: '#8B0000',
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Network Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: '#8B0000',
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending
    })

    const lineGeometry = new THREE.BufferGeometry()
    const linePositions = new Float32Array(1000 * 6) // 1000 lines, 2 points each
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lines)

    camera.position.z = 4

    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('mousemove', handleMouseMove)

    const clock = new THREE.Clock()

    const animate = () => {
      requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      targetX += (mouseX - targetX) * 0.05
      targetY += (mouseY - targetY) * 0.05

      particlesMesh.rotation.y = elapsedTime * 0.05
      particlesMesh.rotation.x = elapsedTime * 0.02

      // Subtle parallax
      camera.position.x += (targetX * 0.5 - camera.position.x) * 0.02
      camera.position.y += (-targetY * 0.5 - camera.position.y) * 0.02
      camera.lookAt(scene.position)

      // Update network lines (very basic connection)
      const pos = particlesGeometry.attributes.position.array as Float32Array
      const linePos = lineGeometry.attributes.position.array as Float32Array
      let lineIdx = 0
      
      for (let i = 0; i < 200; i++) { // Only draw some lines for performance
        const i3 = i * 3
        const nextI3 = ((i + 1) % 100) * 3
        
        linePos[lineIdx++] = pos[i3]
        linePos[lineIdx++] = pos[i3+1]
        linePos[lineIdx++] = pos[i3+2]
        
        linePos[lineIdx++] = pos[nextI3]
        linePos[lineIdx++] = pos[nextI3+1]
        linePos[lineIdx++] = pos[nextI3+2]
      }
      lineGeometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, delay: 1.5 }}
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
