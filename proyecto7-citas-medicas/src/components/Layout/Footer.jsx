import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_section">
          <h4>Clinica Salud Total</h4>
          <p>Comprometidos con tu salud</p>
        </div>
        <div className="footer_section">
          <h4>Enlaces Rapidos</h4>
          <Link to="/citas/nueva">Agendar Cita</Link>
          <Link to="/doctores">Ver Doctores</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
        <div className="footer_section">
          <h4>Contacto</h4>
          <p>Tel: (55) 1234-5678</p>
          <p>Email: info@clinicasalud.com</p>
        </div>
      </div>
      <div className="footer_bottom">
        <p>Clinica Salud Total - Sistema de Gestion de Citas</p>
      </div>
    </footer>
  )
}

export default Footer