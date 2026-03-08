'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground'
import gsap from 'gsap'

const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}

const headlines = [
  "Engineering AI Systems",
  "Building Scalable SaaS",
  "Securing Digital Infrastructure"
]

const TypewriterHeadline = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[12vw] sm:h-[10vw] md:h-[8vw] lg:h-[7vw] flex items-center justify-center relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -50, opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50"
        >
          {headlines[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export default function Hero() {
  const subheadlineRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (subheadlineRef.current) {
      gsap.fromTo(subheadlineRef.current, 
        { y: 30, opacity: 0, filter: 'blur(10px)' },
        { 
          y: 0, 
          opacity: 1, 
          filter: 'blur(0px)', 
          duration: 1.5, 
          delay: 2, 
          ease: 'power4.out' 
        }
      )
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-[#0a0a0a]">
      <NeuralNetworkBackground />
      
      <div className="container relative z-10 text-center px-6">
        <div className="space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="inline-flex items-center gap-2 px-4 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/60">
              Future-Proof Engineering
            </span>
          </motion.div>
          
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-heading font-black tracking-tighter leading-[0.85] max-w-[1200px] mx-auto text-white">
            <TypewriterHeadline />
          </h1>

          <p 
            ref={subheadlineRef}
            className="text-sm sm:text-base md:text-lg text-white/40 max-w-xl mx-auto font-medium leading-relaxed uppercase tracking-[0.1em] opacity-0"
          >
            We deploy sophisticated intelligence and elite engineering 
            to architect the next generation of digital products.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10"
          >
            <MagneticButton className="group relative px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              <span className="relative z-10 flex items-center gap-2">
                Initiate Project <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[0.16,1,0.3,1]" />
            </MagneticButton>

            <MagneticButton className="px-10 py-5 border border-white/10 hover:border-white/40 hover:bg-white/5 text-white/60 hover:text-white font-black uppercase tracking-widest text-xs rounded-full transition-all duration-500">
              View Dossier
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-4 cursor-pointer group"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 group-hover:text-accent transition-colors">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  )
}

