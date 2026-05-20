import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCitas } from '../../hooks/useCitas'
import TarjetaCita from '../Common/TarjetaCita'
import Cargando from '../Common/Cargando'

function DetalleDoctor() {
  const { id } = useParams()
  const { doctores, obtener_citas_por_doctor, eliminar_cita, cargando } = useCitas()
  
  const doctor = doctores.find(d => d.id === id)
  const citas_doctor = obtener_citas_por_doctor(id)

  if (cargando) {
    return <Cargando />
  }

  if (!doctor) {
    return (
      <div className="page_error">
        <h2>Doctor no encontrado</h2>
        <Link to="/doctores" className="boton_principal">Volver a Doctores</Link>
      </div>
    )
  }

  return (
    <div className="page_detalle_doctor">
      <div className="detalle_header">
        <Link to="/doctores" className="volver_link">← Volver a Doctores</Link>
      </div>

      <div className="doctor_info_card">
        <div className="doctor_info_header">
          <div className="doctor_avatar">
            <img src={doctor.imagen} alt={doctor.nombre} />
          </div>
          <div className="doctor_info">
            <h1>{doctor.nombre}</h1>
            <p className="doctor_especialidad">{doctor.especialidad}</p>
            <p className="doctor_experiencia">{doctor.experiencia} años de experiencia</p>
          </div>
        </div>
        
        <div className="doctor_detalles">
          <p><strong>Consultorio:</strong> {doctor.consultorio}</p>
          <p><strong>Horario:</strong> {doctor.horario}</p>
          <p><strong>Email:</strong> {doctor.email}</p>
          <p><strong>Telefono:</strong> {doctor.telefono}</p>
        </div>
        
        <Link to="/citas/nueva" className="boton_principal">
          Agendar Cita con este Doctor
        </Link>
      </div>

      <div className="citas_doctor_seccion">
        <h2>Citas Programadas</h2>
        {citas_doctor.length === 0 ? (
          <p>No hay citas programadas con este doctor</p>
        ) : (
          <div className="citas_grid">
            {citas_doctor.map(cita => (
              <TarjetaCita 
                key={cita.id}
                cita={cita}
                on_eliminar={eliminar_cita}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default DetalleDoctor