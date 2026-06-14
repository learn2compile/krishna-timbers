import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function AboutPreview() {
  return (
    <section className="section-spacing bg-background">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              Strong Wood. <span className="text-wood">Stronger Foundations.</span>
            </h2>
            <div className="space-y-4 text-text/80 leading-relaxed">
              <p>
                Since 2001, Krishna Timber Depot has been a trusted name in premium timber
                supply and wood craftsmanship. Located in Hindupur, we take pride in
                sourcing and supplying the finest quality timbers including Balasha
                Teak, Imported Teak, Local Teak, Ponna, Mathi, Jali, and Neem.
              </p>
              <p>
                Our team of skilled artisans brings decades of expertise in
                crafting beautiful doors, frames, furniture, wall panels, and
                custom wood solutions. Every piece we create reflects our
                commitment to quality, craftsmanship, and customer
                satisfaction.
              </p>
              <p>
                Whether you need premium timber for construction or custom
                woodwork for your home or office, Krishna Timber Depot is your trusted
                partner for quality and reliability.
              </p>
            </div>
            <Link to="/about" className="btn-primary inline-flex items-center gap-2 mt-6">
              Learn More <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-card overflow-hidden bg-primary">
              <img
                src="/assets/images/hero-workshop.jpg"
                alt="Krishna Timber Depot Workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 card bg-surface">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-wood">23+</div>
                <div className="text-sm text-text/60">Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}