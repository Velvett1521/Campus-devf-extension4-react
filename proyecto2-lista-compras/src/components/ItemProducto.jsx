import React from 'react'

function ItemProducto({ producto, on_eliminar, on_toggle_comprado, on_editar }) {
  const categoria_colores = {
    frutas_verduras: '#22c55e',
    lacteos: '#eab308',
    carnes: '#ef4444',
    despensa: '#f97316',
    limpieza: '#06b6d4',
    otros: '#8b5cf6'
  }

  const categoria_nombres = {
    frutas_verduras: 'Frutas y Verduras',
    lacteos: 'Lacteos',
    carnes: 'Carnes y Pescados',
    despensa: 'Despensa',
    limpieza: 'Limpieza',
    otros: 'Otros'
  }

  return (
    <div className={`item_producto ${producto.comprado ? 'item_comprado' : ''}`}>
      <div className="item_checkbox">
        <input
          type="checkbox"
          checked={producto.comprado}
          onChange={() => on_toggle_comprado(producto.id)}
        />
      </div>

      <div className="item_info">
        <h3 className="item_nombre">{producto.nombre}</h3>
        <div className="item_meta">
          <span className="item_cantidad">Cantidad: {producto.cantidad}</span>
          <span 
            className="item_categoria"
            style={{ backgroundColor: categoria_colores[producto.categoria] || '#6b7280' }}
          >
            {categoria_nombres[producto.categoria] || 'Otros'}
          </span>
        </div>
      </div>

      <div className="item_acciones">
        <button 
          className="boton_editar"
          onClick={on_editar}
        >
          Editar
        </button>
        <button 
          className="boton_eliminar"
          onClick={() => on_eliminar(producto.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default ItemProducto