import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Cargando from '../Common/Cargando'

function RutaProtegida({ children }) {
  const { is_authenticated, cargando } = useAuth()

  if (cargando) {
    return <Cargando />
  }

  if (!is_authenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default RutaProtegida