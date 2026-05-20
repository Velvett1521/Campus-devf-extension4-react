import React from 'react'
import ItemProducto from './ItemProducto'

function ListaInventario({ productos, on_eliminar, on_actualizar_cantidad, on_actualizar_precio }) {
  if (productos.length === 0) {
    return (
      <div className="lista_vacia">
        <p>No hay productos en el inventario</p>
        <p className="lista_vacia_sub">Agrega productos usando el formulario</p>
      </div>
    )
  }

  return (
    <div className="lista_inventario">
      <h3 className="lista_titulo">Productos en Inventario</h3>
      <div className="productos_grid">
        {productos.map(producto => (
          <ItemProducto 
            key={producto.id}
            producto={producto}
            on_eliminar={on_eliminar}
            on_actualizar_cantidad={on_actualizar_cantidad}
            on_actualizar_precio={on_actualizar_precio}
          />
        ))}
      </div>
    </div>
  )
}

export default ListaInventario