import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import { IMAGES } from '@/data/images'
import { useSEO } from '@/hooks/useSEO'

export function NotFoundPage() {
  useSEO({
    title: '404 — Pagina Non Trovata | B.B. Costruzioni',
    description: 'La pagina che cerchi non esiste o è stata spostata.',
  })
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-graphite-900">
      <div className="absolute inset-0">
        <img
          src={IMAGES.abstractFacade}
          alt="Facciata architettonica astratta"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-900/80 to-graphite-900/95" />
      </div>

      <div className="relative z-10 text-center px-6">
        <p className="label mb-6">— Errore 404</p>
        <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-800 tracking-tight text-concrete-50 leading-none mb-8">
          404
        </h1>
        <p className="text-xl lg:text-2xl text-concrete-300 font-300 max-w-md mx-auto mb-12 text-balance">
          La pagina che cerchi non esiste — o è stata spostata.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-outline-light">
            <Home size={16} />
            Torna alla Home
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase text-concrete-300 hover:text-concrete-50 transition-colors"
            style={{ letterSpacing: '0.12em' }}
          >
            <ArrowLeft size={16} />
            Vedi i Progetti
          </Link>
        </div>
      </div>
    </section>
  )
}
