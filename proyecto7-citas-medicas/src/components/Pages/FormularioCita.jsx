import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCitas } from '../../hooks/useCitas'

function FormularioCita() {
  const navigate = useNavigate()
  const { doctores, agregar_cita } = useCitas()
  
  const [form_data, set_form_data] = useState({
    paciente_nombre: '',
    paciente_telefono: '',
    paciente_email: '',
    doctor_id: '',
    fecha: '',
    hora: '',
    motivo: ''
  })

  const handle_change = (e) => {
    set_form_data({
      ...form_data,
      [e.target.name]: e.target.value
    })
  }

  const handle_submit = (e) => {
    e.preventDefault()
    
    if (!form_data.paciente_nombre || !form_data.doctor_id || !form_data.fecha || !form_data.hora) {
      alert('Por favor completa todos los campos requeridos')
      return
    }
    
    agregar_cita(form_data)
    navigate('/citas')
  }

  return (
    <div className="page_formulario_cita">
      <div className="formulario_header">
        <Link to="/citas" className="volver_link">← Volver a mis citas</Link>
        <h1>Agendar una Nueva Cita</h1>
      </div>

      <form className="formulario_cita" onSubmit={handle_submit}>
        <div className="formulario_grupo">
          <label>Nombre Completo *</label>
          <input
            type="text"
            name="paciente_nombre"
            value={form_data.paciente_nombre}
            onChange={handle_change}
            placeholder="Juan Perez"
            required
          />
        </div>

        <div className="formulario_grupo">
          <label>Telefono</label>
          <input
            type="tel"
            name="paciente_telefono"
            value={form_data.paciente_telefono}
            onChange={handle_change}
            placeholder="555-1234"
          />
        </div>

        <div className="formulario_grupo">
          <label>Email</label>
          <input
            type="email"
            name="paciente_email"
            value={form_data.paciente_email}
            onChange={handle_change}
            placeholder="juan@email.com"
          />
        </div>

        <div className="formulario_grupo">
          <label>Selecciona un Doctor *</label>
          <select
            name="doctor_id"
            value={form_data.doctor_id}
            onChange={handle_change}
            required
          >
            <option value="">Selecciona...</option>
            {doctores.map(doctor => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.nombre} - {doctor.especialidad}
              </option>
            ))}
          </select>
        </div>

        <div className="formulario_row">
          <div className="formulario_grupo">
            <label>Fecha *</label>
            <input
              type="date"
              name="fecha"
              value={form_data.fecha}
              onChange={handle_change}
              required
            />
          </div>

          <div className="formulario_grupo">
            <label>Hora *</label>
            <input
              type="time"
              name="hora"
              value={form_data.hora}
              onChange={handle_change}
              required
            />
          </div>
        </div>

        <div className="formulario_grupo">
          <label>Motivo de la Consulta</label>
          <textarea
            name="motivo"
            value={form_data.motivo}
            onChange={handle_change}
            rows="3"
            placeholder="Describe el motivo de tu consulta"
          />
        </div>

        <div className="formulario_botones">
          <button type="submit" className="boton_guardar">
            Agendar Cita
          </button>
          <Link to="/citas" className="boton_cancelar">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  )
}

export default FormularioCita