import { Link } from 'react-router-dom'
import { ArrowUpRight, Target, Eye, ShieldCheck, HardHat } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Reveal, MaskImage } from '@/components/animation'
import { IMAGES } from '@/data/images'
import { values } from '@/data/content'
import { useSEO } from '@/hooks/useSEO'

export function AboutPage() {
  useSEO({
    title: 'Chi Siamo — B.B. Costruzioni S.R.L. | Imperia',
    description: 'B.B. Costruzioni S.R.L. nasce a Imperia nel 2013 e opera nel settore dell\'edilizia civile e industriale con 19 professionisti specializzati.',
  })
  return (
    <>
      <PageHeader
        overline="— Chi Siamo"
        title={<>Una realtà costruita su<br /><span className="text-graphite-400 font-300">competenza e fiducia.</span></>}
        description="Dal 2013 a Imperia, B.B. Costruzioni S.R.L. opera nel settore dell'edilizia civile e industriale con un approccio che combina rigore tecnico e gestione affidabile del cantiere."
      />

      {/* Story / Image */}
      <section className="pb-24 lg:pb-36 bg-concrete-50">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <MaskImage
            src={IMAGES.craneBW}
            alt="Cantiere edile in bianco e nero"
            className="aspect-[21/9] bg-graphite-200"
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-16 lg:mt-24">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="label mb-6">— La Nostra Storia</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl lg:text-4xl font-700 tracking-tight text-graphite-900 leading-tight text-balance">
                  Nata a Imperia nel 2013, cresciuta con costanza e qualità.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.15}>
                <div className="space-y-6 text-lg text-graphite-600 leading-relaxed font-300">
                  <p>
                    B.B. Costruzioni S.R.L. nasce a Imperia nel 2013 e opera nel settore dell'edilizia
                    civile e industriale. Nel corso degli anni l'azienda è cresciuta fino a diventare
                    una realtà solida e organizzata, composta da 19 professionisti specializzati.
                  </p>
                  <p>
                    Il nostro approccio combina competenza tecnica, ingegneria moderna e rigorosa
                    gestione del cantiere, garantendo precisione nelle consegne, attenzione ai dettagli
                    e standard qualitativi elevati.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 lg:py-36 bg-graphite-900 text-concrete-100">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <Reveal>
              <div className="border-t border-graphite-700 pt-8">
                <Target size={28} className="text-accent mb-6" />
                <h3 className="text-2xl lg:text-3xl font-700 text-concrete-50 tracking-tight mb-4">Missione</h3>
                <p className="text-lg text-concrete-300 leading-relaxed font-300">
                  Realizzare edifici residenziali e non residenziali con competenza tecnica, qualità
                  costruttiva e rispetto delle tempistiche, garantendo al committente certezze e
                  risultati duraturi.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border-t border-graphite-700 pt-8">
                <Eye size={28} className="text-accent mb-6" />
                <h3 className="text-2xl lg:text-3xl font-700 text-concrete-50 tracking-tight mb-4">Visione</h3>
                <p className="text-lg text-concrete-300 leading-relaxed font-300">
                  Essere un punto di riferimento nell'edilizia della Riviera di Ponente, riconosciuti
                  per l'affidabilità, la sicurezza in cantiere e la qualità delle opere realizzate.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-36 bg-concrete-50">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <Reveal>
            <p className="label mb-8">— I Nostri Valori</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-800 tracking-tight leading-[0.95] text-graphite-900 mb-16 lg:mb-24 text-balance max-w-3xl">
              Principi che guidano ogni progetto.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-concrete-200">
            {values.map((value, i) => (
              <Reveal key={value.number} delay={i * 0.08}>
                <div className="bg-concrete-50 p-8 lg:p-10 h-full">
                  <span className="text-accent text-sm font-600 tracking-widest mb-6 block" style={{ letterSpacing: '0.2em' }}>
                    {value.number}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-700 text-graphite-900 tracking-tight mb-4">{value.title}</h3>
                  <p className="text-base text-graphite-600 leading-relaxed font-300">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-24 lg:py-36 bg-concrete-100">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="label mb-8">— Standard</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl lg:text-5xl font-800 tracking-tight leading-[0.95] text-graphite-900 mb-8 text-balance">
                  Sicurezza e qualità, in ogni fase del cantiere.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-lg text-graphite-600 leading-relaxed font-300 mb-10">
                  Operiamo secondo i più rigorosi standard di sicurezza e gestione della qualità. Ogni
                  cantiere è organizzato secondo procedure documentate, ogni materiale è verificato e
                  ogni fase è controllata prima della consegna.
                </p>
              </Reveal>
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: 'Sicurezza in cantiere', text: 'Protocolli di sicurezza rigorosi, formazione continua del personale e monitoraggio quotidiano dei cantieri per proteggere operai e committenti.' },
                  { icon: HardHat, title: 'Qualità costruttiva', text: 'Materiali certificati, tecniche costruttive moderne e controlli qualità a ogni fase. Costruiamo opere pensate per durare nel tempo.' },
                ].map((item, i) => (
                  <Reveal key={i} delay={0.2 + i * 0.1}>
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11 rounded-full bg-graphite-900 text-concrete-50 flex items-center justify-center shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-700 text-graphite-900 mb-1">{item.title}</h3>
                        <p className="text-base text-graphite-600 leading-relaxed font-300">{item.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <MaskImage
                src={IMAGES.scaffolding}
                alt="Ponteggio in cantiere"
                className="aspect-[4/5] bg-graphite-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-graphite-900">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-800 tracking-tight text-concrete-50 text-balance max-w-3xl mx-auto">
              Costruiamo qualcosa che duri nel tempo.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/contact" className="mt-10 btn-outline-light">
              Inizia un Progetto
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
