import React, { useState } from 'react'

function PanelControl({ rango_minimo, rango_maximo, on_cambiar_rango, total_intentos }) {
  const [nuevo_minimo, set_nuevo_minimo] = useState(rango_minimo)
  const [nuevo_maximo, set_nuevo_maximo] = useState(rango_maximo)
  const [panel_abierto, set_panel_abierto] = useState(false)

  const handle_aplicar_rango = () => {
    if (nuevo_minimo < nuevo_maximo) {
      on_cambiar_rango(nuevo_minimo, nuevo_maximo)
      set_panel_abierto(false)
    }
  }

  return (
    <div className="panel_control">
      <div className="panel_header_control" onClick={() => set_panel_abierto(!panel_abierto)}>
        <span className="panel_titulo_control">Configuracion del Juego</span>
        <span className="panel_icono">{panel_abierto ? '▲' : '▼'}</span>
      </div>
      
      {panel_abierto && (
        <div className="panel_contenido">
          <div className="info_actual">
            <div className="info_item">
              <span>Rango actual:</span>
              <strong>{rango_minimo} - {rango_maximo}</strong>
            </div>
            <div className="info_item">
              <span>Intentos realizados:</span>
              <strong>{total_intentos}</strong>
            </div>
          </div>
          
          <div className="rango_editor">
            <div className="rango_input_grupo">
              <label>Minimo</label>
              <input
                type="number"
                className="rango_input"
                value={nuevo_minimo}
                onChange={(e) => set_nuevo_minimo(parseInt(e.target.value) || 1)}
                min="1"
              />
            </div>
            <div className="rango_input_grupo">
              <label>Maximo</label>
              <input
                type="number"
                className="rango_input"
                value={nuevo_maximo}
                onChange={(e) => set_nuevo_maximo(parseInt(e.target.value) || 100)}
                min={nuevo_minimo + 1}
              />
            </div>
            <button className="boton_aplicar" onClick={handle_aplicar_rango}>
              Aplicar y Reiniciar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PanelControl