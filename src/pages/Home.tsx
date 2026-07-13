import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, BookOpen, TrendingUp, Quote } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const heroTextRef = useRef<HTMLDivElement>(null)
  const heroVisualRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const overviewRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance Animations
      gsap.fromTo(heroTextRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' }
      )
      
      gsap.fromTo(heroVisualRef.current,
        { opacity: 0, scale: 0.8, rotate: -5 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.5, ease: 'power4.out', delay: 0.2 }
      )

      // Brand Overview scroll animation
      gsap.fromTo('.overview-fade',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: overviewRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Cards stagger animation
      gsap.fromTo('.overview-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Quote banner fade-in
      gsap.fromTo(quoteRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  const partners = [
    'SIEMENS', 'DocuSign', 'stripe', 'HubSpot', 'Google Cloud', 'Figma', 'Slack', 'Zoom'
  ]

  return (
    <div className="space-y-24 md:space-y-32 pb-24 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Hero Text Content */}
        <div ref={heroTextRef} className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 border border-brand-green/20 px-4 py-1.5 rounded-full text-brand-green font-semibold text-xs uppercase tracking-wider">
            <span>Welcome to KOLLAB Ecosystem</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-brand-navy leading-[1.05] tracking-tight">
            Connect<span className="text-brand-green">.</span><br />
            Collaborate<span className="text-brand-teal">.</span><br />
            Grow<span className="text-brand-blue">.</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-xl leading-relaxed font-medium">
            KOLLAB mempertemukan orang, ide, dan peluang untuk bertumbuh bersama dalam satu ekosistem kolaboratif modern yang inklusif.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Link
              to="/ecosystem"
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-brand-green hover:bg-brand-green/90 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-brand-green/20 hover:shadow-brand-green/30 hover:-translate-y-0.5"
            >
              <span>Explore Ecosystem</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/about"
              className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-slate-200 hover:border-slate-800 text-brand-navy font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>About Us</span>
            </Link>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div ref={heroVisualRef} className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-square rounded-[2rem] bg-gradient-to-tr from-brand-navy to-slate-900 shadow-2xl p-8 flex items-center justify-center border border-slate-800 group overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/20 rounded-full blur-[60px] group-hover:bg-brand-green/30 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue/20 rounded-full blur-[60px] group-hover:bg-brand-blue/30 transition-all duration-500" />

            {/* Glowing K-Ascend Visual */}
            <div className="relative w-64 h-64 flex items-center justify-center transform transition-transform duration-500 hover:scale-105">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Left vertical bars */}
                <rect x="15" y="10" width="18" height="80" rx="4" fill="#34B26A" className="filter drop-shadow-[0_4px_10px_rgba(52,178,106,0.3)]" />
                {/* Middle connector/arrows pointing right-up */}
                <path d="M40,50 L75,15 C78,12 83,14 83,18 L83,40 L58,62 L40,50 Z" fill="#21A6A6" className="filter drop-shadow-[0_4px_10px_rgba(33,166,166,0.3)]" />
                <path d="M48,58 L80,90 C83,93 88,91 88,87 L88,65 L62,45 L48,58 Z" fill="#2777C9" className="filter drop-shadow-[0_4px_10px_rgba(39,119,201,0.3)]" />
              </svg>
            </div>
            
            {/* Tiny Floating decorative tag */}
            <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center space-x-2 text-xs font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Ecosystem Live</span>
            </div>
          </div>
        </div>

      </section>

      {/* 2. INFINITE LOGO MARQUEE */}
      <section className="bg-brand-grey border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <p className="text-center text-xs font-bold text-slate-400 tracking-widest uppercase">
            Kolaborator & Partner Kami
          </p>
        </div>
        
        {/* Marquee Wrapper */}
        <div className="w-full overflow-hidden whitespace-nowrap flex relative">
          <div ref={marqueeRef} className="flex space-x-16 items-center animate-marquee">
            {/* Render list twice for infinite feel */}
            {[...partners, ...partners].map((logo, index) => (
              <span 
                key={index}
                className="text-2xl font-black tracking-widest text-slate-400 hover:text-brand-green transition-colors duration-300 cursor-default select-none"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BRAND OVERVIEW SECTION */}
      <section ref={overviewRef} className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-6 mb-16">
          <h4 className="overview-fade text-xs font-bold text-brand-green tracking-widest uppercase">
            Brand Overview
          </h4>
          <h2 className="overview-fade text-3xl md:text-5xl font-black text-brand-navy leading-tight tracking-tight">
            Menyediakan Ruang Kolaboratif Modern untuk Pertumbuhan Ekosistem.
          </h2>
          <p className="overview-fade text-base md:text-lg text-slate-600 leading-relaxed">
            KOLLAB adalah komunitas kolaboratif modern yang dirancang untuk mempertemukan individu, kreator, profesional, dan bisnis dalam satu ekosistem pertumbuhan. Brand ini hadir sebagai ruang untuk terhubung, belajar, berbagi peluang, dan bertumbuh bersama.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1 */}
          <div className="overview-card group bg-white border border-slate-200/80 rounded-2xl p-8 hover:shadow-xl hover:border-brand-green/30 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-14 h-14 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Wadah Koneksi</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Mempertemukan orang-orang dengan minat, tujuan, dan semangat bertumbuh yang sejalan. Membuka pintu ke jejaring pertemanan profesional yang relevan.
            </p>
          </div>

          {/* Card 2 */}
          <div className="overview-card group bg-white border border-slate-200/80 rounded-2xl p-8 hover:shadow-xl hover:border-brand-teal/30 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-14 h-14 bg-brand-teal/10 text-brand-teal rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Ruang Pembelajaran</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Menyediakan ruang untuk berbagi insight, pengalaman, dan pengetahuan secara lebih santai namun bernilai demi akselerasi kapabilitas setiap anggota.
            </p>
          </div>

          {/* Card 3 */}
          <div className="overview-card group bg-white border border-slate-200/80 rounded-2xl p-8 hover:shadow-xl hover:border-brand-blue/30 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Ekosistem Pertumbuhan</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Mendorong lahirnya kolaborasi nyata, penciptaan peluang, peningkatan reputasi, dan perkembangan berkelanjutan bagi setiap individu maupun bisnis.
            </p>
          </div>

        </div>

        {/* Quote Container Callout */}
        <div 
          ref={quoteRef}
          className="bg-brand-grey border border-slate-200/60 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-8"
        >
          {/* Logo Circular */}
          <div className="w-16 h-16 shrink-0 rounded-full bg-brand-navy flex items-center justify-center shadow-lg">
            <div className="w-10 h-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect x="15" y="10" width="18" height="80" rx="4" fill="#34B26A" />
                <path d="M40,50 L75,15 C78,12 83,14 83,18 L83,40 L58,62 L40,50 Z" fill="#21A6A6" />
                <path d="M48,58 L80,90 C83,93 88,91 88,87 L88,65 L62,45 L48,58 Z" fill="#2777C9" />
              </svg>
            </div>
          </div>
          
          <div className="space-y-3 flex-grow text-center md:text-left">
            <div className="inline-flex text-brand-green mb-1">
              <Quote className="w-8 h-8 fill-current" />
            </div>
            <p className="text-lg md:text-xl font-bold text-brand-navy leading-relaxed">
              KOLLAB bukan hanya komunitas berkumpul, tetapi platform hubungan yang mendorong kolaborasi nyata dan pertumbuhan jangka panjang.
            </p>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Home
