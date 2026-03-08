'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiNextdotjs, SiReact, SiPython, SiFastapi, SiPostgresql, SiDocker, SiVercel 
} from 'react-icons/si'

const technologies = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'Python', icon: SiPython },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Docker', icon: SiDocker },
  { name: 'Vercel', icon: SiVercel },
]

export default function TechStack() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center gap-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30"
          >
            Engineering Foundation
          </motion.p>
          
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-700">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.1, color: '#8B0000' }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.1,
                  type: 'spring',
                  stiffness: 300
                }}
                className="flex flex-col items-center gap-3 group transition-colors"
              >
                <tech.icon className="w-8 h-8 md:w-10 md:h-10" />
                <span className="text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
