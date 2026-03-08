'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
          scrolled ? "py-4" : "py-8"
        )}
      >
        <div className="container px-6 mx-auto">
          <div className={cn(
            "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
            scrolled ? "glass border-white/10 shadow-2xl shadow-black/50" : "bg-transparent border-transparent"
          )}>
            <Link 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')} 
              className="text-2xl font-heading font-black tracking-[0.2em] text-white group"
            >
              SUPARI<span className="text-accent group-hover:animate-pulse">.</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="px-6 py-2 text-[11px] font-bold uppercase tracking-widest bg-white text-black rounded-full hover:bg-accent hover:text-white hover:shadow-[0_0_20px_rgba(139,0,0,0.5)] transition-all duration-500"
              >
                Inquiry
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden relative z-50 text-white p-2 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[90] bg-[#0a0a0a]/98 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 text-center w-full px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-4xl font-heading font-black text-white hover:text-accent transition-all duration-300 block w-full py-2 tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.5 }}
                className="w-full pt-10"
              >
                <Link
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="inline-block px-12 py-4 text-sm font-black uppercase tracking-widest bg-accent text-white rounded-full shadow-[0_0_30px_rgba(139,0,0,0.4)]"
                >
                  Start Project
                </Link>
              </motion.div>
            </div>

            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none overflow-hidden">
              <span className="text-[40vw] font-black font-heading leading-none">SUPARI</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
