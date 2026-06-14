import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { whyChooseUs } from '../../data/services'

export default function WhyChooseUs() {
  return (
    <section className="section-spacing bg-background">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Why Choose Krishna Timber Depot
          </h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            Experience the difference of working with true craftsmanship experts
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="w-12 h-12 rounded-full bg-wood/10 flex items-center justify-center mb-4">
                <Check size={24} className="text-wood" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}