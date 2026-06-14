import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { galleryImages } from '../../data/gallery'

export default function GalleryPreview() {
  const previewImages = galleryImages.slice(0, 8)

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
            Our Work Gallery
          </h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            Explore our completed projects and craftsmanship
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="aspect-square rounded-lg overflow-hidden bg-primary/5"
            >
              <div className="w-full h-full flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer">
                <span className="font-heading text-primary/30 uppercase">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link to="/gallery" className="btn-primary inline-flex items-center gap-2">
            View Full Gallery <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}