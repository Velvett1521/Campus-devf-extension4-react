import React, { useRef, useCallback, useState } from 'react'
import { useInventarioReducer } from '../hooks/useInventarioReducer'
import FormularioProducto from './FormularioProducto'
import ListaInventario from './ListaInventario'
import EstadisticasInventario from './EstadisticasInventario'
import BuscadorProductos from './BuscadorProductos'
import ContadorRapido from './ContadorRapido'

function GestorInventario() {
  const {
    productos,
    contador_global,
    ultima_accion,
    total_productos,
    valor_total_inventario,
    agregar_producto,
    eliminar_producto,
    actualizar_cantidad,
    actualizar_precio,
    limpiar_inventario
  } = useInventarioReducer()

  const [termino_busqueda, set_termino_busqueda] = useState('')
  const input_nombre_ref = useRef(null)
  const contador_ref = useRef(0)

  contador_ref.current = contador_global

  const productos_filtrados = useCallback(() => {
    if (termino_busqueda.trim() === '') {
      return productos
    }
    return productos.filter(producto =>
      producto.nombre.toLowerCase().includes(termino_busqueda.toLowerCase())
    )
  }, [productos, termino_busqueda])

  const enfocar_input = useCallback(() => {
    if (input_nombre_ref.current) {
      input_nombre_ref.current.focus()
    }
  }, [])

  const manejar_agregar = useCallback((nuevo_producto) => {
    agregar_producto(nuevo_producto)
    enfocar_input()
  }, [agregar_producto, enfocar_input])

  const manejar_eliminar = useCallback((id) => {
    eliminar_producto(id)
  }, [eliminar_producto])

  const manejar_actualizar_cantidad = useCallback((id, cantidad) => {
    actualizar_cantidad(id, cantidad)
  }, [actualizar_cantidad])

  const manejar_actualizar_precio = useCallback((id, precio) => {
    actualizar_precio(id, precio)
  }, [actualizar_precio])

  const manejar_limpiar = useCallback(() => {
    if (window.confirm('Seguro que deseas limpiar todo el inventario')) {
      limpiar_inventario()
    }
  }, [limpiar_inventario])

  const productos_mostrar = productos_filtrados()

  return (
    <div className="gestor_inventario_container">
      <div className="gestor_header">
        <h1 className="gestor_titulo">Gestor de Inventario</h1>
        <p className="gestor_subtitulo">useReducer + useRef + useCallback en accion</p>
      </div>

      <ContadorRapido contador_global={contador_global} />

      <EstadisticasInventario 
        total_productos={total_productos}
        valor_total_inventario={valor_total_inventario}
        ultima_accion={ultima_accion}
      />

      <FormularioProducto 
        on_agregar={manejar_agregar}
        input_ref={input_nombre_ref}
      />

      <BuscadorProductos 
        termino_busqueda={termino_busqueda}
        on_buscar={set_termino_busqueda}
        total_resultados={productos_mostrar.length}
      />

      <ListaInventario 
        productos={productos_mostrar}
        on_eliminar={manejar_eliminar}
        on_actualizar_cantidad={manejar_actualizar_cantidad}
        on_actualizar_precio={manejar_actualizar_precio}
      />

      {total_productos > 0 && (
        <div className="acciones_container">
          <button className="boton_limpiar_todo" onClick={manejar_limpiar}>
            Limpiar Inventario Completo
          </button>
        </div>
      )}

      <div className="info_hooks">
        <div className="hook_card">
          <h4>useReducer</h4>
          <p>Maneja el estado complejo del inventario</p>
          <small>Acciones totales: {contador_global}</small>
        </div>
        <div className="hook_card">
          <h4>useRef</h4>
          <p>Enfoca el input automaticamente</p>
          <small>Referencia al DOM sin re-renders</small>
        </div>
        <div className="hook_card">
          <h4>useCallback</h4>
          <p>Memoiza funciones para optimizar</p>
          <small>Filtrado y acciones memorizadas</small>
        </div>
      </div>
    </div>
  )
}

export default GestorInventario