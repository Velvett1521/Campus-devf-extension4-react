import React, { useEffect, useRef } from 'react'

function RegistroEventos({ eventos, on_limpiar }) {
  const contenedor_ref = useRef(null)

  useEffect(() => {
    if (contenedor_ref.current) {
      contenedor_ref.current.scrollTop = 0
    }
  }, [eventos])

  const obtener_color_evento = (mensaje) => {
    if (mensaje.includes('ERROR')) return '#ef4444'
    if (mensaje.includes('ADVERTENCIA')) return '#f59e0b'
    if (mensaje.includes('PELIGRO')) return '#dc2626'
    if (mensaje.includes('MOTOR')) return '#10b981'
    if (mensaje.includes('VIAJE') || mensaje.includes('DESTINO')) return '#06b6d4'
    if (mensaje.includes('MEMO')) return '#8b5cf6'
    if (mensaje.includes('COMPONENTE MONTADO')) return '#22c55e'
    if (mensaje.includes('COMPONENTE DESMONTADO')) return '#6b7280'
    return '#64748b'
  }

  return (
    <div className="registro_container">
      <div className="registro_header">
        <h3 className="componente_titulo">Registro de Eventos - Ciclo de Vida</h3>
        <button className="boton_limpiar_registro" onClick={on_limpiar}>
          Limpiar Registro
        </button>
      </div>
      
      <div className="eventos_lista" ref={contenedor_ref}>
        {eventos.length === 0 ? (
          <div className="sin_eventos">
            <p>No hay eventos registrados</p>
            <p>Las acciones activaran notificaciones del ciclo de vida</p>
          </div>
        ) : (
          eventos.map(evento => (
            <div key={evento.id} className="evento_item">
              <span className="evento_tiempo">[{evento.timestamp}]</span>
              <span 
                className="evento_mensaje"
                style={{ color: obtener_color_evento(evento.mensaje) }}
              >
                {evento.mensaje}
              </span>
            </div>
          ))
        )}
      </div>

      <div className="leyenda_eventos">
        <div className="leyenda_titulo">Eventos que puedes observar:</div>
        <div className="leyenda_items">
          <span className="leyenda_item">Montaje - Al iniciar</span>
          <span className="leyenda_item">Actualizacion - Al cambiar estado</span>
          <span className="leyenda_item">Memo - Calculos optimizados</span>
          <span className="leyenda_item">Efectos - Combustible, motor, viajes</span>
        </div>
      </div>
    </div>
  )
}

export default RegistroEventos