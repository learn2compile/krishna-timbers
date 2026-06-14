import { useState, useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  X, ArrowLeft, ArrowRight, ZoomIn, MessageCircle, Phone,
  MapPin, ChevronDown, BookOpen
} from 'lucide-react'
import {
  galleryCategories, trustMetrics, doorsCollection, framesCollection,
  windowsCollection, furnitureCollection, wallPanelsCollection,
  timberCollection, workshopImages, completedProjects, CONTACT_INFO
} from '../data/gallery'

const WHATSAPP_NUMBER = CONTACT_INFO.whatsapp
const PHONE_NUMBER = CONTACT_INFO.phone

const ANIMATION_FADE_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 }
}

// Sticky navigation categories (matching Products page structure)
const STICKY_CATEGORIES = [
  { id: 'all', name: 'All Projects' },
  { id: 'doors', name: 'Doors' },
  { id: 'frames', name: 'Frames' },
  { id: 'windows', name: 'Windows' },
  { id: 'furniture', name: 'Furniture' },
  { id: 'wall-panels', name: 'Wall Panels' },
  { id: 'timber', name: 'Timber' },
  { id: 'workshop', name: 'Workshop' },
  { id: 'completed-projects', name: 'Completed Projects' }
]

// Gallery card with premium hover effect
function GalleryCard({ item, onClick, aspectRatio = 'aspect-[3/4]' }) {
  const ratioMap = {
    '3:4': 'aspect-[3/4]',
    '4:5': 'aspect-[4/5]',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '16:9': 'aspect-video'
  }

  return (
    <motion.div
      {...ANIMATION_FADE_UP}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className={`relative rounded-card overflow-hidden ${ratioMap[item.ratio] || aspectRatio} bg-primary/5`}>
        {/* Background image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Hover overlay - Premium effect */}
        <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0 flex flex-col items-center justify-center p-6">
          <h3 className="font-heading text-xl md:text-2xl text-white font-semibold mb-2 text-center">
            {item.name}
          </h3>
          {item.category && (
            <p className="text-white/70 text-sm mb-4">{item.category}</p>
          )}
          <span className="inline-flex items-center gap-2 text-gold font-medium">
            <ZoomIn size={18} /> View Image
          </span>
        </div>
      </div>

      {/* Card info below */}
      <div className="mt-4">
        <h3 className="font-heading text-lg font-semibold text-primary group-hover:text-wood transition-colors">
          {item.name}
        </h3>
        {item.category && (
          <p className="text-text/60 text-sm mt-1">{item.category}</p>
        )}
      </div>
    </motion.div>
  )
}

// Project showcase card
function ProjectCard({ project }) {
  return (
    <motion.div {...ANIMATION_FADE_UP} className="group cursor-pointer">
      <div className="relative rounded-card overflow-hidden aspect-video bg-primary/5">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6">
          <h3 className="font-heading text-xl text-white font-semibold mb-2 text-center">
            {project.name}
          </h3>
          <span className="text-white/70 text-sm">{project.type}</span>
          <span className="inline-flex items-center gap-2 text-gold font-medium mt-4">
            <ZoomIn size={18} /> View Details
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-heading text-lg font-semibold text-primary">
              {project.name}
            </h3>
            <p className="text-text/60 text-sm mt-1">{project.type}</p>
          </div>
          <span className="text-sm text-wood font-medium bg-wood/10 px-2 py-1 rounded-btn">
            {project.year}
          </span>
        </div>
        {project.location && (
          <p className="text-text/50 text-sm mt-2 flex items-center gap-1">
            <MapPin size={12} /> {project.location}
          </p>
        )}
      </div>
    </motion.div>
  )
}

