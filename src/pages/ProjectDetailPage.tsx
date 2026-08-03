import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowLeft, MapPin, Calendar, Maximize } from 'lucide-react'
import { projects } from '@/data/content'
import { Reveal, MaskImage } from '@/components/animation'
import { ProjectCard } from '@/components/ProjectCard'
import { IMAGES } from '@/data/images'
import { useSEO } from '@/hooks/useSEO'

export function ProjectDetailPage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  useSEO({
    title: project ? `${project.title} — B.B. Costruzioni` : 'Progetto — B.B. Costruzioni',
    description: project ? project.description : 'Un progetto di B.B. Costruzioni S.R.L.',
    image: project?.image,
  })

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-concrete-50 px-6">
        <div className="text-center">
          <p className="label mb-4">— 404</p>
          <h1 className="text-4xl font-700 text-graphite-900 mb-6">Progetto non trovato</h1>
          <Link to="/projects" className="btn-primary">
            <ArrowLeft size={16} />
            Torna ai Progetti
          </Link>
        </div>
      </div>
    )
  }

  const related = projects.filter((p) => p.id !== project.id).slice(0, 2)
  const gallery = project.galleryImages ?? [IMAGES.concreteTexture, IMAGES.geometricFacade]

  return (
    <>
      {/* Hero image */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-graphite-900 mt-0">
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.19, 1, 0.22, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/80 via-graphite-900/20 to-graphite-900/40" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12 h-full flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="inline-block bg-concrete-50/95 backdrop-blur-sm px-4 py-2 text-xs font-semibold tracking-widest uppercase text-graphite-900 mb-6">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-800 tracking-tight text-concrete-50 leading-[0.95]">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Meta bar */}
      <section className="bg-concrete-50 border-b border-concrete-200">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: MapPin, label: 'Ubicazione', value: project.location },
            { icon: Calendar, label: 'Anno', value: project.year },
            { icon: Maximize, label: 'Superficie', value: project.area },
            { icon: ArrowUpRight, label: 'Categoria', value: project.category },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <item.icon size={16} className="text-accent" />
                  <p className="text-xs tracking-widest uppercase text-graphite-500" style={{ letterSpacing: '0.18em' }}>{item.label}</p>
                </div>
                <p className="text-base font-600 text-graphite-900">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="py-24 lg:py-36 bg-concrete-50">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="label mb-6">— Il Progetto</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl lg:text-4xl font-700 tracking-tight text-graphite-900 leading-tight text-balance">
                  {project.title}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal delay={0.1}>
                <p className="text-lg lg:text-xl text-graphite-600 leading-relaxed font-300 mb-10">
                  {project.description}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="border-t border-concrete-200 pt-8">
                  <p className="text-xs tracking-widest uppercase text-graphite-500 mb-4" style={{ letterSpacing: '0.18em' }}>Servizi Forniti</p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span key={service} className="px-4 py-2 bg-concrete-100 text-sm font-500 text-graphite-700">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 lg:pb-36 bg-concrete-50">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {gallery.map((img, index) => (
              <MaskImage 
                key={index} 
                src={img} 
                alt={`Dettaglio progetto ${index + 1}`} 
                className={`bg-graphite-200 ${index === 2 ? 'lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'}`} 
                delay={index * 0.05} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 lg:py-32 bg-concrete-100">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12 lg:mb-16">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-800 tracking-tight text-graphite-900">Altri progetti</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-graphite-900 hover:gap-3 transition-all duration-300"
                style={{ letterSpacing: '0.12em' }}
              >
                Tutti i Progetti
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {related.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-graphite-900">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-800 tracking-tight text-concrete-50 text-balance max-w-3xl mx-auto">
              Hai un progetto con ambizioni simili?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/contact" className="mt-10 btn-outline-light">
              Inizia una Conversazione
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
