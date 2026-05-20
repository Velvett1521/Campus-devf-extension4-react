import React from 'react'

function HistorialIntentos({ intentos }) {
  if (intentos.length === 0) {
    return (
      <div className="historial_vacio">
        <p>Aun no has realizado intentos</p>
        <p className="historial_sub">Ingresa un numero para comenzar</p>
      </div>
    )
  }

  const obtener_clase_mensaje = (es_acierto, mensaje) => {
    if (es_acierto) return 'mensaje_acierto'
    if (mensaje.includes('mayor')) return 'mensaje_mayor'
    if (mensaje.includes('menor')) return 'mensaje_menor'
    return 'mensaje_normal'
  }

  return (
    <div className="historial_container">
      <h3 className="historial_titulo">Historial de Intentos</h3>
      <div className="historial_lista">
        {intentos.map((intento) => (
          <div key={intento.id} className="historial_item">
            <div className="historial_valor">
              Intento: {intento.valor}
            </div>
            <div className={`historial_mensaje ${obtener_clase_mensaje(intento.es_acierto, intento.mensaje)}`}>
              {intento.mensaje}
            </div>
            <div className="historial_tiempo">
              {intento.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HistorialIntentos