import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, Check, MessageCircle, MapPin, Star, Award, Users, Package, Hammer, DoorOpen, Sofa, Building2, Clock, Shield, ThumbsUp, FileText, Truck, MapPinned, Phone } from 'lucide-react'

const WHATSAPP_NUMBER = '917416177679'

const trustMetrics = [
  { value: '24+', label: 'Years Experience', sublabel: 'Serving Hindupur Since 2001' },
  { value: '200+', label: 'Projects Completed', sublabel: 'Residential & Commercial' },
  { value: '7', label: 'Premium Timber Types', sublabel: 'Curated Quality Selection' },
  { value: '100%', label: 'Custom Manufacturing', sublabel: 'Built To Requirement' }
]

const expertiseCards = [
  { title: 'Premium Timber', icon: Package, description: 'Sourced from the finest forests worldwide, our timber collection represents unmatched quality and durability.' },
  { title: 'Custom Doors', icon: DoorOpen, description: 'Handcrafted doors tailored to your specifications, combining security with timeless elegance.' },
  { title: 'Furniture Manufacturing', icon: Sofa, description: 'Bespoke furniture pieces designed and crafted to complement your home or office interior.' },
  { title: 'Architectural Woodwork', icon: Building2, description: 'Intricate architectural elements crafted by skilled artisans for grand projects.' }
]

const credibilityBlocks = [
  { title: 'Since 2001', description: 'Over two decades of trusted service in the timber industry, building lasting relationships with our community.', icon: Clock },
  { title: 'Premium Timber Selection', description: 'We source only the finest timber varieties, ensuring superior quality in every piece we supply.', icon: Award },
  { title: 'Custom Manufacturing', description: 'Our skilled craftsmen transform your vision into reality with precision and attention to detail.', icon: Hammer },
  { title: 'Skilled Craftsmanship', description: 'Decades of combined expertise ensure every project receives the highest quality craftsmanship.', icon: ThumbsUp },
  { title: 'Reliable Delivery', description: 'We ensure timely delivery of all orders, whether local or across the region.', icon: Truck },
  { title: 'Customer Satisfaction', description: 'Our commitment to excellence has earned us the trust of thousands of satisfied customers.', icon: Users }
]

const workflow = [
  { step: '01', title: 'Consultation', description: 'We discuss your requirements to understand your vision and provide expert guidance.' },
  { step: '02', title: 'Material Selection', description: 'Choose from our premium timber collection with our expert recommendations.' },
  { step: '03', title: 'Craftsmanship', description: 'Our skilled artisans craft your custom pieces with precision and care.' },
  { step: '04', title: 'Quality Inspection', description: 'Every piece undergoes rigorous quality checks before delivery.' },
  { step: '05', title: 'Delivery', description: 'Your custom timber products are delivered safely to your location.' }
]

const industries = [
  { title: 'Residential Homes', icon: Building2, description: 'Premium timber solutions for private residences' },
  { title: 'Apartments', icon: Building2, description: 'Multi-unit residential projects' },
  { title: 'Commercial Buildings', icon: Building2, description: 'Office spaces & retail outlets' },
  { title: 'Hotels', icon: Building2, description: 'Hospitality industry woodwork' },
  { title: 'Retail Spaces', icon: Building2, description: 'Shops & showrooms' },
  { title: 'Builders & Contractors', icon: Hammer, description: 'B2B timber supply' }
]

