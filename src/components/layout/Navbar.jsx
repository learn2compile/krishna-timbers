import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

const WHATSAPP_NUMBER = '917416177679'
const PHONE_NUMBER = '917416177679'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const shouldBeTransparent = isHomePage && !isScrolled
  const navbarBg = shouldBeTransparent
    ? 'bg-transparent'
    : 'bg-surface/95 backdrop-blur-md shadow-sm'
  const textColor = shouldBeTransparent
    ? 'text-white'
    : 'text-primary'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg}`}
    >
      <nav className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className={`font-heading text-xl md:text-2xl font-bold ${textColor}`}>
              Krishna Timber Depot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors duration-200 hover:text-wood ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : textColor
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden lg:block">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello+Krishna+Timber+Depot%2C%0A%0AI+would+like+to+know+more+about+your+timber+products+and+services.%0A%0APlease+share+the+details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile: WhatsApp Icon */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`lg:hidden p-2 ${textColor}`}
            aria-label="WhatsApp"
          >
            <MessageCircle size={24} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-surface shadow-xl lg:hidden pt-20"
            >
              <div className="p-6 space-y-6">
                {/* Navigation Links */}
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block py-3 px-4 font-medium min-h-[48px] ${
                        location.pathname === link.path
                          ? 'text-gold bg-gold/10 rounded-btn'
                          : 'text-primary hover:bg-background'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center gap-3 py-3 px-4 bg-primary text-white rounded-btn min-h-[48px]"
                  >
                    <Phone size={20} />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-3 px-4 bg-wood text-white rounded-btn min-h-[48px]"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}