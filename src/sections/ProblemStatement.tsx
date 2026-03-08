'use client'

import { motion } from 'framer-motion'

export default function ProblemStatement() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          <div className="inline-flex items-center justify-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">The Reality</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white tracking-tighter leading-tight">
            Most digital products are <span className="text-white/20 italic">fragile</span>, <span className="text-white/20 italic">slow</span>, and <span className="text-white/20 italic">insecure</span>.
          </h2>

          <p className="text-lg md:text-xl text-white/50 font-medium leading-relaxed max-w-2xl mx-auto">
            In an era of AI and advanced cyber threats, standard web development is no longer sufficient. 
            You need <span className="text-white">military-grade engineering</span> and <span className="text-white">intelligent systems</span>.
          </p>
        </motion.div>
      </div>

      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(139,0,0,0.03)_0%,_transparent_70%)] pointer-events-none" />
    </section>
  )
}
