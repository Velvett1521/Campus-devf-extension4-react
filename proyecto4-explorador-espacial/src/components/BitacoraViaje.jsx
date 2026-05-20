import React, { useMemo } from 'react'

function BitacoraViaje({ planetas_visitados, distancia_viajada, on_recargar }) {
  const total_planetas = planetas_visitados.length
  
  const resumen_viaje = useMemo(() => {
    if (total_planetas === 0) return 'Aun no has visitado ningun planeta'
    
    const ultimo_planeta = planetas_visitados[planetas_visitados.length - 1]
    return `Ultimo destino: ${ultimo_planeta.nombre}`
  }, [planetas_visitados])

  return (
    <div className="bitacora_container">
      <h3 className="componente_titulo">Bitacora de Viaje</h3>
      
      <div className="bitacora_stats">
        <div className="bitacora_stat">
          <span className="stat_numero">{distancia_viajada}</span>
          <span className="stat_label">Unidades Viajadas</span>
        </div>
        <div className="bitacora_stat">
          <span className="stat_numero">{total_planetas}</span>
          <span className="stat_label">Planetas Visitados</span>
        </div>
      </div>

      <div className="resumen_viaje">
        <span className="resumen_texto">{resumen_viaje}</span>
      </div>

      {planetas_visitados.length > 0 && (
        <div className="planetas_visitados_lista">
          <h4>Historial de Exploracion:</h4>
          {planetas_visitados.slice(-5).reverse().map(planeta => (
            <div key={planeta.fecha_visita} className="visita_registro">
              <span className="visita_nombre">{planeta.nombre}</span>
              <span className="visita_fecha">{planeta.fecha_visita}</span>
            </div>
          ))}
        </div>
      )}

      <button className="boton_recargar" onClick={on_recargar}>
        Recargar Combustible
      </button>
    </div>
  )
}

export default BitacoraViaje