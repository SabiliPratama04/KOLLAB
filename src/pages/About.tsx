import { useEffect, useRef, useState } from 'react'
import { Rocket, Share2, Eye, Heart, Laptop, ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const [activeStar, setActiveStar] = useState<number | null>(null)
  
  const statsSectionRef = useRef<HTMLElement>(null)
  const statsGridRef = useRef<HTMLDivElement>(null)
  const pipelineRef = useRef<HTMLDivElement>(null)
  const personalityRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger stats text
      gsap.fromTo('.stat-fade',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: statsSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Count up numbers animation
      gsap.fromTo('.stat-num',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statsGridRef.current,
            start: 'top 85%'
          }
        }
      )

      // Pipeline card animations
      gsap.fromTo('.pipeline-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pipelineRef.current,
            start: 'top 80%'
          }
        }
      )

      // Personality cards stagger
      gsap.fromTo('.personality-card',
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: personalityRef.current,
            start: 'top 85%'
          }
        }
      )
    })
    return () => ctx.revert()
  }, [])

  const northStarData = [
    {
      id: 1,
      num: '01',
      title: 'Connect People',
      desc: 'Mempertemukan orang dengan minat, tujuan, dan semangat bertumbuh yang sejalan.',
      colorClass: 'border-brand-green bg-brand-green/5 text-brand-green',
      iconBg: 'bg-brand-green/20'
    },
    {
      id: 2,
      num: '02',
      title: 'Build Collaboration',
      desc: 'Mendorong terjadinya kerja sama, sharing, dan pertukaran nilai antarpihak secara timbal balik.',
      colorClass: 'border-brand-blue bg-brand-blue/5 text-brand-blue',
      iconBg: 'bg-brand-blue/20'
    },
    {
      id: 3,
      num: '03',
      title: 'Create Growth',
      desc: 'Menghasilkan peluang belajar baru, pengembangan diri secara berkala, reputasi, dan peluang bisnis.',
      colorClass: 'border-brand-teal bg-brand-teal/5 text-brand-teal',
      iconBg: 'bg-brand-teal/20'
    }
  ]

  const pipelineSteps = [
    {
      step: '1',
      title: 'Small Pieces',
      desc: 'Orang, ide, pengalaman, dan potensi yang awalnya tersebar terpisah.',
      subtags: ['Orang', 'Ide', 'Pengalaman', 'Potensi'],
      color: 'border-brand-green/20 hover:border-brand-green'
    },
    {
      step: '2',
      title: 'One System',
      desc: 'Sistem dan ruang kolaborasi yang mempertemukan dan menghubungkan mereka.',
      subtags: ['Bertemu', 'Terhubung', 'Berbagi', 'Berkolaborasi'],
      color: 'border-brand-teal/20 hover:border-brand-teal'
    },
    {
      step: '3',
      title: 'Growth',
      desc: 'Hasil nyata berupa pembelajaran, koneksi, reputasi, dan peluang bisnis.',
      subtags: ['Pembelajaran', 'Koneksi', 'Reputasi', 'Peluang'],
      color: 'border-brand-blue/20 hover:border-brand-blue'
    }
  ]

  const personalities = [
    {
      icon: <Rocket className="w-6 h-6 text-brand-green" />,
      title: 'Modern',
      desc: 'Relevan dengan perkembangan teknologi, berorientasi masa depan, dan adaptif terhadap kebutuhan digital.',
      bg: 'bg-brand-green/10'
    },
    {
      icon: <Share2 className="w-6 h-6 text-brand-teal" />,
      title: 'Collaborative',
      desc: 'Terbuka pada kerja sama multisektoral, berbagi wawasan secara sehat, dan mendorong interaksi dua arah.',
      bg: 'bg-brand-teal/10'
    },
    {
      icon: <Eye className="w-6 h-6 text-brand-blue" />,
      title: 'Visionary',
      desc: 'Tidak hanya fokus pada kebutuhan hari ini, namun membangun ekosistem jangka panjang yang berkelanjutan.',
      bg: 'bg-brand-blue/10'
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      title: 'Open & Friendly',
      desc: 'Menciptakan ruang aman dan nyaman bagi pemula serta menyambut hangat setiap anggota baru.',
      bg: 'bg-pink-50'
    },
    {
      icon: <Laptop className="w-6 h-6 text-indigo-500" />,
      title: 'Professional but Relaxed',
      desc: 'Memiliki reputasi kredibel secara organisasi, namun dikomunikasikan secara santai dan humanis.',
      bg: 'bg-indigo-50'
    }
  ]

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      
      {/* 1. CORE SECTION & NORTH STAR DIAGRAM */}
      <section ref={statsSectionRef} className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h4 className="stat-fade text-xs font-bold text-brand-teal tracking-widest uppercase">
              Brand North Star
            </h4>
            <h2 className="stat-fade text-3xl md:text-5xl font-black text-brand-navy leading-tight tracking-tight">
              KOLLAB Mempertemukan Orang, Ide, dan Peluang untuk Bertumbuh Bersama.
            </h2>
            <p className="stat-fade text-slate-600 leading-relaxed font-medium">
              North Star KOLLAB adalah membangun ruang kolaborasi yang mendorong hubungan bermakna, pertukaran insight, dan pertumbuhan bersama bagi individu maupun bisnis.
            </p>

            {/* Statistics */}
            <div ref={statsGridRef} className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-4 border-brand-green pl-4 space-y-1">
                <span className="stat-num text-3xl md:text-4xl font-extrabold text-brand-navy block">10K+</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Anggota Aktif</span>
              </div>
              <div className="border-l-4 border-brand-teal pl-4 space-y-1">
                <span className="stat-num text-3xl md:text-4xl font-extrabold text-brand-navy block">500+</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Kolaborasi Proyek</span>
              </div>
              <div className="border-l-4 border-brand-blue pl-4 space-y-1">
                <span className="stat-num text-3xl md:text-4xl font-extrabold text-brand-navy block">50+</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Hub Kota</span>
              </div>
              <div className="border-l-4 border-brand-navy pl-4 space-y-1">
                <span className="stat-num text-3xl md:text-4xl font-extrabold text-brand-navy block">95%</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Growth Rate</span>
              </div>
            </div>
          </div>

          {/* Interactive Brand North Star Diagram */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <h4 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">
              Sentuh / Arahkan kursor pada komponen diagram:
            </h4>
            
            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center p-4">
              
              {/* Circular Connecting Lines */}
              <div className="absolute w-[80%] h-[80%] border-2 border-dashed border-slate-200 rounded-full animate-spin [animation-duration:60s]" />
              
              {/* Central spinning logo */}
              <div className="absolute w-24 h-24 rounded-full bg-white shadow-2xl border border-slate-100 flex items-center justify-center z-10 transition-transform duration-500 hover:scale-110">
                <div className="w-14 h-14 animate-pulse">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect x="15" y="10" width="18" height="80" rx="4" fill="#34B26A" />
                    <path d="M40,50 L75,15 C78,12 83,14 83,18 L83,40 L58,62 L40,50 Z" fill="#21A6A6" />
                    <path d="M48,58 L80,90 C83,93 88,91 88,87 L88,65 L62,45 L48,58 Z" fill="#2777C9" />
                  </svg>
                </div>
              </div>

              {/* Node 1: Connect People (Top-Left) */}
              <button 
                onMouseEnter={() => setActiveStar(1)}
                onMouseLeave={() => setActiveStar(null)}
                className={`absolute top-4 left-4 w-28 h-28 md:w-32 md:h-32 rounded-full border-2 bg-white flex flex-col items-center justify-center p-3 text-center transition-all duration-300 shadow-lg ${
                  activeStar === 1 ? 'scale-110 border-brand-green shadow-brand-green/20' : 'border-slate-200'
                }`}
              >
                <span className="text-xs font-black text-brand-green uppercase">01</span>
                <span className="text-xs md:text-sm font-extrabold text-brand-navy">Connect People</span>
              </button>

              {/* Node 2: Build Collaboration (Top-Right) */}
              <button 
                onMouseEnter={() => setActiveStar(2)}
                onMouseLeave={() => setActiveStar(null)}
                className={`absolute top-4 right-4 w-28 h-28 md:w-32 md:h-32 rounded-full border-2 bg-white flex flex-col items-center justify-center p-3 text-center transition-all duration-300 shadow-lg ${
                  activeStar === 2 ? 'scale-110 border-brand-blue shadow-brand-blue/20' : 'border-slate-200'
                }`}
              >
                <span className="text-xs font-black text-brand-blue uppercase">02</span>
                <span className="text-xs md:text-sm font-extrabold text-brand-navy">Collaboration</span>
              </button>

              {/* Node 3: Create Growth (Bottom Center) */}
              <button 
                onMouseEnter={() => setActiveStar(3)}
                onMouseLeave={() => setActiveStar(null)}
                className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-28 md:w-32 md:h-32 rounded-full border-2 bg-white flex flex-col items-center justify-center p-3 text-center transition-all duration-300 shadow-lg ${
                  activeStar === 3 ? 'scale-110 border-brand-teal shadow-brand-teal/20' : 'border-slate-200'
                }`}
              >
                <span className="text-xs font-black text-brand-teal uppercase">03</span>
                <span className="text-xs md:text-sm font-extrabold text-brand-navy">Create Growth</span>
              </button>
            </div>

            {/* Display Detail description card below */}
            <div className="w-full max-w-[450px] mt-4 min-h-[96px] bg-slate-50 border border-slate-200/80 rounded-2xl p-5 transition-all duration-300 flex items-center justify-center">
              {activeStar ? (
                <div className="text-center animate-fade-in space-y-1">
                  <h4 className="font-extrabold text-brand-navy text-sm">
                    {northStarData.find(item => item.id === activeStar)?.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {northStarData.find(item => item.id === activeStar)?.desc}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-slate-400 font-bold text-center">
                  Sorot salah satu lingkaran untuk info detail North Star
                </p>
              )}
            </div>

          </div>
        </div>

      </section>

      {/* 2. BRAND IDEA PIPELINE */}
      <section className="bg-brand-grey border-y border-slate-200/50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <h4 className="text-xs font-bold text-brand-green tracking-widest uppercase">Brand Idea</h4>
            <h2 className="text-3xl md:text-5xl font-black text-brand-navy leading-tight tracking-tight">
              Small Pieces &rarr; One System &rarr; Growth
            </h2>
            <p className="text-base text-slate-600 font-medium leading-relaxed">
              KOLLAB dibangun dari gagasan bahwa pertumbuhan tidak terjadi sendirian. Individu, ide, skill, pengalaman, dan peluang yang awalnya terpisah akan menjadi lebih kuat ketika disatukan dalam sistem kolaboratif yang sehat.
            </p>
          </div>

          {/* Cards Pipeline */}
          <div ref={pipelineRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pipelineSteps.map((step, idx) => (
              <div 
                key={idx} 
                className={`pipeline-card relative bg-white border rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${step.color} shadow-sm hover:shadow-lg`}
              >
                {/* Step indicator */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-xs font-black text-slate-400">
                  {step.step}
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-brand-navy">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>

                {/* Subtag grid */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {step.subtags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold border border-slate-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow to next step (horizontal on lg, invisible on last) */}
                {idx < 2 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow border border-slate-100 items-center justify-center text-slate-400">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm font-bold text-slate-400 max-w-2xl mx-auto leading-relaxed border-t border-slate-200/50 pt-8">
            <span className="text-brand-green">Ketika setiap bagian terhubung dalam sistem yang tepat, kolaborasi menciptakan nilai nyata.</span> KOLLAB mengubah potensi terpisah menjadi pertumbuhan bersama.
          </div>

        </div>
      </section>

      {/* 3. BRAND PERSONALITY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl space-y-4 mb-16">
          <h4 className="text-xs font-bold text-brand-blue tracking-widest uppercase">Brand Personality</h4>
          <h2 className="text-3xl md:text-5xl font-black text-brand-navy leading-tight tracking-tight">
            Kepribadian Brand KOLLAB.
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            Kepribadian brand KOLLAB harus terasa dekat, modern, dan cukup profesional untuk dipercaya, agar terasa approachable tanpa kehilangan kualitas.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div ref={personalityRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {personalities.map((trait, idx) => (
            <div 
              key={idx}
              className="personality-card group bg-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-slate-300"
            >
              <div className={`w-12 h-12 rounded-xl ${trait.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {trait.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-3">{trait.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                {trait.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default About
