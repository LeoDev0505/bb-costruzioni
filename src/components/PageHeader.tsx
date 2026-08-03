import { type ReactNode } from 'react'
import { Reveal } from './animation'

interface PageHeaderProps {
  overline: string
  title: ReactNode
  description?: string
}

export function PageHeader({ overline, title, description }: PageHeaderProps) {
  return (
    <section className="pt-40 pb-20 lg:pt-52 lg:pb-28 bg-concrete-50">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal>
          <p className="label mb-8">{overline}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-800 tracking-tight leading-[0.95] text-graphite-900 max-w-5xl text-balance">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.2}>
            <p className="mt-10 text-lg lg:text-xl text-graphite-600 max-w-2xl leading-relaxed font-300">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
