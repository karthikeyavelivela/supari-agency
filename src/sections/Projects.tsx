'use client'

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Luxury Gold Jewelry Store',
    description: 'High-end e-commerce experience for premium jewelry brands.',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000'
  },
  {
    title: 'Modern Fashion Store',
    description: 'Minimalist fashion platform with seamless checkout.',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000'
  },
  {
    title: 'Pet Care Platform',
    description: 'All-in-one pet adoption and care management system.',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000'
  },
  {
    title: 'Grocery Delivery',
    description: 'Hyper-local grocery delivery platform with real-time tracking.',
    category: 'Logistics',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000'
  },
  {
    title: 'Multi-Vendor Shop',
    description: 'Scalable marketplace for thousands of independent sellers.',
    category: 'Marketplace',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000'
  },
  {
    title: 'Food Delivery UI',
    description: 'Modern, intuitive interface for food ordering and delivery.',
    category: 'App Design',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0638b?q=80&w=1000'
  },
  {
    title: 'Global Marketplace',
    description: 'Cross-border e-commerce platform with multi-currency support.',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000'
  },
  {
    title: 'Venue Booking',
    description: 'Streamlined booking system for event spaces and venues.',
    category: 'Booking',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000'
  },
  {
    title: 'Personal Portfolio',
    description: 'Premium developer portfolio with high-end animations.',
    category: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000'
  },
  {
    title: 'Project Showcase',
    description: 'Academic and professional project presentation platform.',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000'
  },
  {
    title: 'Startup SaaS',
    description: 'Comprehensive dashboard for modern SaaS businesses.',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000'
  },
  {
    title: 'AI Automation',
    description: 'Intelligent workflow automation for enterprise clients.',
    category: 'AI / ML',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000'
  },
  {
    title: 'Restaurant System',
    description: 'Digital ordering and management system for restaurants.',
    category: 'Food Tech',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000'
  },
  {
    title: 'Real Estate Platform',
    description: 'Interactive property listing and agent management.',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000'
  },
  {
    title: 'Fitness App',
    description: 'Personalized training and nutrition tracking platform.',
    category: 'Health',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000'
  },
  {
    title: 'Online Course',
    description: 'Interactive learning management system for creators.',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000'
  },
  {
    title: 'Logistics Dashboard',
    description: 'Real-time supply chain tracking and optimization.',
    category: 'Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000'
  },
  {
    title: 'Travel Booking',
    description: 'Global travel itinerary and accommodation booking.',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000'
  },
  {
    title: 'Event Management',
    description: 'End-to-end platform for corporate and social events.',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000'
  },
  {
    title: 'Startup Landing Page',
    description: 'High-converting landing page for emerging startups.',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000'
  }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] h-[60vh] md:h-[50vh] relative group cursor-grab active:cursor-grabbing px-4"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#111] transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_50px_rgba(139,0,0,0.2)]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-50 grayscale transition-all duration-700 group-hover:opacity-80 group-hover:grayscale-0 group-hover:scale-110"
        />
        
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
        
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="px-3 py-1 bg-accent rounded-full w-fit"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-white">
                {project.category}
              </span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight leading-none group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            
            <p className="text-sm md:text-base text-white/40 font-medium max-w-sm line-clamp-2">
              {project.description}
            </p>
          </div>
          
          <div className="absolute top-10 right-10 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500 group-hover:bg-accent group-hover:border-accent">
            <ArrowUpRight className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const totalScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth
        const currentScroll = containerRef.current.scrollLeft
        setScrollProgress((currentScroll / totalScroll) * 100)
      }
    }

    // Autoplay logic
    const interval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current
        const maxScroll = container.scrollWidth - container.clientWidth
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: window.innerWidth * 0.4, behavior: 'smooth' })
        }
      }
    }, 5000)

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => {
        container.removeEventListener('scroll', handleScroll)
        clearInterval(interval)
      }
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = window.innerWidth * 0.4
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="work" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container px-6 mx-auto relative z-10 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-accent">Portfolio Showcase</span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-heading font-black text-white tracking-tighter uppercase leading-[0.85]">
              Featured <br />
              <span className="text-white/20 text-stroke">Installations.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto gap-0 px-[7.5vw] no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing pb-20"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="container px-6 mx-auto mt-10">
        <div className="w-full h-[1px] bg-white/5 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-accent"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <div className="flex justify-between mt-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Scroll to Explore</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/20">FYRO &copy; 2026</span>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  )
}
