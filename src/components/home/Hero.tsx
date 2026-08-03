import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { IMAGES } from '@/data/images'

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-graphite-900">
      <motion.img
        src={IMAGES.hero}
        alt="Cantiere edile con gru torre"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-graphite-900/70 via-graphite-900/30 to-graphite-900/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite-900/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12 h-full flex flex-col justify-end pb-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-accent" />
          <span className="text-xs font-semibold tracking-widest uppercase text-concrete-100" style={{ letterSpacing: '0.2em' }}>
            Costruzione di edifici residenziali e non residenziali dal 2013
          </span>
        </motion.div>

        <h1 className="text-concrete-50 max-w-5xl">
          <span className="block overflow-hidden">
            <motion.span
              className="block text-5xl md:text-7xl lg:text-8xl font-800 tracking-tight leading-[0.95]"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
            >
              Costruiamo certezze
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-5xl md:text-7xl lg:text-8xl font-300 tracking-tight leading-[0.95] text-concrete-200"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.55 }}
            >
              prima delle strutture.
            </motion.span>
          </span>
        </h1>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.8 }}
          >
            <Link to="/contact" className="btn-outline-light">
              Richiedi una Consulenza
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.9 }}
          >
            <Link to="/projects" className="btn-outline-light">
              Scopri i Nostri Progetti
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 text-concrete-200 text-base max-w-xl font-300 leading-relaxed"
        >
          Esperienza decennale nell'edilizia civile e industriale, qualità ingegneristica e processi costruttivi affidabili per ogni progetto.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-8 right-6 lg:right-12 z-10 flex items-center gap-3 text-concrete-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ letterSpacing: '0.2em' }}>Scorri</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
