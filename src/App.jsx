import './App.css'

const metrics = [
  { value: '+120', label: 'sitios y landing pages publicadas' },
  { value: '10 dias', label: 'tiempo promedio de entrega inicial' },
  { value: '3x', label: 'mas conversion con estructura optimizada' },
]

const differentiators = [
  {
    title: 'Diseño a medida',
    description: 'Nada de plantillas genéricas. Cada propuesta se adapta a tu marca y a tu tipo de cliente.',
  },
  {
    title: 'Rápido y optimizado',
    description: 'Priorizamos velocidad, estructura limpia y una base técnica útil para SEO y campañas.',
  },
  {
    title: 'Entrega por sprints',
    description: 'Avanzas con revisiones reales y fechas claras, no con proyectos eternos.',
  },
  {
    title: 'Enfoque comercial',
    description: 'Cada bloque del sitio busca explicar mejor tu oferta y convertir visitas en contactos.',
  },
]

const services = [
  {
    title: 'Landing pages que venden',
    description:
      'Diseno centrado en conversion, mensajes claros y llamadas a la accion pensadas para cerrar contactos.',
  },
  {
    title: 'Sitios corporativos profesionales',
    description:
      'Paginas rapidas, administrables y alineadas con la confianza que tu marca necesita transmitir.',
  },
  {
    title: 'Automatizacion y formularios',
    description:
      'Integramos WhatsApp, CRM, correo y flujos de captura para que cada visita se convierta en oportunidad.',
  },
]

const growthServices = [
  {
    title: 'Web',
    description:
      'Sitios optimizados para escritorio, celular y tablet con estructura clara para presentar tu oferta.',
  },
  {
    title: 'SEO',
    description:
      'Base tecnica y de contenido para ayudarte a aparecer en buscadores con mensajes relevantes.',
  },
  {
    title: 'Google Ads',
    description:
      'Paginas preparadas para recibir trafico de campanas y convertir clics en solicitudes reales.',
  },
  {
    title: 'Redes Sociales',
    description:
      'Consistencia visual para que tu presencia digital mantenga la misma promesa en cada canal.',
  },
]

const trustPoints = [
  'Asesoria inicial sin costo para definir enfoque, estructura y objetivo.',
  'Experiencia pensada para usuario y buscadores desde la primera version.',
  'Arquitectura lista para crecer con formularios, blog, catalogo o campanas.',
]

const process = [
  'Diagnostico del negocio y propuesta visual',
  'Diseno de estructura, mensajes y experiencia',
  'Desarrollo, optimizacion y publicacion final',
]

const includes = [
  'Diseño responsive para móvil, tablet y escritorio',
  'SEO técnico base y velocidad optimizada',
  'Formulario de contacto y botón de WhatsApp',
  'Asesoría de hosting y dominio',
  'Soporte posterior al lanzamiento',
  'Copy comercial orientado a conversión',
]

const pricing = [
  {
    name: 'Landing Express',
    oldPrice: '$11,900',
    price: '$6,900 MXN',
    tagline: 'Una página de alta conversión para lanzar rápido tu oferta.',
    features: [
      '1 página principal',
      'Diseño a medida',
      'SEO técnico optimizado',
      'Formulario + WhatsApp',
      'Lista en 5 a 7 días hábiles',
    ],
  },
  {
    name: 'Sitio Profesional',
    oldPrice: '$25,000',
    price: '$14,900 MXN',
    tagline: 'La opción más sólida para PyMEs que necesitan una web completa.',
    features: [
      'Hasta 8 secciones',
      'Diseño 100% personalizado',
      'SEO técnico + velocidad',
      'Blog opcional',
      'Capacitación + soporte inicial',
    ],
    featured: true,
  },
  {
    name: 'Web + Automatización',
    oldPrice: '$45,000',
    price: '$29,900 MXN',
    tagline: 'Para negocios que quieren capturar leads y automatizar mejor su atención.',
    features: [
      'Todo lo del sitio profesional',
      'Flujos de captura y calificación',
      'Integración con WhatsApp',
      'Soporte prioritario',
      'Escalable a IA y CRM',
    ],
  },
]

