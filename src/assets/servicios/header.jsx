import React from 'react';

// Tarjeta métrica administrativa
export const MiniCard = ({ title, value, change, color = '#0d6efd', icon }) => (
  <div className="card border-light shadow-xs p-3 bg-white h-100">
    <div className="d-flex justify-content-between align-items-center mb-2">
      <span className="text-muted small fw-semibold text-uppercase" style={{ fontSize: '0.62rem', letterSpacing: '0.05em' }}>{title}</span>
      <span className="p-1.5 rounded-3" style={{ background: `${color}15`, color }}>
        {icon}
      </span>
    </div>
    <h4 className="h4 fw-bold mb-1 text-dark" style={{ fontSize: '1.25rem' }}>{value}</h4>
    <span className="small text-success fw-semibold" style={{ fontSize: '0.68rem' }}>
      {change} <span className="text-muted fw-normal">vs mes anterior</span>
    </span>
  </div>
);

// Gráfica de Línea: Ventas Mensuales
export const SalesChart = () => (
  <div className="bg-white p-3 rounded-4 border border-light shadow-xs">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h5 className="h6 fw-bold text-dark mb-0" style={{ fontSize: '0.82rem' }}>Historial de Conversión</h5>
        <span className="text-muted small" style={{ fontSize: '0.65rem' }}>Últimos 6 meses de leads calificados</span>
      </div>
      <span className="badge bg-primary-subtle text-primary fw-semibold" style={{ fontSize: '0.62rem' }}>+18.4%</span>
    </div>
    <div style={{ position: 'relative', height: '140px' }}>
      <svg viewBox="0 0 300 120" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d6efd" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#0d6efd" stopOpacity="0.0"/>
          </linearGradient>
        </defs>
        {/* Rejilla de fondo */}
        <line x1="0" y1="20" x2="300" y2="20" stroke="#f1f5f9" strokeWidth="1" />
        <line x1="0" y1="60" x2="300" y2="60" stroke="#f1f5f9" strokeWidth="1" />
        <line x1="0" y1="100" x2="300" y2="100" stroke="#f1f5f9" strokeWidth="1" />
        
        {/* Área debajo de la curva */}
        <path d="M0 110 L20 90 L80 95 L140 60 L200 75 L260 35 L300 20 L300 110 Z" fill="url(#chartGlow)" />
        
        {/* Línea de la gráfica */}
        <path 
          d="M0 110 L20 90 L80 95 L140 60 L200 75 L260 35 L300 20" 
          stroke="#0d6efd" 
          strokeWidth="3.2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none" 
        />
        
        {/* Nodos de datos */}
        <circle cx="140" cy="60" r="4" fill="#0d6efd" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="260" cy="35" r="4" fill="#0d6efd" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="300" cy="20" r="5" fill="#22c55e" stroke="#ffffff" strokeWidth="2" />
      </svg>
    </div>
    <div className="d-flex justify-content-between text-muted small mt-2 px-1" style={{ fontSize: '0.62rem', fontFamily: 'monospace' }}>
      <span>Ene</span>
      <span>Feb</span>
      <span>Mar</span>
      <span>Abr</span>
      <span>May</span>
      <span>Jun</span>
    </div>
  </div>
);

// Gráfica de Barras: Visitas Semanales
export const VisitorChart = () => (
  <div className="bg-white p-3 rounded-4 border border-light shadow-xs">
    <h5 className="h6 fw-bold text-dark mb-1" style={{ fontSize: '0.82rem' }}>Tráfico Semanal</h5>
    <span className="text-muted small d-block mb-3" style={{ fontSize: '0.65rem' }}>Visitas al portal por día</span>
    
    <div className="d-flex justify-content-between align-items-end px-1" style={{ height: '110px' }}>
      {[
        { day: 'Lun', height: '40%' },
        { day: 'Mar', height: '65%' },
        { day: 'Mié', height: '85%', active: true },
        { day: 'Jue', height: '50%' },
        { day: 'Vie', height: '70%' },
        { day: 'Sáb', height: '30%' },
        { day: 'Dom', height: '20%' },
      ].map((bar, idx) => (
        <div key={idx} className="d-flex flex-column align-items-center" style={{ width: '11%', height: '100%' }}>
          <div className="w-100 rounded-top" style={{ 
            height: bar.height, 
            background: bar.active ? 'linear-gradient(180deg, #09b08b, #00e676)' : '#cbd5e1',
            transition: 'height 0.3s ease'
          }}></div>
          <span className="text-muted mt-2" style={{ fontSize: '0.58rem', fontWeight: 600 }}>{bar.day}</span>
        </div>
      ))}
    </div>
  </div>
);

// Gráfica Circular (Donut): Distribución por Canal de Adquisición
export const ServiceDistribution = () => {
  return (
    <div className="bg-white p-3 rounded-4 border border-light shadow-xs h-100 d-flex flex-column justify-content-between">
      <div>
        <h5 className="h6 fw-bold text-dark mb-1" style={{ fontSize: '0.82rem' }}>Canal de Ventas</h5>
        <span className="text-muted small d-block" style={{ fontSize: '0.65rem' }}>Origen de los presupuestos cerrados</span>
      </div>
      
      <div className="d-flex align-items-center gap-3 my-3">
        {/* Donut en SVG */}
        <div style={{ width: '75px', height: '75px', position: 'relative' }}>
          <svg width="75" height="75" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f1f5f9" strokeWidth="3" />
            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#0d6efd" strokeWidth="3.2" 
              strokeDasharray="60 40" strokeDashoffset="25" strokeLinecap="round" />
            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#09b08b" strokeWidth="3.2" 
              strokeDasharray="25 75" strokeDashoffset="85" strokeLinecap="round" />
            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f59e0b" strokeWidth="3.2" 
              strokeDasharray="15 85" strokeDashoffset="110" strokeLinecap="round" />
          </svg>
          <div className="position-absolute start-50 top-50 translate-middle text-center">
            <span className="fw-bold text-dark small leading-none d-block" style={{ fontSize: '0.75rem' }}>100%</span>
            <span className="text-muted d-block" style={{ fontSize: '0.48rem', letterSpacing: '0.05em' }}>Leads</span>
          </div>
        </div>
        
        <div className="flex-1" style={{ fontSize: '0.65rem' }}>
          <div className="d-flex align-items-center gap-1.5 mb-1.5">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0d6efd', display: 'inline-block' }}></span>
            <span className="text-dark fw-semibold">60%</span> <span className="text-muted">Meta/Google Ads</span>
          </div>
          <div className="d-flex align-items-center gap-1.5 mb-1.5">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#09b08b', display: 'inline-block' }}></span>
            <span className="text-dark fw-semibold">25%</span> <span className="text-muted">WhatsApp Directo</span>
          </div>
          <div className="d-flex align-items-center gap-1.5">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}></span>
            <span className="text-dark fw-semibold">15%</span> <span className="text-muted">Orgánico / SEO</span>
          </div>
        </div>
      </div>
    </div>
  );
};
