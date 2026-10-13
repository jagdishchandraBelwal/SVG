import { useState, useEffect } from 'react'

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#why-us' },
    { name: 'Partner with Us', href: '#cta' },
    { name: 'Careers', href: '#cta' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-white'
      }`}
    >
      {/* Top alert bar */}
      <div className="bg-brand-700 text-white text-xs sm:text-sm text-center py-1.5 px-4">
        Please engage only with official SVG channels. Beware of fraudulent messages.
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              SVG
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-brand-700 text-lg leading-tight block">SVG Express</span>
              <span className="text-xs text-gray-500 -mt-0.5 block">Services Pvt. Ltd.</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#track"
              className="text-sm font-medium text-brand-600 hover:text-brand-700 px-3 py-2"
            >
              Track Shipment
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="#track"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center px-4 py-3 text-brand-600 font-medium border border-brand-200 rounded-lg"
              >
                Track Shipment
              </a>
              <a
                href="#cta"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center px-4 py-3 bg-brand-500 text-white font-semibold rounded-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
