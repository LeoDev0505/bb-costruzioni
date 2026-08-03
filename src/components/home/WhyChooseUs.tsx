import { values } from '@/data/content'
import { IMAGES } from '@/data/images'
import { Reveal, MaskImage } from '@/components/animation'

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-36 bg-concrete-100">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-24">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="label mb-8">— Perché B.B. Costruzioni</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-800 tracking-tight leading-[0.95] text-graphite-900 text-balance">
                Quattro principi,
                <br />
                <span className="text-graphite-400 font-300">applicati senza eccezioni.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.15}>
              <p className="text-lg text-graphite-600 leading-relaxed font-300">
                I nostri principi non sono marketing — sono standard operativi. Ogni cantiere, ogni squadra,
                ogni decisione è misurata rispetto a questi valori. Sono il motivo per cui i committenti
                tornano e le opere durano.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-concrete-200">
            {values.map((value, i) => (
              <Reveal key={value.number} delay={i * 0.08}>
                <div className="bg-concrete-100 p-8 lg:p-10 h-full flex flex-col">
                  <span className="text-accent text-sm font-600 tracking-widest mb-6" style={{ letterSpacing: '0.2em' }}>
                    {value.number}
                  </span>
                  <h3 className="text-2xl font-700 text-graphite-900 tracking-tight mb-4">{value.title}</h3>
                  <p className="text-base text-graphite-600 leading-relaxed font-300">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-5">
            <MaskImage
              src="/images/affidabilita.jpg"
              alt="Dettaglio architettonico scalinata in calcestruzzo"
              className="aspect-[4/5] bg-graphite-200 h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
