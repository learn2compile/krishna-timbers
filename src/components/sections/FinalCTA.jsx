import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin } from 'lucide-react'

const WHATSAPP_NUMBER = '917416177679'
const PHONE_NUMBER = '917416177679'

export default function FinalCTA() {
  return (
    <section className="section-spacing bg-wood">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today for premium timber and custom wood solutions. Our team is ready to help you bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="btn bg-white text-wood hover:bg-background inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] text-white hover:bg-[#20BD5A] inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
            <a
              href="https://maps.app.goo.gl/TCYp992f2P8f7incA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-primary text-white hover:bg-primary/80 inline-flex items-center justify-center gap-2"
            >
              <MapPin size={20} /> Visit Store
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}