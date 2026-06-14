import { useState, useEffect } from 'react'
import { Phone, MessageCircle, MapPin } from 'lucide-react'

const WHATSAPP_NUMBER = '917416177679'
const PHONE_NUMBER = '917416177679'

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#20BD5A] transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.2-.349.21-.646.075-.3-.124 1.227-.587 1.355-.765.182-.226.374-.35.626-.393.827-.136 1.573-.055 1.767.363.195.421.748 1.465.748 1.465.374.696-.744 1.572-1.762 1.655-.3.024-.516-.037-.827-.166zm-3.696-6.852c-.663-.663-1.527-1.488-1.763-1.595-.236-.108-.576-.075-.798.075-.223.15-1.374.762-1.677 1.287-.3.523-.3.913-.21 1.053.09.15.247.3.494.523.822.742 1.507 1.185 1.831 1.467.324.282.653.246.886.149.225-.09 1.095-.542 2.088-1.73.993-1.188 1.668-2.155 1.803-2.531.135-.375.135-.823.09-.898-.045-.075-.167-.12-.35-.21z"/>
        </svg>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="w-14 h-14 bg-wood rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary transition-colors"
        aria-label="Call"
      >
        <Phone size={24} />
      </a>

      {/* Location Button */}
      <a
        href="https://maps.app.goo.gl/TCYp992f2P8f7incA"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary/80 transition-colors"
        aria-label="Get Directions"
      >
        <MapPin size={24} />
      </a>
    </div>
  )
}