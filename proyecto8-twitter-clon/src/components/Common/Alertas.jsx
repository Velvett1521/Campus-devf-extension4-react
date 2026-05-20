import React from 'react'

function Alertas({ mensaje, tipo, on_cerrar }) {
  if (!mensaje) return null

  return (
    <div className={`alerta alerta_${tipo}`}>
      <span>{mensaje}</span>
      <button onClick={on_cerrar} className="alerta_cerrar">×</button>
    </div>
  )
}

export default Alertas