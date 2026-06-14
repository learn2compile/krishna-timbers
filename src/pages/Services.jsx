import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, Phone, MapPin, Check, ChevronDown, ArrowRight } from 'lucide-react'

const WHATSAPP_NUMBER = '917416177679'
const PHONE_NUMBER = '917416177679'

const ANIMATION_FADE_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 }
}

const PREMIUM_STATS = [
  { value: '23+', label: 'Years of Excellence' },
  { value: '7', label: 'Premium Timber Types' },
  { value: '100%', label: 'Quality Assured' },
  { value: 'Custom', label: 'Wood Manufacturing' }
]

const SERVICE_BADGES = [
  'Premium Service',
  'Custom Manufacturing',
  'Expert Craftsmanship',
  'Custom Manufacturing',
  'Premium Service',
  'Expert Craftsmanship',
  'Custom Manufacturing',
  'Premium Service'
]

const CORE_SERVICES = [
  {
    id: 'timber-supply',
    name: 'Premium Timber Supply',
    description: 'Sourcing and supplying 7 premium timber types including Balasha Teak, Imported Teak, and Local Teak for all construction needs.',
    benefit: '7 Premium Timber Types',
    image: 'Premium Timber',
    buttonText: 'View Timber Collection',
    destination: '/products#timber'
  },
  {
    id: 'door-manufacturing',
    name: 'Custom Door Manufacturing',
    description: 'Bespoke door manufacturing in modern, traditional, carved, and designer styles with premium finishes and hardware.',
    benefit: 'Premium Craftsmanship',
    image: 'Door Manufacturing',
    buttonText: 'Explore Door Designs',
    destination: '/products#doors'
  },
  {
    id: 'door-frames',
    name: 'Door & Window Frames',
    description: 'High-quality door frames and window frames, weather-resistant with precise fit and custom sizing.',
    benefit: 'Precise Fit & Durability',
    image: 'Frame Collection',
    buttonText: 'View Frame Collection',
    destination: '/products#frames'
  },
  {
    id: 'furniture',
    name: 'Custom Furniture',
    description: 'Bespoke furniture including tables, beds, wardrobes, and cabinets crafted by skilled artisans.',
    benefit: 'Skilled Craftsmanship',
    image: 'Custom Furniture',
    buttonText: 'Browse Furniture',
    destination: '/products#furniture'
  },
  {
    id: 'wall-panels',
    name: 'Decorative Wall Panels',
    description: 'Transform interiors with decorative wood panels, carved panels, and custom designs for feature walls.',
    benefit: 'Custom Patterns',
    image: 'Wall Panels',
    buttonText: 'Explore Panel Designs',
    destination: '/products#wall-panels'
  },
  {
    id: 'architectural',
    name: 'Architectural Woodwork',
    description: 'Custom architectural woodwork for residential and commercial projects including moldings, decking, and more.',
    benefit: 'Professional Finishing',
    image: 'Architectural Work',
    buttonText: 'View Project Gallery',
    destination: '/gallery'
  },
  {
    id: 'wood-carving',
    name: 'Wood Carving',
    description: 'Intricate traditional carvings featuring classical motifs and floral patterns by expert artisans.',
    benefit: 'Traditional Motifs',
    image: 'Wood Carving',
    buttonText: 'View Design Gallery',
    destination: '/gallery'
  },
  {
    id: 'wood-cutting',
    name: 'Wood Cutting & Planning',
    description: 'Precision wood cutting and planning services using modern equipment for accurate dimensions.',
    benefit: 'Precision Accuracy',
    image: 'Wood Cutting',
    buttonText: 'Request Consultation',
    destination: 'whatsapp'
  }
]

const SHOWCASE_STATS = [
  { value: '23+', label: 'Years Experience' },
  { value: '500+', label: 'Completed Projects' },
  { value: '100%', label: 'Custom Solutions' }
]

