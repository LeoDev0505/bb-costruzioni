import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/data/content'
import { Reveal } from '@/components/animation'

export function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 lg:py-36 bg-graphite-900 text-concrete-100 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal>
          <p className="label mb-12">— Dicono di Noi</p>
        </Reveal>

        <div className="relative min-h-[340px] lg:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="max-w-5xl"
            >
              <p className="text-2xl md:text-4xl lg:text-5xl font-300 leading-[1.25] text-concrete-50 tracking-tight text-balance">
                «{testimonials[active].quote}»
              </p>
              <footer className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-accent" />
                <div>
                  <p className="text-base font-600 text-concrete-50">{testimonials[active].author}</p>
                  <p className="text-sm text-concrete-400 mt-1">
                    {testimonials[active].title}, {testimonials[active].company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-16 flex items-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="group py-2"
              aria-label={`Mostra testimonianza ${i + 1}`}
            >
              <span
                className={`block h-px transition-all duration-500 ease-out-expo ${
                  active === i ? 'w-16 bg-accent' : 'w-8 bg-graphite-600 group-hover:bg-graphite-500'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
