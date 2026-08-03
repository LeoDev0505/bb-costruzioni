import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Mail, Clock, Phone, Send, Check } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/animation'
import { useSEO } from '@/hooks/useSEO'

export function ContactPage() {
  useSEO({
    title: 'Contatti — B.B. Costruzioni S.R.L. | Imperia',
    description: 'Contatta B.B. Costruzioni S.R.L. per progetti di edilizia residenziale, industriale e commerciale a Imperia e in Liguria.',
  })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })

  // Funzione per codificare i dati nel formato standard che Netlify richiede via AJAX
  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Invio effettivo a Netlify in background senza ricaricare la pagina
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contatto-progetto', ...form }),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <PageHeader
        overline="— Contatti"
        title={<>Iniziamo una<br /><span className="text-graphite-400 font-300">conversazione.</span></>}
        description="Raccontaci del tuo progetto, del tuo sito e delle tue tempistiche. Rispondiamo a ogni richiesta entro due giorni lavorativi."
      />

      <section className="pb-24 lg:pb-36 bg-concrete-50">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <p className="label mb-8">— Richiesta Progetto</p>
              </Reveal>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-concrete-200 bg-concrete-100 p-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-graphite-900 text-concrete-50 flex items-center justify-center mx-auto mb-6">
                      <Check size={28} />
                    </div>
                    <h3 className="text-2xl font-700 text-graphite-900 mb-3">Grazie.</h3>
                    <p className="text-graphite-600 font-300 max-w-md mx-auto">
                      La tua richiesta è stata ricevuta. Un membro del nostro team ti contatterà entro due giorni lavorativi.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    name="contatto-progetto"
                    method="POST"
                    data-netlify="true"
                    className="space-y-8"
                  >
                    {/* Input nascosto obbligatorio per Netlify */}
                    <input type="hidden" name="form-name" value="contatto-progetto" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="name" className="block text-xs tracking-widest uppercase text-graphite-500 mb-3" style={{ letterSpacing: '0.18em' }}>
                          Nome e Cognome *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-concrete-300 py-3 text-base text-graphite-900 focus:border-graphite-900 outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs tracking-widest uppercase text-graphite-500 mb-3" style={{ letterSpacing: '0.18em' }}>
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value[...]{/* trimmed for brevity */}
                          value={form.email}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-concrete-300 py-3 text-base text-graphite-900 focus:border-graphite-900 outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-graphite-500 mb-3" style={{ letterSpacing: '0.18em' }}>
                          Telefono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-concrete-300 py-3 text-base text-graphite-900 focus:border-graphite-900 outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-xs tracking-widest uppercase text-graphite-500 mb-3" style={{ letterSpacing: '0.18em' }}>
                          Tipo di Progetto
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={form.projectType}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-concrete-300 py-3 text-base text-graphite-900 focus:border-graphite-900 outline-none transition-colors"
                        >
                          <option value="">Seleziona un tipo</option>
                          <option value="residenziale">Edilizia Residenziale</option>
                          <option value="industriale">Edilizia Industriale</option>
                          <option value="commerciale">Edilizia Commerciale</option>
                          <option value="ristrutturazione">Ristrutturazione</option>
                          <option value="manutenzione">Manutenzione</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs tracking-widest uppercase text-graphite-500 mb-3" style={{ letterSpacing: '0.18em' }}>
                        Raccontaci del tuo progetto *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-concrete-300 py-3 text-base text-graphite-900 focus:border-graphite-900 outline-none transition-colors resize-none"
                      />
                    </div>
                    <button type="submit" className="btn-primary">
                      Invia Richiesta
                      <Send size={16} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.15}>
                <div className="space-y-8">
                  <div className="border-t border-concrete-200 pt-8">
                    <div className="flex items-start gap-4">
                      <MapPin size={20} className="text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs tracking-widest uppercase text-graphite-500 mb-1" style={{ letterSpacing: '0.18em' }}>Sede</p>
                        <p className="text-graphite-800">Strada Privata Villaggio Verde 3<br />18100 Imperia (IM), Italia</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-concrete-200 pt-8">
                    <div className="flex items-start gap-4">
                      <Mail size={20} className="text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs tracking-widest uppercase text-graphite-500 mb-1" style={{ letterSpacing: '0.18em' }}>Email</p>
                        <a href="mailto:costruzionibb@pec.it" className="text-graphite-800 hover:text-graphite-900 transition-colors">costruzionibb@pec.it</a>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-concrete-200 pt-8">
                    <div className="flex items-start gap-4">
                      <Phone size={20} className="text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs tracking-widest uppercase text-graphite-500 mb-1" style={{ letterSpacing: '0.18em' }}>Telefono</p>
                        <a href="tel:+390183123456" className="text-graphite-800 hover:text-graphite-900 transition-colors">+39 0183 123 456</a>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-concrete-200 pt-8">
                    <div className="flex items-start gap-4">
                      <Clock size={20} className="text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs tracking-widest uppercase text-graphite-500 mb-1" style={{ letterSpacing: '0.18em' }}>Orari</p>
                        <p className="text-graphite-800">Lunedì — Venerdì<br />8:00 — 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Real Google Map */}
          <Reveal delay={0.1}>
            <div className="mt-20 relative overflow-hidden aspect-[16/7] bg-graphite-200 border border-concrete-200 shadow-sm">
              <iframe
                title="Mappa Sede B.B. Costruzioni"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.3582455079717!2d8.0315!3d43.8864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2722b51555555%3A0x0!2sStrada%20Privata%20Villaggio%20Verde%2C%203%2C%2018100%20Imperia%20IM!5e0!3m2!1sit!2sit!4v1650000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