const faqs = [
  {
    question: '¿Cuánto tarda un sitio web?',
    answer: 'Una landing puede estar lista en una semana. Un sitio más completo suele tomar entre 2 y 4 semanas según contenido y revisiones.',
  },
  {
    question: '¿Queda optimizado para Google?',
    answer: 'Sí. Dejamos una base técnica limpia, estructura correcta, velocidad optimizada y contenido mejor preparado para SEO.',
  },
  {
    question: '¿Incluye WhatsApp y formularios?',
    answer: 'Sí. Podemos integrar formularios, botón directo de WhatsApp y rutas de contacto pensadas para convertir mejor.',
  },
  {
    question: '¿Los precios son cerrados?',
    answer: 'Trabajamos con rangos claros y cerramos el alcance después de un diagnóstico breve para evitar sorpresas durante el proyecto.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">LE</div>
          <div>
            <p className="brand-name">Portal En Linea</p>
            <p className="brand-tag">Diseno web para negocios que necesitan vender mejor</p>
          </div>
        </div>
        <nav className="main-nav" aria-label="Principal">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Diseño web que convierte visitantes en clientes</p>
            <h1>Páginas web rápidas, a medida y pensadas para vender mejor.</h1>
            <p className="hero-text">
              Creamos landing pages y sitios corporativos con diseño profesional,
              velocidad optimizada, estructura comercial y una experiencia clara para
              que tu negocio proyecte confianza desde el primer vistazo.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#contacto">
                Cotizar mi sitio
              </a>
              <a className="secondary-link" href="#crecimiento">
                Ver qué incluye
              </a>
            </div>
            <div className="hero-proofbar" aria-label="Elementos de confianza">
              <span>SEO base incluido</span>
              <span>WhatsApp integrado</span>
              <span>Diagnóstico gratis</span>
            </div>
          </div>

          <aside className="hero-card" aria-label="Resumen del servicio">
            <p className="card-label">Lanzamiento 2026</p>
            <h2>Diseño web a medida para negocios que quieren resultados rápidos</h2>
            <p>
              Diagnóstico gratuito, propuesta clara en menos de 24 horas y una base lista
              para SEO, campañas y atención por WhatsApp.
            </p>
            <ul className="feature-list">
              <li>Diseño adaptable para móvil, tablet y escritorio</li>
              <li>Arquitectura comercial orientada a conversión</li>
              <li>Entrega lista para publicar y escalar</li>
            </ul>
            <a className="inline-cta" href="#contacto">
              Agendar diagnóstico gratis
            </a>
          </aside>
        </section>

        <section className="metrics-grid" aria-label="Indicadores">
          {metrics.map((item) => (
            <article className="metric-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="content-section differentiators-section">
          <div className="section-heading">
            <p className="eyebrow">Diferenciales</p>
            <h2>Una página web útil no solo se ve bien: también carga rápido y ayuda a vender.</h2>
          </div>
          <div className="differentiators-grid">
            {differentiators.map((item) => (
              <article className="differentiator-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="servicios">
          <div className="section-heading">
            <p className="eyebrow">Servicios</p>
            <h2>Lo que armamos para tu presencia digital</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section trust-section" id="crecimiento">
          <div className="section-heading">
            <p className="eyebrow">Qué incluye</p>
            <h2>Todo lo necesario para lanzar una web moderna con base técnica y enfoque comercial.</h2>
          </div>
          <div className="includes-layout">
            <div className="includes-grid">
              {includes.map((item) => (
                <article className="include-item" key={item}>
                  <span>+</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
            <div className="growth-grid">
              {growthServices.map((item) => (
                <article className="growth-card" key={item.title}>
                  <p className="mini-label">{item.title}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="split-section" id="proceso">
          <div className="section-heading narrow">
            <p className="eyebrow">Metodo</p>
            <h2>Un proceso corto, claro y orientado a publicar rapido</h2>
          </div>
          <div className="process-panel">
            {process.map((step, index) => (
              <div className="process-step" key={step}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section certification-section">
          <div className="section-heading narrow">
            <p className="eyebrow">Confianza</p>
            <h2>Vendemos una solución integral: diseño a medida, velocidad y base sólida para captar leads.</h2>
          </div>
          <div className="certification-panel">
            <div className="badge-row" aria-label="Sellos de confianza">
              <span>Google-friendly</span>
              <span>Responsive</span>
              <span>UX first</span>
            </div>
            <div className="trust-list">
              {trustPoints.map((point, index) => (
                <article className="trust-item" key={point}>
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                  <p>{point}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section pricing-section" id="portafolio">
          <div className="section-heading">
            <p className="eyebrow">Precios claros</p>
            <h2>Paquetes simples, sin letras chiquitas y listos para cotizar según tu negocio.</h2>
          </div>
          <div className="pricing-grid">
            {pricing.map((plan) => (
              <article className={plan.featured ? 'pricing-card featured-plan' : 'pricing-card'} key={plan.name}>
                <p className="mini-label">{plan.name}</p>
                <p className="old-price">{plan.oldPrice}</p>
                <h3>{plan.price}</h3>
                <p className="pricing-tagline">{plan.tagline}</p>
                <ul className="plan-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className="pricing-link" href="#contacto">
                  Cotizar este plan
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section faq-section">
          <div className="section-heading narrow">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2>Resolviendo las dudas típicas antes de arrancar un proyecto web.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-banner" id="contacto">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2>Hablemos de tu proyecto y te damos un estimado claro sin compromiso.</h2>
            <p className="contact-copy">
              También podemos sumar WhatsApp, formularios, blog, SEO local y una ruta clara
              para campañas publicitarias según el tipo de negocio que manejes.
            </p>
          </div>
          <div className="contact-actions">
            <a className="primary-link" href="mailto:contacto@portalenlinea.com">
              contacto@portalenlinea.com
            </a>
            <a className="secondary-link whatsapp-link" href="https://wa.me/5213312345678">
              WhatsApp directo
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
