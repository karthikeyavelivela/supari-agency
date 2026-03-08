'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showLogo, setShowLogo] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 1200)
          return 100
        }
        return prev + Math.random() * 5
      })
    }, 50)

    // Sequence timing
    const logoTimer = setTimeout(() => setShowLogo(true), 800)

    return () => {
      clearInterval(timer)
      clearTimeout(logoTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: 'blur(20px)',
            transition: { duration: 1.2, ease: [0.65, 0, 0.35, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Particles Background */}
          <div className="absolute inset-0 pointer-events-none">
            {mounted && [...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 100 - 50 + '%', 
                  y: Math.random() * 100 - 50 + '%',
                  opacity: 0 
                }}
                animate={{ 
                  x: Math.random() * 100 - 50 + '%', 
                  y: Math.random() * 100 - 50 + '%',
                  opacity: [0, 0.4, 0],
                  scale: [0, 1, 0]
                }}
                transition={{ 
                  duration: Math.random() * 3 + 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute w-1 h-1 bg-accent rounded-full blur-[1px]"
              />
            ))}
          </div>

          <div className="relative z-10 w-full max-w-sm px-6 flex flex-col items-center">
            {/* Logo Reveal */}
            <div className="h-24 flex items-center justify-center mb-12">
              <AnimatePresence>
                {showLogo && (
                  <motion.div
                    initial={{ opacity: 0, letterSpacing: '0.5em', filter: 'blur(10px)' }}
                    animate={{ opacity: 1, letterSpacing: '0.2em', filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="flex flex-col items-center"
                  >
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-white tracking-[0.2em]">
                      SUPARI
                    </h1>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 1, duration: 1 }}
                      className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mt-2"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Loading Bar Container */}
            <div className="w-full space-y-4">
              <div className="relative h-[2px] w-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="absolute h-full bg-accent shadow-[0_0_15px_#8B0000]"
                />
              </div>
              
              <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-white/30 uppercase">
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Initializing Core
                </motion.span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>
          </div>

          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
