import React from 'react'

function ResumenLista({ productos, on_limpiar }) {
  const total_productos = productos.length
  const productos_comprados = productos.filter(p => p.comprado).length
  const productos_pendientes = total_productos - productos_comprados
  const porcentaje_completado = total_productos === 0 
    ? 0 
    : (productos_comprados / total_productos) * 100

  return (
    <div className="resumen_container">
      <div className="resumen_stats">
        <div className="stat_item">
          <span className="stat_valor">{total_productos}</span>
          <span className="stat_label">Total Productos</span>
        </div>
        <div className="stat_item">
          <span className="stat_valor">{productos_comprados}</span>
          <span className="stat_label">Comprados</span>
        </div>
        <div className="stat_item">
          <span className="stat_valor">{productos_pendientes}</span>
          <span className="stat_label">Pendientes</span>
        </div>
      </div>

      <div className="progreso_container">
        <div className="progreso_barra">
          <div 
            className="progreso_fill"
            style={{ width: `${porcentaje_completado}%` }}
          ></div>
        </div>
        <span className="progreso_texto">{Math.round(porcentaje_completado)}% completado</span>
      </div>

      {total_productos > 0 && (
        <button className="boton_limpiar" onClick={on_limpiar}>
          Limpiar Lista Completa
        </button>
      )}
    </div>
  )
}

export default ResumenLista