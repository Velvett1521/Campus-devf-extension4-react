import React, { useState } from 'react'

function Contacto() {
  const [form_enviado, set_form_enviado] = useState(false)

  const handle_submit = (e) => {
    e.preventDefault()
    set_form_enviado(true)
    setTimeout(() => set_form_enviado(false), 3000)
  }

  return (
    <div className="page_contacto">
      <div className="page_header">
        <h1>Contacto</h1>
        <p>Estamos para ayudarte</p>
      </div>

      <div className="contacto_grid">
        <div className="info_contacto">
          <div className="info_item">
            <h3>📍 Direccion</h3>
            <p>Av. Principal #123, Col. Centro</p>
            <p>Ciudad de Mexico, CDMX</p>
          </div>
          
          <div className="info_item">
            <h3>📞 Telefono</h3>
            <p>(55) 1234-5678</p>
            <p>(55) 8765-4321</p>
          </div>
          
          <div className="info_item">
            <h3>✉️ Email</h3>
            <p>info@clinicasalud.com</p>
            <p>citas@clinicasalud.com</p>
          </div>
          
          <div className="info_item">
            <h3>⏰ Horario</h3>
            <p>Lunes a Viernes: 8:00 - 20:00</p>
            <p>Sabados: 9:00 - 14:00</p>
          </div>
        </div>

        <div className="formulario_contacto">
          <h3>Envianos un mensaje</h3>
          {form_enviado ? (
            <div className="mensaje_exito">
              Mensaje enviado correctamente
            </div>
          ) : (
            <form onSubmit={handle_submit}>
              <input type="text" placeholder="Tu nombre" required />
              <input type="email" placeholder="Tu email" required />
              <textarea placeholder="Tu mensaje" rows="4" required></textarea>
              <button type="submit">Enviar Mensaje</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contacto