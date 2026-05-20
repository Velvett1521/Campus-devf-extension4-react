import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Registro() {
  const navigate = useNavigate()
  const { registro } = useAuth()
  const [form_data, set_form_data] = useState({
    nombre: '',
    email: '',
    username: '',
    password: '',
    confirm_password: ''
  })
  const [error, set_error] = useState('')
  const [cargando, set_cargando] = useState(false)

  const handle_change = (e) => {
    set_form_data({
      ...form_data,
      [e.target.name]: e.target.value
    })
    set_error('')
  }

  const handle_submit = async (e) => {
    e.preventDefault()
    set_cargando(true)
    set_error('')
    
    if (form_data.password !== form_data.confirm_password) {
      set_error('Las contrasenas no coinciden')
      set_cargando(false)
      return
    }
    
    if (form_data.password.length < 6) {
      set_error('La contrasena debe tener al menos 6 caracteres')
      set_cargando(false)
      return
    }
    
    const resultado = registro({
      nombre: form_data.nombre,
      email: form_data.email,
      username: form_data.username,
      password: form_data.password
    })
    
    if (resultado.success) {
      navigate('/timeline')
    } else {
      set_error(resultado.error)
    }
    
    set_cargando(false)
  }

  return (
    <div className="auth_container">
      <div className="auth_card">
        <div className="auth_header">
          <h1>Twitter Clon</h1>
          <p>Crea tu cuenta</p>
        </div>

        <form className="auth_form" onSubmit={handle_submit}>
          {error && <div className="auth_error">{error}</div>}
          
          <div className="form_grupo">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={form_data.nombre}
              onChange={handle_change}
              required
            />
          </div>

          <div className="form_grupo">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form_data.email}
              onChange={handle_change}
              required
            />
          </div>

          <div className="form_grupo">
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={form_data.username}
              onChange={handle_change}
              required
            />
          </div>

          <div className="form_grupo">
            <input
              type="password"
              name="password"
              placeholder="Contrasena (min 6 caracteres)"
              value={form_data.password}
              onChange={handle_change}
              required
            />
          </div>

          <div className="form_grupo">
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirmar contrasena"
              value={form_data.confirm_password}
              onChange={handle_change}
              required
            />
          </div>

          <button type="submit" className="auth_boton" disabled={cargando}>
            {cargando ? 'Creando cuenta...' : 'Registrarse'}
          </button>
        </form>

        <div className="auth_footer">
          <p>Ya tienes cuenta? <Link to="/login">Inicia sesion</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Registro