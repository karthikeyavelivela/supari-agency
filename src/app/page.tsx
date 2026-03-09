'use client'

import dynamic from 'next/dynamic'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import Projects from '@/sections/Projects'
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'
import { motion } from 'framer-motion'

const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false })

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] grain">
      <ParticleField />
      
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </motion.div>

      {/* Global Background Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]">
        <div className="absolute inset-0 grid-background" />
      </div>
    </main>
  )
}
