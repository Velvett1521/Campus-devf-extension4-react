import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LayoutPrincipal from './components/Layout/LayoutPrincipal'
import Login from './components/Auth/Login'
import Registro from './components/Auth/Registro'
import Inicio from './components/Pages/Inicio'
import Timeline from './components/Pages/Timeline'
import Perfil from './components/Pages/Perfil'
import Explorar from './components/Pages/Explorar'
import NoEncontrado from './components/Pages/NoEncontrado'
import RutaProtegida from './components/Auth/RutaProtegida'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      
      <Route path="/" element={<LayoutPrincipal />}>
        <Route index element={<Inicio />} />
        <Route path="timeline" element={
          <RutaProtegida>
            <Timeline />
          </RutaProtegida>
        } />
        <Route path="perfil/:username" element={
          <RutaProtegida>
            <Perfil />
          </RutaProtegida>
        } />
        <Route path="explorar" element={
          <RutaProtegida>
            <Explorar />
          </RutaProtegida>
        } />
      </Route>
      
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  )
}

export default App