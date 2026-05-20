import React, { useState, useEffect, useMemo, useCallback } from 'react'
import IndicadorCombustible from './IndicadorCombustible'
import MapaEstelar from './MapaEstelar'
import BitacoraViaje from './BitacoraViaje'
import MotorNave from './MotorNave'
import RegistroEventos from './RegistroEventos'

function PanelControl() {
  const [distancia_viajada, set_distancia_viajada] = useState(0)
  const [combustible, set_combustible] = useState(100)
  const [motor_encendido, set_motor_encendido] = useState(false)
  const [planetas_visitados, set_planetas_visitados] = useState([])
  const [eventos_ciclo_vida, set_eventos_ciclo_vida] = useState([])

  const planetas_disponibles = [
    { nombre: 'Marte', distancia: 150, combustible_requerido: 30 },
    { nombre: 'Jupiter', distancia: 350, combustible_requerido: 60 },
    { nombre: 'Saturno', distancia: 500, combustible_requerido: 80 },
    { nombre: 'Andromeda', distancia: 1000, combustible_requerido: 95 }
  ]

  let contador_eventos = 0

  const agregar_evento = useCallback((evento) => {
    contador_eventos = contador_eventos + 1
    const nuevo_evento = {
      id: `${Date.now()}_${contador_eventos}_${Math.random()}`,
      mensaje: evento,
      timestamp: new Date().toLocaleTimeString()
    }
    set_eventos_ciclo_vida(prev => [nuevo_evento, ...prev].slice(0, 20))
  }, [])

  const distancia_maxima_posible = useMemo(() => {
    agregar_evento('MEMO - Calculando distancia maxima posible')
    return combustible * 10
  }, [combustible, agregar_evento])

  const planetas_alcanzables = useMemo(() => {
    agregar_evento('MEMO - Calculando planetas alcanzables')
    return planetas_disponibles.filter(planeta => 
      planeta.distancia <= distancia_maxima_posible
    )
  }, [distancia_maxima_posible, agregar_evento])

  useEffect(() => {
    agregar_evento('COMPONENTE MONTADO - Panel de control iniciado')
    
    return () => {
      agregar_evento('COMPONENTE DESMONTADO - Panel de control cerrado')
    }
  }, [agregar_evento])

  useEffect(() => {
    if (distancia_viajada > 0) {
      agregar_evento(`ACTUALIZACION - Distancia viajada: ${distancia_viajada} unidades`)
    }
  }, [distancia_viajada, agregar_evento])

  useEffect(() => {
    if (combustible <= 30 && combustible > 0) {
      agregar_evento(`ADVERTENCIA - Combustible bajo: ${combustible} porciento`)
    }
    
    if (combustible === 0) {
      agregar_evento('PELIGRO - Combustible agotado, nave detenida')
      set_motor_encendido(false)
    }
  }, [combustible, agregar_evento])

  const viajar_a_planeta = useCallback((planeta) => {
    if (!motor_encendido) {
      agregar_evento('ERROR - Motor apagado, no se puede viajar')
      return
    }

    if (combustible < planeta.combustible_requerido) {
      agregar_evento(`ERROR - Combustible insuficiente para llegar a ${planeta.nombre}`)
      return
    }

    agregar_evento(`VIAJE INICIADO - Rumbo a ${planeta.nombre}`)
    
    setTimeout(() => {
      set_combustible(prev => prev - planeta.combustible_requerido)
      set_distancia_viajada(prev => prev + planeta.distancia)
      set_planetas_visitados(prev => [...prev, {
        ...planeta,
        fecha_visita: new Date().toLocaleString(),
        id_visita: `${Date.now()}_${Math.random()}`
      }])
      agregar_evento(`DESTINO ALCANZADO - Llegada a ${planeta.nombre}`)
    }, 1000)
  }, [motor_encendido, combustible, agregar_evento])

  const recargar_combustible = useCallback(() => {
    agregar_evento('RECARGA - Iniciando recarga de combustible')
    set_combustible(100)
    agregar_evento('RECARGA COMPLETA - Combustible al 100 porciento')
  }, [agregar_evento])

  const toggle_motor = useCallback(() => {
    const nuevo_estado = !motor_encendido
    set_motor_encendido(nuevo_estado)
    agregar_evento(`MOTOR - Motor ${nuevo_estado ? 'ENCENDIDO' : 'APAGADO'}`)
  }, [motor_encendido, agregar_evento])

  const limpiar_bitacora = useCallback(() => {
    agregar_evento('BITACORA - Limpiando registro de eventos')
    set_eventos_ciclo_vida([])
  }, [agregar_evento])

  return (
    <div className="panel_control_container">
      <div className="panel_header">
        <h1 className="panel_titulo">Panel de Control Espacial</h1>
        <p className="panel_subtitulo">Ciclo de Vida de Componentes - Explorador Interestelar</p>
      </div>

      <div className="panel_grid">
        <IndicadorCombustible 
          combustible={combustible}
          distancia_maxima={distancia_maxima_posible}
        />

        <MotorNave 
          motor_encendido={motor_encendido}
          on_toggle_motor={toggle_motor}
        />

        <MapaEstelar 
          planetas_alcanzables={planetas_alcanzables}
          on_viajar={viajar_a_planeta}
          motor_encendido={motor_encendido}
          combustible={combustible}
        />

        <BitacoraViaje 
          planetas_visitados={planetas_visitados}
          distancia_viajada={distancia_viajada}
          on_recargar={recargar_combustible}
        />
      </div>

      <RegistroEventos 
        eventos={eventos_ciclo_vida}
        on_limpiar={limpiar_bitacora}
      />
    </div>
  )
}

export default PanelControl