'use client'

import { motion } from 'framer-motion'
import { ShieldAlert, Crosshair, Radar, Database } from 'lucide-react'

const capabilities = [
  {
    icon: Radar,
    title: 'Subdomain Discovery',
    desc: 'Exhaustive mapping of hidden digital assets and forgotten infrastructure.'
  },
  {
    icon: Database,
    title: 'Asset Mapping',
    desc: 'Comprehensive inventory of cloud buckets, APIs, and exposed endpoints.'
  },
  {
    icon: Crosshair,
    title: 'OSINT Analysis',
    desc: 'Deep-web intelligence gathering to identify leaked credentials and data.'
  },
  {
    icon: ShieldAlert,
    title: 'Infrastructure Exposure',
    desc: 'Continuous monitoring for zero-day vulnerabilities and misconfigurations.'
  }
]

export default function Cybersecurity() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-8">
          <div className="inline-flex items-center gap-3">
            <span className="w-2 h-2 bg-accent animate-pulse shadow-[0_0_10px_#8B0000]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Offensive Security</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white tracking-tighter uppercase leading-[0.9]">
            Understand Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              Digital Attack Surface
            </span>
          </h2>
          
          <p className="text-white/50 text-lg font-medium">
            We don't just build systems; we break them. Our reconnaissance unit maps your entire digital footprint before malicious actors can exploit it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-black/40 backdrop-blur-xl border border-white/5 hover:border-accent/30 rounded-2xl group transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,0,0,0.15)]"
            >
              <item.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-heading font-black text-white uppercase tracking-wide mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
