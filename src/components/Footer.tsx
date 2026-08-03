import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Mail, Phone, Clock } from 'lucide-react'
import { Logo } from './Navbar'

const footerNav = [
  { label: 'Chi Siamo', to: '/about' },
  { label: 'Servizi', to: '/services' },
  { label: 'Progetti', to: '/projects' },
  { label: 'Contatti', to: '/contact' },
]

const footerLegal = [
  { label: 'Privacy Policy', to: '/privacy' },
]

export function Footer() {
  return (
    <footer className="bg-graphite-900 text-concrete-300 pt-24 pb-10">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-20 border-b border-graphite-700">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-8 text-2xl lg:text-3xl font-300 text-concrete-100 leading-tight max-w-md text-balance">
              Costruiamo certezze prima delle strutture. Edilizia civile e industriale dal 2013.
            </p>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 text-accent hover:gap-3 transition-all duration-300 text-sm tracking-widest uppercase font-semibold">
              Richiedi una Consulenza
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="overline text-concrete-500 mb-6">Navigazione</p>
            <ul className="space-y-4">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-concrete-300 hover:text-concrete-50 transition-colors duration-300 text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="overline text-concrete-500 mb-6">Contatti</p>
            <ul className="space-y-4 text-concrete-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-accent shrink-0" />
                <span>Strada Privata Villaggio Verde 3<br />18100 Imperia (IM), Italia</span>
              </li>
              <li>
                <a href="mailto:costruzionibb@pec.it" className="flex items-center gap-3 hover:text-concrete-50 transition-colors">
                  <Mail size={18} className="text-accent shrink-0" />
                  costruzionibb@pec.it
                </a>
              </li>
              <li>
                <a href="tel:+390183123456" className="flex items-center gap-3 hover:text-concrete-50 transition-colors">
                  <Phone size={18} className="text-accent shrink-0" />
                  +39 0183 881017
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-accent shrink-0" />
                <span>Lun — Ven, 8:00 — 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10">
          <div className="space-y-2">
            <p className="text-sm text-concrete-500">
              © {new Date().getFullYear()} B.B. Costruzioni S.R.L. Tutti i diritti riservati.
            </p>
            <p className="text-xs text-concrete-600 leading-relaxed">
              P.IVA/C.F. 01576500084 | REA IM-138092 | Cap. Soc. € 45.000,00 i.v.
            </p>
          </div>
          <div className="flex items-center gap-8">
            {footerLegal.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-concrete-500 hover:text-concrete-200 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
