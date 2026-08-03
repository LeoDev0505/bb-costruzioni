export interface Project {
  id: string
  title: string
  category: string
  location: string
  year: string
  image: string
  galleryImages?: string[]
  description: string
  area: string
  services: string[]
}

export const projects: Project[] = [
  {
    id: 'residenza-villa-verde',
    title: 'Residenza Villa Verde',
    category: 'Residenziale',
    location: 'Imperia, Liguria',
    year: '2023',
    image: '/images/villaverde.jpg',
      galleryImages: [
      '/images/verde1.avif',
      '/images/verde2.avif',
      '/images/verde3.jpg', 
    ],
    description: 'Realizzazione di una villa unifamiliare contemporanea con struttura in calcestruzzo armato e facciate a cappotto. Il progetto integra soluzioni bioclimatiche e materiali durevoli, garantendo efficienza energetica e comfort abitativo in contesto mediterraneo.',
    area: '320 m²',
    services: ['Edilizia Residenziale', 'Strutture in Cemento Armato'],
  },
  {
    id: 'complesso-residenziale-aurora',
    title: 'Complesso Aurora',
    category: 'Residenziale',
    location: 'Sanremo, Liguria',
    year: '2022',
    image: '/images/aurora.jpg',
    galleryImages: [
      'https://images.pexels.com/photos/31656168/pexels-photo-31656168.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/26690862/pexels-photo-26690862.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description: 'Costruzione di un complesso residenziale di sei unità abitative con pianta a corte e spazi comuni verdi. Le strutture sono state realizzate con calcestruzzo armato e solai in laterocemento, con attenzione all\'isolamento acustico e termico.',
    area: '1.800 m²',
    services: ['Edilizia Residenziale', 'Project Management'],
  },
  {
    id: 'capannone-industriale-tech',
    title: 'Capannone Industriale Tech',
    category: 'Industriale',
    location: 'Imperia, Liguria',
    year: '2024',
    image: 'https://images.pexels.com/photos/36006588/pexels-photo-36006588.jpeg?auto=compress&cs=tinysrgb&w=1600',
    galleryImages: [
      'https://images.pexels.com/photos/15602858/pexels-photo-15602858.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/32390903/pexels-photo-32390903.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description: 'Realizzazione di un capannone industriale con struttura portante in acciaio e tamponamenti in pannelli prefabbricati. L\'edificio ospita spazi produttivi e magazzino, con caratteristiche di alta efficienza energetica e conformità alle normative antisismiche.',
    area: '2.400 m²',
    services: ['Edilizia Industriale', 'Strutture Metalliche'],
  },
  {
    id: 'ristrutturazione-storica-centro',
    title: 'Restauro Palazzo Storico',
    category: 'Ristrutturazione',
    location: 'Imperia, Liguria',
    year: '2023',
    image: 'https://images.pexels.com/photos/36054139/pexels-photo-36054139.jpeg?auto=compress&cs=tinysrgb&w=1600',
    galleryImages: [
      'https://images.pexels.com/photos/38798439/pexels-photo-38798439.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/37028150/pexels-photo-37028150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description: 'Intervento di riqualificazione strutturale e restauro conservativo di un edificio storico nel centro di Imperia. Sottofondazioni, consolidamento murario e ripristino delle finiture originali, nel rispetto dei vincoli della Soprintendenza.',
    area: '560 m²',
    services: ['Ristrutturazioni', 'Consolidamento Strutturale'],
  },
  {
    id: 'villa-collina-sanremo',
    title: 'Villa Collina',
    category: 'Residenziale',
    location: 'Sanremo, Liguria',
    year: '2024',
    image: 'https://images.pexels.com/photos/7501130/pexels-photo-7501130.jpeg?auto=compress&cs=tinysrgb&w=1600',
    galleryImages: [
      'https://images.pexels.com/photos/740587/pexels-photo-740587.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/37692742/pexels-photo-37692742.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description: 'Costruzione di una villa collinare con piscina e giardino terrazzato. Strutture in calcestruzzo armato, facciate in pietra locale e ampie vetrate panoramiche verso il mare. Impianti domotici e classe energetica A.',
    area: '450 m²',
    services: ['Edilizia Residenziale', 'Infissi e Facciate'],
  },
  {
    id: 'edificio-commerciale-centro',
    title: 'Edificio Commerciale Centro',
    category: 'Commerciale',
    location: 'Imperia, Liguria',
    year: '2022',
    image: 'https://images.pexels.com/photos/27570328/pexels-photo-27570328.jpeg?auto=compress&cs=tinysrgb&w=1600',
    galleryImages: [
      'https://images.pexels.com/photos/28295552/pexels-photo-28295552.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/17165354/pexels-photo-17165354.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description: 'Realizzazione di un edificio commerciale su tre livelli con spazi commerciali e uffici. Struttura mista acciaio-calcestruzzo, facciata ventilata e grandi vetrate. Particolare cura all\'accessibilità e alla sicurezza antincendio.',
    area: '1.100 m²',
    services: ['Edilizia Commerciale', 'Strutture Metalliche'],
  },
  {
    id: 'ristrutturazione-appartamento-liguria',
    title: 'Ristrutturazione Appartamento',
    category: 'Ristrutturazione',
    location: 'Imperia, Liguria',
    year: '2024',
    image: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1600',
    galleryImages: [
      'https://images.pexels.com/photos/35964344/pexels-photo-35964344.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/38798439/pexels-photo-38798439.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description: 'Ristrutturazione completa di un appartamento con rifacimento impianti elettrico, idraulico e di riscaldamento. Sostituzione pavimenti, nuova distribuzione degli spazi e realizzazione di un bagno di design con materiali premium.',
    area: '120 m²',
    services: ['Ristrutturazioni', 'Manutenzione'],
  },
  {
    id: 'stabilimento-logistico',
    title: 'Stabilimento Logistico',
    category: 'Industriale',
    location: 'Ventimiglia, Liguria',
    year: '2023',
    image: 'https://images.pexels.com/photos/15602858/pexels-photo-15602858.jpeg?auto=compress&cs=tinysrgb&w=1600',
    galleryImages: [
      'https://images.pexels.com/photos/32390903/pexels-photo-32390903.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/36006588/pexels-photo-36006588.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description: 'Costruzione di uno stabilimento logistico con magazzino automatizzato, uffici e area carico-scarico coperta. Strutture prefabbricate in calcestruzzo e copertura in pannelli coibentati. Pavimentazione industriale ad alta resistenza.',
    area: '3.200 m²',
    services: ['Edilizia Industriale', 'Pavimentazioni Industriali'],
  },
]

export const projectCategories = ['Tutti', 'Residenziale', 'Industriale', 'Commerciale', 'Ristrutturazione']

export interface Service {
  id: string
  number: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  features: string[]
  image: string
}

export const services: Service[] = [
  {
    id: 'edilizia-residenziale',
    number: '01',
    title: 'Edilizia Residenziale',
    shortTitle: 'Residenziale',
    tagline: 'Realizzazione di nuove abitazioni, ville e complessi residenziali',
    description: 'Realizzazione di nuove abitazioni, ville e complessi residenziali attraverso soluzioni costruttive moderne e affidabili. Dalle fondamenta alle finiture, seguiamo ogni fase con competenza tecnica e attenzione ai dettagli.',
    features: ['Strutture in calcestruzzo armato', 'Facciate a cappotto termico', 'Infissi e serramenti di qualità', 'Classi energetiche elevate'],
    image: 'https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'edilizia-industriale-commerciale',
    number: '02',
    title: 'Edilizia Industriale e Commerciale',
    shortTitle: 'Industriale',
    tagline: 'Costruzione di strutture dedicate al business, edifici industriali e spazi commerciali',
    description: 'Costruzione di strutture dedicate al business, edifici industriali e spazi commerciali progettati secondo elevati standard qualitativi. Capannoni, magazzini, uffici e negozi con strutture miste acciaio-calcestruzzo e soluzioni prefabbricate.',
    features: ['Strutture metalliche e prefabbricate', 'Pavimentazioni industriali', 'Sistemi antincendio', 'Aree carico-scarico coperte'],
    image: 'https://images.pexels.com/photos/36006588/pexels-photo-36006588.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'ristrutturazioni-manutenzioni',
    number: '03',
    title: 'Ristrutturazioni e Manutenzioni',
    shortTitle: 'Ristrutturazioni',
    tagline: 'Interventi di riqualificazione, recupero strutturale e manutenzione',
    description: 'Interventi di riqualificazione, recupero strutturale e manutenzione per valorizzare e preservare gli immobili nel tempo. Consolidamenti, rifacimenti impiantistici, restauro conservativo e manutenzioni programmate con materiali e tecniche adeguate.',
    features: ['Consolidamento strutturale', 'Rifacimento impianti', 'Restauro conservativo', 'Manutenzione programmata'],
    image: 'https://images.pexels.com/photos/36054139/pexels-photo-36054139.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
]

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Sopralluogo',
    description: 'Analisi del sito, dei vincoli e delle esigenze del committente. Valutazione tecnica preliminare e definizione degli obiettivi di progetto.',
  },
  {
    number: '02',
    title: 'Progettazione',
    description: 'Sviluppo della soluzione costruttiva, scelta dei materiali e calcolo strutturale. Coordinamento con i tecnici e ottenimento delle autorizzazioni necessarie.',
  },
  {
    number: '03',
    title: 'Preparazione',
    description: 'Organizzazione del cantiere, approvvigionamento dei materiali e messa in sicurezza dell\'area. Pianificazione dettagliata delle fasi operative.',
  },
  {
    number: '04',
    title: 'Costruzione',
    description: 'Esecuzione dei lavori con gestione quotidiana del cantiere, controllo qualità e coordinamento dei mestieri. Sicurezza e precisione in ogni fase.',
  },
  {
    number: '05',
    title: 'Consegna',
    description: 'Verifica finale delle finiture, collaudo degli impianti e consegna dell\'opera completa di tutta la documentazione tecnica richiesta.',
  },
]

export interface Stat {
  value: string
  label: string
  suffix: string
  description?: string
}

export const stats: Stat[] = [
  { value: '13', label: 'Anni di esperienza', suffix: '+' },
  { value: '19', label: 'Professionisti e operai specializzati', suffix: '' },
  { value: '0', label: 'Solidità garantita', suffix: '', description: 'Una struttura organizzata e una gestione consolidata dei cantieri ci permettono di affrontare progetti complessi con continuità, precisione e affidabilità.' },
]

export interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'B.B. Costruzioni ha realizzato la nostra villa con grande professionalità. Tempi rispettati, qualità elevata e una gestione del cantiere sempre ordinata e sicura.',
    author: 'Famiglia Rossi',
    title: 'Committente privato',
    company: 'Villa Collina, Sanremo',
  },
  {
    quote: 'Abbiamo affidato a B.B. Costruzioni la ristrutturazione del nostro stabile storico. Competenza tecnica e rispetto dei vincoli architettonici hanno fatto la differenza.',
    author: 'Arch. Marco Ferreri',
    title: 'Tecnico di progetto',
    company: 'Restauro Palazzo Storico, Imperia',
  },
  {
    quote: 'Per la nostra nuova sede operativa abbiamo scelto B.B. Costruzioni. Affidabilità, rispetto delle tempistiche e un team sempre disponibile: consigliamo senza riserve.',
    author: 'Ing. Laura Bianchi',
    title: 'Direttore Operativo',
    company: 'Stabilimento Logistico, Ventimiglia',
  },
]

export interface FAQItem {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    question: 'Quali tipi di progetti realizza B.B. Costruzioni?',
    answer: 'Operiamo nell\'edilizia residenziale, industriale e commerciale, oltre a ristrutturazioni e manutenzioni. Dal nuovo construction al restauro conservativo, seguiamo progetti di diverse scale e complessità.',
  },
  {
    question: 'In quali zone operate?',
    answer: 'Siamo radicati a Imperia e operiamo principalmente in Liguria, con particolare esperienza nei comuni della Riviera di Ponente. Siamo disponibili a valutare progetti in regioni limitrofe per committenti che richiedono il nostro standard qualitativo.',
  },
  {
    question: 'Come si svolge la fase di sopralluogo e preventivo?',
    answer: 'Dopo un primo contatto, fissiamo un sopralluogo gratuito per analizzare il sito e comprendere le esigenze. Segue un preventivo dettagliato con tempi, costi e soluzioni tecniche, senza impegno per il committente.',
  },
  {
    question: 'Vi occupate anche delle pratiche burocratiche?',
    answer: 'Sì, supportiamo i committenti nelle pratiche edilizie necessarie, dal DIA alla SCIA, fino al permesso di costruire. Collaboriamo con tecnici qualificati per la redazione della documentazione tecnica richiesta.',
  },
  {
    question: 'Quali garanzie offrite sui lavori eseguiti?',
    answer: 'Tutti i nostri lavori sono coperti dalle garanzie di legge: la garanzia decennale per i lavori edili e la garanzia biennale per le opere di manutenzione. Utilizziamo materiali certificati e forniamo tutta la documentazione tecnica a fine lavori.',
  },
  {
    question: 'È possibile visitare i cantieri in corso d\'opera?',
    answer: 'Assolutamente. Organizziamo visite periodiche al cantiere per i committenti, con aggiornamenti sui progressi. La trasparenza e la comunicazione costante sono parte integrante del nostro metodo di lavoro.',
  },
]

export interface Value {
  number: string
  title: string
  description: string
}

export const values: Value[] = [
  {
    number: 'I',
    title: 'Concretezza',
    description: 'Dalle fondamenta alle finiture, niente promesse di facciata: cantieri gestiti con il massimo rigore per trasformare il progetto in materia solida e durevole.',
  },
  {
    number: 'II',
    title: 'Metodo',
    description: 'Organizzazione meticolosa e rispetto assoluto della sicurezza operativa. Ogni fase è pianificata per azzerare gli imprevisti e proteggere il valore dell\'opera.',
  },
  {
    number: 'III',
    title: 'Materia',
    description: 'Scelta rigorosa di materiali certificati e tecniche costruttive all\'avanguardia, coordinate da maestranze esperte per opere pensate per resistere nel tempo.',
  },
  {
    number: 'IV',
    title: 'Presenza',
    description: 'Radicati nel territorio e operativi in tutta la Liguria di Ponente. Un team affiatato e una supervisione costante che seguono il committente passo dopo passo.',
  },
]

export interface NavLink {
  label: string
  to: string
}

export const navLinks: NavLink[] = [
  { label: 'Chi Siamo', to: '/about' },
  { label: 'Servizi', to: '/services' },
  { label: 'Progetti', to: '/projects' },
  { label: 'Contatti', to: '/contact' },
]
