import React, { useState } from 'react';
import { MiniCard, SalesChart, VisitorChart, ServiceDistribution } from './header';
import { CreditCardSimulator, TransferDetails, OxxoPayDetails } from './footfeet';

// 1. COMPONENTE: PANEL DE CONTROL ADMINISTRATIVO (DASHBOARD)
export const AdminDashboard = () => {
  const [invoices, setInvoices] = useState([
    { id: 'INV-2026-001', client: 'Dental Express', amount: 5000, date: '05/06/2026', status: 'Pagada' },
    { id: 'INV-2026-002', client: 'Asesores Asociados', amount: 14900, date: '04/06/2026', status: 'Pagada' },
    { id: 'INV-2026-003', client: 'Catering Selecto', amount: 5000, date: '04/06/2026', status: 'Pendiente' },
    { id: 'INV-2026-004', client: 'Constructora Bajío', amount: 29900, date: '02/06/2026', status: 'Vencida' },
  ]);

  return (
    <div className="admin-dashboard bg-light p-3 rounded-4 border border-light" style={{ minHeight: '480px' }}>
      {/* Título */}
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <div>
          <h4 className="h5 fw-bold text-dark mb-0">Panel de Administración de Portal</h4>
          <span className="text-secondary small" style={{ fontSize: '0.68rem' }}>Métricas comerciales y facturación de la agencia</span>
        </div>
        <span className="badge bg-success text-white px-3 py-1.5 rounded-pill" style={{ fontSize: '0.65rem' }}>Estatus: Activo</span>
      </div>

      {/* Tarjetas métricas */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-lg-3">
          <MiniCard 
            title="Ganancias Netas" 
            value="$49,800 MXN" 
            change="+12%" 
            color="#0d6efd" 
            icon={<span>💵</span>} 
          />
        </div>
        <div className="col-6 col-lg-3">
          <MiniCard 
            title="Presupuestos Enviados" 
            value="34 Cotizaciones" 
            change="+22%" 
            color="#09b08b" 
            icon={<span>📄</span>} 
          />
        </div>
        <div className="col-6 col-lg-3">
          <MiniCard 
            title="Tasa Conversión" 
            value="4.8%" 
            change="+3.4%" 
            color="#f59e0b" 
            icon={<span>⚡</span>} 
          />
        </div>
        <div className="col-6 col-lg-3">
          <MiniCard 
            title="Proyectos Activos" 
            value="8 en desarrollo" 
            change="+2" 
            color="#8b5cf6" 
            icon={<span>🚀</span>} 
          />
        </div>
      </div>

      {/* Gráficas */}
      <div className="row g-3 mb-4">
        <div className="col-lg-8">
          <SalesChart />
        </div>
        <div className="col-lg-4">
          <ServiceDistribution />
        </div>
      </div>

      <div className="row g-3">
        <div className="col-lg-7">
          <VisitorChart />
        </div>
        
        {/* Tabla de Facturas */}
        <div className="col-lg-5">
          <div className="bg-white p-3 rounded-4 border border-light shadow-xs h-100">
            <h5 className="h6 fw-bold text-dark mb-3" style={{ fontSize: '0.82rem' }}>Últimas Facturas / Órdenes</h5>
            <div className="table-responsive">
              <table className="table table-sm text-secondary mb-0" style={{ fontSize: '0.68rem' }}>
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Monto</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv) => (
                    <tr key={inv.id}>
                      <td className="fw-semibold text-dark">{inv.client}</td>
                      <td>${inv.amount.toLocaleString()}</td>
                      <td>
                        <span className={`badge ${
                          inv.status === 'Pagada' ? 'bg-success-subtle text-success' :
                          inv.status === 'Pendiente' ? 'bg-warning-subtle text-warning' : 'bg-danger-subtle text-danger'
                        }`} style={{ fontSize: '0.58rem' }}>
                          {inv.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// 2. COMPONENTE: COTIZADOR DE PRESUPUESTO Y FORMAS DE PAGO (INTERACTIVO)
export const BudgetCalculator = () => {
  const [siteType, setSiteType] = useState('landing');
  const [pagesCount, setPagesCount] = useState(1);
  
  // Opciones adicionales / extras
  const [extras, setExtras] = useState({
    hosting: true,
    seo: false,
    whatsapp: true,
    automation: false,
    multilanguage: false,
  });

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [installments, setInstallments] = useState(false);

  // Precios base
  const basePrices = {
    landing: 3500,
    corporate: 8000,
    ecommerce: 15000,
    custom: 22000,
  };

  const pagePrices = 800; // precio por página adicional
  
  const extraPrices = {
    hosting: 1500,
    seo: 2500,
    whatsapp: 600,
    automation: 4500,
    multilanguage: 3500,
  };

  // Cálculo total
  const calculateTotal = () => {
    let total = basePrices[siteType];
    
    // Páginas adicionales (Landing es 1 pág base, corporativo 5, ecommerce 8, custom 8)
    const basePages = siteType === 'landing' ? 1 : siteType === 'corporate' ? 5 : 8;
    if (pagesCount > basePages) {
      total += (pagesCount - basePages) * pagePrices;
    }

    // Extras
    Object.keys(extras).forEach((key) => {
      if (extras[key]) {
        total += extraPrices[key];
      }
    });

    return total;
  };

  const totalAmount = calculateTotal();
  const monthlyPayment = Math.round(totalAmount / 12);

  const handleCheckboxChange = (key) => {
    setExtras(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="budget-calculator bg-white p-4 rounded-4 border border-light shadow-sm" style={{ minHeight: '480px' }}>
      <div className="row g-4">
        
        {/* Lado izquierdo: Opciones del Cotizador */}
        <div className="col-lg-7">
          <h4 className="h5 fw-bold text-dark mb-1">Cotizador de Presupuestos Online</h4>
          <p className="text-secondary small mb-4" style={{ fontSize: '0.75rem' }}>Configura las características de tu proyecto para estimar tu presupuesto en vivo.</p>
          
          {/* Tipo de sitio */}
          <div className="mb-3">
            <label className="form-label small fw-semibold text-secondary">1. Tipo de Desarrollo Web</label>
            <div className="row g-2">
              {[
                { id: 'landing', label: 'Landing Express', desc: 'Monopágina de venta' },
                { id: 'corporate', label: 'Sitio Profesional', desc: 'Sitio corporativo PyME' },
                { id: 'ecommerce', label: 'E-commerce / Catálogo', desc: 'Tienda en línea' },
                { id: 'custom', label: 'Web a la Medida', desc: 'Sistemas & CRM web' },
              ].map((opt) => (
                <div className="col-6" key={opt.id}>
                  <div 
                    onClick={() => {
                      setSiteType(opt.id);
                      setPagesCount(opt.id === 'landing' ? 1 : opt.id === 'corporate' ? 5 : 8);
                    }}
                    className={`card p-2.5 border text-start cursor-pointer h-100 transition-all ${
                      siteType === opt.id ? 'border-primary bg-primary-subtle' : 'border-light bg-light-subtle'
                    }`}
                    style={{ fontSize: '0.72rem' }}
                  >
                    <div className="fw-bold text-dark">{opt.label}</div>
                    <div className="text-muted small" style={{ fontSize: '0.62rem' }}>{opt.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Páginas */}
          <div className="mb-4">
            <label className="form-label small fw-semibold text-secondary d-flex justify-content-between">
              <span>2. Número de Páginas / Secciones</span>
              <span className="badge bg-secondary">{pagesCount} secciones</span>
            </label>
            <input 
              type="range" 
              className="form-range" 
              min="1" 
              max="20" 
              disabled={siteType === 'landing'}
              value={pagesCount} 
              onChange={(e) => setPagesCount(parseInt(e.target.value))}
            />
            <div className="d-flex justify-content-between text-muted" style={{ fontSize: '0.58rem' }}>
              <span>1 pág</span>
              <span>10 págs</span>
              <span>20 págs</span>
            </div>
          </div>

          {/* Adicionales */}
          <div className="mb-2">
            <label className="form-label small fw-semibold text-secondary mb-2">3. Agregar Módulos y Funcionalidades</label>
            <div className="vstack gap-2">
              {[
                { id: 'hosting', label: 'Hospedaje & Dominio .com por 1 año', price: extraPrices.hosting },
                { id: 'seo', label: 'SEO Avanzado & Optimización de Búsqueda', price: extraPrices.seo },
                { id: 'whatsapp', label: 'Integración WhatsApp directo & Botón flotante', price: extraPrices.whatsapp },
                { id: 'automation', label: 'Flujo de leads automatizado (CRM + Notificaciones)', price: extraPrices.automation },
                { id: 'multilanguage', label: 'Soporte Multilingüe (Inglés/Español)', price: extraPrices.multilanguage },
              ].map((item) => (
                <label key={item.id} className="d-flex align-items-center justify-content-between p-2 rounded border border-light bg-light-subtle cursor-pointer mb-0">
                  <div className="d-flex align-items-center gap-2" style={{ fontSize: '0.7rem' }}>
                    <input 
                      type="checkbox" 
                      className="form-check-input mt-0"
                      checked={extras[item.id]} 
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                    <span className="text-dark fw-medium">{item.label}</span>
                  </div>
                  <span className="text-primary fw-bold" style={{ fontSize: '0.7rem' }}>+${item.price.toLocaleString()} MXN</span>
                </label>
              ))}
            </div>
          </div>

        </div>

        {/* Lado derecho: Desglose del Presupuesto y Métodos de Pago */}
        <div className="col-lg-5">
          <div className="card border-primary p-3 bg-light-subtle h-100">
            <h5 className="h6 fw-bold text-dark border-bottom pb-2">Presupuesto del Proyecto</h5>
            
            {/* Desglose resumido */}
            <div className="my-3 text-secondary" style={{ fontSize: '0.72rem', lineHeight: '1.5' }}>
              <div className="d-flex justify-content-between mb-1.5">
                <span>Desarrollo base:</span>
                <span className="text-dark fw-semibold">${basePrices[siteType].toLocaleString()} MXN</span>
              </div>
              
              {siteType !== 'landing' && pagesCount > (siteType === 'corporate' ? 5 : 8) && (
                <div className="d-flex justify-content-between mb-1.5">
                  <span>Páginas adicionales ({pagesCount - (siteType === 'corporate' ? 5 : 8)}):</span>
                  <span className="text-dark fw-semibold">${((pagesCount - (siteType === 'corporate' ? 5 : 8)) * pagePrices).toLocaleString()} MXN</span>
                </div>
              )}

              {Object.keys(extras).some(k => extras[k]) && (
                <div className="d-flex justify-content-between mb-1.5">
                  <span>Adicionales y extras:</span>
                  <span className="text-dark fw-semibold">
                    +${Object.keys(extras).reduce((acc, k) => acc + (extras[k] ? extraPrices[k] : 0), 0).toLocaleString()} MXN
                  </span>
                </div>
              )}

              <div className="d-flex justify-content-between border-top pt-2 mt-2 align-items-center">
                <span className="fw-bold text-dark">PRESUPUESTO TOTAL:</span>
                <span className="text-primary h5 fw-bold mb-0">${totalAmount.toLocaleString()} MXN</span>
              </div>

              {/* Meses Sin Intereses toggle */}
              <div className="mt-3 bg-white p-2.5 rounded border">
                <div className="form-check form-switch d-flex justify-content-between align-items-center p-0">
                  <label className="form-check-label small fw-semibold text-secondary" htmlFor="installmentToggle">💳 Diferir a 12 Meses sin Intereses</label>
                  <input 
                    className="form-check-input m-0" 
                    type="checkbox" 
                    id="installmentToggle"
                    checked={installments}
                    onChange={() => setInstallments(!installments)}
                  />
                </div>
                {installments && (
                  <div className="text-success small fw-bold mt-1.5" style={{ fontSize: '0.68rem' }}>
                    Paga solo 12 mensualidades de <strong>${monthlyPayment.toLocaleString()} MXN</strong>
                  </div>
                )}
              </div>
            </div>

            {/* Formas de Pago selector */}
            <div className="mb-3 border-top pt-3">
              <label className="form-label small fw-semibold text-secondary mb-2">4. Selecciona tu Forma de Pago</label>
              <div className="d-flex gap-2">
                {[
                  { id: 'card', label: 'Tarjeta Crédito/Débito' },
                  { id: 'spei', label: 'SPEI / Transferencia' },
                  { id: 'oxxo', label: 'OXXO Pay' },
                ].map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id)}
                    className={`btn btn-sm flex-fill ${paymentMethod === method.id ? 'btn-primary' : 'btn-outline-secondary'}`}
                    style={{ fontSize: '0.65rem', padding: '0.4rem 0.5rem', fontWeight: 600 }}
                  >
                    {method.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Render del método de pago seleccionado */}
            <div>
              {paymentMethod === 'card' && (
                <CreditCardSimulator budgetAmount={totalAmount} />
              )}
              {paymentMethod === 'spei' && (
                <TransferDetails />
              )}
              {paymentMethod === 'oxxo' && (
                <OxxoPayDetails />
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
