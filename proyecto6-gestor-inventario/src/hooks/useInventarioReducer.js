import { useReducer } from 'react'

const initialState = {
  productos: [],
  contador_global: 0,
  ultima_accion: null,
  total_productos: 0,
  valor_total_inventario: 0
}

function inventarioReducer(state, action) {
  switch (action.type) {
    case 'AGREGAR_PRODUCTO': {
      const nuevo_producto = {
        ...action.payload,
        id: `${Date.now()}_${Math.random()}`,
        fecha_creacion: new Date().toLocaleString()
      }
      const nuevos_productos = [...state.productos, nuevo_producto]
      const nuevo_total = nuevos_productos.reduce((sum, p) => sum + (p.precio * p.cantidad), 0)
      
      return {
        ...state,
        productos: nuevos_productos,
        contador_global: state.contador_global + 1,
        ultima_accion: `Agregado: ${action.payload.nombre}`,
        total_productos: nuevos_productos.length,
        valor_total_inventario: nuevo_total
      }
    }
    
    case 'ELIMINAR_PRODUCTO': {
      const producto_eliminado = state.productos.find(p => p.id === action.payload)
      const nuevos_productos = state.productos.filter(p => p.id !== action.payload)
      const nuevo_total = nuevos_productos.reduce((sum, p) => sum + (p.precio * p.cantidad), 0)
      
      return {
        ...state,
        productos: nuevos_productos,
        contador_global: state.contador_global + 1,
        ultima_accion: `Eliminado: ${producto_eliminado?.nombre || 'producto'}`,
        total_productos: nuevos_productos.length,
        valor_total_inventario: nuevo_total
      }
    }
    
    case 'ACTUALIZAR_CANTIDAD': {
      const { id, cantidad } = action.payload
      const nuevos_productos = state.productos.map(producto =>
        producto.id === id
          ? { ...producto, cantidad: Math.max(0, cantidad) }
          : producto
      ).filter(p => p.cantidad > 0)
      
      const nuevo_total = nuevos_productos.reduce((sum, p) => sum + (p.precio * p.cantidad), 0)
      
      return {
        ...state,
        productos: nuevos_productos,
        contador_global: state.contador_global + 1,
        ultima_accion: `Cantidad actualizada`,
        total_productos: nuevos_productos.length,
        valor_total_inventario: nuevo_total
      }
    }
    
    case 'ACTUALIZAR_PRECIO': {
      const { id, precio } = action.payload
      const nuevos_productos = state.productos.map(producto =>
        producto.id === id
          ? { ...producto, precio: Math.max(0, precio) }
          : producto
      )
      const nuevo_total = nuevos_productos.reduce((sum, p) => sum + (p.precio * p.cantidad), 0)
      
      return {
        ...state,
        productos: nuevos_productos,
        contador_global: state.contador_global + 1,
        ultima_accion: `Precio actualizado`,
        valor_total_inventario: nuevo_total
      }
    }
    
    case 'LIMPIAR_INVENTARIO': {
      return {
        ...state,
        productos: [],
        contador_global: state.contador_global + 1,
        ultima_accion: 'Inventario limpiado',
        total_productos: 0,
        valor_total_inventario: 0
      }
    }
    
    default:
      return state
  }
}

export function useInventarioReducer() {
  const [state, dispatch] = useReducer(inventarioReducer, initialState)
  
  const agregar_producto = (producto) => {
    dispatch({ type: 'AGREGAR_PRODUCTO', payload: producto })
  }
  
  const eliminar_producto = (id) => {
    dispatch({ type: 'ELIMINAR_PRODUCTO', payload: id })
  }
  
  const actualizar_cantidad = (id, cantidad) => {
    dispatch({ type: 'ACTUALIZAR_CANTIDAD', payload: { id, cantidad } })
  }
  
  const actualizar_precio = (id, precio) => {
    dispatch({ type: 'ACTUALIZAR_PRECIO', payload: { id, precio } })
  }
  
  const limpiar_inventario = () => {
    dispatch({ type: 'LIMPIAR_INVENTARIO' })
  }
  
  return {
    productos: state.productos,
    contador_global: state.contador_global,
    ultima_accion: state.ultima_accion,
    total_productos: state.total_productos,
    valor_total_inventario: state.valor_total_inventario,
    agregar_producto,
    eliminar_producto,
    actualizar_cantidad,
    actualizar_precio,
    limpiar_inventario
  }
}