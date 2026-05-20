import React from 'react'
import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div className="page_inicio">
      <div className="hero">
        <h1>Bienvenido a Clinica Salud Total</h1>
        <p>Gestiona tus citas medicas de manera facil y rapida</p>
        <Link to="/citas/nueva" className="boton_principal">
          Agendar una Cita
        </Link>
      </div>

      <div className="caracteristicas">
        <div className="caracteristica">
          <div className="caracteristica_icono">📅</div>
          <h3>Citas Online</h3>
          <p>Agenda tus citas desde cualquier lugar</p>
        </div>
        <div className="caracteristica">
          <div className="caracteristica_icono">👨‍⚕️</div>
          <h3>Doctores Expertos</h3>
          <p>Profesionales altamente calificados</p>
        </div>
        <div className="caracteristica">
          <div className="caracteristica_icono">⏰</div>
          <h3>Recordatorios</h3>
          <p>Te notificamos antes de tu cita</p>
        </div>
      </div>

      <div className="info_adicional">
        <h2>Como funciona?</h2>
        <div className="pasos">
          <div className="paso">
            <span className="paso_numero">1</span>
            <p>Elige un doctor y horario</p>
          </div>
          <div className="paso">
            <span className="paso_numero">2</span>
            <p>Completa tus datos</p>
          </div>
          <div className="paso">
            <span className="paso_numero">3</span>
            <p>Recibe confirmacion</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio