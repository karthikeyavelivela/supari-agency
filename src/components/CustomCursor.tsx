'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 200 }
  const mainX = useSpring(cursorX, springConfig)
  const mainY = useSpring(cursorY, springConfig)

  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])
  const nextId = useRef(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)

      // Add trail particles
      if (Math.random() > 0.7) {
        const id = nextId.current++
        setTrail((prev) => [...prev.slice(-10), { x: e.clientX, y: e.clientY, id }])
        setTimeout(() => {
          setTrail((prev) => prev.filter((p) => p.id !== id))
        }, 600)
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  if (isMobile) return null

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
        {/* Main Cursor Circle */}
        <motion.div
          style={{
            x: mainX,
            y: mainY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            width: isHovering ? 80 : 20,
            height: isHovering ? 80 : 20,
            backgroundColor: isHovering ? 'rgba(139, 0, 0, 0.15)' : 'rgba(139, 0, 0, 1)',
            border: isHovering ? '1px solid rgba(139, 0, 0, 0.5)' : 'none',
          }}
          className="rounded-full shadow-[0_0_15px_rgba(139,0,0,0.5)]"
        />

        {/* Trail Particles */}
        {trail.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            style={{
              position: 'fixed',
              left: p.x,
              top: p.y,
              x: '-50%',
              y: '-50%',
            }}
            className="w-1.5 h-1.5 bg-accent rounded-full pointer-events-none"
          />
        ))}

        {/* Spotlight Effect (Subtle) */}
        <motion.div
          style={{
            x: mainX,
            y: mainY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className="w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none opacity-50"
        />
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  )
}
