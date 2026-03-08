'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleSystem() {
  const ref = useRef<THREE.Points>(null!)
  
  const [positions, sizes] = useMemo(() => {
    const count = 1500
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5
      sizes[i] = Math.random() * 2
    }
    return [positions, sizes]
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = time * 0.02
      ref.current.position.y = Math.sin(time * 0.5) * 0.2
    }
  })

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial
        transparent
        color="#8B0000"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default function ParticleField() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none mix-blend-screen opacity-50">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ParticleSystem />
      </Canvas>
    </div>
  )
}
