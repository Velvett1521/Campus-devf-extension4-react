import React from 'react'

function BotonSocial({ plataforma, url, icono }) {
  const handle_click = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <button 
      className="boton_social"
      onClick={handle_click}
      aria-label={`Visitar perfil de ${plataforma}`}
    >
      <span className="boton_icono">{icono}</span>
      <span className="boton_texto">{plataforma}</span>
    </button>
  )
}

export default BotonSocial