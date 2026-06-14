import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, ArrowRight } from 'lucide-react'
import { catalogs } from '../../data/catalogs'

export default function CatalogCollection() {
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
            Design Collections
          </h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            Browse our catalogs to explore premium designs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {catalogs.map((catalog, index) => (
            <motion.div
              key={catalog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card group cursor-pointer h-full">
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-primary/5">
                  <div className="w-full h-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <FileText size={48} className="text-primary/30" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  {catalog.name}
                </h3>
                <p className="text-sm text-text/70 mb-3">{catalog.description}</p>
                <div className="flex items-center justify-between text-sm text-text/50">
                  <span>{catalog.pageCount} Pages</span>
                  <span>{catalog.category}</span>
                </div>
                <Link
                  to={`/catalogs/${catalog.id}`}
                  className="mt-4 w-full btn-secondary text-center block"
                >
                  View Collection
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}