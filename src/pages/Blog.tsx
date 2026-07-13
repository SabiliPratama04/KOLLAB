import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Calendar, Clock, ChevronRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Post {
  id: number
  title: string
  desc: string
  category: 'Community' | 'Collaboration' | 'Growth'
  date: string
  readTime: string
  highlight?: boolean
}

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger items on mount/filter
      gsap.fromTo('.blog-card',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%'
          }
        }
      )
    }, gridRef)

    return () => ctx.revert()
  }, [activeCategory])

  const posts: Post[] = [
    {
      id: 1,
      title: 'Bagaimana Kolaborasi Multisektoral Mendorong Pertumbuhan Jangka Panjang',
      desc: 'Menelusuri pentingnya menyatukan visi antara kreator, pelaku bisnis, dan penyedia kebijakan guna melahirkan akselerasi pertumbuhan yang berkelanjutan.',
      category: 'Collaboration',
      date: '12 Nov 2024',
      readTime: '5 min read',
      highlight: true
    },
    {
      id: 2,
      title: 'Membangun Hub Komunitas Kreatif di Era Digital Hybrid',
      desc: 'Bagaimana mengintegrasikan platform online dan offline secara dinamis untuk memfasilitasi meetup yang interaktif dan menghasilkan koneksi yang otentik.',
      category: 'Community',
      date: '08 Des 2024',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Networking Autentik: Mengapa Mengumpulkan Kontak Saja Tidak Cukup',
      desc: 'Bukan sekadar bertukar kartu nama. Strategi membangun relasi bermakna dengan menyelaraskan minat, visi, dan hasrat bertumbuh bersama.',
      category: 'Community',
      date: '22 Jan 2025',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Inkubator Bisnis KOLLAB: Membantu Kreator Naik Kelas',
      desc: 'Mengintip kurikulum inkubator startup kami yang menghubungkan ide mentah para founder dengan market feedback serta pendanaan awal.',
      category: 'Growth',
      date: '05 Feb 2025',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Mengukur ROI Kolaborasi: Menilai Efisiensi Kemitraan',
      desc: 'Panduan taktis bagi pelaku bisnis dalam mengevaluasi efektivitas kemitraan bersama komunitas guna meningkatkan reputasi brand di mata publik.',
      category: 'Collaboration',
      date: '18 Mar 2025',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Scale Up Melalui Ekosistem: Menembus Batas Kapabilitas',
      desc: 'Bagaimana UMKM dan startup digital memanfaatkan aset kolektif, resource sharing, dan pertukaran talenta demi akselerasi profit.',
      category: 'Growth',
      date: '04 Apr 2025',
      readTime: '7 min read'
    }
  ]

  const categories = ['All', 'Community', 'Collaboration', 'Growth']

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory)

  // Find the highlight post if it matches the current category
  const highlightPost = filteredPosts.find(p => p.highlight)
  const regularPosts = filteredPosts.filter(p => !p.highlight || (p.highlight && !highlightPost))

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-24 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-6">
        <div className="inline-flex items-center space-x-2 bg-brand-green/10 border border-brand-green/20 px-4 py-1.5 rounded-full text-brand-green font-semibold text-xs uppercase tracking-wider">
          <span>KOLLAB Insights</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-brand-navy leading-tight tracking-tight">
          Stories Shaping Modern Collaboration.
        </h1>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
          Dapatkan tips praktis, cerita sukses dari anggota ekosistem, serta wawasan mendalam mengenai tren bisnis kolaboratif modern di Indonesia.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 pb-4 border-b border-slate-100">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
              activeCategory === cat 
                ? 'bg-brand-green text-white shadow-md shadow-brand-green/10' 
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-brand-navy'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of posts */}
      <div ref={gridRef} className="space-y-12">
        
        {/* Highlight Post (if any) */}
        {highlightPost && (
          <div className="blog-card bg-gradient-to-tr from-brand-teal to-brand-green text-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 min-h-[350px] relative overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500" />
            
            <div className="space-y-6 z-10 max-w-3xl">
              <span className="px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">
                Highlighted {highlightPost.category}
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight">
                {highlightPost.title}
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
                {highlightPost.desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-12 pt-6 border-t border-white/10 z-10 text-xs font-semibold">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{highlightPost.date}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{highlightPost.readTime}</span>
                </span>
              </div>

              <div className="flex items-center space-x-1 font-bold group-hover:translate-x-1 transition-transform cursor-pointer">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularPosts.map((post) => (
            <div 
              key={post.id}
              className="blog-card bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-lg hover:border-slate-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-brand-navy hover:text-brand-green transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-3">
                  {post.desc}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-200/50 text-xs text-slate-400 font-semibold">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
                <div className="flex items-center space-x-0.5 font-bold text-brand-green cursor-pointer hover:text-brand-green/80 transition-colors">
                  <span>Read</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Blog