const PROCESS_STEPS = [
  { number: '01', title: 'Consultation', description: 'Understanding your requirements and project goals.' },
  { number: '02', title: 'Design Discussion', description: 'Reviewing concepts, measurements, and design preferences.' },
  { number: '03', title: 'Material Selection', description: 'Choosing the right timber, finish, and specifications.' },
  { number: '04', title: 'Manufacturing', description: 'Precision production by experienced craftsmen.' },
  { number: '05', title: 'Quality Inspection', description: 'Comprehensive quality checks before finishing.' },
  { number: '06', title: 'Finishing', description: 'Sanding, polishing, coating, and detailing.' },
  { number: '07', title: 'Delivery', description: 'Safe transportation and project coordination.' },
  { number: '08', title: 'Project Completion', description: 'Final review and successful handover.' }
]

const INDUSTRIES = [
  { id: 'residential', name: 'Residential Homes', description: 'Custom timber solutions for villas, bungalows, and individual houses.' },
  { id: 'apartments', name: 'Apartments', description: 'Quality doors, frames, and furniture for modern apartments.' },
  { id: 'commercial', name: 'Commercial Buildings', description: 'Wood solutions for offices, complexes, and commercial spaces.' },
  { id: 'hotels', name: 'Hotels', description: 'Premium woodwork for hotels, resorts, and hospitality venues.' },
  { id: 'retail', name: 'Retail Spaces', description: 'Custom displays, fixtures, and woodwork for retail stores.' },
  { id: 'designers', name: 'Interior Designers', description: 'Partnership for premium wood solutions in design projects.' },
  { id: 'builders', name: 'Builders & Contractors', description: 'Bulk timber supply and woodwork for construction projects.' },
  { id: 'architects', name: 'Architectural Projects', description: 'Custom architectural woodwork for innovative designs.' }
]

const WHY_CHOOSE_US = [
  { title: 'Since 2001', description: 'Over 23 years of experience in timber and wood craftsmanship.', highlight: '23+ Years Experience' },
  { title: 'Premium Timber', description: '7 types of quality timber sourced from trusted suppliers.', highlight: 'Premium Timber Selection' },
  { title: 'Custom Manufacturing', description: 'Bespoke solutions tailored to your requirements.', highlight: 'Custom Excellence' },
  { title: 'Experienced Team', description: 'Skilled artisans with generations of expertise.', highlight: 'Expert Craftsmanship' },
  { title: 'Trusted Quality', description: 'Consistent quality in every product delivered.', highlight: 'Quality Assured' },
  { title: 'Customer Satisfaction', description: 'Committed to exceeding your expectations.', highlight: 'Client Focused' }
]

