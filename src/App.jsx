import { useState, useEffect } from 'react'
import { Tooltip } from 'bootstrap'
import carouselImageOne from './assets/carousel-1.jpg'
import carouselImageTwo from './assets/carousel-2.jpg'
import carouselImageThree from './assets/carousel-3.jpg'
import { AdminDashboard, BudgetCalculator } from './assets/servicios'
import './App.css'

const Logo = ({ light = true, size = 38 }) => {
  const textColor = light ? 'text-white' : 'text-dark'
  const subColor = '#09b08b' // El color verde-azul del logo oficial
  
  return (
    <div className="logo-container d-flex align-items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="portalGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#09b08b" />
            <stop offset="100%" stopColor="#00e676" />
          </linearGradient>
        </defs>
        
        {/* Arco semicircular brillante verde-azul en el contorno superior derecho */}
        <path 
          d="M 17 14 A 14.5 14.5 0 1 1 34.5 35.5" 
          stroke="url(#portalGreenGrad)" 
          strokeWidth="3.6" 
          strokeLinecap="round" 
          fill="none" 
        />
        
        {/* Contorno del Teléfono (Smartphone) */}
        <path 
          d="M 23 37 V 15 C 23 13.5 24.2 12.5 25.5 12.5 H 32.5 C 33.8 12.5 35 13.5 35 15 V 37" 
          stroke={light ? "#ffffff" : "#111d2e"} 
          strokeWidth="2.8" 
          strokeLinecap="round" 
          fill="none" 
        />
        
        {/* Puerta Abierta en perspectiva */}
        <path 
          d="M 25 15.2 L 32 12.8 V 34.8 L 25 33 Z" 
          fill={light ? "#ffffff" : "#111d2e"} 
        />
        
        {/* Picaporte de la puerta (círculo) */}
        <circle cx="30" cy="23.8" r="1" fill={light ? "#111d2e" : "#ffffff"} />
        
        {/* Píxeles digitales flotantes / cuadrados a la izquierda */}
        <rect x="12" y="24" width="1.8" height="1.8" fill="#09b08b" rx="0.3" />
        <rect x="15" y="19" width="2" height="2" fill="#00e676" rx="0.3" />
        <rect x="11" y="17" width="1.6" height="1.6" fill="#09b08b" rx="0.3" opacity="0.8" />
        <rect x="16" y="13" width="2.2" height="2.2" fill="#00e676" rx="0.4" />
        <rect x="15" y="28" width="2.2" height="2.2" fill="#09b08b" rx="0.4" />
        <rect x="19" y="22" width="2.6" height="2.6" fill="#00e676" rx="0.5" />
        <rect x="18" y="31" width="2" height="2" fill="#09b08b" rx="0.3" />
        <rect x="8" y="21" width="1.6" height="1.6" fill="#00e676" rx="0.3" opacity="0.6" />
      </svg>
      
      <div className="logo-text d-flex flex-column text-start">
        <span className={`logo-title fw-bold ${textColor} leading-none m-0`} style={{ fontSize: '1.25rem', letterSpacing: '0.12em', fontFamily: "'Outfit', 'Inter', sans-serif" }}>
          PORT<span style={{ fontFamily: "sans-serif" }}>Λ</span>L
        </span>
        <span style={{ fontSize: '0.55rem', letterSpacing: '0.16em', fontWeight: 800, marginTop: '3px', color: subColor }}>
          — EN LÍNEA —
        </span>
      </div>
    </div>
  )
}


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
    title: 'Diseño responsive para todos tus dispositivos',
    description: 'Mostramos tu marca con una experiencia consistente en escritorio, tablet y celular desde el primer vistazo.',
    example: 'Ejemplo: el mismo sitio adaptado a monitor, tablet y celular sin perder claridad ni jerarquia visual.',
  },
  {
    image: carouselImageThree,
    title: 'Experiencias visuales que inspiran confianza',
    description: 'Combinamos diseño limpio, contenido comercial y rutas de contacto para convertir visitas en conversaciones.',
    example: 'Ejemplo: una web para estudio creativo con galeria, testimonios y llamada a la accion visible.',
  },
]

