import './App.css'

const metrics = [
  { value: '+120', label: 'sitios y landing pages publicadas' },
  { value: '10 dias', label: 'tiempo promedio de entrega inicial' },
  { value: '3x', label: 'mas conversion con estructura optimizada' },
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
            <p className="eyebrow">Creamos paginas web con enfoque comercial</p>
            <h1>Disenamos sitios web que se ven solidos y convierten visitas en clientes.</h1>
            <p className="hero-text">
              Construimos landing pages, webs corporativas y experiencias digitales
              pensadas para mostrar autoridad, captar prospectos y acelerar tu cierre
              comercial.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#contacto">
                Solicitar propuesta
              </a>
              <a className="secondary-link" href="#crecimiento">
                Ver soluciones
              </a>
            </div>
            <div className="hero-proofbar" aria-label="Elementos de confianza">
              <span>SEO base incluido</span>
              <span>Asesoria gratis</span>
              <span>Experiencia responsive</span>
            </div>
          </div>

          <aside className="hero-card" aria-label="Resumen del servicio">
            <p className="card-label">Proyecto destacado</p>
            <h2>Landing page premium para captar leads</h2>
            <p>
              Arquitectura visual inspirada en agencias modernas: encabezado limpio,
              secciones amplias, contraste fuerte y narrativa orientada a resultados.
            </p>
            <ul className="feature-list">
              <li>Diseno adaptable para movil, tablet y escritorio</li>
              <li>Texto comercial y bloques optimizados para conversion</li>
              <li>Entrega lista para publicar en hosting</li>
            </ul>
            <a className="inline-cta" href="#contacto">
              Recibir asesoria gratis
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
            <p className="eyebrow">Crecimiento</p>
            <h2>Nuestros servicios tienen como objetivo que tu marca gane visibilidad y contactos.</h2>
          </div>
          <div className="growth-grid">
            {growthServices.map((item) => (
              <article className="growth-card" key={item.title}>
                <p className="mini-label">{item.title}</p>
                <p>{item.description}</p>
              </article>
            ))}
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
            <h2>Vendemos una solucion integral: buena imagen, estructura clara y base para SEO.</h2>
          </div>
          <div className="certification-panel">
            <div className="badge-row" aria-label="Sellos de confianza">
              <span>Google-friendly</span>
              <span>Responsive</span>
              <span>UX first</span>
            </div>
            <div className="trust-list">
              {trustPoints.map((point) => (
                <article className="trust-item" key={point}>
                  <strong>01</strong>
                  <p>{point}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section portfolio-callout" id="portafolio">
          <div className="section-heading narrow">
            <p className="eyebrow">Enfoque visual</p>
            <h2>Estilo profesional, sobrio y actual para marcas de servicio</h2>
          </div>
          <p className="portfolio-text">
            Esta base ya queda preparada para seguir sumando testimonios, casos de
            exito, galeria de proyectos y formularios conectados a WhatsApp o correo.
          </p>
        </section>

        <section className="contact-banner" id="contacto">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2>Si quieres vender tus servicios con una mejor pagina, esta es una base util.</h2>
            <p className="contact-copy">
              Tambien podemos sumar WhatsApp, formularios, blog, SEO local y una ruta clara
              para campanas publicitarias.
            </p>
          </div>
          <a className="primary-link" href="mailto:contacto@portalenlinea.com">
            contacto@portalenlinea.com
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
