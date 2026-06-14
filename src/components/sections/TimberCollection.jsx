import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Info } from 'lucide-react'
import { timbers } from '../../data/products'

export default function TimberCollection() {
  const [selectedTimber, setSelectedTimber] = useState(null)

  return (
    <section className="section-spacing bg-surface" id="products">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Our Timber Collection
          </h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            Premium quality timber sourced from trusted suppliers
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timbers.map((timber, index) => (
            <motion.div
              key={timber.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="card cursor-pointer group h-full"
                onClick={() => setSelectedTimber(timber)}
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-background">
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="font-heading text-2xl text-primary/40 uppercase">
                      {timber.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-1">
                  {timber.name}
                </h3>
                <p className="text-sm text-text/60 mb-2">{timber.scientificName}</p>
                <p className="text-sm text-text/70 line-clamp-2">
                  {timber.description}
                </p>
                <button className="mt-3 text-wood text-sm flex items-center gap-1 hover:text-primary transition-colors">
                  <Info size={16} /> View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedTimber && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              onClick={() => setSelectedTimber(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-surface rounded-card p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-primary">
                      {selectedTimber.name}
                    </h3>
                    <p className="text-text/60">{selectedTimber.scientificName}</p>
                  </div>
                  <button
                    onClick={() => setSelectedTimber(null)}
                    className="p-2 hover:bg-background rounded-btn transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <p className="text-text/80 mb-6">{selectedTimber.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Applications</h4>
                    <ul className="space-y-2">
                      {selectedTimber.applications.map((app, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-wood" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {selectedTimber.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 mt-6 pt-6 border-t border-border">
                  <div className="flex-1">
                    <span className="text-sm text-text/60">Color:</span>
                    <span className="ml-2 text-primary">{selectedTimber.color}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-text/60">Hardness:</span>
                    <span className="ml-2 text-primary">{selectedTimber.hardness}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}