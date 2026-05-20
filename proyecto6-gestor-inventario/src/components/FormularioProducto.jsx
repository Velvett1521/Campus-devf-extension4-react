import React, { useState } from 'react'

function FormularioProducto({ on_agregar, input_ref }) {
  const [nombre, set_nombre] = useState('')
  const [precio, set_precio] = useState('')
  const [cantidad, set_cantidad] = useState('')

  const handle_submit = (evento) => {
    evento.preventDefault()
    
    if (nombre.trim() === '') {
      alert('Ingresa un nombre para el producto')
      return
    }
    
    const precio_numero = parseFloat(precio)
    const cantidad_numero = parseInt(cantidad)
    
    if (isNaN(precio_numero) || precio_numero <= 0) {
      alert('Ingresa un precio valido mayor a 0')
      return
    }
    
    if (isNaN(cantidad_numero) || cantidad_numero <= 0) {
      alert('Ingresa una cantidad valida mayor a 0')
      return
    }
    
    on_agregar({
      nombre: nombre.trim(),
      precio: precio_numero,
      cantidad: cantidad_numero
    })
    
    set_nombre('')
    set_precio('')
    set_cantidad('')
  }

  return (
    <form className="formulario_producto" onSubmit={handle_submit}>
      <h3 className="formulario_titulo">Agregar Nuevo Producto</h3>
      <div className="formulario_grid">
        <div className="formulario_grupo">
          <label>Nombre del Producto</label>
          <input
            ref={input_ref}
            type="text"
            className="formulario_input"
            placeholder="Ej: Laptop"
            value={nombre}
            onChange={(e) => set_nombre(e.target.value)}
          />
        </div>
        
        <div className="formulario_grupo">
          <label>Precio unitario</label>
          <input
            type="number"
            className="formulario_input"
            placeholder="0.00"
            value={precio}
            onChange={(e) => set_precio(e.target.value)}
            step="0.01"
            min="0"
          />
        </div>
        
        <div className="formulario_grupo">
          <label>Cantidad</label>
          <input
            type="number"
            className="formulario_input"
            placeholder="0"
            value={cantidad}
            onChange={(e) => set_cantidad(e.target.value)}
            min="1"
          />
        </div>
        
        <div className="formulario_grupo_boton">
          <button type="submit" className="boton_agregar">
            Agregar Producto
          </button>
        </div>
      </div>
    </form>
  )
}

export default FormularioProducto