const faqItems = [
  { question: 'When was Krishna Timber Depot established?', answer: 'Krishna Timber Depot was established in 2001, serving the Hindupur region with premium timber and wood solutions for over 24 years.' },
  { question: 'What timber types do you offer?', answer: 'We offer 7 premium timber types including Balasha Teak, Imported Teak, Local Teak, Ponna, Mathi, Jali, and Neem - each selected for specific applications.' },
  { question: 'Do you manufacture custom products?', answer: 'Yes, we specialize in custom manufacturing including doors, furniture, frames, windows, wall panels, and wood carving - all tailored to your specifications.' },
  { question: 'Do you serve commercial projects?', answer: 'Absolutely. We handle projects of all sizes, from individual homeowners to large commercial constructions and architectural projects.' },
  { question: 'Can I request custom designs?', answer: 'Yes, our skilled craftsmen can bring your custom design concepts to life. Simply share your requirements and we will deliver exactly what you envision.' },
  { question: 'Do you provide delivery services?', answer: 'Yes, we provide reliable delivery services for all our products across the region. Contact us to discuss delivery options for your location.' }
]

export default function About() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <Helmet>
        <title>About Krishna Timber Depot | Premium Timber & Wood Solutions Since 2001</title>
        <meta name="description" content="Learn about Krishna Timber Depot, Hindupur's trusted timber and custom wood solutions provider since 2001. Premium timber, custom doors, furniture, frames, and craftsmanship." />
        <meta property="og:title" content="About Krishna Timber Depot | Premium Timber & Wood Solutions Since 2001" />
        <meta property="og:description" content="Discover over 24 years of expertise in premium timber supply and custom woodcrafting in Hindupur." />
        <link rel="canonical" href="https://krishnatimberdepot.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Krishna Timber Depot",
            "description": "Premium timber supplier and custom woodwork specialist serving Hindupur since 2001."
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Krishna Timber Depot",
            "url": "https://krishnatimberdepot.com",
            "logo": "https://krishnatimberdepot.com/favicon.svg",
            "foundingDate": "2001",
            "areaServed": { "@type": "City", "name": "Hindupur" },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Parigi Road",
              "addressLocality": "Hindupur",
              "postalCode": "515201",
              "addressRegion": "Andhra Pradesh",
              "addressCountry": "IN"
            },
            "telephone": "+91-7416177679"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Krishna Timber Depot",
            "image": "https://krishnatimberdepot.com/favicon.svg",
            "priceRange": "$$",
            "openingHours": "Mon-Sat 09:00-19:30",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Parigi Road",
              "addressLocality": "Hindupur",
              "postalCode": "515201",
              "addressRegion": "Andhra Pradesh",
              "addressCountry": "IN"
            },
            "telephone": "+91-7416177679"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": { "@type": "Answer", "text": item.answer }
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://krishnatimberdepot.com" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://krishnatimberdepot.com/about" }
            ]
          })}
        </script>
      </Helmet>

      {/* SECTION 1 - PREMIUM HERO */}
      <section className="relative min-h-[55vh] md:min-h-[70vh] flex items-center" style={{ background: 'linear-gradient(135deg, #1a120e 0%, #2B1D15 50%, #1a120e 100%)' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("/assets/images/timber-stack.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(20,15,10,0.72)' }} />

        <div className="container-main relative z-10 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm font-medium mb-6">
                ESTABLISHED IN 2001
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                <span className="text-gold">24 Years</span> Of Crafting{' '}
                <span className="bg-gradient-to-r from-gold via-[#d4a54a] to-gold bg-clip-text text-transparent">Premium Wood Solutions</span>
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-xl leading-relaxed">
                From premium timber sourcing to custom doors, furniture, frames, and architectural woodwork, Krishna Timber Depot has helped homeowners, builders, and businesses create timeless spaces for more than two decades.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="/products" className="inline-flex items-center justify-center gap-2 font-semibold text-base rounded-2xl transition-all duration-300 ease-out" style={{ background: '#B88A44', color: 'white', height: '56px', padding: '0 28px' }}>
                  Explore Products <ArrowRight size={18} />
                </a>
                <a href="/contact" className="inline-flex items-center justify-center gap-2 font-semibold text-base rounded-2xl transition-all duration-300 ease-out" style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.35)', color: 'white', height: '56px', padding: '0 28px', backdropFilter: 'blur(10px)' }}>
                  Contact Us
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {trustMetrics.slice(0, 3).map((stat, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm rounded-[16px] p-4 text-center border border-white/10">
                    <div className="text-xl md:text-2xl font-heading font-bold text-gold">{stat.value}</div>
                    <div className="text-white/60 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/10 rounded-[32px] blur-xl" />
                <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl">
                  <img src="/assets/images/hero-workshop.jpg" alt="Premium Workshop" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - OUR STORY */}
      <section className="section-spacing bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-[32px]" />
                <div className="relative aspect-[16/10] rounded-[28px] overflow-hidden shadow-xl">
                  <img src="/assets/images/showcase-door.jpg" alt="Krishna Timber Depot workshop" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="inline-block px-3 py-1 bg-gold text-white text-sm rounded-full">Since 2001</span>
                    <span className="ml-2 text-white/80 text-sm">Trusted Timber Partner</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-[20px] px-5 py-4 shadow-lg border border-gold/20">
                  <div className="text-3xl font-heading font-bold text-gold">24+</div>
                  <div className="text-text/60 text-sm">Years</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                A Legacy Of Quality Craftsmanship
              </h2>
              <div className="space-y-4 text-text/80 leading-[1.9] max-w-[650px]">
                <p>Established in 2001, Krishna Timber Depot began with a vision to provide premium timber solutions to the Hindupur region and beyond.</p>
                <p>Over the years, we have grown from a trusted timber supplier to a comprehensive woodwork company, serving homeowners, architects, and builders with excellence.</p>
                <p>Our commitment to quality craftsmanship and customer satisfaction has built long-term relationships with thousands of clients across the region.</p>
              </div>
              <a href="/products" className="inline-flex items-center justify-center gap-2 font-semibold text-base rounded-2xl transition-all duration-300 ease-out" style={{ background: '#B88A44', color: 'white', height: '56px', padding: '0 28px', marginTop: '32px' }}>
                View Products <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - TRUST & ACHIEVEMENT METRICS */}
      <section className="section-spacing" style={{ backgroundColor: '#2B1D15' }}>
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {trustMetrics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-md rounded-[24px] p-6 md:p-8 text-center border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-white/90 text-base font-medium mb-1">{stat.label}</div>
                <div className="text-white/50 text-sm">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - OUR EXPERTISE */}
      <section className="section-spacing bg-surface">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Expertise</h2>
            <p className="text-text/60 max-w-2xl mx-auto">Specialized wood solutions crafted with precision and experience.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-background rounded-[24px] p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-[16px] flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <card.icon size={28} className="text-gold group-hover:text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">{card.title}</h3>
                <p className="text-text/60 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - WHY CUSTOMERS TRUST US */}
      <section className="section-spacing bg-background">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Why Customers Trust Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {credibilityBlocks.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-surface rounded-[24px] p-8 relative overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
                <div className="w-12 h-12 bg-gold/10 rounded-[12px] flex items-center justify-center mb-4">
                  <block.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">{block.title}</h3>
                <p className="text-text/60 leading-relaxed">{block.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - OUR WORKFLOW */}
      <section className="section-spacing bg-surface">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Workflow</h2>
            <p className="text-text/60">From consultation to delivery, we ensure excellence at every step</p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute top-8 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="grid grid-cols-5 gap-4 relative">
              {workflow.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="bg-gold text-white w-16 h-16 rounded-full flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4 relative z-10 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-text/60 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-4">
            {workflow.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-background rounded-[20px] p-5"
              >
                <div className="bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold flex-shrink-0">{item.step}</div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-primary mb-1">{item.title}</h3>
                  <p className="text-text/60 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - INDUSTRIES WE SERVE */}
      <section className="section-spacing bg-background">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Industries We Serve</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-surface rounded-[24px] p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary rounded-[12px] flex items-center justify-center mb-4">
                  <industry.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-1">{industry.title}</h3>
                <p className="text-text/60 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - CRAFTSMANSHIP SHOWCASE */}
      <section className="section-spacing bg-surface">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-xl">
                <img src="/assets/images/gallery-furniture.jpg" alt="Craftsmanship showcase" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Crafted With Precision & Experience</h2>

              <div className="space-y-3 mb-8">
                {['Premium Timber Selection', 'Precision Cutting', 'Custom Manufacturing', 'Skilled Finishing', 'Quality Assurance'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center">
                      <Check size={14} className="text-gold" />
                    </div>
                    <span className="text-text/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{ value: '24+', label: 'Years' }, { value: '200+', label: 'Projects' }, { value: '100%', label: 'Custom Work' }].map((stat) => (
                  <div key={stat.label} className="bg-background rounded-[16px] p-4 text-center">
                    <div className="font-heading text-xl font-bold text-gold">{stat.value}</div>
                    <div className="text-text/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a href="/contact" className="inline-flex items-center justify-center gap-2 font-semibold text-base rounded-2xl transition-all duration-300 ease-out" style={{ background: '#B88A44', color: 'white', height: '56px', padding: '0 28px' }}>
                Get A Free Consultation <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 9 - WHY KRISHNA TIMBER DEPOT */}
      <section className="section-spacing bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-xl">
                <img src="/assets/images/timber-stack.jpg" alt="Premium Timber" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">Why Choose Krishna Timber Depot?</h2>

              <div className="space-y-4">
                {[
                  { title: 'Others', items: ['Generic Timber', 'Limited Choices', 'No Customization', 'Inconsistent Quality'] },
                  { title: 'Krishna Timber Depot', items: ['7 Premium Timber Types', 'Custom Manufacturing', '24+ Years Experience', 'Quality Assurance'], highlight: true }
                ].map((comparison, i) => (
                  <div key={i} className={`rounded-[20px] p-5 ${comparison.highlight ? 'bg-primary text-white' : 'bg-surface'}`}>
                    <h3 className={`font-heading font-semibold mb-3 ${comparison.highlight ? 'text-gold' : 'text-primary'}`}>{comparison.title}</h3>
                    <ul className="space-y-2">
                      {comparison.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          {comparison.highlight ? <Check size={14} className="text-gold" /> : <span className="w-1.5 h-1.5 bg-text/30 rounded-full" />}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 10 - FAQ */}
      <section className="section-spacing bg-surface">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-[24px] overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="w-full px-6 py-5 flex items-center justify-between text-left">
                  <span className="font-heading font-semibold text-primary pr-4">{faq.question}</span>
                  <ChevronDown size={20} className={`text-gold flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <div className="px-6 pb-5 text-text/70">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 - FINAL CTA */}
      <section
        className="section-spacing relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(43, 29, 21, 0.92), rgba(107, 74, 50, 0.88)), url('/assets/images/hero-workshop.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">Let's Build Something Timeless</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10">Partner with Krishna Timber Depot for premium timber, custom doors, furniture, frames, wall panels, and expert wood craftsmanship solutions.</p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <a href="/products" className="inline-flex items-center justify-center gap-2 font-semibold text-base rounded-2xl transition-all duration-300 ease-out" style={{ background: '#B88A44', color: 'white', height: '56px', padding: '0 28px', minWidth: '220px' }}>
                Explore Products <ArrowRight size={18} />
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-semibold text-base rounded-2xl transition-all duration-300 ease-out" style={{ background: '#25D366', color: 'white', height: '56px', padding: '0 28px', minWidth: '220px' }}>
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <a href="https://maps.app.goo.gl/TCYp992f2P8f7incA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-semibold text-base rounded-2xl transition-all duration-300 ease-out" style={{ background: 'transparent', border: '1.5px solid #B88A44', color: 'white', height: '56px', padding: '0 28px', minWidth: '220px' }}>
                <MapPin size={18} /> Visit Showroom
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}