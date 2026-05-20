import React, { useState } from 'react'

function ItemTarea({ tarea, on_eliminar, on_toggle_completada, on_editar_tiempo }) {
  const [editando_tiempo, set_editando_tiempo] = useState(false)
  const [tiempo_temporal, set_tiempo_temporal] = useState(tarea.tiempo)

  const handle_guardar_tiempo = () => {
    on_editar_tiempo(tarea.id, tiempo_temporal)
    set_editando_tiempo(false)
  }

  const formatear_tiempo = (minutos) => {
    if (minutos < 60) return `${minutos} min`
    const horas = Math.floor(minutos / 60)
    const mins_restantes = minutos % 60
    return mins_restantes === 0 ? `${horas} h` : `${horas} h ${mins_restantes} min`
  }

  return (
    <div className={`item_tarea ${tarea.completada ? 'item_completada' : ''}`}>
      <div className="tarea_checkbox">
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => on_toggle_completada(tarea.id)}
        />
      </div>

      <div className="tarea_info">
        <h3 className="tarea_nombre">{tarea.nombre}</h3>
        <div className="tarea_meta">
          {editando_tiempo ? (
            <div className="tiempo_editor">
              <input
                type="number"
                className="tiempo_input"
                value={tiempo_temporal}
                onChange={(e) => set_tiempo_temporal(parseInt(e.target.value) || 0)}
                min="0"
                step="5"
                autoFocus
              />
              <button className="tiempo_guardar" onClick={handle_guardar_tiempo}>
                Guardar
              </button>
              <button className="tiempo_cancelar" onClick={() => set_editando_tiempo(false)}>
                Cancelar
              </button>
            </div>
          ) : (
            <span className="tarea_tiempo" onClick={() => set_editando_tiempo(true)}>
              Tiempo: {formatear_tiempo(tarea.tiempo)}
              <span className="editar_icono">✎</span>
            </span>
          )}
        </div>
      </div>

      <button 
        className="boton_eliminar_tarea"
        onClick={() => on_eliminar(tarea.id)}
      >
        Eliminar
      </button>
    </div>
  )
}

export default ItemTarea