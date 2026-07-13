import { useEffect, useRef, useState } from 'react'
import { Heart, Globe, TrendingUp, ChevronRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Ecosystem = () => {
  const [activeUvp, setActiveUvp] = useState<number | null>(null)
  const [hoveredPyramid, setHoveredPyramid] = useState<number | null>(null)

  const uvpRef = useRef<HTMLElement>(null)
  const pyramidRef = useRef<HTMLElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in UVP title and intro
      gsap.fromTo('.uvp-fade',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: uvpRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Fade in Pyramid title
      gsap.fromTo('.pyramid-fade',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: pyramidRef.current,
            start: 'top 80%'
          }
        }
      )

      // Stagger pillars cards
      gsap.fromTo('.pillar-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: pillarsRef.current,
            start: 'top 85%'
          }
        }
      )
    })
    return () => ctx.revert()
  }, [])

  const uvpItems = [
    {
      id: 1,
      title: 'Human-Centered Connection',
      desc: 'Mengutamakan autentisitas, empati, dan kepercayaan untuk membangun koneksi yang bermakna bagi semua pihak.',
      icon: <Heart className="w-5 h-5" />,
      color: 'text-brand-green',
      bgClass: 'bg-brand-green/10'
    },
    {
      id: 2,
      title: 'Hybrid Online-Offline Ecosystem',
      desc: 'Menggabungkan kekuatan platform digital dan interaksi tatap muka langsung untuk pengalaman kolaborasi yang seamless dan berdampak luas.',
      icon: <Globe className="w-5 h-5" />,
      color: 'text-brand-teal',
      bgClass: 'bg-brand-teal/10'
    },
    {
      id: 3,
      title: 'Growth-Oriented Collaboration',
      desc: 'Mendorong kolaborasi relevan yang menghasilkan insight praktis, memperluas jejaring networking, serta membuka peluang komersial nyata.',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'text-brand-blue',
      bgClass: 'bg-brand-blue/10'
    }
  ]

  const pyramidTiers = [
    {
      id: 1,
      title: 'Siapa Kami',
      sub: 'KOLLAB adalah komunitas kolaboratif yang modern.',
      details: 'Wadah berkumpulnya talenta-talenta kreatif terbaik, siap berjejaring, dan menukarkan nilai dalam kerangka pertumbuhan mutual.',
      color: 'bg-brand-green text-white hover:shadow-brand-green/20'
    },
    {
      id: 2,
      title: 'Untuk Siapa',
      sub: 'Untuk individu, kreator, profesional, dan bisnis.',
      details: 'Dirancang inklusif baik bagi freelancer perorangan, content creator, profesional korporasi, hingga startup digital dan perusahaan mapan.',
      color: 'bg-brand-teal text-white hover:shadow-brand-teal/20'
    },
    {
      id: 3,
      title: 'Apa yang Diberikan',
      sub: 'Koneksi bermakna, pembelajaran berkelanjutan, kolaborasi produktif.',
      details: 'Membuka akses ke program mentoring, event edukasi, project collaboration pool, serta inkubasi bisnis potensial.',
      color: 'bg-brand-blue text-white hover:shadow-brand-blue/20'
    }
  ]

  const actionPillars = [
    {
      title: 'Terhubung',
      desc: 'Bangun koneksi yang relevan, bermakna, dan langgeng.',
      action: 'Cari partner kerja'
    },
    {
      title: 'Belajar',
      desc: 'Dapatkan wawasan berharga dan keterampilan profesional baru.',
      action: 'Ikuti workshop'
    },
    {
      title: 'Berkolaborasi',
      desc: 'Ciptakan nilai tambah bersama melalui program kolaborasi aktif.',
      action: 'Mulai project'
    },
    {
      title: 'Bertumbuh',
      desc: 'Tumbuh bersama demi masa depan karir dan bisnis yang lebih baik.',
      action: 'Daftar inkubator'
    }
  ]

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      
      {/* 1. UNIQUE VALUE PROPOSITION */}
      <section ref={uvpRef} className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="uvp-fade text-xs font-bold text-brand-green tracking-widest uppercase">
              Unique Value Proposition
            </h4>
            <h2 className="uvp-fade text-3xl md:text-5xl font-black text-brand-navy leading-tight tracking-tight">
              Membangun Ekosistem Berdampak Luas.
            </h2>
            
            <div className="uvp-fade bg-brand-grey border border-slate-200/60 rounded-3xl p-6 relative">
              <span className="text-4xl text-brand-green/30 font-serif absolute top-4 left-4">“</span>
              <p className="text-slate-600 text-sm md:text-base italic pl-6 leading-relaxed font-semibold">
                Nilai utama KOLLAB bukan hanya mengumpulkan orang, tetapi menciptakan koneksi yang relevan dan bermakna sehingga dapat berkembang menjadi insight, kolaborasi, maupun peluang nyata.
              </p>
            </div>

            <div className="uvp-fade space-y-4 pt-4">
              {uvpItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveUvp(activeUvp === item.id ? null : item.id)}
                  className={`w-full flex items-start space-x-4 p-4 rounded-xl border text-left transition-all duration-300 ${
                    activeUvp === item.id 
                      ? 'border-brand-green bg-white shadow-md' 
                      : 'border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg ${item.bgClass} ${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-brand-navy text-sm md:text-base">{item.title}</h4>
                    {activeUvp === item.id && (
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed animate-fade-in font-medium">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Venn Diagram */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <h4 className="text-sm font-bold text-slate-400 mb-8 uppercase tracking-wider">
              Interactive Venn Diagram
            </h4>
            
            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
              
              {/* Circle 1: Human-centered Connection (Top Center) */}
              <div className="absolute top-[10%] w-[58%] aspect-square rounded-full border border-brand-green bg-brand-green/5 flex flex-col items-center justify-center p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105 z-10">
                <span className="text-xs font-black text-brand-green uppercase tracking-wide">Pillar 1</span>
                <span className="text-xs md:text-sm font-black text-brand-navy mt-1">Human-centered</span>
              </div>

              {/* Circle 2: Hybrid Ecosystem (Bottom-Left) */}
              <div className="absolute bottom-[10%] left-0 w-[58%] aspect-square rounded-full border border-brand-teal bg-brand-teal/5 flex flex-col items-center justify-center p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105 z-10">
                <span className="text-xs font-black text-brand-teal uppercase tracking-wide">Pillar 2</span>
                <span className="text-xs md:text-sm font-black text-brand-navy mt-1">Hybrid Ecosystem</span>
              </div>

              {/* Circle 3: Growth Collaboration (Bottom-Right) */}
              <div className="absolute bottom-[10%] right-0 w-[58%] aspect-square rounded-full border border-brand-blue bg-brand-blue/5 flex flex-col items-center justify-center p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105 z-10">
                <span className="text-xs font-black text-brand-blue uppercase tracking-wide">Pillar 3</span>
                <span className="text-xs md:text-sm font-black text-brand-navy mt-1">Growth Collaboration</span>
              </div>

              {/* Overlap Center: KOLLAB (Center) */}
              <div className="absolute w-28 h-28 rounded-full bg-brand-navy border border-slate-700 shadow-2xl flex flex-col items-center justify-center text-center p-2 z-20 scale-105 select-none">
                <span className="text-[10px] font-black text-brand-green tracking-widest uppercase">Center</span>
                <span className="text-xs font-black text-white tracking-wider mt-0.5">KOLLAB</span>
                <span className="text-[8px] text-slate-400 mt-1 max-w-[80px] font-medium leading-tight">
                  Koneksi. Kolaborasi. Pertumbuhan.
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. BRAND MESSAGE PYRAMID */}
      <section ref={pyramidRef} className="bg-brand-grey border-y border-slate-200/50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Quote */}
            <div className="lg:col-span-5 space-y-6">
              <h4 className="pyramid-fade text-xs font-bold text-brand-teal tracking-widest uppercase">
                Brand Message
              </h4>
              <h2 className="pyramid-fade text-3xl md:text-5xl font-black text-brand-navy leading-tight tracking-tight">
                Pilar Pesan Komunikasi.
              </h2>
              
              <div className="pyramid-fade bg-white border border-slate-200/60 rounded-3xl p-8 relative shadow-sm">
                <span className="text-4xl text-brand-teal/30 font-serif absolute top-4 left-4">“</span>
                <p className="text-slate-600 text-sm md:text-base italic pl-6 leading-relaxed font-semibold">
                  KOLLAB adalah ruang kolaboratif untuk individu, kreator, profesional, dan bisnis yang ingin terhubung, belajar, dan bertumbuh bersama melalui koneksi yang meaningful.
                </p>
              </div>
            </div>

            {/* Right Pyramid Grid */}
            <div className="lg:col-span-7 flex flex-col items-center space-y-6">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                Brand Message Hierarchy
              </h4>
              
              {/* Pyramid Structure container */}
              <div className="w-full flex flex-col items-center space-y-3">
                
                {pyramidTiers.map((tier, idx) => (
                  <div
                    key={tier.id}
                    onMouseEnter={() => setHoveredPyramid(tier.id)}
                    onMouseLeave={() => setHoveredPyramid(null)}
                    className={`transition-all duration-300 cursor-pointer rounded-xl p-6 text-center shadow-lg transform ${tier.color} ${
                      hoveredPyramid === tier.id ? 'scale-102 ring-4 ring-brand-green/10' : ''
                    }`}
                    style={{
                      width: `${100 - idx * 10}%`,
                      maxWidth: '650px'
                    }}
                  >
                    <h3 className="font-extrabold text-sm md:text-base tracking-wider uppercase">
                      {tier.title}
                    </h3>
                    <p className="text-xs mt-1 font-semibold opacity-90">{tier.sub}</p>
                    
                    {hoveredPyramid === tier.id && (
                      <p className="text-xs mt-3 border-t border-white/20 pt-3 leading-relaxed animate-fade-in font-medium">
                        {tier.details}
                      </p>
                    )}
                  </div>
                ))}

              </div>
              
              <span className="text-xs text-slate-400 font-bold">
                *Arahkan kursor pada baris piramida untuk detail penjelasan
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 3. FOUR PILLARS ACTION FOOTER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="max-w-3xl space-y-4 mb-16">
          <h4 className="text-xs font-bold text-brand-blue tracking-widest uppercase">Action Pillars</h4>
          <h2 className="text-3xl md:text-5xl font-black text-brand-navy leading-tight tracking-tight">
            Bagaimana Kita Bertindak.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {actionPillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="pillar-card bg-white border border-slate-200/80 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-xs font-extrabold text-slate-400 block">PILLAR 0{idx + 1}</span>
                <h3 className="text-xl font-bold text-brand-navy">{pillar.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{pillar.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center space-x-1 text-xs font-black text-brand-green group cursor-pointer hover:text-brand-green/80 transition-colors">
                <span>{pillar.action}</span>
                <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  )
}

export default Ecosystem
