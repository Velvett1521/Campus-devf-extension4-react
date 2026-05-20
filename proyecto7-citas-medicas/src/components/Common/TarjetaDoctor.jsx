import React from 'react'
import { Link } from 'react-router-dom'

function TarjetaDoctor({ doctor }) {
  return (
    <div className="tarjeta_doctor">
      <div className="doctor_imagen">
        <img src={doctor.imagen} alt={doctor.nombre} />
      </div>
      <div className="doctor_info_tarjeta">
        <h3>{doctor.nombre}</h3>
        <p className="doctor_especialidad_tarjeta">{doctor.especialidad}</p>
        <p className="doctor_experiencia_tarjeta">{doctor.experiencia} años exp</p>
      </div>
      <div className="tarjeta_footer">
        <Link to={`/doctores/${doctor.id}`} className="boton_ver">
          Ver Perfil
        </Link>
        <Link to="/citas/nueva" className="boton_agendar">
          Agendar Cita
        </Link>
      </div>
    </div>
  )
}

export default TarjetaDoctor