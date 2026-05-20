import React, { useEffect, useState } from 'react'

function IndicadorCombustible({ combustible, distancia_maxima }) {
  const [animacion_activa, set_animacion_activa] = useState(false)

  useEffect(() => {
    if (combustible <= 30) {
      set_animacion_activa(true)
      const timer = setTimeout(() => set_animacion_activa(false), 500)
      return () => clearTimeout(timer)
    }
  }, [combustible])

  const color_combustible = () => {
    if (combustible > 70) return '#10b981'
    if (combustible > 30) return '#f59e0b'
    return '#ef4444'
  }

  return (
    <div className="indicador_container">
      <h3 className="componente_titulo">Indicador de Combustible</h3>
      <div className="combustible_barra_container">
        <div 
          className="combustible_barra"
          style={{
            width: `${combustible}porciento`,
            backgroundColor: color_combustible(),
            animation: animacion_activa ? 'parpadeo 0.5s ease-in-out' : 'none'
          }}
        >
          <span className="combustible_texto">{combustible}porciento</span>
        </div>
      </div>
      <div className="combustible_info">
        <span>Distancia maxima alcanzable: {distancia_maxima} unidades</span>
      </div>
    </div>
  )
}

export default IndicadorCombustible
