'use client'

import { motion } from 'framer-motion'

const clients = [
  "STEALTH STARTUP",
  "NEXUS DYNAMICS",
  "CYBER CORP",
  "QUANTUM LABS",
  "AEGIS SYSTEMS",
  "ORACLE NETWORKS"
]

export default function TrustStrip() {
  return (
    <section className="py-12 border-y border-white/5 bg-[#0a0a0a] overflow-hidden relative z-10">
      <div className="container px-6 mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 whitespace-nowrap">
          Trusted by Elite Entities
        </p>
        
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex items-center gap-16 whitespace-nowrap"
          >
            {[...clients, ...clients, ...clients].map((client, i) => (
              <span key={i} className="text-sm font-heading font-bold text-white/20 tracking-widest uppercase">
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
