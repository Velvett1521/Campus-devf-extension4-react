import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useTweets } from '../../hooks/useTweets'
import FormularioTweet from '../Common/FormularioTweet'
import TarjetaTweet from '../Common/TarjetaTweet'
import Cargando from '../Common/Cargando'

function Timeline() {
  const { usuario } = useAuth()
  const { tweets, cargando, agregar_tweet, dar_like, eliminar_tweet } = useTweets()

  if (cargando) {
    return <Cargando />
  }

  return (
    <div className="page_timeline">
      <div className="timeline_header">
        <h1>Inicio</h1>
      </div>
      
      <FormularioTweet on_tweet={agregar_tweet} usuario_actual={usuario} />
      
      <div className="tweets_lista">
        {tweets.length === 0 ? (
          <div className="sin_tweets">
            <p>No hay tweets para mostrar</p>
            <p>Sé el primero en publicar algo</p>
          </div>
        ) : (
          tweets.map(tweet => (
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

export default Timeline