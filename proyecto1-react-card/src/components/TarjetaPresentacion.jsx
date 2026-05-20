import React from 'react'
import InformacionPersonal from './InformacionPersonal'
import MensajeBienvenida from './MensajeBienvenida'
import BotonSocial from './BotonSocial'

function TarjetaPresentacion({ nombre, profesion, mensaje }) {
  const redes_sociales = [
    { plataforma: "GitHub", url: "https://github.com/Velvett1521", icono: "🐙" },
  ]

  return (
    <div className="tarjeta_container">
      <InformacionPersonal 
        nombre={nombre}
        profesion={profesion}
      />
      <MensajeBienvenida mensaje={mensaje} />
      <div className="redes_section">
        <h3 className="redes_titulo">Conecta conmigo</h3>
        <div className="botones_container">
          {redes_sociales.map((red, indice) => (
            <BotonSocial 
              key={indice}
              plataforma={red.plataforma}
              url={red.url}
              icono={red.icono}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TarjetaPresentacion