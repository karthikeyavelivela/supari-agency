import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] pt-32 pb-16 overflow-hidden border-t border-white/5">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <Link href="#home" className="text-4xl font-heading font-black tracking-[0.2em] text-white group">
              FYRO<span className="text-accent group-hover:animate-pulse">.</span>
            </Link>
            <p className="text-white/30 text-lg max-w-md font-medium leading-relaxed uppercase tracking-widest text-[10px]">
              Find Your Right One. Premium engineering studio for high-end AI, SaaS & Digital Products.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent hover:bg-accent/5 transition-all duration-500 group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Capabilities</h4>
            <ul className="space-y-4">
              {['SaaS Architecture', 'Neural Networks', 'Secure Infrastructure', 'Mobile Systems'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/30 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Studio</h4>
            <ul className="space-y-4">
              {['The Mission', 'Selected Works', 'Contact Core', 'Privacy Protocol'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/30 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[9px] font-black uppercase tracking-[0.5em] text-white/10">
          <p>© {new Date().getFullYear()} FYRO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <span>STARTUP // AI // SAAS</span>
            <span className="text-accent">ENCRYPTED CONNECTION</span>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  )
}
