import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useCitas } from '../../hooks/useCitas'
import Cargando from '../Common/Cargando'

function DetalleCita() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { obtener_cita_por_id, obtener_doctor_por_id, actualizar_cita, eliminar_cita, cargando } = useCitas()
  
  const cita = obtener_cita_por_id(id)
  const doctor = cita ? obtener_doctor_por_id(cita.doctor_id) : null

  if (cargando) {
    return <Cargando />
  }

  if (!cita) {
    return (
      <div className="page_error">
        <h2>Cita no encontrada</h2>
        <p>La cita que buscas no existe</p>
        <Link to="/citas" className="boton_principal">Volver a Mis Citas</Link>
      </div>
    )
  }

  const cambiar_estado = (nuevo_estado) => {
    actualizar_cita(cita.id, { estado: nuevo_estado })
  }

  const estados_disponibles = ['pendiente', 'confirmada', 'completada', 'cancelada']

  return (
    <div className="page_detalle_cita">
      <div className="detalle_header">
        <Link to="/citas" className="volver_link">← Volver a mis citas</Link>
        <h1>Detalle de la Cita</h1>
      </div>

      <div className="detalle_card">
        <div className="detalle_seccion">
          <h3>Informacion del Paciente</h3>
          <p><strong>Nombre:</strong> {cita.paciente_nombre}</p>
          <p><strong>Telefono:</strong> {cita.paciente_telefono}</p>
          <p><strong>Email:</strong> {cita.paciente_email}</p>
        </div>

        <div className="detalle_seccion">
          <h3>Informacion de la Cita</h3>
          <p><strong>Fecha:</strong> {cita.fecha}</p>
          <p><strong>Hora:</strong> {cita.hora}</p>
          <p><strong>Motivo:</strong> {cita.motivo}</p>
          <p><strong>Estado:</strong> 
            <span className={`estado_${cita.estado}`}> {cita.estado}</span>
          </p>
        </div>

        {doctor && (
          <div className="detalle_seccion">
            <h3>Informacion del Doctor</h3>
            <p><strong>Nombre:</strong> {doctor.nombre}</p>
            <p><strong>Especialidad:</strong> {doctor.especialidad}</p>
            <p><strong>Consultorio:</strong> {doctor.consultorio}</p>
          </div>
        )}

        <div className="detalle_acciones">
          <h3>Acciones</h3>
          <div className="acciones_estados">
            {estados_disponibles.map(estado => (
              <button
                key={estado}
                className={`boton_estado ${cita.estado === estado ? 'activo' : ''}`}
                onClick={() => cambiar_estado(estado)}
                disabled={cita.estado === estado}
              >
                {estado}
              </button>
            ))}
          </div>
          <button 
            className="boton_eliminar_detalle"
            onClick={() => {
              eliminar_cita(cita.id)
              navigate('/citas')
            }}
          >
            Cancelar Cita
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetalleCita