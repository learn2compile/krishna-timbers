import { motion } from 'framer-motion'
import { processSteps } from '../../data/services'

export default function ProcessSection() {
  return (
    <section className="section-spacing bg-primary">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Our Work Process
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            From consultation to delivery, we ensure quality at every step
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-gold">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-white/60">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}