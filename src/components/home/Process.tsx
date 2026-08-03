import { motion } from 'framer-motion'
import { processSteps } from '@/data/content'
import { IMAGES } from '@/data/images'
import { Reveal } from '@/components/animation'

export function Process() {
  return (
    <section className="py-24 lg:py-36 bg-concrete-100">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-24">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="label mb-8">— Il Processo Costruttivo</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-800 tracking-tight leading-[0.95] text-graphite-900 text-balance">
                Un percorso strutturato,
                <br />
                <span className="text-graphite-400 font-300">dal sopralluogo alla consegna.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.15}>
              <p className="text-lg text-graphite-600 leading-relaxed font-300">
                Ogni progetto segue un processo collaudato in oltre dieci anni di attività. Cinque fasi,
                ciascuna con deliverable chiari e un unico referente — per trasformare un'idea in un'opera
                reale senza imprevisti.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-px bg-concrete-300" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-[52px] h-[52px] rounded-full bg-graphite-900 text-concrete-50 flex items-center justify-center text-sm font-700 z-10">
                      {step.number}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="lg:hidden flex-1 h-px bg-concrete-300" />
                    )}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-700 text-graphite-900 tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm lg:text-base text-graphite-600 leading-relaxed font-300">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 relative overflow-hidden aspect-[16/7] bg-graphite-200">
            <motion.img
              src={IMAGES.blueprint}
              alt="Progetto edilizio con planimetria"
              loading="lazy"
              className="h-full w-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
