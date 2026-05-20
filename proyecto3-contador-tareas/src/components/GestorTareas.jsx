import React, { useState, useEffect, useMemo } from 'react'
import FormularioTarea from './FormularioTarea'
import ListaTareas from './ListaTareas'
import RelojTiempoReal from './RelojTiempoReal'
import EstadisticasTiempo from './EstadisticasTiempo'

function GestorTareas() {
  const [tareas, set_tareas] = useState([])
  const [filtro, set_filtro] = useState('todas')

  useEffect(() => {
    const tareas_guardadas = localStorage.getItem('tareas_contador')
    if (tareas_guardadas) {
      set_tareas(JSON.parse(tareas_guardadas))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tareas_contador', JSON.stringify(tareas))
  }, [tareas])

  const tiempo_total = useMemo(() => {
    console.log('Calculando tiempo total...')
    return tareas.reduce((total, tarea) => total + tarea.tiempo, 0)
  }, [tareas])

  const promedio_tiempo = useMemo(() => {
    console.log('Calculando promedio de tiempo...')
    if (tareas.length === 0) return 0
    return (tiempo_total / tareas.length).toFixed(1)
  }, [tiempo_total, tareas.length])

  const tareas_filtradas = useMemo(() => {
    console.log('Filtrando tareas...')
    if (filtro === 'completadas') {
      return tareas.filter(tarea => tarea.completada)
    }
    if (filtro === 'pendientes') {
      return tareas.filter(tarea => !tarea.completada)
    }
    return tareas
  }, [tareas, filtro])

  const agregar_tarea = (nueva_tarea) => {
    set_tareas([...tareas, {
      ...nueva_tarea,
      id: Date.now(),
      completada: false,
      tiempo: parseInt(nueva_tarea.tiempo) || 0
    }])
  }

  const eliminar_tarea = (id_tarea) => {
    set_tareas(tareas.filter(tarea => tarea.id !== id_tarea))
  }

  const toggle_completada = (id_tarea) => {
    set_tareas(tareas.map(tarea =>
      tarea.id === id_tarea
        ? { ...tarea, completada: !tarea.completada }
        : tarea
    ))
  }

  const editar_tiempo = (id_tarea, nuevo_tiempo) => {
    set_tareas(tareas.map(tarea =>
      tarea.id === id_tarea
        ? { ...tarea, tiempo: parseInt(nuevo_tiempo) || 0 }
        : tarea
    ))
  }

  return (
    <div className="gestor_tareas_container">
      <RelojTiempoReal />

      <div className="tareas_header">
        <h1 className="tareas_titulo">Contador de Tareas</h1>
        <p className="tareas_subtitulo">Registra el tiempo dedicado a cada tarea</p>
      </div>

      <EstadisticasTiempo 
        tiempo_total={tiempo_total}
        promedio_tiempo={promedio_tiempo}
        total_tareas={tareas.length}
      />

      <FormularioTarea on_agregar={agregar_tarea} />

      <div className="filtros_container">
        <button 
          className={`filtro_boton ${filtro === 'todas' ? 'activo' : ''}`}
          onClick={() => set_filtro('todas')}
        >
          Todas
        </button>
        <button 
          className={`filtro_boton ${filtro === 'pendientes' ? 'activo' : ''}`}
          onClick={() => set_filtro('pendientes')}
        >
          Pendientes
        </button>
        <button 
          className={`filtro_boton ${filtro === 'completadas' ? 'activo' : ''}`}
          onClick={() => set_filtro('completadas')}
        >
          Completadas
        </button>
      </div>

      <ListaTareas 
        tareas={tareas_filtradas}
        on_eliminar={eliminar_tarea}
        on_toggle_completada={toggle_completada}
        on_editar_tiempo={editar_tiempo}
      />
    </div>
  )
}

export default GestorTareas