const FAQ_QUESTIONS = [
  {
    id: 'custom-doors',
    question: 'Do you provide custom door designs?',
    answer: 'Yes, we provide fully customized door manufacturing. Our expert craftsmen create doors in modern, traditional, carved, and designer styles tailored to your specifications. You can choose from our premium timber collection and customize the size, design, finish, and hardware.'
  },
  {
    id: 'timber-selection',
    question: 'Can I choose the timber type?',
    answer: 'Absolutely. We offer 7 premium timber types including Balasha Teak, Imported Teak, Local Teak, Ponna, Mathi, Jali, and Neem. Our team will help you select the right timber based on your application, budget, and aesthetic preferences.'
  },
  {
    id: 'custom-furniture',
    question: 'Do you manufacture custom furniture?',
    answer: 'Yes, we specialize in custom furniture manufacturing including dining tables, coffee tables, beds, wardrobes, cabinets, and more. Our skilled artisans craft each piece to your exact specifications using premium timber and quality hardware.'
  },
  {
    id: 'delivery',
    question: 'Do you provide delivery services?',
    answer: 'Yes, we provide professional delivery services across Hindupur and surrounding regions. We ensure safe packaging and transportation for all our products. Delivery timelines vary based on the project complexity and quantity.'
  },
  {
    id: 'quotation',
    question: 'Can I request a quotation?',
    answer: 'Yes, you can request a free quotation by calling us, WhatsApp message, or visiting our store. We provide detailed quotations based on your requirements including material costs, labor, and delivery.'
  },
  {
    id: 'commercial',
    question: 'Do you handle commercial projects?',
    answer: 'Yes, we handle projects of all sizes including commercial buildings, hotels, retail spaces, and large-scale construction projects. Our team has the expertise and capacity to deliver bulk orders with consistent quality.'
  }
]

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  const scrollToCta = () => {
    const element = document.getElementById('final-cta')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = (message = 'Hello Krishna Timber Depot, I am interested in your services. Please share more details.') => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <>
      <Helmet>
        <title>Services | Krishna Timber Depot</title>
        <meta name="description" content="Explore timber supply, custom doors, frames, furniture, wall panels, wood carving, and custom woodworking services from Krishna Timber Depot." />
        <meta name="keywords" content="timber services, door manufacturing, custom furniture, wood carving, wall panels, Hindupur, Andhra Pradesh" />
        <meta property="og:title" content="Services | Krishna Timber Depot" />
        <meta property="og:description" content="Explore timber supply, custom doors, frames, furniture, wall panels, wood carving, and custom woodworking services from Krishna Timber Depot." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krishnatimberdepot.com/services" />
        <meta property="og:site_name" content="Krishna Timber Depot" />
        <link rel="canonical" href="https://krishnatimberdepot.com/services" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Krishna Timber Depot Services",
          "description": "Timber supply, custom door manufacturing, furniture, wall panels, wood carving, and custom woodworking services.",
          "provider": {
            "@type": "Organization",
            "name": "Krishna Timber Depot",
            "url": "https://krishnatimberdepot.com"
          },
          "areaServed": ["Hindupur", "Anantapur District", "Karnataka"],
          "serviceType": ["Timber Supply", "Door Manufacturing", "Furniture Manufacturing", "Wood Carving", "Wall Panels", "Architectural Woodwork"]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://krishnatimberdepot.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://krishnatimberdepot.com/services" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQ_QUESTIONS.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}</script>
      </Helmet>

      {/* PAGE HERO - 55-60vh */}
      <section className="relative min-h-[60vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70 z-10" />
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/assets/images/hero-workshop.jpg)' }} />
        </div>
        <div className="container-main relative z-20 pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center"
          >
            <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-sm font-medium rounded-full mb-4">
              Premium Wood Solutions
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
              Crafting Premium Wood Solutions Since <span className="text-gold">2001</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
              From timber supply and custom doors to furniture, wall panels, and architectural woodwork, Krishna Timber Depot delivers quality craftsmanship for homes and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={scrollToCta} className="btn-gold inline-flex items-center justify-center gap-2">
                Request Consultation
              </button>
              <button onClick={() => openWhatsApp('Hello, I am interested in your services. Please share more details.')} className="btn-secondary border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center gap-2">
                <MessageCircle size={20} /> WhatsApp Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - TRUST & EXPERTISE */}
      <section className="bg-surface -mt-8 relative z-30">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {PREMIUM_STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative p-6 text-center hover:-translate-y-1 transition-all duration-300"
                style={{ boxShadow: '0 10px 30px rgba(184,138,68,0.12)' }}
              >
                {i < PREMIUM_STATS.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gold/20" />
                )}
                <div className="font-heading text-4xl md:text-5xl font-bold text-gold mb-1">{stat.value}</div>
                <div className="font-body text-sm text-text/60 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - CORE SERVICES - UPGRADED */}
      <section className="py-20 md:py-28 bg-background" style={{ borderTop: '1px solid rgba(184,138,68,0.12)' }}>
        <div className="container-main">
          <motion.div {...ANIMATION_FADE_UP} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">Our Core Services</h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
              Comprehensive wood solutions tailored to your needs, from timber supply to custom manufacturing.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="group cursor-pointer transition-all duration-500 bg-surface rounded-[24px] overflow-hidden hover:-translate-y-2"
                style={{
                  boxShadow: '0 25px 60px rgba(0,0,0,0.12)',
                  minHeight: '480px'
                }}
              >
                {/* Image Area - 40% */}
                <div className="relative h-[40%] bg-primary/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-primary/10 to-transparent group-hover:scale-110 transition-transform duration-700">
                    <span className="font-heading text-3xl text-wood/15">{service.image}</span>
                  </div>
                  <div className="absolute inset-0 bg-wood/0 group-hover:bg-wood/10 transition-colors duration-300" />
                  {/* Service Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs px-3 py-1.5 bg-gold text-white font-medium rounded-full">
                      {SERVICE_BADGES[index]}
                    </span>
                  </div>
                </div>

                {/* Content Area - 60% */}
                <div className="p-8 flex flex-col h-[60%]">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-3">{service.name}</h3>
                  {/* Gold Divider */}
                  <div className="w-12 h-0.5 bg-gold mb-4" />
                  <p className="text-sm text-text/70 mb-6 flex-grow">{service.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs px-2 py-1 bg-gold/10 text-gold rounded font-medium">{service.benefit}</span>
                    {service.destination === 'whatsapp' ? (
                      <button
                        onClick={() => openWhatsApp('Hello Krishna Timber Depot,\n\nI would like to discuss my project requirements and get a consultation.\nPlease contact me.')}
                        className="text-wood text-sm flex items-center gap-1 transition-all duration-300 hover:translate-x-1 group-hover:text-gold"
                      >
                        {service.buttonText} <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    ) : (
                      <Link
                        to={service.destination}
                        className="text-wood text-sm flex items-center gap-1 transition-all duration-300 hover:translate-x-1 group-hover:text-gold"
                      >
                        {service.buttonText} <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - OUR PROCESS */}
      <section className="py-20 md:py-28 bg-surface" style={{ borderTop: '1px solid rgba(184,138,68,0.12)', marginTop: '80px', paddingTop: '80px' }}>
        <div className="container-main">
          <motion.div {...ANIMATION_FADE_UP} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">Our Process</h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
              A systematic approach ensuring quality and professionalism in every project.
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gold/20" />
              <div className="grid grid-cols-8 gap-2">
                {PROCESS_STEPS.map((step, i) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center relative"
                  >
                    <div className="w-16 h-16 mx-auto bg-surface border-2 border-gold/30 rounded-full flex items-center justify-center relative z-10 group hover:border-gold hover:shadow-lg transition-all duration-300">
                      <span className="font-heading text-xl font-bold text-gold">{step.number}</span>
                    </div>
                    <h3 className="font-heading text-base font-semibold text-primary mt-4">{step.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Premium Stacked Cards */}
          <div className="lg:hidden">
            <div className="space-y-4">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-surface rounded-[18px] p-5 md:p-6 hover:-translate-y-1 transition-all duration-300"
                  style={{
                    boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(184,138,68,0.12)'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-[52px] h-[52px] rounded-full border-2 border-gold flex items-center justify-center flex-shrink-0">
                      <span className="font-heading text-lg font-bold text-gold">{step.number}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-xl md:text-[22px] font-semibold text-primary leading-tight mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-text/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - CUSTOM MANUFACTURING SHOWCASE - STRENGTHENED */}
      <section className="py-20 md:py-28 bg-background" style={{ borderTop: '1px solid rgba(184,138,68,0.12)', marginTop: '80px', paddingTop: '80px' }}>
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Enhanced Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-[24px] overflow-hidden min-h-[500px]"
              style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-wood/20" />
              <div className="absolute inset-0 bg-primary/40" />
              <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                <span className="font-heading text-4xl text-white/80 text-center">Custom Wood Solutions For Every Requirement</span>
              </div>
            </motion.div>

            {/* Right Side - Enhanced Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">Tailored Wood Solutions For Every Requirement</h2>
              <p className="text-text/70 text-lg mb-6">We provide customized timber, doors, frames, furniture, wall panels, and decorative woodwork tailored to your project needs.</p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  'Custom Sizes',
                  'Custom Designs',
                  'Premium Timber Selection',
                  'Skilled Craftsmanship',
                  'Professional Finishing',
                  'Reliable Delivery'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={18} className="text-gold flex-shrink-0" />
                    <span className="text-sm text-text/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Premium Stats Row */}
              <div className="flex gap-5 mb-8">
                {SHOWCASE_STATS.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-surface rounded-[16px] p-5 flex-1 text-center"
                    style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}
                  >
                    <div className="font-heading text-2xl md:text-3xl font-bold text-gold mb-1">{stat.value}</div>
                    <div className="text-xs text-text/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={scrollToCta} className="btn-gold inline-flex items-center justify-center gap-2">
                  Get Free Consultation
                </button>
                <button onClick={() => openWhatsApp('Hello, I am interested in custom wood solutions. Please share more details.')} className="btn-secondary inline-flex items-center justify-center gap-2">
                  <MessageCircle size={20} /> WhatsApp Inquiry
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - INDUSTRIES WE SERVE */}
      <section className="py-20 md:py-28 bg-surface" style={{ borderTop: '1px solid rgba(184,138,68,0.12)', marginTop: '80px', paddingTop: '80px' }}>
        <div className="container-main">
          <motion.div {...ANIMATION_FADE_UP} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">Industries We Serve</h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
              Quality wood solutions for diverse industries and project requirements.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="card group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <h3 className="font-heading text-lg font-semibold text-primary mb-2 group-hover:text-wood transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-text/70">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - WHY CHOOSE KRISHNA TIMBER DEPOT - REDESIGNED */}
      <section className="py-20 md:py-28 bg-primary" style={{ borderTop: '1px solid rgba(184,138,68,0.12)', marginTop: '80px', paddingTop: '80px' }}>
        <div className="container-main">
          <motion.div {...ANIMATION_FADE_UP} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-4">Why Choose Krishna Timber Depot</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Experience the difference of working with experts since 2001.
            </p>
          </motion.div>

          {/* 3 Premium Feature Blocks - Top Row */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {WHY_CHOOSE_US.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-surface/5 rounded-[20px] p-8 hover:bg-surface/10 hover:-translate-y-1.5 transition-all duration-300 min-h-[180px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'
                }}
              >
                <div className="absolute top-0 left-8 w-16 h-0.5 bg-gold" />
                <h3 className="font-heading text-xl font-semibold text-white mb-3 mt-2">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* 3 Premium Feature Blocks - Bottom Row */}
          <div className="grid md:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.slice(3, 6).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-surface/5 rounded-[20px] p-8 hover:bg-surface/10 hover:-translate-y-1.5 transition-all duration-300 min-h-[180px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'
                }}
              >
                <div className="absolute top-0 left-8 w-16 h-0.5 bg-gold" />
                <h3 className="font-heading text-xl font-semibold text-white mb-3 mt-2">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - FAQ SECTION */}
      <section className="py-20 md:py-28 bg-background" style={{ borderTop: '1px solid rgba(184,138,68,0.12)', marginTop: '80px', paddingTop: '80px' }}>
        <div className="container-main">
          <motion.div {...ANIMATION_FADE_UP} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
              Get answers to common questions about our services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_QUESTIONS.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between gap-4 text-left p-0 bg-transparent cursor-pointer min-h-[48px]"
                >
                  <span className="font-heading text-base font-semibold text-primary">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-wood flex-shrink-0 transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 text-text/70">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - FINAL CTA - FIXED */}
      <section id="final-cta" className="py-20 md:py-28 bg-wood relative overflow-hidden" style={{ borderTop: '1px solid rgba(184,138,68,0.12)', marginTop: '80px', paddingTop: '80px' }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/assets/images/hero-workshop.jpg)' }} />
          <div className="absolute inset-0 bg-wood/90" />
        </div>
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
              Let's Create Something Timeless Together
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              From premium timber selection to custom-crafted doors, furniture, frames, and architectural woodwork, our team is ready to bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="btn-gold inline-flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Phone size={20} /> Call Now
              </a>
              <button
                onClick={() => openWhatsApp('Hello Krishna Timber Depot, I am interested in your services. Please share more details.')}
                className="btn-secondary border-white text-white hover:bg-white hover:text-wood inline-flex items-center justify-center gap-2 min-h-[48px]"
              >
                <MessageCircle size={20} /> WhatsApp Inquiry
              </button>
              <a
                href="https://maps.app.goo.gl/TCYp992f2P8f7incA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-primary text-white hover:bg-primary/80 inline-flex items-center justify-center gap-2 min-h-[48px]"
              >
                <MapPin size={20} /> Visit Store
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}