import React, { useState } from 'react'
import { useTweets } from '../../hooks/useTweets'
import { useAuth } from '../../context/AuthContext'
import TarjetaTweet from '../Common/TarjetaTweet'
import Cargando from '../Common/Cargando'

function Explorar() {
  const { tweets, cargando, dar_like, eliminar_tweet } = useTweets()
  const { usuario } = useAuth()
  const [termino_busqueda, set_termino_busqueda] = useState('')

  const tweets_filtrados = termino_busqueda
    ? tweets.filter(t => 
        t.contenido.toLowerCase().includes(termino_busqueda.toLowerCase()) ||
        t.usuario_nombre.toLowerCase().includes(termino_busqueda.toLowerCase()) ||
        t.usuario_username.toLowerCase().includes(termino_busqueda.toLowerCase())
      )
    : tweets

  if (cargando) {
    return <Cargando />
  }

  return (
    <div className="page_explorar">
      <div className="explorar_header">
        <h1>Explorar</h1>
        <div className="buscador">
          <input
            type="text"
            placeholder="Buscar tweets, usuarios..."
            value={termino_busqueda}
            onChange={(e) => set_termino_busqueda(e.target.value)}
          />
        </div>
      </div>

      <div className="tweets_lista">
        {tweets_filtrados.length === 0 ? (
          <div className="sin_resultados">
            <p>No se encontraron resultados</p>
          </div>
        ) : (
          tweets_filtrados.map(tweet => (
            <TarjetaTweet 
              key={tweet.id}
              tweet={tweet}
              usuario_actual={usuario}
              on_like={dar_like}
              on_eliminar={eliminar_tweet}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Explorar