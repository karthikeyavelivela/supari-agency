'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function NetworkCore() {
  const pointsRef = useRef<THREE.Points>(null!)
  const linesRef = useRef<THREE.LineSegments>(null!)
  
  const [positions, colors] = useMemo(() => {
    const count = 500
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 8 + 2
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(Math.random() * 2 - 1)
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
      
      // Reds and Crimsons
      colors[i * 3] = 0.5 + Math.random() * 0.5 // R
      colors[i * 3 + 1] = 0 // G
      colors[i * 3 + 2] = 0 // B
    }
    return [positions, colors]
  }, [])

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const linePositions = new Float32Array(3000 * 6)
    geometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    return geometry
  }, [])

  const lineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({
      color: 0x8B0000,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending
    })
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (pointsRef.current && linesRef.current) {
      pointsRef.current.rotation.y = time * 0.05
      pointsRef.current.rotation.x = time * 0.02
      linesRef.current.rotation.y = time * 0.05
      linesRef.current.rotation.x = time * 0.02

      // Dynamic connections (simplified for performance)
      const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array
      const linePositions = linesRef.current.geometry.attributes.position.array as Float32Array
      
      let lineIdx = 0
      for (let i = 0; i < 300; i++) {
        // Pulsating node effect
        positionsArray[i * 3 + 1] += Math.sin(time * 2 + i) * 0.002

        const idx1 = i * 3
        const idx2 = ((i + 7) % 500) * 3
        
        linePositions[lineIdx++] = positionsArray[idx1]
        linePositions[lineIdx++] = positionsArray[idx1 + 1]
        linePositions[lineIdx++] = positionsArray[idx1 + 2]
        
        linePositions[lineIdx++] = positionsArray[idx2]
        linePositions[lineIdx++] = positionsArray[idx2 + 1]
        linePositions[lineIdx++] = positionsArray[idx2 + 2]
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true
      linesRef.current.geometry.attributes.position.needsUpdate = true
    }

    // Parallax
    state.camera.position.x += (state.pointer.x * 2 - state.camera.position.x) * 0.05
    state.camera.position.y += (state.pointer.y * 2 - state.camera.position.y) * 0.05
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <group>
      <Points ref={pointsRef} positions={positions} colors={colors}>
        <PointMaterial
          transparent
          vertexColors
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <lineSegments ref={linesRef} geometry={lineGeometry} material={lineMaterial} />
    </group>
  )
}

export default function NeuralNetworkBackground() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <NetworkCore />
      </Canvas>
    </div>
  )
}
