import React, { useState, useEffect } from 'react'

function FormularioProducto({ on_agregar, producto_editando, on_editar }) {
  const [nombre_producto, set_nombre_producto] = useState('')
  const [cantidad, set_cantidad] = useState(1)
  const [categoria, set_categoria] = useState('frutas_verduras')

  useEffect(() => {
    if (producto_editando) {
      set_nombre_producto(producto_editando.nombre)
      set_cantidad(producto_editando.cantidad)
      set_categoria(producto_editando.categoria)
    } else {
      set_nombre_producto('')
      set_cantidad(1)
      set_categoria('frutas_verduras')
    }
  }, [producto_editando])

  const handle_submit = (evento) => {
    evento.preventDefault()
    
    if (nombre_producto.trim() === '') {
      alert('Por favor ingresa un nombre para el producto')
      return
    }

    const nuevo_producto = {
      nombre: nombre_producto.trim(),
      cantidad: cantidad,
      categoria: categoria
    }

    if (producto_editando) {
      on_editar({ ...nuevo_producto, id: producto_editando.id, comprado: producto_editando.comprado })
    } else {
      on_agregar(nuevo_producto)
    }

    set_nombre_producto('')
    set_cantidad(1)
    set_categoria('frutas_verduras')
  }

  const categorias_disponibles = [
    { valor: 'frutas_verduras', label: 'Frutas y Verduras' },
    { valor: 'lacteos', label: 'Lacteos' },
    { valor: 'carnes', label: 'Carnes y Pescados' },
    { valor: 'despensa', label: 'Despensa' },
    { valor: 'limpieza', label: 'Limpieza' },
    { valor: 'otros', label: 'Otros' }
  ]

  return (
    <form className="formulario_producto" onSubmit={handle_submit}>
      <div className="formulario_grupo">
        <input
          type="text"
          className="formulario_input"
          placeholder="Nombre del producto"
          value={nombre_producto}
          onChange={(e) => set_nombre_producto(e.target.value)}
        />
      </div>

      <div className="formulario_grupo_row">
        <div className="formulario_grupo_small">
          <label className="formulario_label">Cantidad</label>
          <input
            type="number"
            className="formulario_input"
            value={cantidad}
            onChange={(e) => set_cantidad(parseInt(e.target.value) || 1)}
            min="1"
          />
        </div>

        <div className="formulario_grupo_large">
          <label className="formulario_label">Categoria</label>
          <select
            className="formulario_select"
            value={categoria}
            onChange={(e) => set_categoria(e.target.value)}
          >
            {categorias_disponibles.map(cat => (
              <option key={cat.valor} value={cat.valor}>{cat.label}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="boton_submit">
          {producto_editando ? 'Actualizar Producto' : 'Agregar Producto'}
        </button>
      </div>
    </form>
  )
}

export default FormularioProducto