import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Mail, Clock, Phone } from 'lucide-react'
import { IMAGES } from '@/data/images'
import { Reveal } from '@/components/animation'

export function FinalCTA() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden bg-graphite-900">
      <div className="absolute inset-0">
        <img
          src={IMAGES.contact}
          alt="Cantiere edile al tramonto"
          loading="lazy"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-900/80 via-graphite-900/70 to-graphite-900/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label mb-8">— Iniziamo</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-800 tracking-tight leading-[0.95] text-concrete-50 text-balance">
                Ogni struttura
                <br />
                <span className="text-concrete-400 font-300">inizia con una conversazione.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 text-lg text-concrete-300 max-w-xl leading-relaxed font-300">
                Raccontaci del tuo progetto, del tuo sito e delle tue tempistiche. Porteremo la competenza
                tecnica, l'organizzazione e la precisione per realizzarlo.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-outline-light">
                  Richiedi una Consulenza
                  <ArrowUpRight size={16} />
                </Link>
                <a href="mailto:costruzionibb@pec.it" className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase text-concrete-300 hover:text-concrete-50 transition-colors" style={{ letterSpacing: '0.12em' }}>
                  <Mail size={16} />
                  costruzionibb@pec.it
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.2}>
              <div className="border-t border-graphite-700 pt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-concrete-500 mb-1" style={{ letterSpacing: '0.18em' }}>Sede</p>
                    <p className="text-concrete-200">Strada Privata Villaggio Verde 3<br />18100 Imperia (IM), Italia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-concrete-500 mb-1" style={{ letterSpacing: '0.18em' }}>Email</p>
                    <a href="mailto:costruzionibb@pec.it" className="text-concrete-200 hover:text-concrete-50 transition-colors">costruzionibb@pec.it</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-concrete-500 mb-1" style={{ letterSpacing: '0.18em' }}>Telefono</p>
                    <a href="tel:+390183123456" className="text-concrete-200 hover:text-concrete-50 transition-colors">+39 0183 881017</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-concrete-500 mb-1" style={{ letterSpacing: '0.18em' }}>Orari</p>
                    <p className="text-concrete-200">Lun — Ven, 8:00 — 18:00</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
