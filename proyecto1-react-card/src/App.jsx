import React from 'react'
import TarjetaPresentacion from './components/TarjetaPresentacion'

function App() {
  const nombre_completo = "Carlos Emmanuel Díaz Fuentes"
  const profesion = "Desarrollador Web Full Stack"
  const mensaje_personal = "Apasionado por crear experiencias web interactivas y accesibles"
  
  return (
    <div className="app_container">
      <TarjetaPresentacion 
        nombre={nombre_completo}
        profesion={profesion}
        mensaje={mensaje_personal}
      />
    </div>
  )
}

export default App