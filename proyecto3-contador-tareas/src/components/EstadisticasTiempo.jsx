import React, { useMemo } from 'react'

function EstadisticasTiempo({ tiempo_total, promedio_tiempo, total_tareas }) {
  const formatear_tiempo_total = useMemo(() => {
    if (tiempo_total < 60) return `${tiempo_total} minutos`
    const horas = Math.floor(tiempo_total / 60)
    const minutos = tiempo_total % 60
    return minutos === 0 ? `${horas} horas` : `${horas} horas ${minutos} minutos`
  }, [tiempo_total])

  return (
    <div className="estadisticas_container">
      <div className="estadistica_card">
        <span className="estadistica_valor">{tiempo_total}</span>
        <span className="estadistica_label">Minutos Totales</span>
        <small className="estadistica_detalle">{formatear_tiempo_total}</small>
      </div>

      <div className="estadistica_card">
        <span className="estadistica_valor">{promedio_tiempo}</span>
        <span className="estadistica_label">Promedio por Tarea</span>
        <small className="estadistica_detalle">minutos</small>
      </div>

      <div className="estadistica_card">
        <span className="estadistica_valor">{total_tareas}</span>
        <span className="estadistica_label">Total de Tareas</span>
        <small className="estadistica_detalle">registradas</small>
      </div>
    </div>
  )
}

export default EstadisticasTiempo