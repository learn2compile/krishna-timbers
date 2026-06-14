import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, ChevronDown, CheckCircle } from 'lucide-react'
import PageHero from '../components/layout/PageHero'

const WHATSAPP_NUMBER = '917416177679'
const PHONE_NUMBER = '917416177679'
const PHONE_NUMBER_2 = '919642867671'
const EMAIL = 'shravanntr7@email.com'
const MAPS_URL = 'https://maps.app.goo.gl/TCYp992f2P8f7incA'

const FAQS = [
  { q: 'Do you provide custom door designs?', a: 'Yes! We specialize in custom door designs tailored to your exact specifications. Our skilled craftsmen create unique doors that perfectly match your vision and requirements.' },
  { q: 'Can I visit your showroom?', a: 'Absolutely! We welcome you to visit our showroom at Krishna Timber Depot, Parigi Road, Hindupur – 515201 to explore our premium timber collection and finished products.' },
  { q: 'Do you deliver outside Hindupur?', a: 'Yes, we deliver throughout the region. Contact us for delivery estimates and pricing to your location.' },
  { q: 'Can I request a quotation online?', a: 'Yes! Fill out our contact form and our team will get back to you with a personalized quote within 24 hours.' },
  { q: 'Do you manufacture custom furniture?', a: 'Yes, we specialize in custom furniture manufacturing. From design to delivery, we create pieces that match your exact requirements.' },
  { q: 'How quickly can you respond to inquiries?', a: 'We aim to respond to all inquiries within 24 hours during business hours. For urgent requests, please call us directly.' }
]

