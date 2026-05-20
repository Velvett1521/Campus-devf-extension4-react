import React, { createContext, useState, useEffect, useContext } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [usuario, set_usuario] = useState(null)
  const [cargando, set_cargando] = useState(true)

  useEffect(() => {
    const usuario_guardado = localStorage.getItem('twitter_user')
    if (usuario_guardado) {
      set_usuario(JSON.parse(usuario_guardado))
    }
    set_cargando(false)
  }, [])

  const login = (email, password) => {
    const usuarios_guardados = localStorage.getItem('twitter_users')
    let usuarios = usuarios_guardados ? JSON.parse(usuarios_guardados) : []
    
    const usuario_encontrado = usuarios.find(u => u.email === email && u.password === password)
    
    if (usuario_encontrado) {
      const { password, ...usuario_sin_password } = usuario_encontrado
      set_usuario(usuario_sin_password)
      localStorage.setItem('twitter_user', JSON.stringify(usuario_sin_password))
      return { success: true }
    }
    
    return { success: false, error: 'Credenciales invalidas' }
  }

  const registro = (user_data) => {
    const usuarios_guardados = localStorage.getItem('twitter_users')
    let usuarios = usuarios_guardados ? JSON.parse(usuarios_guardados) : []
    
    const usuario_existe = usuarios.find(u => u.email === user_data.email)
    
    if (usuario_existe) {
      return { success: false, error: 'El email ya esta registrado' }
    }
    
    const nuevo_usuario = {
      id: `${Date.now()}_${Math.random()}`,
      nombre: user_data.nombre,
      email: user_data.email,
      username: user_data.username,
      password: user_data.password,
      avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'women' : 'men'}/${Math.floor(Math.random() * 100)}.jpg`,
      fecha_registro: new Date().toLocaleString()
    }
    
    usuarios.push(nuevo_usuario)
    localStorage.setItem('twitter_users', JSON.stringify(usuarios))
    
    const { password, ...usuario_sin_password } = nuevo_usuario
    set_usuario(usuario_sin_password)
    localStorage.setItem('twitter_user', JSON.stringify(usuario_sin_password))
    
    return { success: true }
  }

  const logout = () => {
    set_usuario(null)
    localStorage.removeItem('twitter_user')
  }

  const actualizar_usuario = (datos_actualizados) => {
    const usuario_actualizado = { ...usuario, ...datos_actualizados }
    set_usuario(usuario_actualizado)
    localStorage.setItem('twitter_user', JSON.stringify(usuario_actualizado))
    
    const usuarios_guardados = localStorage.getItem('twitter_users')
    if (usuarios_guardados) {
      let usuarios = JSON.parse(usuarios_guardados)
      usuarios = usuarios.map(u => u.id === usuario.id ? { ...u, ...datos_actualizados } : u)
      localStorage.setItem('twitter_users', JSON.stringify(usuarios))
    }
  }

  return (
    <AuthContext.Provider value={{
      usuario,
      cargando,
      login,
      registro,
      logout,
      actualizar_usuario,
      is_authenticated: !!usuario
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider')
  }
  return context
}