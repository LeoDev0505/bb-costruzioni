import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/content'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="B.B. Costruzioni home">
      <svg width="32" height="32" viewBox="0 0 36 36" className="shrink-0">
        <rect width="36" height="36" rx="4" fill={light ? '#F5F3EF' : '#1A1A1A'} />
        <text
          x="18"
          y="24"
          textAnchor="middle"
          fontSize="14"
          fontWeight="800"
          fill={light ? '#1A1A1A' : '#F5F3EF'}
          fontFamily="Manrope, sans-serif"
          letterSpacing="0.02em"
        >
          BB
        </text>
      </svg>
      <span
        className={`text-base font-700 tracking-tight transition-colors duration-300 leading-none ${
          light ? 'text-concrete-50' : 'text-graphite-900'
        }`}
      >
        B.B. Costruzioni
      </span>
    </Link>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isLight = !scrolled && location.pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
          scrolled
            ? 'bg-concrete-50/90 backdrop-blur-md border-b border-concrete-200/60 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 flex items-center justify-between">
          <Logo light={isLight} />

          <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link transition-colors duration-300 ${
                    isLight ? 'text-concrete-50' : 'text-graphite-700'
                  } ${isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={`btn-primary !py-3 !px-6 text-xs ${
                isLight ? '!bg-concrete-50 !text-graphite-900 hover:!bg-concrete-200' : ''
              }`}
            >
              Richiedi una Consulenza
            </Link>
          </div>

          <button
            className={`lg:hidden ${isLight ? 'text-concrete-50' : 'text-graphite-900'}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Apri menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-graphite-900 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-between px-6 py-6">
              <Logo light />
              <button
                className="text-concrete-50"
                onClick={() => setMenuOpen(false)}
                aria-label="Chiudi menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col px-6 mt-12 gap-2" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                >
                  <Link
                    to={link.to}
                    className="block py-5 text-4xl font-700 text-concrete-50 border-b border-graphite-700"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8"
              >
                <Link to="/contact" className="btn-outline-light w-full justify-center">
                  Richiedi una Consulenza
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
