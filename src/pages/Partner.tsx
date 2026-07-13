import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface PartnerMember {
  name: string
  role: string
  org: string
  initials: string
  desc: string
  color: string
}

const Partner = () => {
  const [submitted, setSubmitted] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger partner cards
      gsap.fromTo('.partner-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%'
          }
        }
      )

      // Fade in form
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%'
          }
        }
      )
    })
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const advisors: PartnerMember[] = [
    {
      name: 'Adityo Handoko',
      role: 'Strategic Alliance Director',
      org: 'Venture Link Corp',
      initials: 'AH',
      desc: 'Membimbing kemitraan strategis tingkat tinggi antara KOLLAB dengan korporasi global.',
      color: 'from-brand-green to-emerald-500'
    },
    {
      name: 'Marissa Ryan',
      role: 'Head of Growth Incubation',
      org: 'Future Seed Lab',
      initials: 'MR',
      desc: 'Mengarahkan kurikulum inkubator startup dan mempertemukan pendiri dengan pemodal.',
      color: 'from-brand-teal to-cyan-500'
    },
    {
      name: 'Nugraha Pratama',
      role: 'Ecosystem Policy Lead',
      org: 'Tech Innovate ID',
      initials: 'NP',
      desc: 'Menghubungkan ekosistem KOLLAB dengan inisiatif kebijakan digital pemerintah.',
      color: 'from-brand-blue to-indigo-500'
    }
  ]

  const leads: PartnerMember[] = [
    {
      name: 'Siti Rahma',
      role: 'Jakarta Community Lead',
      org: 'KOLLAB Hub Jkt',
      initials: 'SR',
      desc: 'Mengkoordinasi program meetup offline bulanan dan networking event wilayah Jabodetabek.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'David Wijaya',
      role: 'Creative Talent Director',
      org: 'KOLLAB Studio',
      initials: 'DW',
      desc: 'Memfasilitasi kecocokan proyek komersial eksternal dengan talenta terdaftar di KOLLAB.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Elena K. W.',
      role: 'Global Relations Lead',
      org: 'KOLLAB Network',
      initials: 'EK',
      desc: 'Mengembangkan sayap kolaborasi KOLLAB dengan komunitas serupa di Asia Tenggara.',
      color: 'from-orange-500 to-amber-500'
    }
  ]

  return (
    <div className="bg-brand-navy text-white min-h-screen pt-8 pb-24 space-y-24 md:space-y-32">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 text-center lg:text-left">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 border border-brand-green/20 px-4 py-1.5 rounded-full text-brand-green font-semibold text-xs uppercase tracking-wider">
            <span>Collaborative Network</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Meet the Minds Driving KOLLAB.
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
            KOLLAB bekerja sama dengan berbagai inkubator, institusi, dan para professional visioner untuk menyediakan fondasi ekosistem kolaboratif terbaik.
          </p>
        </div>
      </section>

      {/* 2. PARTNERS & ADVISORS GRID */}
      <section ref={gridRef} className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Strategic Advisors Group */}
        <div className="space-y-8">
          <div className="border-l-4 border-brand-green pl-4">
            <h2 className="text-xl font-bold tracking-wide text-slate-300 uppercase">Strategic Advisors</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((member, idx) => (
              <div 
                key={idx}
                className="partner-card group bg-slate-900 border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:border-brand-green/40 hover:bg-slate-900/80 hover:-translate-y-1"
              >
                {/* Monogram portrait frame */}
                <div className={`w-24 h-24 rounded-full bg-gradient-to-tr ${member.color} flex items-center justify-center text-3xl font-black text-white mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg`} >
                  {member.initials}
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-brand-green transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
                  {member.role} <span className="text-slate-500 font-semibold">&bull; {member.org}</span>
                </p>
                
                <p className="text-slate-400 text-sm mt-4 leading-relaxed font-medium">
                  {member.desc}
                </p>

                <div className="flex space-x-4 mt-6 pt-4 border-t border-slate-800/80">
                  <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Twitter">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Email">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Leads Group */}
        <div className="space-y-8 pt-8">
          <div className="border-l-4 border-brand-teal pl-4">
            <h2 className="text-xl font-bold tracking-wide text-slate-300 uppercase">Community & Growth Leads</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leads.map((member, idx) => (
              <div 
                key={idx}
                className="partner-card group bg-slate-900 border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:border-brand-teal/40 hover:bg-slate-900/80 hover:-translate-y-1"
              >
                {/* Monogram portrait frame */}
                <div className={`w-24 h-24 rounded-full bg-gradient-to-tr ${member.color} flex items-center justify-center text-3xl font-black text-white mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg`} >
                  {member.initials}
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-brand-teal transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
                  {member.role} <span className="text-slate-500 font-semibold">&bull; {member.org}</span>
                </p>
                
                <p className="text-slate-400 text-sm mt-4 leading-relaxed font-medium">
                  {member.desc}
                </p>

                <div className="flex space-x-4 mt-6 pt-4 border-t border-slate-800/80">
                  <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Twitter">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Email">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 3. PARTNERSHIP ONBOARDING FORM */}
      <section ref={formRef} className="max-w-4xl mx-auto px-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Accent light decoration */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl" />
          
          {!submitted ? (
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-black text-white">Tumbuh Bersama KOLLAB</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  Apakah Anda perusahaan, inkubator, atau investor yang ingin menyalurkan mentoring, investasi, atau mendirikan hub bersama KOLLAB? Daftarkan minat kemitraan Anda di bawah ini.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nama Lengkap</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-green text-sm"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Organisasi / Perusahaan</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-green text-sm"
                    placeholder="Nama institusi Anda"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Bisnis</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-green text-sm"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tipe Kemitraan</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-brand-green text-sm"
                  >
                    <option value="corporate">Corporate Partner</option>
                    <option value="incubator">Incubation & Program Mentoring</option>
                    <option value="investor">Investment & Venture Capital</option>
                    <option value="community">Community Cross-Collaboration</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pesan Singkat</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-green text-sm resize-none"
                    placeholder="Jelaskan secara singkat rencana kolaborasi Anda..."
                  />
                </div>

                <div className="md:col-span-2 pt-2">
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-3.5 bg-brand-green hover:bg-brand-green/90 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-brand-green/20"
                  >
                    <span>Kirim Pengajuan</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-scale-up">
              <div className="w-16 h-16 bg-brand-green/20 text-brand-green rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white">Pengajuan Berhasil Dikirim</h3>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-medium">
                Terima kasih atas minat kolaborasi Anda. Hub Lead kami akan meninjau proposal Anda dan menghubungi via email dalam waktu 24 jam.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 bg-slate-800 text-slate-300 text-xs font-bold rounded-lg hover:bg-slate-755 transition-colors"
              >
                Kirim Pengajuan Baru
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  )
}

export default Partner
