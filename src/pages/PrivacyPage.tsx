import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/animation'
import { useSEO } from '@/hooks/useSEO'

const sections = [
  {
    title: 'Informazioni che Raccogliamo',
    body: 'Raccogliamo le informazioni che ci fornite direttamente — come nome, indirizzo email, numero di telefono e dettagli del progetto quando inviate una richiesta tramite il nostro modulo di contatto. Raccogliamo anche dati analitici limitati sull\'utilizzo del sito web da parte dei visitatori.',
  },
  {
    title: 'Come Utilizziamo le Vostre Informazioni',
    body: 'Utilizziamo le informazioni fornite per rispondere alle vostre richieste, per fornire informazioni sui nostri servizi e per comunicare riguardo a progetti potenziali o in corso. Non vendiamo, affittiamo o condividiamo le vostre informazioni personali con terze parti per scopi di marketing.',
  },
  {
    title: 'Sicurezza dei Dati',
    body: 'Implementiamo misure tecniche e organizzative adeguate per proteggere le vostre informazioni personali contro accessi non autorizzati, alterazioni, divulgazione o distruzione. L\'accesso ai dati personali è limitato al personale autorizzato che ne ha bisogno per rispondere alla vostra richiesta.',
  },
  {
    title: 'Cookie',
    body: 'Il nostro sito web può utilizzare cookie e tecnologie simili per migliorare l\'esperienza di navigazione e per comprendere come il sito viene utilizzato. Potete controllare i cookie tramite le impostazioni del browser, sebbene la disattivazione possa influire su alcune funzionalità del sito.',
  },
  {
    title: 'I Vostri Diritti',
    body: 'Avete il diritto di richiedere l\'accesso alle informazioni personali che deteniamo su di voi, di richiederne la correzione o l\'eliminazione, e di disiscrivervi da future comunicazioni in qualsiasi momento. Per esercitare questi diritti, contattateci all\'indirizzo costruzionibb@pec.it.',
  },
  {
    title: 'Modifiche a Questa Policy',
    body: 'Possiamo aggiornare questa informativa sulla privacy di tanto in tanto per riflettere cambiamenti nelle nostre pratiche o nei requisiti legali. Pubblicheremo la policy aggiornata su questa pagina e aggiorneremo la data indicata di seguito.',
  },
]

export function PrivacyPage() {
  useSEO({
    title: 'Privacy Policy — B.B. Costruzioni S.R.L.',
    description: 'Informativa sulla privacy di B.B. Costruzioni S.R.L. Come raccogliamo, utilizziamo e proteggiamo le vostre informazioni personali.',
  })
  return (
    <>
      <PageHeader
        overline="— Legale"
        title={<>Privacy<br /><span className="text-graphite-400 font-300">Policy.</span></>}
        description="La vostra privacy è importante per noi. Questa informativa spiega quali informazioni raccogliamo, come le utilizziamo e quali scelte avete a disposizione."
      />

      <section className="pb-24 lg:pb-36 bg-concrete-50">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-sm text-graphite-500">Ultimo aggiornamento: Agosto 2026</p>
              </Reveal>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <div className="space-y-12">
                {sections.map((section, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <div>
                      <h2 className="text-xl lg:text-2xl font-700 text-graphite-900 tracking-tight mb-4">
                        {section.title}
                      </h2>
                      <p className="text-base lg:text-lg text-graphite-600 leading-relaxed font-300">
                        {section.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
                <Reveal delay={0.1}>
                  <div className="border-t border-concrete-200 pt-8">
                    <p className="text-base text-graphite-600 leading-relaxed font-300">
                      Per qualsiasi domanda su questa informativa sulla privacy, contattateci all'indirizzo{' '}
                      <a href="mailto:costruzionibb@pec.it" className="text-graphite-900 font-600 underline underline-offset-4 hover:text-accent transition-colors">
                        costruzionibb@pec.it
                      </a>.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
