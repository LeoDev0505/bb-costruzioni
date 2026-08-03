import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/data/content'
import { Reveal } from '@/components/animation'

export function FeaturedServices() {
  return (
    <section className="py-24 lg:py-36 bg-graphite-900 text-concrete-100">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <Reveal>
              <p className="label mb-8">— I Nostri Servizi</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-800 tracking-tight leading-[0.95] text-concrete-50 text-balance">
                Tre aree di intervento,
                <br />
                <span className="text-concrete-400 font-300">un unico standard qualitativo.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-accent hover:gap-3 transition-all duration-300"
              style={{ letterSpacing: '0.12em' }}
            >
              Tutti i Servizi
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="divide-y divide-graphite-700">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.05}>
              <Link
                to="/services"
                className="group grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 items-center hover:bg-graphite-800/40 transition-colors duration-500 -mx-4 lg:-mx-8 px-4 lg:px-8"
              >
                <span className="col-span-2 lg:col-span-1 text-accent text-sm font-600 tracking-widest">
                  {service.number}
                </span>
                <h3 className="col-span-10 lg:col-span-4 text-2xl lg:text-4xl font-700 tracking-tight text-concrete-50 group-hover:text-accent transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="col-span-12 lg:col-span-5 text-concrete-400 text-base lg:text-lg font-300 leading-relaxed lg:px-4">
                  {service.tagline}
                </p>
                <div className="col-span-12 lg:col-span-2 flex justify-start lg:justify-end">
                  <span className="w-10 h-10 rounded-full border border-graphite-600 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-graphite-900 transition-all duration-500">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
