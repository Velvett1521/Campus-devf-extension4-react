import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Sidebar() {
  const { usuario } = useAuth()

  const menu_items = [
    { path: '/timeline', nombre: 'Inicio', icono: '🏠' },
    { path: '/explorar', nombre: 'Explorar', icono: '🔍' },
    { path: `/perfil/${usuario?.username}`, nombre: 'Perfil', icono: '👤' }
  ]

  return (
    <aside className="twitter_sidebar">
      <nav className="sidebar_nav">
        {menu_items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              isActive ? 'sidebar_link activo' : 'sidebar_link'
            }
          >
            <span className="sidebar_icono">{item.icono}</span>
            <span className="sidebar_texto">{item.nombre}</span>
          </NavLink>
        ))}
      </nav>
      
      {usuario && (
        <div className="sidebar_user">
          <div className="user_avatar_mini">
            <img src={usuario.avatar} alt={usuario.nombre} />
          </div>
          <div className="user_info_mini">
            <p className="user_nombre">{usuario.nombre}</p>
            <p className="user_username">@{usuario.username}</p>
          </div>
        </div>
      )}
    </aside>
  )
}

export default Sidebar