'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Cpu, Globe, Layout, Shield, Smartphone } from 'lucide-react'
import { useRef } from 'react'

const services = [
  {
    title: 'SaaS Development',
    description: 'Building scalable, multi-tenant architectures with elite performance and global reliability.',
    icon: Layout,
    tags: ['Next.js', 'PostgreSQL', 'Stripe']
  },
  {
    title: 'AI Automation',
    description: 'Integrating sophisticated neural networks to automate complex workflows and decision-making.',
    icon: Cpu,
    tags: ['LLMs', 'FastAPI', 'PyTorch']
  },
  {
    title: 'Web Applications',
    description: 'Ultra-fast, responsive experiences that push the boundaries of modern frontend engineering.',
    icon: Globe,
    tags: ['React', 'TypeScript', 'Tailwind']
  },
  {
    title: 'Mobile Applications',
    description: 'Seamless native experiences for iOS and Android with focused performance optimization.',
    icon: Smartphone,
    tags: ['React Native', 'Expo', 'Swift']
  },
  {
    title: 'Cybersecurity Reconnaissance',
    description: 'Offensive and defensive security strategies to protect your digital assets from advanced threats.',
    icon: Shield,
    tags: ['Pentesting', 'SecOps', 'Audit']
  }
]

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
    >
      <div 
        className="relative h-full bg-[#111] border border-white/5 p-8 rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_50px_rgba(139,0,0,0.2)]"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[60px] rounded-full group-hover:bg-accent/20 transition-all duration-500" />
        
        <div className="relative z-10 space-y-6">
          <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
            <service.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
          </div>
          
          <div className="space-y-3">
            <h3 className="text-2xl font-heading font-black tracking-tight text-white uppercase italic">
              {service.title}
            </h3>
            <p className="text-sm text-white/40 leading-relaxed font-medium">
              {service.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {service.tags.map(tag => (
              <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/5 rounded-full text-white/40">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-accent">Capabilities</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter uppercase leading-[0.9]"
            >
              Expertise in <br />
              <span className="text-white/20">The Digital Frontier.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative h-full bg-accent p-8 rounded-[2rem] flex flex-col justify-between overflow-hidden shadow-[0_0_40px_rgba(139,0,0,0.3)]"
          >
            <div className="space-y-4 relative z-10">
              <h3 className="text-3xl font-heading font-black text-white uppercase leading-none">
                Ready for <br />The Next Level?
              </h3>
              <p className="text-white/70 text-sm font-medium">
                We engineer products that define industries. Let's build yours.
              </p>
            </div>
            <button className="relative z-10 mt-10 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-full hover:scale-105 transition-transform">
              Book a Consult
            </button>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-[40px]" />
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  )
}
