import { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Info, ArrowRight, MessageCircle, Phone, BookOpen, MapPin, Check, FileText } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { timbers } from '../data/products'
import { catalogs } from '../data/catalogs'

const WHATSAPP_NUMBER = '917416177679'
const PHONE_NUMBER = '917416177679'

const ANIMATION_FADE_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 }
}

const CATEGORIES = [
  { id: 'timber', label: 'Timber' },
  { id: 'doors', label: 'Doors' },
  { id: 'frames', label: 'Frames' },
  { id: 'windows', label: 'Windows' },
  { id: 'furniture', label: 'Furniture' },
  { id: 'wall-panels', label: 'Wall Panels' },
  { id: 'catalogs', label: 'Catalogs' }
]

const TIMBER_COLLECTION = [
  { ...timbers[0], badge: 'Premium', applications: timbers[0].applications },
  { ...timbers[1], badge: 'Import', applications: timbers[1].applications },
  { ...timbers[2], badge: 'Local', applications: timbers[2].applications },
  { ...timbers[3], badge: 'Hardwood', applications: timbers[3].applications },
  { ...timbers[4], badge: 'Construction', applications: timbers[4].applications },
  { ...timbers[5], badge: 'Carving', applications: timbers[5].applications },
  { ...timbers[6], badge: 'Natural', applications: timbers[6].applications }
]

const DOOR_COLLECTION = [
  { id: 'modern', name: 'Modern Doors', description: 'Sleek, contemporary designs with clean lines and minimalist aesthetics.' },
  { id: 'traditional', name: 'Traditional Doors', description: 'Classic designs reflecting rich Indian craftsmanship and heritage.' },
  { id: 'carved', name: 'Carved Doors', description: 'Intricate hand-carved designs featuring traditional motifs and floral patterns.' },
  { id: 'designer', name: 'Designer Doors', description: 'Bespoke luxury doors crafted to your unique specifications.' },
  { id: 'premium', name: 'Premium Doors', description: 'Luxury doors with premium finishes, metal hardware, and expert craftsmanship.' }
]

const FRAME_COLLECTION = [
  { id: 'door-frames', name: 'Door Frames', description: 'Strong and durable door frames in various timber types.', count: '8+' },
  { id: 'window-frames', name: 'Window Frames', description: 'Weather-resistant window frames for all window types.', count: '6+' },
  { id: 'architectural', name: 'Architectural Frames', description: 'Custom architectural frames for unique construction requirements.', count: '4+' },
  { id: 'premium-frames', name: 'Premium Frames', description: 'Luxury frames with detailed finish work and carving.', count: '5+' }
]

const WINDOW_COLLECTION = [
  { id: 'casement', name: 'Casement Windows', description: 'Hinged windows that open outward for maximum ventilation.' },
  { id: 'sliding', name: 'Sliding Windows', description: 'Smooth gliding windows perfect for space-saving installations.' },
  { id: 'louver', name: 'Louver Windows', description: 'Classic louver windows with adjustable slat control.' },
  { id: 'custom', name: 'Custom Windows', description: 'Bespoke window solutions designed to your specifications.' }
]

const FURNITURE_COLLECTION = [
  { id: 'tables', name: 'Tables', description: 'Dining tables, coffee tables, console tables, and study tables.', icon: '🪑' },
  { id: 'beds', name: 'Beds', description: 'Royal beds, platform beds, storage beds, and custom bed designs.', icon: '🛏️' },
  { id: 'wardrobes', name: 'Wardrobes', description: 'Spacious wardrobes with custom interior configurations.', icon: '🚪' },
  { id: 'custom-furniture', name: 'Custom Furniture', description: 'Bespoke furniture solutions for homes and offices.', icon: '🎨' }
]

const PANEL_COLLECTION = [
  { id: 'decorative', name: 'Decorative Panels', description: 'Intricate carved panels for feature walls and room dividers.' },
  { id: 'modern', name: 'Modern Panels', description: 'Contemporary geometric patterns and sleek designs.' },
  { id: 'cladding', name: 'Wood Cladding', description: 'Wall cladding for texture and warmth in interiors.' },
  { id: 'feature', name: 'Feature Wall Panels', description: 'Statement wall panels that become the focal point.' }
]

