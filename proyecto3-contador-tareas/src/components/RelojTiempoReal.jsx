import React, { useState, useEffect } from 'react'

function RelojTiempoReal() {
  const [hora_actual, set_hora_actual] = useState(new Date())

  useEffect(() => {
    const intervalo = setInterval(() => {
      set_hora_actual(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalo)
    }
  }, [])

  const formato_hora = hora_actual.toLocaleTimeString('es-MX', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  const formato_fecha = hora_actual.toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="reloj_container">
      <div className="reloj_hora">{formato_hora}</div>
      <div className="reloj_fecha">{formato_fecha}</div>
    </div>
  )
}

export default RelojTiempoReal