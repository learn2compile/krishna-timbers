import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Package, DoorOpen, Armchair, LayoutGrid, Scissors, PenTool, Square } from 'lucide-react'
import { services } from '../../data/services'

const iconMap = {
  Package,
  DoorOpen,
  Armchair,
  LayoutGrid,
  Scissors,
  PenTool,
  Square
}

export default function ServicesGrid() {
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
            Our Services
          </h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            Comprehensive timber and woodwork solutions for all your needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 8).map((service, index) => {
            const Icon = iconMap[service.icon] || Package
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card group h-full">
                  <div className="w-12 h-12 rounded-full bg-wood/10 flex items-center justify-center mb-4 group-hover:bg-wood group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-text/70 line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            View All Services <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}