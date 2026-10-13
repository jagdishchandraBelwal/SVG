import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Trust from './components/Trust'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
