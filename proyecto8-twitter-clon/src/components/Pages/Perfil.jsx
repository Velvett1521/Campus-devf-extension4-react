import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useTweets } from '../../hooks/useTweets'
import TarjetaTweet from '../Common/TarjetaTweet'
import Cargando from '../Common/Cargando'

function Perfil() {
  const { username } = useParams()
  const { usuario, actualizar_usuario } = useAuth()
  const { tweets, cargando, dar_like, eliminar_tweet } = useTweets()
  const [editando, set_editando] = useState(false)
  const [bio, set_bio] = useState(usuario?.bio || '')

  if (cargando) {
    return <Cargando />
  }

  const es_perfil_propio = usuario?.username === username
  const tweets_usuario = tweets.filter(t => t.usuario_username === username)

  const guardar_bio = () => {
    actualizar_usuario({ bio })
    set_editando(false)
  }

  return (
    <div className="page_perfil">
      <div className="perfil_header">
        <div className="perfil_avatar">
          <img src={usuario?.avatar} alt={usuario?.nombre} />
        </div>
        <div className="perfil_info">
          <h1>{usuario?.nombre}</h1>
          <p className="perfil_username">@{usuario?.username}</p>
          
          {es_perfil_propio && (
            <div className="perfil_bio_editor">
              {editando ? (
                <div className="bio_editor">
                  <textarea
                    value={bio}
                    onChange={(e) => set_bio(e.target.value)}
                    placeholder="Escribe tu biografia"
                    rows="3"
                  />
                  <button onClick={guardar_bio}>Guardar</button>
                  <button onClick={() => set_editando(false)}>Cancelar</button>
                </div>
              ) : (
                <div className="bio_display">
                  <p>{usuario?.bio || 'Sin biografia'}</p>
                  <button onClick={() => set_editando(true)}>Editar perfil</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="perfil_stats">
        <div className="stat">
          <span className="stat_numero">{tweets_usuario.length}</span>
          <span className="stat_label">Tweets</span>
        </div>
        <div className="stat">
          <span className="stat_numero">0</span>
          <span className="stat_label">Siguiendo</span>
        </div>
        <div className="stat">
          <span className="stat_numero">0</span>
          <span className="stat_label">Seguidores</span>
        </div>
      </div>

      <div className="perfil_tweets">
        <h2>Tweets</h2>
        {tweets_usuario.length === 0 ? (
          <div className="sin_tweets">
            <p>No hay tweets para mostrar</p>
          </div>
        ) : (
          tweets_usuario.map(tweet => (
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

export default Perfil