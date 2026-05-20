import { useState, useEffect } from 'react'
import { citas_iniciales, doctores_iniciales } from '../data/datos_iniciales'

export function useCitas() {
  const [citas, set_citas] = useState([])
  const [doctores, set_doctores] = useState([])
  const [cargando, set_cargando] = useState(true)

  useEffect(() => {
    const citas_guardadas = localStorage.getItem('citas_medicas')
    const doctores_guardados = localStorage.getItem('doctores_medicos')
    
    if (citas_guardadas) {
      set_citas(JSON.parse(citas_guardadas))
    } else {
      set_citas(citas_iniciales)
    }
    
    if (doctores_guardados) {
      set_doctores(JSON.parse(doctores_guardados))
    } else {
      set_doctores(doctores_iniciales)
    }
    
    set_cargando(false)
  }, [])

  useEffect(() => {
    if (citas.length > 0) {
      localStorage.setItem('citas_medicas', JSON.stringify(citas))
    }
  }, [citas])

  useEffect(() => {
    if (doctores.length > 0) {
      localStorage.setItem('doctores_medicos', JSON.stringify(doctores))
    }
  }, [doctores])

  const agregar_cita = (nueva_cita) => {
    const cita_con_id = {
      ...nueva_cita,
      id: `${Date.now()}_${Math.random()}`,
      estado: 'pendiente'
    }
    set_citas([...citas, cita_con_id])
    return cita_con_id
  }

  const actualizar_cita = (id, datos_actualizados) => {
    set_citas(citas.map(cita =>
      cita.id === id ? { ...cita, ...datos_actualizados } : cita
    ))
  }

  const eliminar_cita = (id) => {
    if (window.confirm('Seguro que deseas cancelar esta cita')) {
      set_citas(citas.filter(cita => cita.id !== id))
    }
  }

  const obtener_cita_por_id = (id) => {
    return citas.find(cita => cita.id === id)
  }

  const obtener_citas_por_doctor = (doctor_id) => {
    return citas.filter(cita => cita.doctor_id === doctor_id)
  }

  const obtener_doctor_por_id = (id) => {
    return doctores.find(doctor => doctor.id === id)
  }

  return {
    citas,
    doctores,
    cargando,
    agregar_cita,
    actualizar_cita,
    eliminar_cita,
    obtener_cita_por_id,
    obtener_citas_por_doctor,
    obtener_doctor_por_id
  }
}