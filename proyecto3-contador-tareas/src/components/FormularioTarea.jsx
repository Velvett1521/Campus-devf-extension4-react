import React, { useState } from 'react'

function FormularioTarea({ on_agregar }) {
  const [nombre_tarea, set_nombre_tarea] = useState('')
  const [tiempo_estimado, set_tiempo_estimado] = useState(30)

  const handle_submit = (evento) => {
    evento.preventDefault()
    
    if (nombre_tarea.trim() === '') {
      alert('Por favor ingresa un nombre para la tarea')
      return
    }

    on_agregar({
      nombre: nombre_tarea.trim(),
      tiempo: tiempo_estimado
    })

    set_nombre_tarea('')
    set_tiempo_estimado(30)
  }

  return (
    <form className="formulario_tarea" onSubmit={handle_submit}>
      <div className="formulario_grupo">
        <input
          type="text"
          className="formulario_input"
          placeholder="Nombre de la tarea"
          value={nombre_tarea}
          onChange={(e) => set_nombre_tarea(e.target.value)}
        />
      </div>

      <div className="formulario_grupo_row">
        <div className="formulario_grupo_small">
          <label className="formulario_label">Tiempo (minutos)</label>
          <input
            type="number"
            className="formulario_input"
            value={tiempo_estimado}
            onChange={(e) => set_tiempo_estimado(parseInt(e.target.value) || 0)}
            min="0"
            step="5"
          />
        </div>

        <button type="submit" className="boton_submit">
          Agregar Tarea
        </button>
      </div>
    </form>
  )
}

export default FormularioTarea