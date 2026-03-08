'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-accent">The Philosophy</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-heading font-black text-white tracking-tighter uppercase leading-[0.85]"
            >
              Engineering <br />
              <span className="text-white/10 italic">Pure Excellence.</span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-white/50 font-medium leading-relaxed"
            >
              <p>
                Supari is not just a development studio; it is an elite task force dedicated to architecting the most sophisticated digital products on the planet.
              </p>
              <p>
                We believe that code is an art form, and engineering is the ultimate expression of human intelligence. Our mission is to push the boundaries of what is possible in AI, SaaS, and Cybersecurity.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Precision', value: '100%' },
                { label: 'Uptime', value: '99.9%' },
                { label: 'Security', value: 'Elite' },
                { label: 'Vision', value: 'Future' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-[#111] border border-white/5 rounded-[2rem] space-y-2 group hover:border-accent/30 transition-all duration-500"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-accent transition-colors">{stat.label}</span>
                  <div className="text-4xl font-heading font-black text-white">{stat.stat?.value || stat.value}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Abstract Graphic */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Background Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid-background scale-150 rotate-12" />
      </div>
    </section>
  )
}
