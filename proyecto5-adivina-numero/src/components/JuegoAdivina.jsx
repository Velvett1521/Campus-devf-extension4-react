import React, { useState, useEffect } from 'react'
import FormularioIntento from './FormularioIntento'
import MensajeRetroalimentacion from './MensajeRetroalimentacion'
import HistorialIntentos from './HistorialIntentos'
import PanelControl from './PanelControl'
import BotonReinicio from './BotonReinicio'

function JuegoAdivina() {
  const [numero_secreto, set_numero_secreto] = useState(null)
  const [intentos, set_intentos] = useState([])
  const [juego_terminado, set_juego_terminado] = useState(false)
  const [intento_actual, set_intento_actual] = useState('')
  const [rango_minimo, set_rango_minimo] = useState(1)
  const [rango_maximo, set_rango_maximo] = useState(100)

  useEffect(() => {
    reiniciar_juego()
  }, [])

  const generar_numero_secreto = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const reiniciar_juego = () => {
    const nuevo_minimo = rango_minimo
    const nuevo_maximo = rango_maximo
    const nuevo_numero = generar_numero_secreto(nuevo_minimo, nuevo_maximo)
    
    set_numero_secreto(nuevo_numero)
    set_intentos([])
    set_juego_terminado(false)
    set_intento_actual('')
    
    console.log('Numero secreto:', nuevo_numero)
  }

  const cambiar_rango = (nuevo_minimo, nuevo_maximo) => {
    if (nuevo_minimo < nuevo_maximo) {
      set_rango_minimo(nuevo_minimo)
      set_rango_maximo(nuevo_maximo)
      const nuevo_numero = generar_numero_secreto(nuevo_minimo, nuevo_maximo)
      set_numero_secreto(nuevo_numero)
      set_intentos([])
      set_juego_terminado(false)
      set_intento_actual('')
      console.log('Nuevo rango:', nuevo_minimo, '-', nuevo_maximo, 'Numero:', nuevo_numero)
    }
  }

  const verificar_intento = (valor_intento) => {
    if (juego_terminado) return
    
    const numero_intento = parseInt(valor_intento)
    
    if (isNaN(numero_intento)) {
      return
    }
    
    let mensaje = ''
    let es_acierto = false
    
    if (numero_intento === numero_secreto) {
      mensaje = 'FELICIDADES Adivinaste el numero'
      es_acierto = true
      set_juego_terminado(true)
    } else if (numero_intento < numero_secreto) {
      mensaje = 'El numero es mayor subele'
    } else {
      mensaje = 'El numero es menor bajele'
    }
    
    const nuevo_intento = {
      id: `${Date.now()}_${Math.random()}`,
      valor: numero_intento,
      mensaje: mensaje,
      es_acierto: es_acierto,
      timestamp: new Date().toLocaleTimeString()
    }
    
    set_intentos(prev => [nuevo_intento, ...prev])
    set_intento_actual('')
  }

  const handle_submit = (valor) => {
    verificar_intento(valor)
  }

  const total_intentos = intentos.length
  const ultimo_intento = intentos.length > 0 ? intentos[0] : null
  const juego_ganado = juego_terminado && ultimo_intento?.es_acierto

  return (
    <div className="juego_container">
      <div className="juego_header">
        <h1 className="juego_titulo">Adivina el Numero</h1>
        <p className="juego_subtitulo">
          He pensado un numero entre {rango_minimo} y {rango_maximo}. Adivina cual es
        </p>
      </div>

      <PanelControl 
        rango_minimo={rango_minimo}
        rango_maximo={rango_maximo}
        on_cambiar_rango={cambiar_rango}
        total_intentos={total_intentos}
      />

      <MensajeRetroalimentacion 
        juego_terminado={juego_terminado}
        juego_ganado={juego_ganado}
        ultimo_intento={ultimo_intento}
        numero_secreto={numero_secreto}
        total_intentos={total_intentos}
      />

      <FormularioIntento 
        onSubmit={handle_submit}
        intento_actual={intento_actual}
        set_intento_actual={set_intento_actual}
        deshabilitado={juego_terminado}
      />

      <HistorialIntentos intentos={intentos} />

      <BotonReinicio on_reiniciar={reiniciar_juego} />
    </div>
  )
}

export default JuegoAdivina