'use client'

import { motion } from 'framer-motion'
import { Send, Mail, Phone, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
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
              <span className="text-xs font-black uppercase tracking-[0.4em] text-accent">Initiate Project</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-heading font-black text-white tracking-tighter uppercase leading-[0.85]">
              Let's build <br />
              <span className="text-white/10 italic">Your Vision.</span>
            </h2>

            <div className="space-y-8 pt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-accent transition-colors">Direct Email</span>
                <a href="mailto:velivelakarthikeya@gmail.com" className="flex items-center gap-3 text-xl md:text-2xl font-heading font-black text-white group-hover:translate-x-2 transition-transform duration-500 tracking-tighter italic uppercase mt-2">
                  <Mail className="w-5 h-5 text-accent" />
                  velivelakarthikeya@gmail.com
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-accent transition-colors">Call Us</span>
                <a href="tel:+917416191169" className="flex items-center gap-3 text-xl md:text-2xl font-heading font-black text-white group-hover:translate-x-2 transition-transform duration-500 tracking-tighter italic uppercase mt-2">
                  <Phone className="w-5 h-5 text-accent" />
                  +91 7416191169
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-20 bg-[#111] border border-white/5 rounded-[4rem] shadow-2xl overflow-hidden group flex flex-col items-center justify-center text-center space-y-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase leading-none tracking-tighter">
                Ready to <br /><span className="text-accent">Transform</span> Your <br />Business?
              </h3>
              <p className="text-white/40 text-sm md:text-base font-medium max-w-xs mx-auto">
                Click below to start our specialized onboarding process via Typeform.
              </p>
            </div>

            <Link 
              href="https://form.typeform.com/to/ZLKMUle8" 
              target="_blank"
              className="relative z-10 w-full py-8 bg-white text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-accent hover:text-white transition-all duration-500 shadow-2xl hover:shadow-[0_0_50px_rgba(139,0,0,0.4)] flex items-center justify-center gap-4 group/btn"
            >
              Start Your Project <ExternalLink className="w-5 h-5 transition-transform group-hover/btn:scale-125" />
            </Link>

            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-accent/10 transition-colors duration-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
