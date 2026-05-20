import React from 'react'

function MensajeBienvenida({ mensaje }) {
  const mensaje_bienvenida = `✨ ${mensaje} ✨`
  
  return (
    <div className="mensaje_container">
      <p className="mensaje_texto">{mensaje_bienvenida}</p>
      <div className="decoracion_linea"></div>
    </div>
  )
}

export default MensajeBienvenida