import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '917416177679'

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/images/hero-workshop.jpg)',
          }}
        />
      </div>

      {/* Content */}
      <div className="container-main relative z-20 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
              Premium Timber & <span className="text-gold">Custom Wood</span> Solutions Since 2001
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-xl">
              Providing quality timber, doors, frames, furniture, wall panels, and custom wood craftsmanship for homes and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello+Krishna+Timber+Depot%2C%0A%0AI+would+like+to+know+more+about+your+timber+products+and+services.%0A%0APlease+share+the+details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                WhatsApp Us <MessageCircle size={20} />
              </a>
              <a
                href="#products"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center gap-2"
              >
                Explore Products <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-card overflow-hidden bg-wood/20 backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-gold text-6xl md:text-8xl font-heading font-bold mb-2">
                      23+
                    </div>
                    <div className="text-white/80 text-xl">
                      Years of Excellence
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 card bg-surface"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-wood/10 flex items-center justify-center">
                    <span className="text-wood font-bold">7</span>
                  </div>
                  <div>
                    <div className="font-medium text-primary">Timber Types</div>
                    <div className="text-sm text-text/60">Premium Quality</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-6 -right-6 card bg-surface"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-wood/10 flex items-center justify-center">
                    <span className="text-wood font-bold">100%</span>
                  </div>
                  <div>
                    <div className="font-medium text-primary">Quality</div>
                    <div className="text-sm text-text/60">Guaranteed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}