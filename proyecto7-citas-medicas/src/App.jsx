import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LayoutPrincipal from './components/Layout/LayoutPrincipal'
import Inicio from './components/Pages/Inicio'
import ListaCitas from './components/Pages/ListaCitas'
import DetalleCita from './components/Pages/DetalleCita'
import FormularioCita from './components/Pages/FormularioCita'
import Doctores from './components/Pages/Doctores'
import DetalleDoctor from './components/Pages/DetalleDoctor'
import Pacientes from './components/Pages/Pacientes'
import Contacto from './components/Pages/Contacto'
import NoEncontrado from './components/Pages/NoEncontrado'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPrincipal />}>
        <Route index element={<Inicio />} />
        <Route path="citas" element={<ListaCitas />} />
        <Route path="citas/nueva" element={<FormularioCita />} />
        <Route path="citas/:id" element={<DetalleCita />} />
        <Route path="doctores" element={<Doctores />} />
        <Route path="doctores/:id" element={<DetalleDoctor />} />
        <Route path="pacientes" element={<Pacientes />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  )
}

export default App