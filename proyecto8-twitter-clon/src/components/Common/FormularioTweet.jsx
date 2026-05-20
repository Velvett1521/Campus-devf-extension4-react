import React, { useState } from 'react'

function FormularioTweet({ on_tweet, usuario_actual }) {
  const [contenido, set_contenido] = useState('')
  const [tweet_enviando, set_tweet_enviando] = useState(false)

  const handle_submit = (e) => {
    e.preventDefault()
    
    if (contenido.trim() === '') return
    
    set_tweet_enviando(true)
    on_tweet(contenido, usuario_actual)
    set_contenido('')
    set_tweet_enviando(false)
  }

  return (
    <form className="formulario_tweet" onSubmit={handle_submit}>
      <div className="tweet_avatar">
        <img src={usuario_actual?.avatar} alt={usuario_actual?.nombre} />
      </div>
      <div className="tweet_input_container">
        <textarea
          className="tweet_input"
          placeholder="Que esta pasando?"
          value={contenido}
          onChange={(e) => set_contenido(e.target.value)}
          rows="3"
        />
        <div className="tweet_actions">
          <button type="submit" disabled={tweet_enviando || contenido.trim() === ''}>
            Tweetear
          </button>
        </div>
      </div>
    </form>
  )
}

export default FormularioTweet