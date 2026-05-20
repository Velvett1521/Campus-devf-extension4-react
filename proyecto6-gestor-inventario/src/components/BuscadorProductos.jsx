import React, { useCallback } from 'react'

function BuscadorProductos({ termino_busqueda, on_buscar, total_resultados }) {
  
  const handle_change = useCallback((evento) => {
    on_buscar(evento.target.value)
  }, [on_buscar])

  const limpiar_busqueda = useCallback(() => {
    on_buscar('')
  }, [on_buscar])

  return (
    <div className="buscador_container">
      <div className="buscador_input_grupo">
        <input
          type="text"
          className="buscador_input"
          placeholder="Buscar productos por nombre..."
          value={termino_busqueda}
          onChange={handle_change}
        />
        {termino_busqueda && (
          <button className="buscador_limpiar" onClick={limpiar_busqueda}>
            Limpiar
          </button>
        )}
      </div>
      {termino_busqueda && (
        <div className="buscador_resultados">
          {total_resultados} producto{total_resultados !== 1 ? 's' : ''} encontrado{total_resultados !== 1 ? 's' : ''}
        </div>
      )}
    </div>
  )
}

export default BuscadorProductos