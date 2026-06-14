import { Helmet } from 'react-helmet-async'
import HomeHero from '../components/sections/HomeHero'
import TrustBar from '../components/sections/TrustBar'
import AboutPreview from '../components/sections/AboutPreview'
import TimberCollection from '../components/sections/TimberCollection'
import ProductCollection from '../components/sections/ProductCollection'
import CatalogCollection from '../components/sections/CatalogCollection'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import ServicesGrid from '../components/sections/ServicesGrid'
import ProcessSection from '../components/sections/ProcessSection'
import GalleryPreview from '../components/sections/GalleryPreview'
import Testimonials from '../components/sections/Testimonials'
import FinalCTA from '../components/sections/FinalCTA'

const BUSINESS_DATA = {
  name: 'Krishna Timber Depot',
  description: 'Premium timber & custom wood solutions since 2001. Supplier of Balasha Teak, Imported Teak, Local Teak, doors, frames, furniture, wall panels, and custom wood craftsmanship in Hindupur.',
  url: 'https://krishnatimberdepot.com',
  telephone: '+917416177679',
  telephone2: '+919642867671',
  email: 'shravanntr7@email.com',
  address: {
    streetAddress: 'Parigi Road',
    addressLocality: 'Hindupur',
    postalCode: '515201',
    addressRegion: 'Andhra Pradesh',
    addressCountry: 'IN'
  },
  geo: {
    latitude: '13.8291',
    longitude: '77.4911'
  },
  openingHours: ['Mo-Fr 09:00-19:30'],
  priceRange: '$$',
  foundingDate: '2001',
  foundingLocation: 'Hindupur'
}

const SCHEMA_ORG = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BUSINESS_DATA.name,
  description: BUSINESS_DATA.description,
  url: BUSINESS_DATA.url,
  telephone: BUSINESS_DATA.telephone,
  email: BUSINESS_DATA.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_DATA.address.streetAddress,
    addressLocality: BUSINESS_DATA.address.addressLocality,
    postalCode: BUSINESS_DATA.address.postalCode,
    addressRegion: BUSINESS_DATA.address.addressRegion,
    addressCountry: BUSINESS_DATA.address.addressCountry
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS_DATA.geo.latitude,
    longitude: BUSINESS_DATA.geo.longitude
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:30'
  },
  priceRange: BUSINESS_DATA.priceRange,
  foundingDate: BUSINESS_DATA.foundingDate,
  foundingLocation: BUSINESS_DATA.foundingLocation,
  areaServed: ['Hindupur', 'Anantapur District', 'Karnataka'],
  serviceType: ['Timber Supply', 'Door Manufacturing', 'Frame Manufacturing', 'Furniture Manufacturing', 'Wood Carving']
}

const SCHEMA_LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_DATA.name,
  description: BUSINESS_DATA.description,
  url: BUSINESS_DATA.url,
  telephone: BUSINESS_DATA.telephone,
  email: BUSINESS_DATA.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_DATA.address.streetAddress,
    addressLocality: BUSINESS_DATA.address.addressLocality,
    postalCode: BUSINESS_DATA.address.postalCode,
    addressRegion: BUSINESS_DATA.address.addressRegion,
    addressCountry: BUSINESS_DATA.address.addressCountry
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS_DATA.geo.latitude,
    longitude: BUSINESS_DATA.geo.longitude
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:30'
  },
  priceRange: BUSINESS_DATA.priceRange,
  foundingDate: BUSINESS_DATA.foundingDate
}

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What timber types do you supply?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We supply 7 premium timber types including Balasha Teak, Imported Teak, Local Teak, Ponna, Mathi, Jali, and Neem.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer custom woodwork services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer custom woodwork including door manufacturing, frame manufacturing, furniture, wall panels, wood carving, and wood cutting services.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where is Krishna Timber Depot located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are located on Parigi Road, Hindupur - 515201, Andhra Pradesh.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are your business hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are open Monday through Saturday from 9:00 AM to 7:30 PM.'
      }
    }
  ]
}

export default function Home() {
  const schemaJson = JSON.stringify([SCHEMA_ORG, SCHEMA_LOCAL_BUSINESS, SCHEMA_FAQ])

  return (
    <>
      <Helmet>
        <title>Krishna Timber Depot | Premium Timber, Doors & Furniture in Hindupur</title>
        <meta name="description" content="Krishna Timber Depot provides premium timber, doors, frames, furniture, wall panels, and custom wood solutions in Hindupur since 2001." />
        <meta name="keywords" content="timber, wood, teak, doors, frames, furniture, wood carving, Hindupur, Andhra Pradesh, Balasha Teak, door manufacturer, furniture maker" />
        <meta property="og:title" content="Krishna Timber Depot | Premium Timber, Doors & Furniture in Hindupur" />
        <meta property="og:description" content="Krishna Timber Depot provides premium timber, doors, frames, furniture, wall panels, and custom wood solutions in Hindupur since 2001." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krishnatimberdepot.com" />
        <meta property="og:site_name" content="Krishna Timber Depot" />
        <link rel="canonical" href="https://krishnatimberdepot.com" />
        <script type="application/ld+json">{schemaJson}</script>
      </Helmet>

      <HomeHero />
      <TrustBar />
      <AboutPreview />
      <TimberCollection />
      <ProductCollection />
      <CatalogCollection />
      <WhyChooseUs />
      <ServicesGrid />
      <ProcessSection />
      <GalleryPreview />
      <Testimonials />
      <FinalCTA />
    </>
  )
}