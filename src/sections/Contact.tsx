'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null)

  return (
    <section id="contact" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-accent">Initiate Contact</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-heading font-black text-white tracking-tighter uppercase leading-[0.85]">
              Let's build <br />
              <span className="text-white/10 italic">The Future.</span>
            </h2>

            <div className="space-y-8 pt-8">
              <div className="group cursor-pointer">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-accent transition-colors">Direct Line</span>
                <p className="text-2xl font-heading font-black text-white group-hover:translate-x-2 transition-transform duration-500 tracking-tighter italic uppercase mt-2">hello@supari.studio</p>
              </div>
              <div className="group cursor-pointer">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-accent transition-colors">Location</span>
                <p className="text-2xl font-heading font-black text-white group-hover:translate-x-2 transition-transform duration-500 tracking-tighter italic uppercase mt-2">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 bg-[#111] border border-white/5 rounded-[3rem] shadow-2xl relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] pointer-events-none group-hover:bg-accent/10 transition-colors duration-700" />
            
            <form className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Your Name</label>
                  <input 
                    type="text" 
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-white/[0.03] border-b border-white/10 py-4 px-4 text-white focus:outline-none focus:border-accent transition-all duration-500 placeholder:text-white/10"
                    placeholder="ALAN TURING"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Email Address</label>
                  <input 
                    type="email" 
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-white/[0.03] border-b border-white/10 py-4 px-4 text-white focus:outline-none focus:border-accent transition-all duration-500 placeholder:text-white/10"
                    placeholder="ALAN@ENIGMA.COM"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Project Idea</label>
                <textarea 
                  rows={4}
                  onFocus={() => setFocused('idea')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-white/[0.03] border-b border-white/10 py-4 px-4 text-white focus:outline-none focus:border-accent transition-all duration-500 placeholder:text-white/10 resize-none"
                  placeholder="A DECENTRALIZED NEURAL NETWORK FOR..."
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Budget Range</label>
                <select 
                  className="w-full bg-white/[0.03] border-b border-white/10 py-4 px-4 text-white focus:outline-none focus:border-accent transition-all duration-500 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#111]">$50K - $100K</option>
                  <option value="" className="bg-[#111]">$100K - $500K</option>
                  <option value="" className="bg-[#111]">$500K+</option>
                </select>
              </div>

              <button className="w-full py-6 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-accent hover:text-white transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(139,0,0,0.5)] flex items-center justify-center gap-3 group/btn">
                Initiate Protocol <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
