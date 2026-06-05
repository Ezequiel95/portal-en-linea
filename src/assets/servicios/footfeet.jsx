import React, { useState } from 'react';

// Detalles de la Transferencia Bancaria
export const TransferDetails = () => (
  <div className="bg-light p-3.5 rounded-3 border border-light" style={{ fontSize: '0.72rem', lineHeight: '1.4' }}>
    <div className="fw-bold text-dark mb-2">📋 Datos para Transferencia (SPEI):</div>
    <div className="mb-1"><span className="text-secondary">Banco:</span> <strong>BBVA México</strong></div>
    <div className="mb-1"><span className="text-secondary">CLABE:</span> <code className="bg-white px-2 py-0.5 rounded border">0123 2000 1234 5678 90</code></div>
    <div className="mb-1"><span className="text-secondary">Beneficiario:</span> <strong>Portal en Línea S.A. de C.V.</strong></div>
    <div className="mb-1"><span className="text-secondary">Concepto:</span> <span className="text-primary fw-semibold">Nombre de tu Negocio</span></div>
    <div className="text-muted small mt-2">
      *Por favor, envía tu comprobante de pago por WhatsApp o a pagos@portalenlinea.com para activar tu orden.
    </div>
  </div>
);

// Tarjeta OXXO Pay
export const OxxoPayDetails = () => (
  <div className="bg-light p-3.5 rounded-3 border border-light" style={{ fontSize: '0.72rem', lineHeight: '1.4' }}>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="fw-bold text-dark">🔴 Pago en Efectivo (OXXO Pay):</div>
      <span className="badge bg-warning text-dark fw-bold" style={{ fontSize: '0.6rem' }}>OXXO PAY</span>
    </div>
    <p className="text-secondary small mb-2">Acude a cualquier tienda OXXO e indica al cajero que realizarás un pago de servicio con la siguiente referencia:</p>
    <div className="text-center bg-white py-2.5 rounded border border-dashed mb-2">
      <div className="fw-bold text-dark h5 mb-0" style={{ letterSpacing: '0.08em', fontFamily: 'monospace' }}>9876-5432-1098-7654</div>
    </div>
    <p className="text-muted small mb-0">*OXXO cobrará una comisión de $15 pesos al momento del pago. El cobro se procesa al instante.</p>
  </div>
);

// Simulador de Pasarela de Pago
export const CreditCardSimulator = ({ budgetAmount, onPaymentSuccess }) => {
  const [cardData, setCardData] = useState({ name: '', number: '', expiry: '', cvc: '' });
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePay = (e) => {
    e.preventDefault();
    if (!cardData.number || !cardData.name) return;
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      if (onPaymentSuccess) {
        onPaymentSuccess();
      }
    }, 2000);
  };

  const handleReset = () => {
    setCardData({ name: '', number: '', expiry: '', cvc: '' });
    setSuccess(false);
  };

  return (
    <div className="card p-4 shadow-sm border-0 bg-white">
      <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <h5 className="h6 fw-bold text-dark mb-0">Pasarela Segura (Stripe Mockup)</h5>
        <span className="text-success fw-semibold" style={{ fontSize: '0.7rem' }}>🔒 SSL Encrypted</span>
      </div>
      
      {!success ? (
        <form onSubmit={handlePay}>
          <div className="mb-2.5">
            <label className="form-label text-secondary mb-1" style={{ fontSize: '0.65rem', fontWeight: 600 }}>Nombre en la Tarjeta</label>
            <input 
              type="text" 
              className="form-control form-control-sm" 
              placeholder="Ej. Juan Pérez" 
              required
              disabled={processing}
              value={cardData.name}
              onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
            />
          </div>
          <div className="mb-2.5">
            <label className="form-label text-secondary mb-1" style={{ fontSize: '0.65rem', fontWeight: 600 }}>Número de Tarjeta</label>
            <input 
              type="text" 
              className="form-control form-control-sm" 
              placeholder="4152 •••• •••• 4242" 
              maxLength="19"
              required
              disabled={processing}
              value={cardData.number}
              onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
            />
          </div>
          <div className="row g-2">
            <div className="col-7">
              <div className="mb-2.5">
                <label className="form-label text-secondary mb-1" style={{ fontSize: '0.65rem', fontWeight: 600 }}>Expiración</label>
                <input 
                  type="text" 
                  className="form-control form-control-sm" 
                  placeholder="MM/AA" 
                  maxLength="5"
                  required
                  disabled={processing}
                  value={cardData.expiry}
                  onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                />
              </div>
            </div>
            <div className="col-5">
              <div className="mb-2.5">
                <label className="form-label text-secondary mb-1" style={{ fontSize: '0.65rem', fontWeight: 600 }}>CVC / CVV</label>
                <input 
                  type="password" 
                  className="form-control form-control-sm" 
                  placeholder="•••" 
                  maxLength="4"
                  required
                  disabled={processing}
                  value={cardData.cvc}
                  onChange={(e) => setCardData({ ...cardData, cvc: e.target.value })}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-success btn-sm w-100 mt-3 py-2 fw-semibold" disabled={processing || !budgetAmount}>
            {processing ? 'Procesando Cargo...' : `Pagar $${budgetAmount.toLocaleString()} MXN`}
          </button>
        </form>
      ) : (
        <div className="text-center py-3 bg-success-subtle rounded-3 p-3">
          <div className="text-success h1 mb-2">💳 ✔️</div>
          <h6 className="fw-bold text-success mb-1">¡Pago Simulado con Éxito!</h6>
          <p className="text-secondary small mb-2" style={{ fontSize: '0.68rem' }}>
            Se ha facturado y registrado tu pago de $<strong>{budgetAmount.toLocaleString()}</strong> MXN. Hemos enviado tu recibo de demostración.
          </p>
          <button onClick={handleReset} className="btn btn-outline-success btn-sm px-4 rounded-pill mt-2">
            Volver a pagar
          </button>
        </div>
      )}
    </div>
  );
};
