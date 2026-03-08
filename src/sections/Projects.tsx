'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'

const projects = [
  {
    title: 'Aura Intelligence',
    category: 'AI Platform',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000',
    color: '#8B0000'
  },
  {
    title: 'Nexus Vault',
    category: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    color: '#b11226'
  },
  {
    title: 'Titan Systems',
    category: 'SaaS Infrastructure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    color: '#8B0000'
  },
  {
    title: 'Eon Mobility',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
    color: '#b11226'
  }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <motion.div
      ref={container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative cursor-pointer"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/5 group-hover:border-accent/50 transition-colors duration-500">
        <motion.img
          style={{ y }}
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-[120%] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Project Details */}
        <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                {project.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-heading font-black text-white uppercase italic">
                {project.title}
              </h3>
            </div>
            
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 -rotate-45 group-hover:rotate-0 transition-all duration-500 scale-50 group-hover:scale-100">
              <ArrowUpRight className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>

        {/* Inner Glow */}
        <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-[2rem] pointer-events-none group-hover:border-accent/30 transition-colors duration-500" />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-accent">Selected Works</span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-heading font-black text-white tracking-tighter uppercase leading-[0.85]">
              Elite Projects <br />
              <span className="text-white/10">Proven Impact.</span>
            </h2>
          </div>
          
          <button className="px-8 py-4 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:border-white/40 transition-all">
            Explore Archive
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 grid-background opacity-20 pointer-events-none" />
    </section>
  )
}
