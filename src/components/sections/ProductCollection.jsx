import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { productCategories } from '../../data/products'

export default function ProductCollection() {
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
            Product Collections
          </h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            Explore our wide range of timber products and custom wood solutions
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card group cursor-pointer h-full">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-primary/5">
                  <div className="w-full h-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <span className="font-heading text-3xl text-primary/30 uppercase">
                      {category.name}
                    </span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-text/70 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.items.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-1 bg-background rounded-btn text-text/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  to="/products"
                  className="mt-4 text-wood flex items-center gap-1 hover:text-primary transition-colors"
                >
                  Explore <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}