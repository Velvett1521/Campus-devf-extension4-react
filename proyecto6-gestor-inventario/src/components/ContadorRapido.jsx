import React, { useEffect, useRef } from 'react'

function ContadorRapido({ contador_global }) {
  const prev_contador_ref = useRef(contador_global)
  const animacion_ref = useRef(null)

  useEffect(() => {
    if (prev_contador_ref.current !== contador_global) {
      if (animacion_ref.current) {
        animacion_ref.current.classList.add('actualizando')
        setTimeout(() => {
          if (animacion_ref.current) {
            animacion_ref.current.classList.remove('actualizando')
          }
        }, 500)
      }
      prev_contador_ref.current = contador_global
    }
  }, [contador_global])

  return (
    <div className="contador_rapido">
      <div className="contador_icono">⚡</div>
      <div className="contador_info">
        <span className="contador_label">Acciones Globales</span>
        <span className="contador_valor" ref={animacion_ref}>
          {contador_global}
        </span>
        <span className="contador_descripcion">Total de cambios en el estado</span>
      </div>
    </div>
  )
}

export default ContadorRapido