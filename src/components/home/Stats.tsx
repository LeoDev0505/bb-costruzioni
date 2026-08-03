import { stats } from '@/data/content'
import { useCountUp, useInView } from '@/hooks/useScroll'
import { Reveal } from '@/components/animation'

function StatItem({ stat, index }: { stat: typeof stats[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const isTextStat = stat.value === '0' && stat.description
  const numericValue = parseFloat(stat.value)
  const animated = useCountUp(numericValue, 2000, inView)
  const hasDecimal = stat.value.includes('.')
  const displayValue = isTextStat ? '' : hasDecimal ? animated.toFixed(1) : Math.round(animated).toString()

  return (
    <Reveal delay={index * 0.1}>
      <div ref={ref} className="border-t border-concrete-200 pt-8">
        {isTextStat ? (
          <>
            <p className="text-2xl lg:text-3xl font-800 tracking-tight text-graphite-900 mb-4">
              {stat.label}
            </p>
            <p className="text-base lg:text-lg text-graphite-600 leading-relaxed font-300">
              {stat.description}
            </p>
          </>
        ) : (
          <>
            <p className="text-5xl lg:text-7xl font-800 tracking-tight text-graphite-900 tabular-nums">
              {displayValue}
              <span className="text-accent">{stat.suffix}</span>
            </p>
            <p className="mt-4 text-sm lg:text-base text-graphite-500 font-300">{stat.label}</p>
          </>
        )}
      </div>
    </Reveal>
  )
}

export function Stats() {
  return (
    <section className="py-24 lg:py-32 bg-concrete-50">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
