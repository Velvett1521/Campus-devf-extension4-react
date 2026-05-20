import React from 'react'

function BotonReinicio({ on_reiniciar }) {
  return (
    <div className="boton_reinicio_container">
      <button className="boton_reinicio" onClick={on_reiniciar}>
        Reiniciar Juego
      </button>
    </div>
  )
}

export default BotonReinicio