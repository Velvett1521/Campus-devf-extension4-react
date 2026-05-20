import React from 'react'

function InformacionPersonal({ nombre, profesion }) {
  const iniciales = nombre
    .split(' ')
    .map(palabra => palabra[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="informacion_container">
      <div className="avatar_circulo">
        <span className="iniciales">{iniciales}</span>
      </div>
      <h2 className="nombre_completo">{nombre}</h2>
      <p className="profesion_tag">{profesion}</p>
    </div>
  )
}

export default InformacionPersonal