import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { IMAGES } from '@/data/images'
import { Reveal, MaskImage } from '@/components/animation'

export function Intro() {
  return (
    <section className="py-24 lg:py-36 bg-concrete-50">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <p className="label mb-8">— L'Azienda</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-300 tracking-tight leading-[1.15] text-graphite-900 text-balance">
                Una realtà solida e organata che opera nell'edilizia{' '}
                <span className="font-700">civile e industriale</span> con competenza e continuità.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-graphite-900 hover:gap-3 transition-all duration-300"
                style={{ letterSpacing: '0.12em' }}
              >
                La Nostra Storia
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-7">
            <Reveal delay={0.15}>
              <p className="text-lg lg:text-xl text-graphite-600 leading-relaxed font-300 max-w-xl">
                B.B. Costruzioni S.R.L. nasce a Imperia nel 2013 e opera nel settore dell'edilizia civile
                e industriale. Nel corso degli anni l'azienda è cresciuta fino a diventare una realtà
                solida e organizzata, combinando competenza tecnica, ingegneria moderna e rigorosa
                gestione del cantiere.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <MaskImage
                src={IMAGES.intro}
                alt="Cantiere con gru torre"
                className="aspect-[3/4] bg-graphite-200"
              />
              <MaskImage
                src="/images/cantiere.jpg"
                alt="Struttura in calcestruzzo"
                className="aspect-[3/4] bg-graphite-200 mt-12"
                delay={0.15}
              />
            </div>

            <Reveal delay={0.1}>
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-concrete-200 pt-10">
                {[
                  { value: '13+', label: 'Anni di esperienza' },
                  { value: '19', label: 'Professionisti' },
                  { value: '2013', label: 'Fondata a Imperia' },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-3xl lg:text-4xl font-700 text-graphite-900 tracking-tight">{item.value}</p>
                    <p className="mt-2 text-sm text-graphite-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
