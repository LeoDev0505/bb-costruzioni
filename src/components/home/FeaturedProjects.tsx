import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/content'
import { Reveal } from '@/components/animation'

export function FeaturedProjects() {
  const featured = projects.slice(0, 4)

  return (
    <section className="py-24 lg:py-36 bg-concrete-50">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <Reveal>
              <p className="label mb-8">— Progetti Selezionati</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-800 tracking-tight leading-[0.95] text-graphite-900 text-balance">
                Progetti che parlano
                <br />
                <span className="text-graphite-400 font-300">di qualità costruttiva.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Row 1 — Featured hero project, full width */}
        <Reveal>
          <Link to={`/projects/${featured[0].id}`} className="group block relative overflow-hidden aspect-[16/9] lg:aspect-[21/8] bg-graphite-200">
            <img
              src={featured[0].image}
              alt={featured[0].title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/80 via-graphite-900/15 to-transparent transition-opacity duration-500 ease-out-expo group-hover:from-graphite-900/90" />
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-10">
              <div className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-2">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-concrete-200 mb-3" style={{ letterSpacing: '0.2em' }}>
                  {featured[0].category}
                </span>
                <h3 className="text-2xl lg:text-4xl font-700 text-concrete-50 tracking-tight">
                  {featured[0].title}
                </h3>
                <p className="mt-2 text-sm lg:text-base text-concrete-300 font-300">
                  {featured[0].location}
                </p>
              </div>
            </div>
            <div className="absolute top-6 right-6 lg:top-8 lg:right-8 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-concrete-50/10 backdrop-blur-sm border border-concrete-50/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out-expo translate-y-2 group-hover:translate-y-0">
              <ArrowUpRight size={20} className="text-concrete-50" />
            </div>
          </Link>
        </Reveal>

        {/* Row 2 — Three equal projects, 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-8">
          {featured.slice(1, 4).map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <Link to={`/projects/${project.id}`} className="group block relative overflow-hidden aspect-[4/3] bg-graphite-200">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/75 via-graphite-900/10 to-transparent transition-opacity duration-500 ease-out-expo group-hover:from-graphite-900/85" />
                <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                  <div className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-2">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-concrete-200 mb-2" style={{ letterSpacing: '0.2em' }}>
                      {project.category}
                    </span>
                    <h3 className="text-lg lg:text-xl font-700 text-concrete-50 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-concrete-300 font-300">
                      {project.location}
                    </p>
                  </div>
                </div>
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-concrete-50/10 backdrop-blur-sm border border-concrete-50/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out-expo translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={18} className="text-concrete-50" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* CTA — centered premium button */}
        <Reveal delay={0.1}>
          <div className="mt-16 lg:mt-20 flex justify-center">
            <Link to="/projects" className="btn-primary">
              Esplora tutti i progetti
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
