import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-spacing bg-surface">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            Hear from our satisfied customers
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <Quote size={40} className="text-gold/30" />
              </div>
              <p className="text-lg md:text-xl text-text/80 italic mb-6">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-gold fill-gold" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-primary">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-text/60">
                  {testimonials[currentIndex].location}
                </div>
                <div className="text-xs text-wood mt-1">
                  {testimonials[currentIndex].project}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-background hover:bg-wood/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-primary" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-wood' : 'bg-border'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-background hover:bg-wood/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}