const TRUST_ITEMS = [
  { number: '23+', label: 'Years Experience' },
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Skilled Craftsmen' },
  { number: '100%', label: 'Quality Guaranteed' }
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hello Krishna Timber Depot,

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Project Type: ${formData.projectType}
Message: ${formData.message}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank')
  }

  return (
    <>
      <Helmet>
        <title>Contact Krishna Timber Depot | Timber, Doors & Furniture</title>
        <meta name="description" content="Get in touch with Krishna Timber Depot for premium timber, custom doors, furniture, frames, wall panels, and woodworking solutions in Hindupur." />
        <link rel="canonical" href="https://krishnatimbers.com/contact" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Krishna Timber Depot",
          "telephone": [`+91${PHONE_NUMBER}`, `+91${PHONE_NUMBER_2}`],
          "email": EMAIL,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Parigi Road",
            "addressLocality": "Hindupur",
            "addressRegion": "515201",
            "addressCountry": "IN"
          },
          "openingHours": "Mo-Sa 09:00-19:30",
          "geo": { "@type": "GeoCoordinates", "latitude": "13.83", "longitude": "77.48" },
          "url": MAPS_URL
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQS.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}</script>
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="relative h-[60vh] min-h-[500px] desktop:h-[60vh] mobile:h-[50vh] bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-wood to-primary" />
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B88A44' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23B88A44' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        <div className="container-main relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-heading font-bold mb-6">
              Let's Discuss Your Next Project
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Whether you need premium timber, custom doors, furniture, frames, wall panels, or complete woodworking solutions, our team is ready to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${PHONE_NUMBER}`} className="btn-primary flex items-center gap-2">
                <Phone size={20} /> Call Now
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Krishna%20Timber%20Depot%2C%0AI%20would%20like%20to%20discuss%20my%20project%20requirements.%0APlease%20contact%20me.`} target="_blank" rel="noopener noreferrer" className="btn-gold flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.2-.349.21-.646.075-.3-.124 1.227-.587 1.355-.765.182-.226.374-.35.626-.393.827-.136 1.573-.055 1.767.363.195.421.748 1.465.748 1.465.374.696-.744 1.572-1.762 1.655-.3.024-.516-.037-.827-.166zm-3.696-6.852c-.663-.663-1.527-1.488-1.763-1.595-.236-.108-.576-.075-.798.075-.223.15-1.374.762-1.677 1.287-.3.523-.3.913-.21 1.053.09.15.247.3.494.523.822.742 1.507 1.185 1.831 1.467.324.282.653.246.886.149.225-.09 1.095-.542 2.088-1.73.993-1.188 1.668-2.155 1.803-2.531.135-.375.135-.823.09-.898-.045-.075-.167-.12-.35-.21z"/></svg>
                WhatsApp Inquiry
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CONTACT INFO CARDS */}
      <section className="section-spacing bg-background">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card group hover:-translate-y-1.5 transition-transform duration-300" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                <Phone size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3 text-center">Call Us</h3>
              <div className="space-y-1 text-center">
                <a href={`tel:${PHONE_NUMBER}`} className="block text-wood hover:text-primary transition-colors">{PHONE_NUMBER}</a>
                <a href={`tel:${PHONE_NUMBER_2}`} className="block text-wood hover:text-primary transition-colors">{PHONE_NUMBER_2}</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card group hover:-translate-y-1.5 transition-transform duration-300" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                <Mail size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3 text-center">Email Us</h3>
              <a href={`mailto:${EMAIL}`} className="block text-wood hover:text-primary transition-colors text-center">{EMAIL}</a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="card group hover:-translate-y-1.5 transition-transform duration-300" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                <Clock size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3 text-center">Business Hours</h3>
              <div className="text-center text-text/80">
                <p className="font-medium">Monday – Saturday</p>
                <p>9:00 AM – 7:30 PM</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="card group hover:-translate-y-1.5 transition-transform duration-300" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                <MapPin size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3 text-center">Visit Our Store</h3>
              <div className="text-center text-text/80 mb-3">
                <p className="font-medium">Krishna Timber Depot</p>
                <p>Parigi Road, Hindupur – 515201</p>
              </div>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block text-center text-gold hover:text-wood font-medium">Open Google Maps →</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CONTACT FORM */}
      <section className="section-spacing bg-surface">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 text-center">Send Inquiry</h2>
              <p className="text-text/70 text-center mb-10">Fill out the form below and our team will contact you shortly.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input-field" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Phone Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="input-field" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Project Type</label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange} className="input-field">
                      <option value="">Select project type</option>
                      <option value="Premium Timber">Premium Timber</option>
                      <option value="Custom Doors">Custom Doors</option>
                      <option value="Door Frames">Door Frames</option>
                      <option value="Windows">Windows</option>
                      <option value="Furniture">Furniture</option>
                      <option value="Wall Panels">Wall Panels</option>
                      <option value="Wood Carving">Wood Carving</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="input-field resize-none" placeholder="Tell us about your requirements..." />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send size={20} /> Send Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section className="section-spacing bg-background">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Why Contact Krishna Timber Depot</h2>
            <p className="text-text/70 max-w-2xl mx-auto">Experience the difference of working with experts who understand quality timber and craftsmanship.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_ITEMS.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="card text-center group hover:-translate-y-1.5 transition-transform duration-300" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                <div className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2">{item.number}</div>
                <div className="font-medium text-primary">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: STORE LOCATION */}
      <section className="section-spacing bg-surface">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3 order-2 lg:order-1">
              <div className="h-[400px] rounded-card overflow-hidden" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                <iframe title="Krishna Timber Depot Location" width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888!2d77.48!3d13.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTNCsDQ5JzUyLjYiTiA3N0KwMjgnNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000`} />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-2 order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">Store Location</h2>
              <div className="card" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                <div className="mb-4">
                  <h3 className="font-heading font-semibold text-primary text-lg">Krishna Timber Depot</h3>
                  <p className="text-text/70">Parigi Road, Hindupur – 515201</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-text/70 mb-1">
                    <Clock size={18} className="text-gold" />
                    <span className="font-medium">Business Hours</span>
                  </div>
                  <p className="text-text/70 ml-6">Monday – Saturday<br/>9:00 AM – 7:30 PM</p>
                </div>
                <div className="space-y-3">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center block">Get Directions</a>
                  <a href={`tel:${PHONE_NUMBER}`} className="btn-secondary w-full text-center block">Call Store</a>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-full text-center text-gold hover:text-wood font-medium block">WhatsApp →</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: QUICK ACTIONS */}
      <section className="section-spacing bg-background">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <a href={`tel:${PHONE_NUMBER}`} className="card flex items-center justify-center gap-3 text-center hover:-translate-y-1.5 transition-transform duration-300" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                <Phone size={24} className="text-gold" />
                <span className="font-heading font-semibold text-primary">Call Now</span>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="card flex items-center justify-center gap-3 text-center hover:-translate-y-1.5 transition-transform duration-300" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#25D366"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.2-.349.21-.646.075-.3-.124 1.227-.587 1.355-.765.182-.226.374-.35.626-.393.827-.136 1.573-.055 1.767.363.195.421.748 1.465.748 1.465.374.696-.744 1.572-1.762 1.655-.3.024-.516-.037-.827-.166zm-3.696-6.852c-.663-.663-1.527-1.488-1.763-1.595-.236-.108-.576-.075-.798.075-.223.15-1.374.762-1.677 1.287-.3.523-.3.913-.21 1.053.09.15.247.3.494.523.822.742 1.507 1.185 1.831 1.467.324.282.653.246.886.149.225-.09 1.095-.542 2.088-1.73.993-1.188 1.668-2.155 1.803-2.531.135-.375.135-.823.09-.898-.045-.075-.167-.12-.35-.21z"/></svg>
                <span className="font-heading font-semibold text-primary">WhatsApp Inquiry</span>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <a href={`mailto:${EMAIL}`} className="card flex items-center justify-center gap-3 text-center hover:-translate-y-1.5 transition-transform duration-300" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                <Mail size={24} className="text-gold" />
                <span className="font-heading font-semibold text-primary">Send Email</span>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="card flex items-center justify-center gap-3 text-center hover:-translate-y-1.5 transition-transform duration-300" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                <MapPin size={24} className="text-gold" />
                <span className="font-heading font-semibold text-primary">Get Directions</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ ACCORDION */}
      <section className="section-spacing bg-surface">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Contact FAQ</h2>
            <p className="text-text/70">Common questions about reaching out to us.</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full card flex items-center justify-between text-left hover:-translate-y-0.5 transition-transform duration-300" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                  <span className="font-medium text-primary pr-4">{faq.q}</span>
                  <ChevronDown className={`flex-shrink-0 text-gold transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} size={20} />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                      <p className="text-text/70 p-4 bg-background rounded-b-card">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="section-spacing bg-primary">
        <div className="container-main text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">Ready To Start Your Timber Project?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">Contact Krishna Timber Depot today and let us help you choose the right timber, doors, furniture, frames, and custom woodworking solutions.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${PHONE_NUMBER}`} className="btn-primary flex items-center gap-2 bg-white text-primary hover:bg-gold hover:text-white">
                <Phone size={20} /> Call Now
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-gold flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.2-.349.21-.646.075-.3-.124 1.227-.587 1.355-.765.182-.226.374-.35.626-.393.827-.136 1.573-.055 1.767.363.195.421.748 1.465.748 1.465.374.696-.744 1.572-1.762 1.655-.3.024-.516-.037-.827-.166zm-3.696-6.852c-.663-.663-1.527-1.488-1.763-1.595-.236-.108-.576-.075-.798.075-.223.15-1.374.762-1.677 1.287-.3.523-.3.913-.21 1.053.09.15.247.3.494.523.822.742 1.507 1.185 1.831 1.467.324.282.653.246.886.149.225-.09 1.095-.542 2.088-1.73.993-1.188 1.668-2.155 1.803-2.531.135-.375.135-.823.09-.898-.045-.075-.167-.12-.35-.21z"/></svg>
                WhatsApp Inquiry
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary border-white text-white hover:bg-white hover:text-primary flex items-center gap-2">
                <MapPin size={20} /> Visit Store
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}