import React from 'react'
import ItemTarea from './ItemTarea'

function ListaTareas({ tareas, on_eliminar, on_toggle_completada, on_editar_tiempo }) {
  if (tareas.length === 0) {
    return (
      <div className="lista_vacia">
        <p>No hay tareas registradas</p>
        <p className="lista_vacia_sub">Agrega una tarea usando el formulario</p>
      </div>
    )
  }

  return (
    <div className="lista_tareas">
      {tareas.map(tarea => (
        <ItemTarea 
          key={tarea.id}
          tarea={tarea}
          on_eliminar={on_eliminar}
          on_toggle_completada={on_toggle_completada}
          on_editar_tiempo={on_editar_tiempo}
        />
      ))}
    </div>
  )
}

export default ListaTareas