'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const NeuralNetworkBackground = dynamic(() => import('@/components/NeuralNetworkBackground'), { ssr: false })

const MagneticButton = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
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
      
      {/* Subtle Red Gradient Mesh */}
      <div className="absolute inset-0 z-[1] opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

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
          
          <h1 className="text-[10vw] sm:text-[9vw] md:text-[7vw] lg:text-[6.5vw] font-heading font-black tracking-tighter leading-[0.85] max-w-[1200px] mx-auto text-white">
            Engineering <span className="text-accent">AI</span>, <br />
            SaaS & <span className="text-white/40 italic">Digital</span> Products
          </h1>

          <p 
            ref={subheadlineRef}
            className="text-sm sm:text-base md:text-lg text-white/40 max-w-xl mx-auto font-medium leading-relaxed uppercase tracking-[0.1em] opacity-0"
          >
            Helping startups and businesses build powerful software solutions.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10"
          >
            <MagneticButton 
              className="group relative px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Project <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[0.16,1,0.3,1]" />
            </MagneticButton>

            <MagneticButton 
              className="px-10 py-5 border border-white/10 hover:border-white/40 hover:bg-white/5 text-white/60 hover:text-white font-black uppercase tracking-widest text-xs rounded-full transition-all duration-500"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
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
