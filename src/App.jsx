import { useEffect } from 'react'
import { Tooltip } from 'bootstrap'
import carouselImageOne from './assets/carousel-1.jpg'
import carouselImageTwo from './assets/carousel-2.jpg'
import carouselImageThree from './assets/carousel-3.jpg'
import './App.css'

const metrics = [
  { value: '+120', label: 'sitios y landing pages publicadas' },
  { value: '10 dias', label: 'tiempo promedio de entrega inicial' },
  { value: '3x', label: 'mejor enfoque de conversion y estructura' },
]

const carouselSlides = [
  {
    image: carouselImageOne,
    title: 'Soluciones web conectadas con tu negocio',
    description: 'Creamos sitios que integran presencia digital, contacto inmediato y una comunicacion mas clara de tu servicio.',
    example: 'Ejemplo: una pagina principal con seccion de servicios, boton de WhatsApp y formulario para captar prospectos.',
  },
  {
    image: carouselImageTwo,
    title: 'Diseno responsive para todos tus dispositivos',
    description: 'Mostramos tu marca con una experiencia consistente en escritorio, tablet y celular desde el primer vistazo.',
    example: 'Ejemplo: el mismo sitio adaptado a monitor, tablet y celular sin perder claridad ni jerarquia visual.',
  },
  {
    image: carouselImageThree,
    title: 'Experiencias visuales que inspiran confianza',
    description: 'Combinamos diseno limpio, contenido comercial y rutas de contacto para convertir visitas en conversaciones.',
    example: 'Ejemplo: una web para estudio creativo con galeria, testimonios y llamada a la accion visible.',
  },
]

const differentiators = [
  {
    title: 'Diseno a medida',
    description: 'Propuestas limpias y alineadas a tu marca, sin plantillas genericas.',
    example: 'Ejemplo: una web para despacho legal con colores de marca, formulario y seccion de servicios personalizada.',
  },
  {
    title: 'Velocidad y SEO base',
    description: 'Estructura tecnica clara para cargar rapido y preparar tu visibilidad.',
    example: 'Ejemplo: paginas optimizadas para aparecer en busquedas como diseno web en Guadalajara y cargar rapido en movil.',
  },
  {
    title: 'WhatsApp y formularios',
    description: 'Rutas de contacto simples para convertir visitas en conversaciones.',
    example: 'Ejemplo: boton fijo de WhatsApp mas formulario de contacto conectado a tu correo o CRM.',
  },
  {
    title: 'Entrega por etapas',
    description: 'Avances concretos, revisiones cortas y fechas realistas de salida.',
    example: 'Ejemplo: primero aprobamos home, luego servicios y finalmente contacto antes de publicar.',
  },
]

const services = [
  {
    label: 'Landing pages para campañas y captacion',
    example: 'Ejemplo: landing para anuncios de Meta o Google con encabezado, beneficios, testimonios y formulario.',
  },
  {
    label: 'Sitios corporativos para PyMEs y despachos',
    example: 'Ejemplo: pagina institucional con inicio, nosotros, servicios, preguntas frecuentes y contacto.',
  },
  {
    label: 'Webs con blog, catalogo o secciones administrables',
    example: 'Ejemplo: sitio con articulos, fichas de producto o secciones editables para mantener contenido actualizado.',
  },
  {
    label: 'Integracion de WhatsApp, formularios y analitica',
    example: 'Ejemplo: eventos de conversion, pixel, Google Analytics y mensajes directos desde la web.',
  },
]

