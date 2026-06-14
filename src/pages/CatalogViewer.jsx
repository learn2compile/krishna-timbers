import { useState, useRef, useEffect, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, MessageCircle, Phone, ArrowLeft, ArrowRight, ArrowUp, ArrowDown, ZoomIn, ZoomOut, Maximize2, Minimize2, ChevronLeft, ChevronRight, FileText, MapPin, Clock, Phone as PhoneIcon } from 'lucide-react'
import { catalogs } from '../data/catalogs'

const WHATSAPP_NUMBER = '917416177679'
const PHONE_NUMBER = '917416177679'

const ANIMATION_FADE_UP = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

// Generate placeholder pages for the catalog viewer
const generatePlaceholderPages = (count) => {
  const pages = []
  for (let i = 1; i <= count; i++) {
    pages.push({
      pageNumber: i,
      content: `Page ${i} of ${count}`
    })
  }
  return pages
}

// WhatsApp message template
const WHATSAPP_MESSAGE = `Hello Krishna Timber Depot,

I viewed your catalog and would like more details about the designs.

Please contact me.`

export default function CatalogViewer() {
  const { catalogId } = useParams()
  const navigate = useNavigate()
  const catalog = catalogs.find((c) => c.id === catalogId)
  const viewerRef = useRef(null)

  // Viewer state
  const [zoom, setZoom] = useState(100)
  const [currentPage, setCurrentPage] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [pages] = useState(() => generatePlaceholderPages(catalog?.pageCount || 16))

  const totalPages = pages.length

  // Zoom controls
  const zoomIn = useCallback(() => {
    setZoom(prev => Math.min(prev + 25, 200))
  }, [])

  const zoomOut = useCallback(() => {
    setZoom(prev => Math.max(prev - 25, 50))
  }, [])

  const resetZoom = useCallback(() => {
    setZoom(100)
  }, [])

  // Page navigation
  const goToPrevPage = useCallback(() => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }, [])

  const goToNextPage = useCallback(() => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }, [])

  const goToPage = useCallback((page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }, [totalPages])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goToPrevPage()
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        goToNextPage()
      } else if (e.key === '+' || e.key === '=') {
        zoomIn()
      } else if (e.key === '-') {
        zoomOut()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrevPage, goToNextPage, zoomIn, zoomOut])

  // Fullscreen toggle
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      viewerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  // Exit fullscreen on escape
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // WhatsApp link with pre-filled message
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  // Not found state
  if (!catalog) {
    return (
      <>
        <Helmet>
          <title>Catalog Not Found | Krishna Timber Depot</title>
        </Helmet>
        <section className="min-h-screen bg-background pt-24 pb-12">
          <div className="container-main text-center">
            <h1 className="font-heading text-4xl text-primary mb-4">Catalog Not Found</h1>
            <p className="text-text/70 mb-8">The catalog you're looking for doesn't exist.</p>
            <Link to="/products" className="btn-primary">
              Back to Products
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>{catalog.name} | Krishna Timber Depot</title>
        <meta name="description" content={`Browse ${catalog.name}. ${catalog.description} View all ${catalog.pageCount}+ designs and contact us for custom quotes.`} />
        <meta property="og:title" content={`${catalog.name} | Krishna Timber Depot`} />
        <meta property="og:description" content={catalog.description} />
        <link rel="canonical" href={`https://krishnatimberdepot.com/catalogs/${catalogId}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: catalog.name,
          description: catalog.description,
          url: `https://krishnatimberdepot.com/catalogs/${catalogId}`,
          brand: {
            '@type': 'Organization',
            name: 'Krishna Timber Depot'
          }
        })}</script>
      </Helmet>

      <section className="min-h-screen bg-background pt-20">
        {/* Header */}
        <div className="bg-surface border-b border-border sticky top-0 z-30">
          <div className="container-main">
            <div className="flex items-center justify-between h-14">
              {/* Back Button */}
              <Link
                to="/products"
                className="flex items-center gap-2 text-wood hover:text-primary transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back to Products</span>
              </Link>

              {/* Catalog Title */}
              <h1 className="font-heading text-lg font-semibold text-primary truncate">
                {catalog.name}
              </h1>

              {/* Page Indicator */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-text/60">Page</span>
                <span className="font-medium text-primary">{currentPage}</span>
                <span className="text-text/40">/</span>
                <span className="text-text/60">{totalPages}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-[calc(100vh-3.5rem)]">
          {/* PDF Viewer */}
          <div
            ref={viewerRef}
            className="flex-1 bg-primary/5 overflow-auto relative"
          >
            {/* Zoom Controls */}
            <div className="fixed top-4 right-4 z-20 flex items-center gap-2 bg-surface rounded-btn shadow-lg p-1">
              <button
                onClick={zoomOut}
                disabled={zoom <= 50}
                className="p-2 hover:bg-background rounded-btn transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                title="Zoom Out (-)"
                aria-label="Zoom Out"
              >
                <ZoomOut size={18} />
              </button>
              <button
                onClick={resetZoom}
                className="px-2 py-1 text-sm font-medium hover:bg-background rounded-btn transition-colors"
                title="Reset Zoom"
              >
                {zoom}%
              </button>
              <button
                onClick={zoomIn}
                disabled={zoom >= 200}
                className="p-2 hover:bg-background rounded-btn transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                title="Zoom In (+)"
                aria-label="Zoom In"
              >
                <ZoomIn size={18} />
              </button>
              <div className="w-px h-6 bg-border" />
              <button
                onClick={toggleFullscreen}
                className="p-2 hover:bg-background rounded-btn transition-colors"
                title={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Fullscreen'}
                aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              >
                {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
            </div>

            {/* Page Navigation */}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20 bg-surface rounded-card shadow-lg p-2 flex items-center gap-4">
              <button
                onClick={goToPrevPage}
                disabled={currentPage <= 1}
                className="p-2 hover:bg-background rounded-btn transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Previous Page"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max={totalPages}
                  value={currentPage}
                  onChange={(e) => goToPage(parseInt(e.target.value) || 1)}
                  className="w-14 px-2 py-1 text-center border border-border rounded-btn bg-background focus:outline-none focus:ring-2 focus:ring-wood"
                />
                <span className="text-text/60">of</span>
                <span className="font-medium">{totalPages}</span>
              </div>

              <button
                onClick={goToNextPage}
                disabled={currentPage >= totalPages}
                className="p-2 hover:bg-background rounded-btn transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Next Page"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Page Content */}
            <div className="flex items-start justify-center min-h-full p-8">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-surface rounded-card shadow-xl overflow-hidden"
                style={{
                  width: `${(8.5 / 100) * zoom}in`,
                  height: `${(11 / 100) * zoom}in`,
                  minWidth: `${(8.5 / 100) * zoom * 3}px`,
                  minHeight: `${(11 / 100) * zoom * 3}px`
                }}
              >
                {/* Placeholder Page Content */}
                <div className="w-full h-full flex flex-col">
                  {/* Page Header */}
                  <div className="bg-primary text-white p-4 flex items-center justify-between">
                    <div>
                      <h2 className="font-heading text-xl font-bold">{catalog.name}</h2>
                      <p className="text-white/70 text-sm">{catalog.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-heading font-bold text-gold">
                        {catalog.category}
                      </span>
                    </div>
                  </div>

                  {/* Page Body */}
                  <div className="flex-1 flex items-center justify-center p-8">
                    <div className="text-center">
                      {/* Design Preview Placeholder */}
                      <div className="w-full max-w-sm aspect-[4/3] mx-auto mb-6 bg-wood/10 rounded-lg flex items-center justify-center">
                        <div className="text-center p-8">
                          <FileText size={64} className="mx-auto mb-4 text-wood/30" />
                          <p className="text-wood/50 font-heading text-lg">
                            Design Preview
                          </p>
                          <p className="text-wood/30 text-sm mt-2">
                            Page {currentPage} of {totalPages}
                          </p>
                        </div>
                      </div>

                      <p className="text-text/60">
                        This is a preview placeholder for page {currentPage}.
                      </p>
                      <p className="text-text/40 text-sm mt-2">
                        Place your PDF content here for actual rendering.
                      </p>
                    </div>
                  </div>

                  {/* Page Footer */}
                  <div className="bg-background p-4 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-text/60">
                      <span>Krishna Timber Depot</span>
                    </div>
                    <div className="text-text/40">
                      {currentPage} / {totalPages}
                    </div>
                    <div className="flex items-center gap-2 text-text/60">
                      <span className="text-gold">+91 7416177679</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Sidebar - Hidden on mobile when collapsed */}
          <AnimatePresence>
            {(sidebarOpen || !window.matchMedia('(max-width: 1024px)').matches) && (
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="w-full lg:w-80 xl:w-96 bg-surface border-l border-border lg:sticky lg:top-0 lg:h-screen overflow-y-auto"
              >
                <div className="p-6 space-y-6">
                  {/* Catalog Header */}
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-primary mb-2">
                      {catalog.name}
                    </h2>
                    <p className="text-text/70">{catalog.description}</p>
                    <div className="flex items-center gap-4 mt-4 text-sm text-text/60">
                      <span className="flex items-center gap-1">
                        <FileText size={16} />
                        {catalog.pageCount} Pages
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {catalog.category}
                      </span>
                    </div>
                  </div>

                  {/* Download Section */}
                  <div className="card bg-primary/5">
                    <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <Download size={18} />
                      Download Catalog
                    </h3>
                    <p className="text-sm text-text/60 mb-4">
                      Download the full catalog to view offline and share.
                    </p>
                    <button className="btn-primary w-full flex items-center justify-center gap-2">
                      <Download size={18} />
                      Download PDF
                    </button>
                  </div>

                  {/* Inquiry Section */}
                  <div className="card">
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                      Interested In This Design?
                    </h3>
                    <p className="text-sm text-text/70 mb-4">
                      Contact us to learn more about this collection and get a custom quote.
                    </p>

                    <div className="space-y-3">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={20} />
                        WhatsApp Inquiry
                      </a>

                      <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="btn-secondary w-full flex items-center justify-center gap-2"
                      >
                        <PhoneIcon size={20} />
                        Call Now
                      </a>

                      <Link
                        to="/contact"
                        className="btn-secondary w-full flex items-center justify-center gap-2"
                      >
                        <MapPin size={20} />
                        Visit Store
                      </Link>
                    </div>

                    {/* WhatsApp Message Preview */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-sm text-text/60 mb-2">
                        <strong className="text-primary">WhatsApp Message:</strong>
                      </p>
                      <div className="bg-background p-3 rounded-btn text-sm text-text/70 whitespace-pre-wrap">
                        {WHATSAPP_MESSAGE}
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="card">
                    <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <Clock size={18} />
                      Business Hours
                    </h3>
                    <div className="space-y-2 text-sm text-text/70">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 7:30 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 7:30 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="card">
                    <h3 className="font-semibold text-primary mb-3">Contact Us</h3>
                    <div className="space-y-3 text-sm">
                      <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="flex items-center gap-2 text-wood hover:text-primary transition-colors"
                      >
                        <PhoneIcon size={16} />
                        +91 7416177679
                      </a>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-wood hover:text-primary transition-colors"
                      >
                        <MessageCircle size={16} />
                        WhatsApp Us
                      </a>
                      <p className="flex items-start gap-2 text-text/60">
                        <MapPin size={16} className="mt-0.5" />
                        Parigi Road, Hindupur - 515201
                      </p>
                    </div>
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed bottom-4 right-4 z-30 btn-primary shadow-lg"
          >
            {sidebarOpen ? 'Hide Info' : 'Show Info'}
          </button>
        </div>
      </section>
    </>
  )
}