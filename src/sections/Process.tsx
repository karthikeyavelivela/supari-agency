'use client'

import { motion } from 'framer-motion'
import { Terminal, Cpu, Zap, ShieldCheck } from 'lucide-react'

const steps = [
  {
    title: 'Discovery & Recon',
    icon: Terminal,
    desc: 'Deep dive into your infrastructure, mapping vulnerabilities and architectural limits.'
  },
  {
    title: 'System Design',
    icon: Cpu,
    desc: 'Blueprint generation focusing on microservices, neural nets, and zero-trust security.'
  },
  {
    title: 'Elite Engineering',
    icon: Zap,
    desc: 'Writing highly optimized, clean, and scalable code with aggressive performance targets.'
  },
  {
    title: 'Deployment & Defense',
    icon: ShieldCheck,
    desc: 'Rolling out the product while continuously monitoring the attack surface.'
  }
]

export default function Process() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent block mb-4">Methodology</span>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter uppercase">
            The FYRO Protocol
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative p-8 group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-accent transition-colors duration-500" />
              <div className="pt-8 space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-4xl font-heading font-black text-white/10 group-hover:text-white/20 transition-colors">0{i + 1}</span>
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
