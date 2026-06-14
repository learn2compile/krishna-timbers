import { motion } from 'framer-motion'
import { Calendar, TreePine, Layers, BadgeCheck, Truck } from 'lucide-react'

const trustBarItems = [
  { icon: Calendar, value: '23+', label: 'Since 2001' },
  { icon: TreePine, value: '7', label: 'Timber Types' },
  { icon: Layers, value: 'Custom', label: 'Wood Work' },
  { icon: BadgeCheck, value: '100%', label: 'Quality' },
  { icon: Truck, value: 'On Time', label: 'Delivery' },
]

export default function TrustBar() {
  return (
    <section className="bg-wood py-6 overflow-hidden">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10"
        >
          {trustBarItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white">
              <item.icon className="text-gold" size={24} />
              <span className="text-gold font-bold text-lg md:text-xl">
                {item.value}
              </span>
              <span className="text-white/80 text-sm">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}