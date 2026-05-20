import React, { useState } from 'react'

function MapaEstelar({ planetas_alcanzables, on_viajar, motor_encendido, combustible }) {
  const [planeta_seleccionado, set_planeta_seleccionado] = useState(null)

  const handle_viajar = () => {
    if (planeta_seleccionado) {
      on_viajar(planeta_seleccionado)
      set_planeta_seleccionado(null)
    }
  }

  return (
    <div className="mapa_container">
      <h3 className="componente_titulo">Mapa Estelar</h3>
      <div className="planetas_lista">
        {planetas_alcanzables.length === 0 ? (
          <div className="sin_planetas">
            <p>No hay planetas alcanzables</p>
            <p className="sin_planetas_sub">Recarga combustible para viajar mas lejos</p>
          </div>
        ) : (
          planetas_alcanzables.map(planeta => (
            <div 
              key={planeta.nombre}
              className={`planeta_card ${planeta_seleccionado?.nombre === planeta.nombre ? 'seleccionado' : ''}`}
              onClick={() => set_planeta_seleccionado(planeta)}
            >
              <div className="planeta_nombre">{planeta.nombre}</div>
              <div className="planeta_info">
                <span>Distancia: {planeta.distancia} unidades</span>
                <span>Combustible: {planeta.combustible_requerido} porciento</span>
              </div>
            </div>
          ))
        )}
      </div>
      
      <button 
        className="boton_viajar"
        onClick={handle_viajar}
        disabled={!planeta_seleccionado || !motor_encendido || combustible === 0}
      >
        Viajar al Planeta
      </button>
      
      {!motor_encendido && (
        <p className="advertencia_viaje">Motor apagado, no se puede viajar</p>
      )}
      {combustible === 0 && motor_encendido && (
        <p className="advertencia_viaje">Combustible agotado, recarga necesaria</p>
      )}
    </div>
  )
}

export default MapaEstelar