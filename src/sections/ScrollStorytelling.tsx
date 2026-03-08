'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const stories = [
  {
    phase: "01. PROBLEM",
    headline: "Scale Exposes Weakness",
    text: "As digital products grow, technical debt compounds. Security vulnerabilities widen, and performance bottlenecks cripple user experience. The standard approach fails at scale."
  },
  {
    phase: "02. ENGINEERING MINDSET",
    headline: "First Principles Architecture",
    text: "We dismantle assumptions. By approaching systems engineering from first principles, we architect infrastructure that is inherently resilient, modular, and mathematically sound."
  },
  {
    phase: "03. TECHNOLOGY EXPERTISE",
    headline: "Deploying Elite Intelligence",
    text: "From training custom neural networks to orchestrating distributed cloud microservices, we utilize bleeding-edge tech to create decisive competitive advantages."
  },
  {
    phase: "04. SCALABLE PRODUCTS",
    headline: "Building the Unbreakable",
    text: "The final output is a product that doesn't just work—it dominates. Fault-tolerant, lightning-fast, and secured against zero-day threats. Ready for global scale."
  }
]

export default function ScrollStorytelling() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
      
      const ctx = gsap.context(() => {
        sectionsRef.current.forEach((section, i) => {
          if (!section) return
          
          gsap.fromTo(section, 
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                end: "top 30%",
                scrub: 1,
              }
            }
          )
        })
      }, containerRef)

      return () => ctx.revert()
    }
  }, [])

  return (
    <section ref={containerRef} className="relative bg-[#0a0a0a] py-32 overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto space-y-40">
          {stories.map((story, i) => (
            <div 
              key={i} 
              ref={el => { sectionsRef.current[i] = el }}
              className="relative pl-8 md:pl-16 border-l border-white/10"
            >
              <div className="absolute top-0 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-accent" />
              
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                  {story.phase}
                </span>
                <h3 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter leading-none">
                  {story.headline}
                </h3>
                <p className="text-lg text-white/50 leading-relaxed font-medium">
                  {story.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
    </section>
  )
}
