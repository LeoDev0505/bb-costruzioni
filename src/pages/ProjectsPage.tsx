import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHeader } from '@/components/PageHeader'
import { ProjectCard } from '@/components/ProjectCard'
import { projects, projectCategories } from '@/data/content'
import { Reveal } from '@/components/animation'
import { useSEO } from '@/hooks/useSEO'

export function ProjectsPage() {
  useSEO({
    title: 'Progetti — B.B. Costruzioni S.R.L. | Imperia',
    description: 'Portfolio di progetti di edilizia residenziale, industriale, commerciale e ristrutturazioni realizzati da B.B. Costruzioni a Imperia e in Liguria.',
  })
  const [activeCategory, setActiveCategory] = useState('Tutti')

  const filtered = activeCategory === 'Tutti'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <PageHeader
        overline="— Progetti"
        title={<>Progetti selezionati<br /><span className="text-graphite-400 font-300">in Liguria.</span></>}
        description="Una selezione di progetti di edilizia residenziale, industriale, commerciale e ristrutturazioni — ciascuno realizzato con qualità costruttiva, competenza tecnica e attenzione ai dettagli."
      />

      <section className="pb-24 lg:pb-36 bg-concrete-50">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          {/* Filter bar */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-16 lg:mb-20 border-b border-concrete-200 pb-8">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 text-sm font-semibold tracking-widest uppercase transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-graphite-900 text-concrete-50'
                      : 'text-graphite-600 hover:text-graphite-900 hover:bg-concrete-100'
                  }`}
                  style={{ letterSpacing: '0.12em' }}
                >
                  {category}
                </button>
              ))}
              <span className="ml-auto text-sm text-graphite-500">
                {filtered.length} {filtered.length === 1 ? 'progetto' : 'progetti'}
              </span>
            </div>
          </Reveal>

          {/* Masonry-style grid */}
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                >
                  <ProjectCard project={project} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  )
}
