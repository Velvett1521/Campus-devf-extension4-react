import React, { useState, useCallback } from 'react'

function ItemProducto({ producto, on_eliminar, on_actualizar_cantidad, on_actualizar_precio }) {
  const [editando_cantidad, set_editando_cantidad] = useState(false)
  const [editando_precio, set_editando_precio] = useState(false)
  const [cantidad_temporal, set_cantidad_temporal] = useState(producto.cantidad)
  const [precio_temporal, set_precio_temporal] = useState(producto.precio)

  const valor_total = producto.precio * producto.cantidad

  const guardar_cantidad = useCallback(() => {
    on_actualizar_cantidad(producto.id, cantidad_temporal)
    set_editando_cantidad(false)
  }, [producto.id, cantidad_temporal, on_actualizar_cantidad])

  const guardar_precio = useCallback(() => {
    on_actualizar_precio(producto.id, precio_temporal)
    set_editando_precio(false)
  }, [producto.id, precio_temporal, on_actualizar_precio])

  return (
    <div className="producto_card">
      <div className="producto_header">
        <h4 className="producto_nombre">{producto.nombre}</h4>
        <button 
          className="producto_boton_eliminar"
          onClick={() => on_eliminar(producto.id)}
        >
          Eliminar
        </button>
      </div>
      
      <div className="producto_detalles">
        <div className="detalle_grupo">
          <span className="detalle_label">Cantidad:</span>
          {editando_cantidad ? (
            <div className="detalle_editor">
              <input
                type="number"
                className="detalle_input"
                value={cantidad_temporal}
                onChange={(e) => set_cantidad_temporal(parseInt(e.target.value) || 0)}
                min="0"
                autoFocus
              />
              <button className="detalle_guardar" onClick={guardar_cantidad}>Guardar</button>
              <button className="detalle_cancelar" onClick={() => set_editando_cantidad(false)}>Cancelar</button>
            </div>
          ) : (
            <span 
              className="detalle_valor editable"
              onClick={() => set_editando_cantidad(true)}
            >
              {producto.cantidad} unidades ✎
            </span>
          )}
        </div>
        
        <div className="detalle_grupo">
          <span className="detalle_label">Precio unitario:</span>
          {editando_precio ? (
            <div className="detalle_editor">
              <input
                type="number"
                className="detalle_input"
                value={precio_temporal}
                onChange={(e) => set_precio_temporal(parseFloat(e.target.value) || 0)}
                step="0.01"
                min="0"
                autoFocus
              />
              <button className="detalle_guardar" onClick={guardar_precio}>Guardar</button>
              <button className="detalle_cancelar" onClick={() => set_editando_precio(false)}>Cancelar</button>
            </div>
          ) : (
            <span 
              className="detalle_valor editable"
              onClick={() => set_editando_precio(true)}
            >
              ${producto.precio.toFixed(2)} ✎
            </span>
          )}
        </div>
        
        <div className="detalle_grupo total">
          <span className="detalle_label">Valor total:</span>
          <span className="detalle_valor_total">${valor_total.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="producto_fecha">
        Agregado: {producto.fecha_creacion}
      </div>
    </div>
  )
}

export default ItemProducto