const includes = [
  {
    label: 'Diseno responsive para movil, tablet y escritorio',
    example: 'Ejemplo: una pagina que reorganiza menu, textos e imagenes automaticamente para verse bien en celular.',
  },
  {
    label: 'SEO tecnico base y velocidad optimizada',
    example: 'Ejemplo: titulos correctos, imagenes comprimidas y estructura lista para buscadores.',
  },
  {
    label: 'Formulario de contacto y boton de WhatsApp',
    example: 'Ejemplo: formulario al pie de la pagina y acceso rapido a WhatsApp en todo momento.',
  },
  {
    label: 'Asesoria para dominio y hosting',
    example: 'Ejemplo: te orientamos para conectar tu dominio, correo y publicar el sitio sin depender de terceros.',
  },
  {
    label: 'Capacitacion y soporte inicial',
    example: 'Ejemplo: una sesion para explicarte cambios basicos y acompanamiento despues del lanzamiento.',
  },
  {
    label: 'Textos orientados a conversion',
    example: 'Ejemplo: encabezados que explican tu valor, beneficios claros y cierres con llamada a la accion.',
  },
]

const pricing = [
  {
    name: 'Landing Express',
    price: '$6,900 MXN',
    description: 'Ideal para lanzar una oferta o servicio puntual.',
    features: ['1 pagina de conversion', 'CTA + formulario', 'SEO tecnico base'],
    example: 'Ejemplo: pagina para campana de anuncios con beneficios, prueba social y formulario rapido.',
  },
  {
    name: 'Sitio Profesional',
    price: '$14,900 MXN',
    description: 'Para negocios que necesitan una presencia digital completa.',
    features: ['Hasta 8 secciones', 'Diseno a medida', 'Blog o catalogo opcional'],
    featured: true,
    example: 'Ejemplo: sitio para despacho o PyME con inicio, nosotros, servicios, blog y contacto.',
  },
  {
    name: 'Web + Automatizacion',
    price: '$29,900 MXN',
    description: 'Para procesos de captacion y atencion mejor conectados.',
    features: ['Todo lo anterior', 'Flujos de leads', 'Integraciones y soporte prioritario'],
    example: 'Ejemplo: web conectada a formularios, WhatsApp, CRM y automatizaciones para seguimiento.',
  },
]

const faqs = [
  {
    question: 'Cuanto tarda un sitio web?',
    answer:
      'Una landing puede estar lista en una semana. Un sitio mas completo suele tomar entre 2 y 4 semanas.',
  },
  {
    question: 'Incluye optimizacion para Google?',
    answer:
      'Si. Dejamos una base tecnica limpia, buena velocidad de carga y estructura util para SEO.',
  },
  {
    question: 'Pueden integrar WhatsApp y formularios?',
    answer:
      'Si. Integramos formularios, WhatsApp y otras rutas de contacto segun el tipo de negocio.',
  },
]

