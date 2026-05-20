import React, { useState } from 'react'
import FormularioProducto from './FormularioProducto'
import ItemProducto from './ItemProducto'
import ResumenLista from './ResumenLista'

function ListaCompras() {
  const [productos, set_productos] = useState([])
  const [producto_editando, set_producto_editando] = useState(null)

  const agregar_producto = (nuevo_producto) => {
    set_productos([...productos, { ...nuevo_producto, id: Date.now(), comprado: false }])
  }

  const eliminar_producto = (id_producto) => {
    set_productos(productos.filter(producto => producto.id !== id_producto))
  }

  const toggle_comprado = (id_producto) => {
    set_productos(productos.map(producto =>
      producto.id === id_producto 
        ? { ...producto, comprado: !producto.comprado }
        : producto
    ))
  }

  const editar_producto = (producto_actualizado) => {
    set_productos(productos.map(producto =>
      producto.id === producto_actualizado.id
        ? { ...producto_actualizado }
        : producto
    ))
    set_producto_editando(null)
  }

  const limpiar_lista = () => {
    if (window.confirm('Seguro que deseas eliminar todos los productos?')) {
      set_productos([])
    }
  }

  return (
    <div className="lista_compras_container">
      <header className="lista_header">
        <h1 className="lista_titulo">Lista de Compras</h1>
        <p className="lista_subtitulo">Agrega productos y marca los que ya compraste</p>
      </header>

      <FormularioProducto 
        on_agregar={agregar_producto}
        producto_editando={producto_editando}
        on_editar={editar_producto}
      />

      {productos.length === 0 ? (
        <div className="vacio_mensaje">
          <p>No hay productos en tu lista</p>
          <p className="vacio_submensaje">Agrega productos usando el formulario de arriba</p>
        </div>
      ) : (
        <>
          <div className="productos_lista">
            {productos.map(producto => (
              <ItemProducto 
                key={producto.id}
                producto={producto}
                on_eliminar={eliminar_producto}
                on_toggle_comprado={toggle_comprado}
                on_editar={() => set_producto_editando(producto)}
              />
            ))}
          </div>

          <ResumenLista 
            productos={productos}
            on_limpiar={limpiar_lista}
          />
        </>
      )}
    </div>
  )
}

export default ListaCompras