import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { type Project } from '@/data/content'
import { Reveal } from './animation'

interface ProjectCardProps {
  project: Project
  index: number
  large?: boolean
}

export function ProjectCard({ project, index, large = false }: ProjectCardProps) {
  return (
    <Reveal delay={(index % 3) * 0.1} className={large ? 'lg:col-span-2' : ''}>
      <Link to={`/projects/${project.id}`} className="group block">
        <div className="relative overflow-hidden image-hover aspect-[4/3] bg-graphite-200">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-5 left-5">
            <span className="inline-block bg-concrete-50/95 backdrop-blur-sm px-4 py-2 text-xs font-semibold tracking-widest uppercase text-graphite-900">
              {project.category}
            </span>
          </div>
          <div className="absolute bottom-5 right-5 w-12 h-12 bg-concrete-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out-expo">
            <ArrowUpRight size={20} className="text-graphite-900" />
          </div>
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-700 text-graphite-900 tracking-tight">{project.title}</h3>
            <p className="mt-2 text-sm text-graphite-500">{project.location} — {project.year}</p>
          </div>
          <span className="text-sm text-graphite-400 mt-1">{String(index + 1).padStart(2, '0')}</span>
        </div>
      </Link>
    </Reveal>
  )
}