const PREMIUM_STATS = [
  { value: '23+', label: 'Years of Excellence' },
  { value: '7', label: 'Premium Timber Types' },
  { value: '100%', label: 'Quality Assured' },
  { value: 'Custom', label: 'Wood Manufacturing' }
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('timber')
  const [selectedTimber, setSelectedTimber] = useState(null)
  const [stickyNav, setStickyNav] = useState(false)
  const navigate = useNavigate()
  const sectionRefs = useRef({})

  // Intersection Observer for active section tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    CATEGORIES.forEach((cat) => {
      const element = document.getElementById(cat.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Sticky nav visibility
  useEffect(() => {
    const handleScroll = () => setStickyNav(window.scrollY > 450)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle URL hash scroll on page load
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      // Check if the hash is a valid category
      const validCategories = CATEGORIES.map(c => c.id)
      if (validCategories.includes(hash)) {
        setTimeout(() => {
          scrollToCategory(hash)
        }, 100)
      }
    }
  }, [])

  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId)
    const element = document.getElementById(categoryId)
    if (element) {
      const offset = 140
      const bodyRect = element.getBoundingClientRect().top
      const offsetRect = bodyRect + window.pageYOffset - offset
      window.scrollTo({ top: offsetRect, behavior: 'smooth' })
    }
  }

  const Section = ({ children, className = '', id = '' }) => (
    <section id={id} className={`py-16 md:py-20 lg:py-25 ${className}`} style={{ scrollMarginTop: 140 }}>
      <div className="container-main">{children}</div>
    </section>
  )

  return (
    <>
      <Helmet>
        <title>Products | Krishna Timber Depot</title>
        <meta name="description" content="Explore premium timber, doors, frames, furniture, wall panels, and design catalogs from Krishna Timber Depot in Hindupur." />
        <link rel="canonical" href="https://krishnatimberdepot.com/products" />
      </Helmet>

      {/* HERO - 60vh */}
      <section className="relative min-h-[60vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70 z-10" />
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/assets/images/hero-workshop.jpg)' }} />
        </div>
        <div className="container-main relative z-20 pt-24 pb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gold">Products</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
              Premium Timber, Doors & <span className="text-gold">Custom Wood</span> Collections
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
              Explore our wide range of timber products, custom doors, frames, furniture, wall panels, and craftsmanship solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToCategory('catalogs')} className="btn-gold inline-flex items-center justify-center gap-2">
                <BookOpen size={20} /> View Catalogs
              </button>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-secondary border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center gap-2">
                <MessageCircle size={20} /> WhatsApp Inquiry
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PREMIUM TRUST STATISTICS STRIP */}
      <section className="bg-surface -mt-8 relative z-30">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {PREMIUM_STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 text-center hover:-translate-y-1 transition-all duration-300"
                style={{ boxShadow: '0 10px 30px rgba(184,138,68,0.12)' }}
              >
                {/* Gold separator */}
                {i < PREMIUM_STATS.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gold/20" />
                )}
                <div className="font-heading text-4xl md:text-5xl font-bold text-gold mb-1">{stat.value}</div>
                <div className="font-body text-sm text-text/60 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY CATEGORY NAVIGATION - Always visible */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-lg border-b border-border"
      >
        <div className="container-main py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`relative whitespace-nowrap px-4 py-2 text-sm font-medium transition-all duration-300 min-h-[48px] ${
                  activeCategory === cat.id
                    ? 'text-wood'
                    : 'text-primary hover:text-wood'
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <main className="pt-4">
        {/* TIMBER COLLECTION */}
        <Section id="timber" className="bg-background">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">Timber Collection</h2>
            <p className="text-text/70 text-lg max-w-2xl">Premium quality timber sourced from the best suppliers.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMBER_COLLECTION.map((timber, index) => (
              <motion.div key={timber.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                <div className="card cursor-pointer group h-full hover:-translate-y-1 transition-transform duration-300" onClick={() => setSelectedTimber(timber)}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-primary/5 relative">
                    <div className="absolute inset-0 flex items-center justify-center"><span className="font-heading text-4xl text-wood/20 font-bold">Premium Timber</span></div>
                    <div className="absolute inset-0 bg-wood/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span className="text-white font-medium flex items-center gap-2"><Info size={18} /> View Details</span></div>
                  </div>
                  <span className="inline-block px-2 py-1 bg-gold/10 text-gold text-xs font-medium rounded mb-2">{timber.badge}</span>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-1">{timber.name}</h3>
                  <p className="text-xs text-text/50 mb-2">{timber.scientificName}</p>
                  <p className="text-sm text-text/70 line-clamp-2 mb-3">{timber.description}</p>
                  <div className="text-xs text-wood font-medium flex items-center gap-1"><MapPin size={12} /> Best for {timber.applications[0]}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* FEATURED TIMBER SHOWCASE */}
        <Section className="bg-surface">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="aspect-[4/3] rounded-card overflow-hidden bg-primary/5">
              <div className="w-full h-full flex items-center justify-center"><span className="font-heading text-6xl text-wood/20">Premium Timber Solutions</span></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">Premium Timber Solutions Since 2001</h2>
              <p className="text-text/70 text-lg mb-6">Over 23 years of expertise supplying quality timber, custom doors, frames, furniture, wall panels, and wood craftsmanship solutions for homes and businesses.</p>
              <div className="space-y-3 mb-8">
                {['23+ Years Experience', '7 Premium Timber Types', 'Custom Manufacturing', 'Quality Assured'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3"><Check size={18} className="text-gold" /><span>{item}</span></div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center gap-2"><MessageCircle size={20} /> WhatsApp Inquiry</a>
                <Link to="/contact" className="btn-secondary inline-flex items-center justify-center gap-2"><MapPin size={20} /> Visit Store</Link>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* DOORS COLLECTION - 60% image */}
        <Section id="doors" className="bg-background">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">Doors Collection</h2>
            <p className="text-text/70 text-lg max-w-2xl">Premium doors crafted with precision and artistic excellence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOOR_COLLECTION.map((door, index) => (
              <motion.div key={door.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <div className="card group cursor-pointer h-full hover:-translate-y-1 hover:shadow-xl hover:border-gold/30 border-2 border-transparent transition-all duration-300">
                  <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4 bg-primary/5 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-primary/20 to-transparent group-hover:scale-110 transition-transform duration-500"><span className="font-heading text-4xl text-wood/15">Door Design Preview</span></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">{door.name}</h3>
                  <p className="text-text/70 mb-4">{door.description}</p>
                  <button onClick={() => navigate(`/catalogs/doors`)} className="btn-primary w-full flex items-center justify-center gap-2"><BookOpen size={18} /> View Door Catalog</button>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* FRAMES COLLECTION */}
        <Section id="frames" className="bg-surface">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">Frames Collection</h2>
            <p className="text-text/70 text-lg max-w-2xl">Door frames, window frames, and architectural frames.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FRAME_COLLECTION.map((frame, index) => (
              <motion.div key={frame.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <div className="card group cursor-pointer h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-primary/5 flex items-center justify-center"><span className="font-heading text-2xl text-wood/20">Frame Collection</span></div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">{frame.name}</h3>
                  <p className="text-sm text-text/70 mb-3">{frame.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-wood font-medium">{frame.count} Designs</span>
                    <button onClick={() => navigate(`/catalogs/frames`)} className="text-wood text-sm flex items-center gap-1 hover:text-primary transition-colors">View Catalog <ArrowRight size={14} /></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* WINDOWS COLLECTION */}
        <Section id="windows" className="bg-background">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">Windows Collection</h2>
            <p className="text-text/70 text-lg max-w-2xl">Premium window solutions for modern homes.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WINDOW_COLLECTION.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <div className="card group cursor-pointer h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-primary/5 flex items-center justify-center"><span className="font-heading text-2xl text-wood/20">Window Collection</span></div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">{item.name}</h3>
                  <p className="text-sm text-text/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* FURNITURE COLLECTION */}
        <Section id="furniture" className="bg-surface">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">Furniture Collection</h2>
            <p className="text-text/70 text-lg max-w-2xl">Custom furniture designed and crafted to perfection.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FURNITURE_COLLECTION.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <div className="card group cursor-pointer h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-primary/5 flex items-center justify-center"><span className="text-6xl">{item.icon}</span></div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">{item.name}</h3>
                  <p className="text-sm text-text/70 mb-4">{item.description}</p>
                  <button onClick={() => navigate(`/catalogs/furniture`)} className="text-wood text-sm flex items-center gap-1 hover:text-primary transition-colors">View Catalog <ArrowRight size={14} /></button>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* WALL PANELS COLLECTION */}
        <Section id="wall-panels" className="bg-background">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">Wall Panels Collection</h2>
            <p className="text-text/70 text-lg max-w-2xl">Transform your walls with stunning wood panel designs.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PANEL_COLLECTION.map((panel, index) => (
              <motion.div key={panel.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <div className="card group cursor-pointer h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-primary/5 flex items-center justify-center"><span className="font-heading text-2xl text-wood/20">Wall Panel Collection</span></div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">{panel.name}</h3>
                  <p className="text-sm text-text/70">{panel.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CATALOGS SECTION - Dark */}
        <Section id="catalogs" className="bg-primary">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-3">Design Catalogs</h2>
            <p className="text-white/70 text-lg max-w-2xl">Browse our complete design collections.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {catalogs.map((catalog, index) => (
              <motion.div key={catalog.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <div className="card group cursor-pointer h-full bg-surface/5 hover:bg-surface/10 hover:-translate-y-1 hover:shadow-xl hover:border-gold/30 border-2 border-transparent transition-all duration-300">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-wood/20 relative">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <FileText size={40} className="text-gold/40 mb-3" />
                      <span className="font-heading text-2xl text-gold/60">{catalog.pageCount} Pages</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading text-xl font-semibold text-white">{catalog.name}</h3>
                    <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded">Preview Available</span>
                  </div>
                  <p className="text-white/70 text-sm mb-4">{catalog.description}</p>
                  <button onClick={() => navigate(`/catalogs/${catalog.id}`)} className="btn-gold w-full flex items-center justify-center gap-2"><BookOpen size={18} /> View Catalog</button>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* PRODUCT CTA */}
        <Section className="bg-gold/10">
          <div className="card max-w-4xl mx-auto text-center p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">Need Help Choosing The Right Timber?</h2>
            <p className="text-text/70 text-lg mb-8 max-w-2xl mx-auto">Our team of experts can help you choose the right timber, doors, frames, furniture, and wood solutions for your project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE_NUMBER}`} className="btn-primary inline-flex items-center justify-center gap-2"><Phone size={20} /> Call Now</a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2"><MessageCircle size={20} /> WhatsApp</a>
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2"><MapPin size={20} /> Visit Store</Link>
            </div>
          </div>
        </Section>
      </main>

      {/* TIMBER MODAL */}
      <AnimatePresence>
        {selectedTimber && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={() => setSelectedTimber(null)}>
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="bg-surface rounded-card p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block px-2 py-1 bg-gold/10 text-gold text-xs font-medium rounded mb-2">{selectedTimber.badge}</span>
                  <h3 className="font-heading text-2xl font-bold text-primary">{selectedTimber.name}</h3>
                  <p className="text-text/60">{selectedTimber.scientificName}</p>
                </div>
                <button onClick={() => setSelectedTimber(null)} className="p-2 hover:bg-background rounded-btn transition-colors"><X size={20} /></button>
              </div>
              <p className="text-text/80 mb-6">{selectedTimber.description}</p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Applications</h4>
                  <ul className="space-y-2">
                    {selectedTimber.applications.map((app, i) => (<li key={i} className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-wood" />{app}</li>))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {selectedTimber.benefits.map((benefit, i) => (<li key={i} className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-gold" />{benefit}</li>))}
                  </ul>
                </div>
              </div>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello Krishna Timber Depot, I am interested in ${selectedTimber.name}. Please share more details.`} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center flex items-center justify-center gap-2"><MessageCircle size={20} /> Inquire About This Timber</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}