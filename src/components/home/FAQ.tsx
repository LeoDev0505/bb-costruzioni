import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { faqItems } from '@/data/content'
import { Reveal } from '@/components/animation'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 lg:py-36 bg-concrete-50">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="label mb-8">— Domande Frequenti</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-800 tracking-tight leading-[0.95] text-graphite-900 text-balance">
                Domande
                <br />
                <span className="text-graphite-400 font-300">frequenti.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-graphite-600 leading-relaxed font-300 max-w-sm">
                Non trovi quello che cerchi? Siamo disponibili a rispondere a qualsiasi domanda direttamente.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-graphite-900 hover:gap-3 transition-all duration-300"
                style={{ letterSpacing: '0.12em' }}
              >
                Contattaci
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="divide-y divide-concrete-200 border-y border-concrete-200">
              {faqItems.map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div>
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                      aria-expanded={openIndex === i}
                    >
                      <span className={`text-lg lg:text-xl font-600 tracking-tight transition-colors duration-300 ${openIndex === i ? 'text-graphite-900' : 'text-graphite-700 group-hover:text-graphite-900'}`}>
                        {item.question}
                      </span>
                      <span className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-graphite-900 text-concrete-50' : 'border border-concrete-300 text-graphite-700'}`}>
                        {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-12 text-base lg:text-lg text-graphite-600 leading-relaxed font-300">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
