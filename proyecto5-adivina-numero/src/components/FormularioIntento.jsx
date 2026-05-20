import React from 'react'

function FormularioIntento({ onSubmit, intento_actual, set_intento_actual, deshabilitado }) {
  
  const handle_submit = (evento) => {
    evento.preventDefault()
    if (intento_actual.trim() === '') return
    onSubmit(intento_actual)
  }

  return (
    <form className="formulario_intento" onSubmit={handle_submit}>
      <div className="input_grupo">
        <input
          type="number"
          className="input_numero"
          placeholder="Ingresa tu numero"
          value={intento_actual}
          onChange={(e) => set_intento_actual(e.target.value)}
          disabled={deshabilitado}
          autoFocus
        />
        <button 
          type="submit" 
          className="boton_adivinar"
          disabled={deshabilitado}
        >
          Adivinar
        </button>
      </div>
    </form>
  )
}

export default FormularioIntento