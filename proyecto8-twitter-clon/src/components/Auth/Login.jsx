import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [form_data, set_form_data] = useState({
    email: '',
    password: ''
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
    
    const resultado = login(form_data.email, form_data.password)
    
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
          <p>Inicia sesion para continuar</p>
        </div>

        <form className="auth_form" onSubmit={handle_submit}>
          {error && <div className="auth_error">{error}</div>}
          
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
              type="password"
              name="password"
              placeholder="Contrasena"
              value={form_data.password}
              onChange={handle_change}
              required
            />
          </div>

          <button type="submit" className="auth_boton" disabled={cargando}>
            {cargando ? 'Iniciando sesion...' : 'Iniciar Sesion'}
          </button>
        </form>

        <div className="auth_footer">
          <p>No tienes cuenta? <Link to="/registro">Registrate aqui</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login