function App() {
  useEffect(() => {
    const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipInstances = Array.from(tooltipElements).map(
      (element) => new Tooltip(element),
    )

    return () => {
      tooltipInstances.forEach((tooltip) => tooltip.dispose())
    }
  }, [])

  return (
    <div className="bg-app">
      <nav className="navbar navbar-expand-lg border-bottom bg-white sticky-top py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-3 fw-semibold" href="#inicio">
            <span className="brand-badge">LE</span>
            <span>
              <span className="d-block text-dark">Portal En Linea</span>
              <small className="text-secondary">Diseno web claro para negocios que quieren vender mejor</small>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <li className="nav-item"><a className="nav-link" href="#servicios">Servicios</a></li>
              <li className="nav-item"><a className="nav-link" href="#incluye">Incluye</a></li>
              <li className="nav-item"><a className="nav-link" href="#precios">Precios</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="hero-minimal py-5 py-lg-6" id="inicio">
        <div className="container py-lg-5">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-7">
              <span className="text-uppercase small fw-semibold tracking-label text-primary">
                Diseno web minimalista y profesional
              </span>
              <h1 className="display-2 fw-semibold text-dark mt-3 mb-4 hero-title">
                Paginas web claras, rapidas y hechas para convertir.
              </h1>
              <p className="lead text-secondary mb-4 hero-paragraph">
                Creamos landing pages y sitios corporativos con una estructura limpia,
                lenguaje comercial y una experiencia profesional para que tu negocio se vea serio.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <a className="btn btn-primary btn-lg px-4" href="#contacto">
                  Solicitar propuesta
                </a>
                <a className="btn btn-outline-secondary btn-lg px-4" href="#precios">
                  Ver paquetes
                </a>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge text-secondary-emphasis bg-white border rounded-pill px-3 py-2">SEO base</span>
                <span className="badge text-secondary-emphasis bg-white border rounded-pill px-3 py-2">WhatsApp</span>
                <span className="badge text-secondary-emphasis bg-white border rounded-pill px-3 py-2">Diagnostico gratis</span>
              </div>
            </div>

            <div className="col-lg-5">
              <div id="heroCarousel" className="carousel slide carousel-fade hero-carousel shadow-sm" data-bs-ride="carousel">
                <div className="carousel-indicators hero-indicators mb-0">
                  {carouselSlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      data-bs-target="#heroCarousel"
                      data-bs-slide-to={index}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={slide.example}
                      className={index === 0 ? 'active' : ''}
                      aria-current={index === 0 ? 'true' : undefined}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
                </div>

                <div className="carousel-inner rounded-4 hero-carousel-inner">
                  {carouselSlides.map((slide, index) => (
                    <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={slide.title}>
                      <div className="hero-slide-image-wrapper">
                        <img src={slide.image} className="d-block w-100 hero-slide-image" alt={slide.title} />
                        <div className="hero-slide-overlay"></div>
                        <div className="carousel-caption text-start hero-caption">
                          <p className="small text-uppercase fw-semibold mb-2">Carrusel informativo</p>
                          <h2 className="h2 text-white mb-3">{slide.title}</h2>
                          <p className="mb-0 text-white-50">{slide.description}</p>
                          <button
                            type="button"
                            className="tooltip-trigger tooltip-trigger-light mt-3"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title={slide.example}
                            aria-label={`Ejemplo de ${slide.title}`}
                          >
                            Ver ejemplo
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-4 py-lg-5">
          <div className="container">
            <div className="row g-3">
              {metrics.map((item) => (
                <div className="col-md-4" key={item.label}>
                  <div className="card h-100 border-0 shadow-sm metric-card-minimal">
                    <div className="card-body p-4">
                      <div className="display-6 fw-semibold text-dark mb-2">{item.value}</div>
                      <p className="text-secondary mb-0">{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 border-top" id="servicios">
          <div className="container">
            <div className="row justify-content-between align-items-end mb-4">
              <div className="col-lg-6">
                <span className="text-uppercase small fw-semibold tracking-label text-primary">Servicios</span>
                <h2 className="display-6 text-dark mt-2">Una plantilla Bootstrap mas sobria y funcional.</h2>
              </div>
              <div className="col-lg-5">
                <p className="text-secondary mb-0">
                  Reorganicé la pagina en bloques simples con grid, cards y tipografia mas limpia para que se vea mas profesional y minimalista.
                </p>
              </div>
            </div>

            <div className="row g-3 mb-5">
              {differentiators.map((item) => (
                <div className="col-md-6 col-xl-3" key={item.title}>
                  <div className="card h-100 border-0 shadow-sm minimal-card">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
                        <h3 className="h5 text-dark mb-0">{item.title}</h3>
                        <button
                          type="button"
                          className="tooltip-trigger"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title={item.example}
                          aria-label={`Ejemplo de ${item.title}`}
                        >
                          ?
                        </button>
                      </div>
                      <p className="text-secondary mb-0">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row g-3">
              {services.map((service) => (
                <div className="col-md-6" key={service.label}>
                  <div className="card border-0 shadow-sm minimal-card h-100">
                    <div className="card-body p-4 d-flex align-items-center justify-content-between gap-3">
                      <p className="text-dark mb-0 fw-medium">{service.label}</p>
                      <button
                        type="button"
                        className="tooltip-trigger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={service.example}
                        aria-label={`Ejemplo de ${service.label}`}
                      >
                        Ver ejemplo
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-white border-top" id="incluye">
          <div className="container">
            <div className="row g-4 align-items-start">
              <div className="col-lg-5">
                <span className="text-uppercase small fw-semibold tracking-label text-primary">Que incluye</span>
                <h2 className="display-6 text-dark mt-2 mb-3">Todo lo necesario para lanzar una web limpia y util.</h2>
                <p className="text-secondary mb-0">
                  La base ahora usa Bootstrap para que el diseño sea mas consistente, ligero y facil de extender.
                </p>
              </div>
              <div className="col-lg-7">
                <div className="row g-3">
                  {includes.map((item) => (
                    <div className="col-md-6" key={item.label}>
                      <div className="card border-0 shadow-sm minimal-card h-100">
                        <div className="card-body p-4 d-flex align-items-start justify-content-between gap-3">
                          <p className="mb-0 text-secondary">{item.label}</p>
                          <button
                            type="button"
                            className="tooltip-trigger"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title={item.example}
                            aria-label={`Ejemplo de ${item.label}`}
                          >
                            ?
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 border-top" id="precios">
          <div className="container">
            <div className="row justify-content-between align-items-end mb-4">
              <div className="col-lg-6">
                <span className="text-uppercase small fw-semibold tracking-label text-primary">Precios</span>
                <h2 className="display-6 text-dark mt-2">Paquetes claros y faciles de comparar.</h2>
              </div>
            </div>
            <div className="row g-4">
              {pricing.map((plan) => (
                <div className="col-lg-4" key={plan.name}>
                  <div className={plan.featured ? 'card border-primary shadow-sm h-100 pricing-card-bs featured-bs' : 'card border-0 shadow-sm h-100 pricing-card-bs'}>
                    <div className="card-body p-4 p-lg-5">
                      <div className="d-flex align-items-start justify-content-between gap-3 mb-2">
                        <p className="small text-uppercase fw-semibold text-primary mb-0">{plan.name}</p>
                        <button
                          type="button"
                          className="tooltip-trigger"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title={plan.example}
                          aria-label={`Ejemplo de ${plan.name}`}
                        >
                          Ejemplo
                        </button>
                      </div>
                      <div className="h2 text-dark mb-3">{plan.price}</div>
                      <p className="text-secondary mb-4">{plan.description}</p>
                      <ul className="list-unstyled d-grid gap-2 text-secondary mb-4">
                        {plan.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                      <a className={plan.featured ? 'btn btn-primary w-100' : 'btn btn-outline-secondary w-100'} href="#contacto">
                        Cotizar plan
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-white border-top">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-5">
                <span className="text-uppercase small fw-semibold tracking-label text-primary">Preguntas frecuentes</span>
                <h2 className="display-6 text-dark mt-2">Respuestas simples antes de empezar.</h2>
              </div>
              <div className="col-lg-7">
                <div className="vstack gap-3">
                  {faqs.map((item) => (
                    <details className="faq-bs rounded-4 border bg-white p-4" key={item.question}>
                      <summary className="fw-semibold text-dark">{item.question}</summary>
                      <p className="text-secondary mt-3 mb-0">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 border-top" id="contacto">
          <div className="container">
            <div className="card border-0 shadow-sm contact-card-bs">
              <div className="card-body p-4 p-lg-5">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-7">
                    <span className="text-uppercase small fw-semibold tracking-label text-primary">Contacto</span>
                    <h2 className="display-6 text-dark mt-2 mb-3">Hablemos de tu proyecto y te damos una propuesta clara.</h2>
                    <p className="text-secondary mb-0">
                      Si quieres, el siguiente paso puede ser conectar este diseño con formulario real, WhatsApp y contenido de portafolio.
                    </p>
                  </div>
                  <div className="col-lg-5">
                    <div className="d-grid gap-3">
                      <a className="btn btn-primary btn-lg" href="mailto:contacto@portalenlinea.com">
                        contacto@portalenlinea.com
                      </a>
                      <a className="btn btn-outline-secondary btn-lg" href="https://wa.me/5213312345678">
                        WhatsApp directo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
