import React, { useState, useEffect } from 'react'

function MotorNave({ motor_encendido, on_toggle_motor }) {
  const [temperatura_motor, set_temperatura_motor] = useState(20)

  useEffect(() => {
    let intervalo
    
    if (motor_encendido) {
      intervalo = setInterval(() => {
        set_temperatura_motor(prev => {
          const nueva_temp = Math.min(prev + 2, 150)
          return nueva_temp
        })
      }, 1000)
    } else {
      intervalo = setInterval(() => {
        set_temperatura_motor(prev => {
          const nueva_temp = Math.max(prev - 3, 20)
          return nueva_temp
        })
      }, 1000)
    }

    return () => {
      clearInterval(intervalo)
    }
  }, [motor_encendido])

  const estado_motor_texto = motor_encendido ? 'ENCENDIDO' : 'APAGADO'
  const color_motor = motor_encendido ? '#10b981' : '#ef4444'
  
  const nivel_temperatura = () => {
    if (temperatura_motor > 120) return 'critico'
    if (temperatura_motor > 80) return 'alto'
    return 'normal'
  }

  return (
    <div className="motor_container">
      <h3 className="componente_titulo">Sistema de Propulsion</h3>
      <div className="motor_estado">
        <span className="motor_label">Estado del Motor:</span>
        <span 
          className="motor_valor"
          style={{ backgroundColor: color_motor }}
        >
          {estado_motor_texto}
        </span>
      </div>
      <div className="motor_temperatura">
        <span>Temperatura del Motor:</span>
        <span className={`temperatura_valor temperatura_${nivel_temperatura()}`}>
          {temperatura_motor} grados C
        </span>
      </div>
      <button 
        className={`boton_motor ${motor_encendido ? 'boton_apagar' : 'boton_encender'}`}
        onClick={on_toggle_motor}
      >
        {motor_encendido ? 'APAGAR MOTOR' : 'ENCENDER MOTOR'}
      </button>
    </div>
  )
}

export default MotorNave