import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

const WHATSAPP_NUMBER = '917416177679'
const PHONE_NUMBER = '917416177679'
const PHONE_NUMBER_2 = '919642867671'
const EMAIL = 'shravanntr7@email.com'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

const products = [
  { name: 'Balasha Teak', path: '/products' },
  { name: 'Imported Teak', path: '/products' },
  { name: 'Local Teak', path: '/products' },
  { name: 'Doors', path: '/products' },
  { name: 'Frames', path: '/products' },
  { name: 'Furniture', path: '/products' },
]

const services = [
  { name: 'Timber Supply', path: '/services' },
  { name: 'Door Manufacturing', path: '/services' },
  { name: 'Frame Manufacturing', path: '/services' },
  { name: 'Furniture', path: '/services' },
  { name: 'Wood Carving', path: '/services' },
  { name: 'Wood Cutting', path: '/services' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-main section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold">Krishna Timber Depot</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Premium timber & custom wood solutions since 2001.
              Providing quality timber, doors, frames, furniture, and custom wood
              craftsmanship for homes and businesses across the region.
            </p>
            <div className="flex gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="p-2 bg-white/10 rounded-btn hover:bg-white/20 transition-colors"
                aria-label="Call"
              >
                <Phone size={20} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-btn hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.2-.349.21-.646.075-.3-.124 1.227-.587 1.355-.765.182-.226.374-.35.626-.393.827-.136 1.573-.055 1.767.363.195.421.748 1.465.748 1.465.374.696-.744 1.572-1.762 1.655-.3.024-.516-.037-.827-.166zm-3.696-6.852c-.663-.663-1.527-1.488-1.763-1.595-.236-.108-.576-.075-.798.075-.223.15-1.374.762-1.677 1.287-.3.523-.3.913-.21 1.053.09.15.247.3.494.523.822.742 1.507 1.185 1.831 1.467.324.282.653.246.886.149.225-.09 1.095-.542 2.088-1.73.993-1.188 1.668-2.155 1.803-2.531.135-.375.135-.823.09-.898-.045-.075-.167-.12-.35-.21z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Products</h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.path}
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  Parigi Road, Hindupur – 515201
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="text-white/80 hover:text-gold text-sm">
                  +91 {PHONE_NUMBER.slice(1)}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <a href={`tel:${PHONE_NUMBER_2}`} className="text-white/80 hover:text-gold text-sm">
                  +91 {PHONE_NUMBER_2.slice(1)}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <a href="mailto:shravanntr7@email.com" className="text-white/80 hover:text-gold text-sm">
                  shravanntr7@email.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  Mon - Sat: 9:00 AM - 7:30 PM
                </span>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/TCYp992f2P8f7incA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-sm hover:text-white transition-colors"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2024 Krishna Timber Depot. All rights reserved.</p>
            <p>Strong Wood. Stronger Foundations.</p>
            <p>Designed & Developed by <span className="text-gold">Learn2Compile</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}