import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Header() {
  const { usuario, logout } = useAuth()
  const navigate = useNavigate()

  const handle_logout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="twitter_header">
      <div className="header_container">
        <Link to="/" className="logo">
          Twitter Clon
        </Link>
        
        {usuario && (
          <div className="header_user">
            <span className="user_info">{usuario.nombre}</span>
            <button onClick={handle_logout} className="logout_boton">
              Cerrar Sesion
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header