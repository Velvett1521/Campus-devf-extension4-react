import React from 'react'

function MensajeRetroalimentacion({ 
  juego_terminado, 
  juego_ganado, 
  ultimo_intento, 
  numero_secreto,
  total_intentos 
}) {
  
  if (!juego_terminado && !ultimo_intento) {
    return (
      <div className="mensaje_inicial">
        <p>Ingresa un numero y presiona Adivinar</p>
        <p className="mensaje_pista">Te dare pistas para ayudarte</p>
      </div>
    )
  }

  if (juego_terminado && juego_ganado) {
    return (
      <div className="mensaje_exito">
        <p className="mensaje_grande">Ganaste</p>
        <p>Acertaste en {total_intentos} intento{total_intentos !== 1 ? 's' : ''}</p>
        <p className="mensaje_felicitaciones">Eres todo un adivinador</p>
      </div>
    )
  }

  if (juego_terminado && !juego_ganado) {
    return (
      <div className="mensaje_gameover">
        <p className="mensaje_grande">Juego Terminado</p>
        <p>El numero secreto era: {numero_secreto}</p>
        <p>Presiona Reiniciar para jugar de nuevo</p>
      </div>
    )
  }

  if (ultimo_intento && !juego_terminado) {
    return (
      <div className="mensaje_pista_container">
        <p className="mensaje_pista_texto">{ultimo_intento.mensaje}</p>
        <p>Sigue intentando</p>
      </div>
    )
  }

  return null
}

export default MensajeRetroalimentacion