const differentiators = [
  {
    title: 'Diseño a medida',
    description: 'Propuestas limpias y alineadas a tu marca, sin plantillas genericas.',
    example: 'Ejemplo: una web para despacho legal con colores de marca, formulario y seccion de servicios personalizada.',
    icon: 'M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
  },
  {
    title: 'Velocidad y SEO base',
    description: 'Estructura tecnica clara para cargar rapido y preparar tu visibilidad.',
    example: 'Ejemplo: paginas optimizadas para aparecer en busquedas como diseño web en Guadalajara y cargar rapido en movil.',
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
  },
  {
    title: 'WhatsApp y formularios',
    description: 'Rutas de contacto simples para convertir visitas en conversaciones.',
    example: 'Ejemplo: boton fijo de WhatsApp mas formulario de contacto conectado a tu correo o CRM.',
    icon: 'M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z',
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.08)',
  },
  {
    title: 'Entrega por etapas',
    description: 'Avances concretos, revisiones cortas y fechas realistas de salida.',
    example: 'Ejemplo: primero aprobamos home, luego servicios y finalmente contacto antes de publicar.',
    icon: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    color: '#0d6efd',
    bg: 'rgba(13,110,253,0.08)',
  },
]

const services = [
  {
    label: 'Landing pages para campañas y captacion',
    example: 'Ejemplo: landing para anuncios de Meta o Google con encabezado, beneficios, testimonios y formulario.',
    icon: 'M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z',
  },
  {
    label: 'Sitios corporativos para PyMEs y despachos',
    example: 'Ejemplo: pagina institucional con inicio, nosotros, servicios, preguntas frecuentes y contacto.',
    icon: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z',
  },
  {
    label: 'Webs con blog, catalogo o secciones administrables',
    example: 'Ejemplo: sitio con articulos, fichas de producto o secciones editables para mantener contenido actualizado.',
    icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z',
  },
  {
    label: 'Integracion de WhatsApp, formularios y analitica',
    example: 'Ejemplo: eventos de conversion, pixel, Google Analytics y mensajes directos desde la web.',
    icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
  },
]

