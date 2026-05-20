import React from 'react'

function EstadisticasInventario({ total_productos, valor_total_inventario, ultima_accion }) {
  return (
    <div className="estadisticas_inventario">
      <div className="estadistica_card">
        <span className="estadistica_valor">{total_productos}</span>
        <span className="estadistica_label">Productos</span>
      </div>
      
      <div className="estadistica_card">
        <span className="estadistica_valor">${valor_total_inventario.toFixed(2)}</span>
        <span className="estadistica_label">Valor Total</span>
      </div>
      
      <div className="estadistica_card ultima_accion">
        <span className="estadistica_label">Ultima Accion</span>
        <span className="estadistica_valor_small">{ultima_accion || 'Sin acciones'}</span>
      </div>
    </div>
  )
}

export default EstadisticasInventario