import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Reveal, MaskImage } from '@/components/animation'
import { services, processSteps } from '@/data/content'
import { useSEO } from '@/hooks/useSEO'

export function ServicesPage() {
  useSEO({
    title: 'Servizi — B.B. Costruzioni S.R.L. | Imperia',
    description: 'Edilizia residenziale, edilizia industriale e commerciale, ristrutturazioni e manutenzioni. Tre aree di intervento, un unico standard qualitativo.',
  })
  return (
    <>
      <PageHeader
        overline="— Servizi"
        title={<>Tre aree di intervento,<br /><span className="text-graphite-400 font-300">un unico standard.</span></>}
        description="Dalla nuova costruzione alla ristrutturazione, i nostri servizi condividono uno stesso standard di qualità costruttiva, sicurezza in cantiere e affidabilità nelle consegne."
      />

      {/* Services list with alternating layout */}
      <section className="pb-24 lg:pb-36 bg-concrete-50">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="space-y-24 lg:space-y-36">
            {services.map((service, i) => (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2 lg:col-start-7' : ''}`}>
                  <MaskImage
                    src={service.image}
                    alt={service.title}
                    className="aspect-[4/3] bg-graphite-200"
                  />
                </div>
                <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1 lg:col-start-1' : ''}`}>
                  <Reveal>
                    <span className="text-accent text-sm font-600 tracking-widest mb-6 block" style={{ letterSpacing: '0.2em' }}>
                      {service.number}
                    </span>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <h2 className="text-3xl lg:text-5xl font-800 tracking-tight text-graphite-900 mb-6 text-balance">
                      {service.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="text-lg text-graphite-600 leading-relaxed font-300 mb-8">
                      {service.description}
                    </p>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <ul className="space-y-3 mb-10">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-graphite-700">
                          <span className="w-5 h-5 rounded-full bg-graphite-900 text-concrete-50 flex items-center justify-center shrink-0">
                            <Check size={12} />
                          </span>
                          <span className="text-base font-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-graphite-900 hover:gap-3 transition-all duration-300"
                      style={{ letterSpacing: '0.12em' }}
                    >
                      Richiedi Informazioni
                      <ArrowUpRight size={16} />
                    </Link>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process reference */}
      <section className="py-24 lg:py-36 bg-graphite-900 text-concrete-100">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="mb-16 lg:mb-24 max-w-2xl">
            <Reveal>
              <p className="label mb-8">— Come Lavoriamo</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-800 tracking-tight leading-[0.95] text-concrete-50 text-balance">
                Un processo collaudato, ogni volta.
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="border-t border-graphite-700 pt-6">
                  <span className="text-accent text-sm font-600 tracking-widest block mb-3" style={{ letterSpacing: '0.2em' }}>
                    {step.number}
                  </span>
                  <h3 className="text-xl font-700 text-concrete-50 tracking-tight mb-3">{step.title}</h3>
                  <p className="text-sm text-concrete-400 leading-relaxed font-300">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