const includes = [
  {
    label: 'Diseño responsive para movil, tablet y escritorio',
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
    price: '$5,000 MXN',
    description: 'Ideal para lanzar una oferta o servicio puntual.',
    features: ['1 pagina de conversion', 'CTA + formulario', 'SEO tecnico base'],
    example: 'Ejemplo: pagina para campana de anuncios con beneficios, prueba social y formulario rapido.',
  },
  {
    name: 'Sitio Profesional',
    price: '$14,900 MXN',
    description: 'Para negocios que necesitan una presencia digital completa.',
    features: ['Hasta 8 secciones', 'Diseño a medida', 'Blog o catalogo opcional'],
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
  const [activeExample, setActiveExample] = useState('landing')
  const [deviceType, setDeviceType] = useState('desktop')

  // Landing Express State
  const [landingForm, setLandingForm] = useState({ name: '', email: '', category: 'Corporativo / Fin de Año' })
  const [landingSubmitted, setLandingSubmitted] = useState(false)

  // Sitio Profesional State
  const [proTab, setProTab] = useState('inicio')

  // Web + Automatización State
  const [autoForm, setAutoForm] = useState({ name: '', phone: '' })
  const [autoStep, setAutoStep] = useState(0)
  const [autoLeads, setAutoLeads] = useState([
    { name: 'Diana Gómez', phone: '33 4567 8901', interest: 'Landing Express', time: 'Hace 12m', status: '✅ CRM' },
    { name: 'Roberto Pérez', phone: '55 1234 5678', interest: 'Sitio Profesional', time: 'Hace 45m', status: '✅ CRM' }
  ])
  const [autoRunning, setAutoRunning] = useState(false)
  const [simWhatsApp, setSimWhatsApp] = useState([])

  const handleSelectExample = (category) => {
    setActiveExample(category)
    const element = document.getElementById('ejemplos-en-vivo')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLandingSubmit = (e) => {
    e.preventDefault()
    if (!landingForm.name || !landingForm.email) return
    setLandingSubmitted(true)
  }

  const resetLanding = () => {
    setLandingForm({ name: '', email: '', category: 'Corporativo / Fin de Año' })
    setLandingSubmitted(false)
  }

  const runAutomation = (e) => {
    e.preventDefault()
    if (!autoForm.name || !autoForm.phone) return
    setAutoRunning(true)
    setAutoStep(1)
    
    // Step 1: Form Submitted
    setTimeout(() => {
      setAutoStep(2)
      // Trigger WhatsApp Notification
      setSimWhatsApp([
        {
          id: Date.now(),
          text: `🔔 *NUEVA CONVERSIÓN EN WEB*\n\n👤 *Nombre:* ${autoForm.name}\n📞 *Teléfono:* ${autoForm.phone}\n📦 *Interés:* Web + Automatización\n\n⚡ _Enviado automáticamente por el Bot._`
        }
      ])
      
      // Step 2: WhatsApp Notification
      setTimeout(() => {
        setAutoStep(3)
        // Add to CRM list
        setAutoLeads(prev => [
          {
            name: autoForm.name,
            phone: autoForm.phone,
            interest: 'Web + Automatización',
            time: 'En vivo',
            status: '✅ CRM'
          },
          ...prev
        ])
        setAutoRunning(false)
      }, 1800)
    }, 1500)
  }

  const resetAutomation = () => {
    setAutoForm({ name: '', phone: '' })
    setAutoStep(0)
    setSimWhatsApp([])
    setAutoRunning(false)
  }

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
      <div className="hero-wrapper" id="inicio">
        <nav className="navbar navbar-expand-lg navbar-glass py-3">
          <div className="container">
            <a
              className="navbar-brand d-flex align-items-center gap-2"
              href="#inicio"
              title="Portal en Línea: Páginas web y landing pages a la medida"
            >
              <Logo light={true} />
            </a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon-glass">&#9776;</span>
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                <li className="nav-item"><a className="nav-link nav-link-glass" href="#servicios">Servicios</a></li>
                <li className="nav-item"><a className="nav-link nav-link-glass" href="#incluye">Incluye</a></li>
                <li className="nav-item"><a className="nav-link nav-link-glass" href="#precios">Precios</a></li>
                <li className="nav-item ms-lg-2">
                  <a className="btn btn-glass-cta" href="#contacto">Solicitar propuesta</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="hero-glass py-5 py-lg-6">
          <div className="container">
            <div className="row align-items-center g-4 g-lg-5">
              <div className="col-lg-7">
                <span className="hero-eyebrow">
                  Diseño web minimalista y profesional
                </span>
                <h1 className="display-2 fw-semibold text-white mt-3 mb-4 hero-title">
                  Paginas web claras, rapidas y hechas para convertir.
                </h1>
                <p className="lead hero-lead mb-4 hero-paragraph">
                  Creamos landing pages y sitios corporativos con una estructura limpia,
                  lenguaje comercial y una experiencia profesional para que tu negocio se vea serio.
                </p>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <a className="btn btn-primary btn-lg px-4" href="#contacto">
                    Solicitar propuesta
                  </a>
                  <a className="btn btn-outline-light btn-lg px-4" href="#precios">
                    Ver paquetes
                  </a>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="hero-badge">SEO base</span>
                  <span className="hero-badge">WhatsApp</span>
                  <span className="hero-badge">Diagnostico gratis</span>
                </div>
              </div>

              <div className="col-lg-5">
                <div id="heroCarousel" className="carousel slide carousel-fade hero-carousel shadow-lg" data-bs-ride="carousel">
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
      </div>

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

        <section className="services-section py-5 py-lg-6 border-top" id="servicios">
          <div className="container">

            {/* Encabezado de sección */}
            <div className="row justify-content-between align-items-end mb-5">
              <div className="col-lg-6">
                <span className="text-uppercase small fw-semibold tracking-label text-primary">Servicios</span>
                <h2 className="display-6 text-dark mt-2">Lo que construimos para tu negocio.</h2>
              </div>
              <div className="col-lg-5">
                <p className="text-secondary mb-0">
                  Cada proyecto arranca con un diagnóstico sin costo. Te decimos qué necesitas y por qué.
                </p>
              </div>
            </div>

            {/* Cards de diferenciadores */}
            <div className="row g-3 mb-4">
              {differentiators.map((item) => (
                <div className="col-md-6 col-xl-3" key={item.title}>
                  <div
                    className="diff-card h-100"
                    style={{ '--accent': item.color, '--accent-bg': item.bg }}
                  >
                    <div className="diff-card-icon-wrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.6}
                        stroke={item.color}
                        width="22"
                        height="22"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <h3 className="diff-card-title">{item.title}</h3>
                    <p className="diff-card-desc">{item.description}</p>
                    <button
                      type="button"
                      className="diff-card-tip"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={item.example}
                      aria-label={`Ejemplo de ${item.title}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="11" height="11">
                        <path fillRule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z" clipRule="evenodd" />
                      </svg>
                      Ver ejemplo
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cards de servicios */}
            <div className="row g-3">
              {services.map((service, index) => (
                <div className="col-md-6" key={service.label}>
                  <div className="svc-card">
                    <div className="svc-card-icon-col">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.6}
                        stroke="currentColor"
                        width="20"
                        height="20"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                      </svg>
                    </div>
                    <div className="svc-card-body">
                      <span className="svc-card-num">0{index + 1}</span>
                      <p className="svc-card-label">{service.label}</p>
                    </div>
                    <button
                      type="button"
                      className="svc-card-btn"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={service.example}
                      aria-label={`Ejemplo de ${service.label}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                      </svg>
                    </button>
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
                          onClick={() => handleSelectExample(
                            plan.name.toLowerCase().includes('landing') ? 'landing' :
                            plan.name.toLowerCase().includes('profesional') ? 'professional' : 'automation'
                          )}
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

            {/* Leyendas explicativas del servicio */}
            <div className="row g-4 mt-5 pt-4 border-top">
              <div className="col-md-6 col-lg-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="text-primary display-6 mb-0 mt-n1" style={{ fontSize: '1.8rem' }}>⚡</div>
                  <div>
                    <h4 className="h6 fw-bold text-dark mb-1">Tiempos rápidos</h4>
                    <p className="text-secondary small mb-0">
                      Recibe tu primer borrador en 5 a 7 días hábiles para Landing, y de 10 a 15 días hábiles para sitios completos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="text-primary display-6 mb-0 mt-n1" style={{ fontSize: '1.8rem' }}>🌐</div>
                  <div>
                    <h4 className="h6 fw-bold text-dark mb-1">Dominio & Hosting</h4>
                    <p className="text-secondary small mb-0">
                      Te incluimos tu dominio .com o .mx y el hospedaje web por el primer año para que no te preocupes de nada.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="text-primary display-6 mb-0 mt-n1" style={{ fontSize: '1.8rem' }}>🛡️</div>
                  <div>
                    <h4 className="h6 fw-bold text-dark mb-1">Soporte inicial</h4>
                    <p className="text-secondary small mb-0">
                      Cuentas con 30 días de soporte técnico posventa para resolver dudas y ajustar detalles iniciales de lanzamiento.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="text-primary display-6 mb-0 mt-n1" style={{ fontSize: '1.8rem' }}>🛠️</div>
                  <div>
                    <h4 className="h6 fw-bold text-dark mb-1">Estructura escalable</h4>
                    <p className="text-secondary small mb-0">
                      Tus sitios se programan en código limpio y modular, listos para añadir nuevas páginas o blogs futuros con facilidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Visualizador de Ejemplos en Vivo */}
        <section className="py-5 bg-light border-top" id="ejemplos-en-vivo">
          <div className="container">
            <div className="text-center mb-5">
              <span className="text-uppercase small fw-semibold tracking-label text-primary">Demostración interactiva</span>
              <h2 className="display-6 text-dark mt-2 mb-3">Prueba en Vivo nuestros Paquetes</h2>
              <p className="text-secondary mx-auto" style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
                Interactúa con las simulaciones interactivas de abajo para ver en tiempo real cómo funcionará el sitio o automatización de tu negocio.
              </p>
              
              {/* Toggles del simulador */}
              <div className="d-inline-flex flex-wrap justify-content-center gap-2 p-2 bg-white rounded-4 shadow-sm mt-4 border">
                <button
                  onClick={() => setActiveExample('landing')}
                  className={`sim-nav-btn ${activeExample === 'landing' ? 'active' : ''}`}
                >
                  1. Landing Express
                </button>
                <button
                  onClick={() => setActiveExample('professional')}
                  className={`sim-nav-btn ${activeExample === 'professional' ? 'active' : ''}`}
                >
                  2. Sitio Profesional
                </button>
                <button
                  onClick={() => setActiveExample('automation')}
                  className={`sim-nav-btn ${activeExample === 'automation' ? 'active' : ''}`}
                >
                  3. Web + Automatización
                </button>
              </div>

              {/* Toggles de Dispositivo (Desktop/Mobile) */}
              <div className="d-flex justify-content-center gap-2 mt-4">
                <button
                  onClick={() => setDeviceType('desktop')}
                  className={`btn btn-sm ${deviceType === 'desktop' ? 'btn-dark' : 'btn-outline-dark'} px-3 rounded-pill`}
                  style={{ fontSize: '0.75rem', fontWeight: 600 }}
                >
                  💻 Pantalla Grande
                </button>
                <button
                  onClick={() => setDeviceType('mobile')}
                  className={`btn btn-sm ${deviceType === 'mobile' ? 'btn-dark' : 'btn-outline-dark'} px-3 rounded-pill`}
                  style={{ fontSize: '0.75rem', fontWeight: 600 }}
                >
                  📱 Vista Celular
                </button>
              </div>
            </div>

            {/* Contenedor de Dispositivo */}
            <div className={`sim-device-container ${deviceType === 'desktop' ? 'desktop' : 'mobile'}`}>
              <div className="browser-mockup">
                {/* Cabecera del navegador */}
                <div className="browser-header">
                  <div className="browser-dots">
                    <span className="browser-dot red"></span>
                    <span className="browser-dot yellow"></span>
                    <span className="browser-dot green"></span>
                  </div>
                  <div className="browser-address">
                    {activeExample === 'landing' && 'https://landing-express.listoenlinea.com'}
                    {activeExample === 'professional' && 'https://sitio-profesional.listoenlinea.com'}
                    {activeExample === 'automation' && 'https://automatizacion-leads.listoenlinea.com'}
                  </div>
                </div>

                {/* Cuerpo del navegador */}
                <div className="browser-body">
                  
                  {/* CASO 1: LANDING EXPRESS */}
                  {activeExample === 'landing' && (
                    <div className="mock-landing">
                      <div className="mock-landing-hero">
                        <span className="badge bg-primary text-uppercase mb-2 animate-pulse" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Cupos Limitados</span>
                        <h3 className="mock-landing-title">Catering Selecto</h3>
                        <p className="mock-landing-desc">
                          Banquetes y catering premium para eventos corporativos y bodas. Experiencias gastronómicas hechas para recordar.
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                          <span style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 500 }}>✔️ Menú de Degustación</span>
                          <span style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 500 }}>✔️ Coordinación Completa</span>
                        </div>
                      </div>

                      <div className="p-4" style={{ maxWidth: '420px', margin: '0 auto' }}>
                        {!landingSubmitted ? (
                          <form onSubmit={handleLandingSubmit} className="card p-4 shadow-sm border-0 bg-white">
                            <h4 className="h6 fw-bold text-center mb-3 text-dark">Obtén un 15% de Descuento en tu Evento</h4>
                            <div className="mb-3">
                              <label className="form-label small fw-semibold text-secondary">Nombre Completo</label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Ej. Juan Pérez"
                                required
                                value={landingForm.name}
                                onChange={(e) => setLandingForm({ ...landingForm, name: e.target.value })}
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label small fw-semibold text-secondary">Correo Electrónico</label>
                              <input
                                type="email"
                                className="form-control form-control-sm"
                                placeholder="juan@correo.com"
                                required
                                value={landingForm.email}
                                onChange={(e) => setLandingForm({ ...landingForm, email: e.target.value })}
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label small fw-semibold text-secondary">Tipo de Evento</label>
                              <select
                                className="form-select form-select-sm text-secondary"
                                value={landingForm.category}
                                onChange={(e) => setLandingForm({ ...landingForm, category: e.target.value })}
                              >
                                <option>Corporativo / Fin de Año</option>
                                <option>Boda / Graduación</option>
                                <option>Cumpleaños / Social</option>
                              </select>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 btn-sm py-2">
                              Solicitar Descuento Ahora
                            </button>
                          </form>
                        ) : (
                          <div className="card p-4 text-center shadow-sm border-0 bg-success-subtle">
                            <div className="text-success display-6 mb-2">🎉</div>
                            <h4 className="h6 text-success fw-bold">¡Envío Exitoso!</h4>
                            <p className="text-secondary small mt-2 mb-0">
                              Tu folio de descuento fue enviado. Registrado para: <strong>{landingForm.name}</strong> ({landingForm.email}).
                            </p>
                            <button onClick={resetLanding} className="btn btn-outline-success btn-sm mt-3 px-4 rounded-pill mx-auto">
                              Registrar otro
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* CASO 2: SITIO PROFESIONAL */}
                  {activeExample === 'professional' && (
                    <div className="mock-pro bg-white" style={{ minHeight: '480px' }}>
                      <nav className="mock-pro-nav">
                        <span className="fw-bold text-white small" style={{ letterSpacing: '0.05em' }}>📊 ASESORES ASOCIADOS</span>
                        <ul className="mock-pro-menu">
                          <li onClick={() => setProTab('inicio')} className={`mock-pro-link ${proTab === 'inicio' ? 'active' : ''}`}>Inicio</li>
                          <li onClick={() => setProTab('servicios')} className={`mock-pro-link ${proTab === 'servicios' ? 'active' : ''}`}>Servicios</li>
                          <li onClick={() => setProTab('presupuesto')} className={`mock-pro-link ${proTab === 'presupuesto' ? 'active' : ''}`}>Cotizador</li>
                          <li onClick={() => setProTab('admin')} className={`mock-pro-link ${proTab === 'admin' ? 'active' : ''}`}>Panel Admin</li>
                          <li onClick={() => setProTab('nosotros')} className={`mock-pro-link ${proTab === 'nosotros' ? 'active' : ''}`}>Nosotros</li>
                          <li onClick={() => setProTab('contacto')} className={`mock-pro-link ${proTab === 'contacto' ? 'active' : ''}`}>Contacto</li>
                        </ul>
                      </nav>

                      <div className="mock-pro-content">
                        {proTab === 'inicio' && (
                          <div className="text-center py-4">
                            <h3 className="h4 fw-bold text-dark">Consultoría de Negocios Inteligente</h3>
                            <p className="text-secondary small max-width-md mx-auto my-3" style={{ maxWidth: '460px', lineHeight: '1.5' }}>
                              Ayudamos a medianas empresas a optimizar sus finanzas contables y fiscales para acelerar su crecimiento comercial.
                            </p>
                            <button onClick={() => setProTab('contacto')} className="btn btn-primary btn-sm px-4 rounded-pill mt-2">
                              Agendar Asesoría Gratis
                            </button>
                          </div>
                        )}

                        {proTab === 'servicios' && (
                          <div className="py-2">
                            <h3 className="h5 fw-bold text-center mb-3 text-dark">Nuestros Servicios</h3>
                            <div className="row g-3">
                              <div className="col-6">
                                <div className="card p-3 border border-light bg-light shadow-none">
                                  <div className="text-primary fw-bold mb-1" style={{ fontSize: '0.85rem' }}>📈 Auditoría</div>
                                  <p className="text-muted small mb-0" style={{ fontSize: '0.68rem', lineHeight: '1.3' }}>Análisis completo de balances financieros.</p>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="card p-3 border border-light bg-light shadow-none">
                                  <div className="text-primary fw-bold mb-1" style={{ fontSize: '0.85rem' }}>💼 Fiscal</div>
                                  <p className="text-muted small mb-0" style={{ fontSize: '0.68rem', lineHeight: '1.3' }}>Planificación para el ahorro contable legal.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {proTab === 'presupuesto' && <BudgetCalculator />}

                        {proTab === 'admin' && <AdminDashboard />}

                        {proTab === 'nosotros' && (
                          <div className="py-2">
                            <h3 className="h5 fw-bold mb-2 text-dark">Sobre Nosotros</h3>
                            <p className="text-secondary small leading-relaxed" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
                              Somos una firma contable y de estrategia jurídica con más de 12 años de trayectoria. Construimos relaciones basadas en transparencia y resultados tangibles.
                            </p>
                            <div className="d-flex gap-3 align-items-center mt-3 bg-light p-3 rounded-3 border border-light">
                              <span className="fw-bold text-primary h3 mb-0">12+</span>
                              <span className="text-muted small" style={{ fontSize: '0.7rem', lineHeight: '1.3' }}>Años respaldando empresas en todo el país.</span>
                            </div>
                          </div>
                        )}

                        {proTab === 'contacto' && (
                          <div className="card p-3 shadow-sm border border-light" style={{ maxWidth: '380px', margin: '0 auto' }}>
                            <h3 className="h6 fw-bold mb-2 text-dark">Contáctanos</h3>
                            <div className="mb-2">
                              <input type="text" className="form-control form-control-sm" placeholder="Tu Nombre" />
                            </div>
                            <div className="mb-2">
                              <input type="email" className="form-control form-control-sm" placeholder="Tu Correo" />
                            </div>
                            <div className="mb-2">
                              <textarea className="form-control form-control-sm" rows="2" placeholder="¿En qué te podemos ayudar?"></textarea>
                            </div>
                            <button onClick={() => alert('¡Simulación: Formulario de contacto enviado!')} className="btn btn-primary btn-sm w-100">
                              Enviar Mensaje
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* CASO 3: WEB + AUTOMATIZACIÓN */}
                  {activeExample === 'automation' && (
                    <div className="mock-auto bg-white" style={{ minHeight: '480px' }}>
                      <div className="automation-split">
                        
                        {/* Formulario en Web */}
                        <div className="auto-left">
                          <h4 className="h6 fw-bold text-dark mb-1">1. Cliente llena Formulario</h4>
                          <p className="text-muted mb-3" style={{ fontSize: '0.68rem', lineHeight: '1.3' }}>
                            Ingresa un nombre y WhatsApp ficticio para iniciar la simulación del flujo de lead.
                          </p>
                          <form onSubmit={runAutomation}>
                            <div className="mb-2">
                              <label className="form-label mb-1 text-secondary" style={{ fontSize: '0.65rem', fontWeight: 600 }}>Nombre</label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Ej. Sofía Martínez"
                                required
                                disabled={autoRunning}
                                value={autoForm.name}
                                onChange={(e) => setAutoForm({ ...autoForm, name: e.target.value })}
                              />
                            </div>
                            <div className="mb-2">
                              <label className="form-label mb-1 text-secondary" style={{ fontSize: '0.65rem', fontWeight: 600 }}>Teléfono WhatsApp</label>
                              <input
                                type="tel"
                                className="form-control form-control-sm"
                                placeholder="Ej. 3312345678"
                                required
                                disabled={autoRunning}
                                value={autoForm.phone}
                                onChange={(e) => setAutoForm({ ...autoForm, phone: e.target.value })}
                              />
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm w-100 mt-3 py-2" disabled={autoRunning}>
                              {autoRunning ? 'Procesando Automatización...' : 'Enviar y Probar Flujo ⚡'}
                            </button>
                          </form>
                          {autoStep > 0 && (
                            <button onClick={resetAutomation} className="btn btn-link btn-sm w-100 text-secondary mt-2 text-decoration-none" style={{ fontSize: '0.68rem' }}>
                              🔄 Reiniciar simulación
                            </button>
                          )}
                        </div>

                        {/* Pipeline de Automatización */}
                        <div className="auto-right">
                          <div>
                            <h4 className="h6 fw-bold text-white mb-3">2. Pipeline de Conexión</h4>
                            
                            <div className={`pipeline-step ${autoStep === 1 ? 'active' : ''} ${autoStep > 1 ? 'completed' : ''}`}>
                              <span className="pipeline-badge">1</span>
                              <span style={{ fontSize: '0.7rem', fontWeight: 500 }}>Formulario enviado en web</span>
                            </div>

                            <div className={`pipeline-step ${autoStep === 2 ? 'active' : ''} ${autoStep > 2 ? 'completed' : ''}`}>
                              <span className="pipeline-badge">2</span>
                              <span style={{ fontSize: '0.7rem', fontWeight: 500 }}>WhatsApp enviado a vendedor</span>
                            </div>

                            <div className={`pipeline-step ${autoStep === 3 ? 'active' : ''}`}>
                              <span className="pipeline-badge">3</span>
                              <span style={{ fontSize: '0.7rem', fontWeight: 500 }}>Registrado en base de datos CRM</span>
                            </div>
                          </div>

                          {/* Simulación visual de Celular */}
                          <div className="mt-3">
                            <div className="phone-preview-card">
                              <div className="phone-screen">
                                <div className="wa-header">
                                  <span>🤖 Portal en Línea - Bot</span>
                                  <span>En vivo</span>
                                </div>
                                <div className="wa-body">
                                  {simWhatsApp.map((msg) => (
                                    <div className="wa-bubble text-dark" key={msg.id}>
                                      <strong>🔔 NUEVA CONVERSIÓN</strong><br />
                                      👤 <strong>Nombre:</strong> {autoForm.name}<br />
                                      📞 <strong>Tel:</strong> {autoForm.phone}<br />
                                      📦 <strong>Interés:</strong> Web + Automatización<br />
                                      ⚡ <em>Estatus: Guardado en CRM</em>
                                    </div>
                                  ))}
                                  {simWhatsApp.length === 0 && (
                                    <div className="text-muted text-center py-4 small" style={{ fontSize: '0.65rem' }}>
                                      Esperando WhatsApp...
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* Simulación del CRM */}
                      <div className="p-3 border-top bg-dark border-secondary">
                        <h4 className="h6 fw-bold text-white mb-3 d-flex align-items-center gap-2">
                          <span>🗂️</span> CRM Base de Datos (Lead Pipeline)
                        </h4>
                        <div className="table-responsive">
                          <table className="crm-table text-white-50">
                            <thead>
                              <tr>
                                <th>Nombre</th>
                                <th>Teléfono</th>
                                <th>Paquete</th>
                                <th>Registro</th>
                                <th>Estatus</th>
                              </tr>
                            </thead>
                            <tbody>
                              {autoLeads.map((lead, idx) => (
                                <tr key={lead.name + idx} className={lead.time === 'En vivo' ? 'crm-row-new' : ''}>
                                  <td className="text-white">{lead.name}</td>
                                  <td>{lead.phone}</td>
                                  <td>{lead.interest}</td>
                                  <td>{lead.time}</td>
                                  <td><span className="badge bg-success text-white" style={{ fontSize: '0.62rem' }}>{lead.status}</span></td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              </div>
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
                      Si quieres, el siguiente paso puede ser conectar este diseño con formulario real, WhatsApp y tu propio contenido de marca.
                    </p>
                  </div>
                  <div className="col-lg-5">
                    <div className="d-grid gap-3">
                      <a className="btn btn-primary btn-lg" href="mailto:contacto@portalenlinea.com">
                        contacto@portalenlinea.com
                      </a>
                      <a className="btn btn-outline-secondary btn-lg" href="https://wa.me/5213331835228">
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

      <footer className="footer-premium">
        <div className="container">
          <div className="row g-4 align-items-center text-center text-md-start">
            <div className="col-md-6">
              <div className="footer-logo-wrap d-flex justify-content-center justify-content-md-start">
                <Logo light={true} />
              </div>
              <p className="text-white-50 small pe-lg-5 mb-0" style={{ maxWidth: '480px', lineHeight: '1.6' }}>
                Desarrollamos soluciones digitales para negocios que buscan crecer, optimizarse y avanzar con confianza.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-3">
                <a href="https://facebook.com" className="footer-social-icon" aria-label="Facebook">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" className="footer-social-icon" aria-label="Instagram">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.742.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.742C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.743-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.6.282-.109.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
                <a href="https://tiktok.com" className="footer-social-icon" aria-label="TikTok">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.32.34.61.58.85.5.5 1.15.79 1.87.8v1.98c-.7 0-1.37-.19-1.95-.53V10.5C11.48 13 9.4 15 6.9 15c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c.34 0 .67.04.99.11V8.15c-.32-.1-.66-.15-.99-.15-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5V0z"/>
                  </svg>
                </a>
                <a href="https://wa.me/5213312345678" className="footer-social-icon" aria-label="WhatsApp">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.618-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom text-center small text-white-50">
            <p className="mb-1">
              &copy; {new Date().getFullYear()} <strong>Portal en Línea</strong>. Todos los derechos reservados.
            </p>
            <p className="mb-0 text-muted" style={{ fontSize: '0.72rem' }}>
              Hecho con enfoque en tecnología, crecimiento y soluciones reales para empresas mexicanas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