// Premium Modal
function ImageModal({ item, isOpen, onClose, onPrev, onNext, items }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onPrev, onNext])

  if (!isOpen || !item) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Navigation */}
        <button
          className="absolute left-4 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors hidden md:block"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
        >
          <ArrowLeft size={24} />
        </button>
        <button
          className="absolute right-4 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors hidden md:block"
          onClick={(e) => { e.stopPropagation(); onNext() }}
        >
          <ArrowRight size={24} />
        </button>

        {/* Modal content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-surface rounded-card"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="aspect-video md:aspect-[16/9] rounded-t-card overflow-hidden bg-primary/5">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-btn mb-3">
                  {item.category || item.type}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                  {item.name}
                </h3>
                {item.location && (
                  <p className="text-text/60 mt-2 flex items-center gap-2">
                    <MapPin size={16} /> {item.location}
                  </p>
                )}
                {item.year && (
                  <p className="text-wood text-sm mt-1">Completed: {item.year}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello Krishna Timber Depot, I am interested in "${item.name}". Please share more details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} /> WhatsApp Inquiry
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </div>

            <p className="text-text/70 text-lg leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// Section wrapper
function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`py-16 md:py-20 lg:py-25 ${className}`} style={{ scrollMarginTop: 140 }}>
      <div className="container-main">{children}</div>
    </section>
  )
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [stickyNav, setStickyNav] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [allGalleryItems, setAllGalleryItems] = useState([])

  // Build all gallery items for modal navigation
  useEffect(() => {
    const items = [
      ...doorsCollection,
      ...framesCollection,
      ...windowsCollection,
      ...furnitureCollection,
      ...wallPanelsCollection,
      ...timberCollection,
      ...workshopImages,
      ...completedProjects
    ]
    setAllGalleryItems(items)
  }, [])

  // Track active section via Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.id
          if (STICKY_CATEGORIES.find(c => c.id === categoryId)) {
            setActiveCategory(categoryId)
            window.history.replaceState(null, '', `#${categoryId}`)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    STICKY_CATEGORIES.forEach((cat) => {
      const element = document.getElementById(cat.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Sticky nav visibility
  useEffect(() => {
    const handleScroll = () => setStickyNav(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle URL hash scroll on page load
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      const validCategories = STICKY_CATEGORIES.map(c => c.id)
      if (validCategories.includes(hash)) {
        setTimeout(() => scrollToSection(hash), 200)
      }
    }
  }, [])

  const scrollToSection = useCallback((categoryId) => {
    setActiveCategory(categoryId)
    const element = document.getElementById(categoryId)
    if (element) {
      const offset = 140
      const bodyRect = element.getBoundingClientRect().top
      const offsetRect = bodyRect + window.pageYOffset - offset
      window.scrollTo({ top: offsetRect, behavior: 'smooth' })
      window.history.replaceState(null, '', `#${categoryId}`)
    }
  }, [])

  const openModal = useCallback((item) => setSelectedItem(item), [])
  const closeModal = useCallback(() => setSelectedItem(null), [])

  const navigateModal = useCallback((direction) => {
    if (!selectedItem) return
    const currentIndex = allGalleryItems.findIndex(item => item.id === selectedItem.id)
    if (currentIndex === -1) return

    let newIndex
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % allGalleryItems.length
    } else {
      newIndex = (currentIndex - 1 + allGalleryItems.length) % allGalleryItems.length
    }
    setSelectedItem(allGalleryItems[newIndex])
  }, [selectedItem, allGalleryItems])

  return (
    <>
      <Helmet>
        <title>Gallery | Krishna Timber Depot | Doors, Furniture & Woodwork</title>
        <meta name="description" content="Explore premium timber collections, custom doors, furniture, wall panels, and completed woodwork projects by Krishna Timber Depot." />
        <meta property="og:title" content="Gallery | Krishna Timber Depot" />
        <meta property="og:description" content="Explore our premium timber collections, handcrafted doors, furniture, and completed projects." />
        <link rel="canonical" href="https://krishnatimberdepot.com/gallery" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Krishna Timber Depot Gallery",
            "description": "Premium timber, doors, furniture, and custom woodwork gallery",
            "url": "https://krishnatimberdepot.com/gallery",
            "publisher": {
              "@type": "Organization",
              "name": "Krishna Timber Depot",
              "url": "https://krishnatimberdepot.com"
            }
          })}
        </script>
      </Helmet>

      {/* HERO - 60vh desktop, 50vh mobile */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center bg-primary overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url(/assets/images/hero-workshop.jpg)' }}
          />
          {/* Wood grain texture overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Content */}
        <div className="container-main relative z-20 pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gold">Gallery</span>
            </nav>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 leading-tight">
              Our Craftsmanship <span className="text-gold">Gallery</span>
            </h1>

            <p className="text-xl md:text-2xl text-gold font-medium mb-4">
              Doors, Timber, Furniture & Custom Woodwork
            </p>

            <p className="text-lg text-white/70 mb-8 max-w-2xl">
              Explore our premium timber collections, handcrafted doors, furniture, architectural woodwork, and completed projects built with over two decades of expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('doors')}
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                <BookOpen size={20} /> Browse Collections
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> WhatsApp Inquiry
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST METRICS - 4 cards */}
      <section className="bg-surface -mt-8 relative z-30">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {trustMetrics.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 text-center hover:-translate-y-1 transition-all duration-300"
                style={{ boxShadow: '0 10px 30px rgba(184,138,68,0.12)' }}
              >
                {i < trustMetrics.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gold/20" />
                )}
                <div className="font-heading text-4xl md:text-5xl font-bold text-gold mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-text/60 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY GALLERY NAVIGATION */}
      <AnimatePresence>
        {stickyNav && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="sticky top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-lg border-b border-border"
          >
            <div className="container-main py-3">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                {STICKY_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToSection(cat.id)}
                    className={`relative whitespace-nowrap px-4 py-2 text-sm font-medium transition-all duration-300 min-h-[48px] ${
                      activeCategory === cat.id
                        ? 'text-wood'
                        : 'text-primary/70 hover:text-wood'
                    }`}
                  >
                    {cat.name}
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
        )}
      </AnimatePresence>

      <main className="pt-4">
        {/* DOOR COLLECTION */}
        <Section id="doors" className="bg-background">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">
              Premium Door Collections
            </h2>
            <p className="text-text/70 text-lg max-w-2xl">
              Modern, traditional, carved, and custom-designed timber doors crafted with precision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doorsCollection.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => openModal(item)}
                aspectRatio="aspect-[3/4]"
              />
            ))}
          </div>
        </Section>

        {/* FRAMES COLLECTION */}
        <Section id="frames" className="bg-surface">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">
              Premium Frame Collections
            </h2>
            <p className="text-text/70 text-lg max-w-2xl">
              Door frames, window frames, and architectural frames crafted to perfection.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {framesCollection.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => openModal(item)}
                aspectRatio="aspect-[4/5]"
              />
            ))}
          </div>
        </Section>

        {/* WINDOWS COLLECTION */}
        <Section id="windows" className="bg-background">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">
              Window Collections
            </h2>
            <p className="text-text/70 text-lg max-w-2xl">
              Casement, sliding, louver, and custom window solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {windowsCollection.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => openModal(item)}
                aspectRatio="aspect-[4/3]"
              />
            ))}
          </div>
        </Section>

        {/* FURNITURE COLLECTION */}
        <Section id="furniture" className="bg-surface">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">
              Furniture Collections
            </h2>
            <p className="text-text/70 text-lg max-w-2xl">
              Tables, beds, wardrobes, and custom furniture designed and crafted to perfection.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {furnitureCollection.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => openModal(item)}
                aspectRatio="aspect-square"
              />
            ))}
          </div>
        </Section>

        {/* WALL PANELS COLLECTION */}
        <Section id="wall-panels" className="bg-background">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">
              Wall Panel Collections
            </h2>
            <p className="text-text/70 text-lg max-w-2xl">
              Decorative panels, modern designs, wood cladding, and feature walls.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wallPanelsCollection.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => openModal(item)}
                aspectRatio="aspect-video"
              />
            ))}
          </div>
        </Section>

        {/* TIMBER COLLECTION */}
        <Section id="timber" className="bg-surface">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">
              Premium Timber Collections
            </h2>
            <p className="text-text/70 text-lg max-w-2xl">
              Sourcing the finest timbers from around the world.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timberCollection.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => openModal(item)}
                aspectRatio="aspect-[4/3]"
              />
            ))}
          </div>
        </Section>

        {/* WORKSHOP & MANUFACTURING */}
        <Section id="workshop" className="bg-background">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">
              Workshop & Manufacturing
            </h2>
            <p className="text-text/70 text-lg max-w-2xl">
              Witness our craftsmanship in action. Our state-of-the-art facility ensures precision in every piece.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopImages.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => openModal(item)}
                aspectRatio="aspect-video"
              />
            ))}
          </div>
        </Section>

        {/* COMPLETED PROJECTS - Most important section */}
        <Section id="completed-projects" className="bg-surface">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">
              Completed Projects
            </h2>
            <p className="text-text/70 text-lg max-w-2xl">
              Real projects delivered for homes, villas, businesses, and architectural spaces.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>
      </main>

      {/* FINAL CTA - Dark premium section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-4">
              Inspired By Our Work?
              <span className="text-gold block mt-2">Let's Build Your Next Project.</span>
            </h2>

            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Contact Krishna Timber Depot today for premium timber, custom doors, furniture, frames, wall panels, and complete wood solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> WhatsApp Inquiry
              </a>
              <Link
                to="/contact"
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                <MapPin size={20} /> Visit Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE MODAL */}
      <ImageModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={closeModal}
        onPrev={() => navigateModal('prev')}
        onNext={() => navigateModal('next')}
        items={allGalleryItems}
      />
    </>
  )
}