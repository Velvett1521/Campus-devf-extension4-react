import React from 'react'
import { Link } from 'react-router-dom'

function TarjetaTweet({ tweet, usuario_actual, on_like, on_eliminar }) {
  const es_propio = tweet.usuario_username === usuario_actual?.username

  return (
    <div className="tarjeta_tweet">
      <div className="tweet_avatar">
        <img src={tweet.usuario_avatar} alt={tweet.usuario_nombre} />
      </div>
      
      <div className="tweet_contenido">
        <div className="tweet_header">
          <Link to={`/perfil/${tweet.usuario_username}`} className="tweet_usuario">
            <span className="tweet_nombre">{tweet.usuario_nombre}</span>
            <span className="tweet_username">@{tweet.usuario_username}</span>
          </Link>
          <span className="tweet_fecha">{tweet.fecha}</span>
          {es_propio && (
            <button 
              className="tweet_eliminar"
              onClick={() => on_eliminar(tweet.id, usuario_actual)}
            >
              Eliminar
            </button>
          )}
        </div>
        
        <p className="tweet_texto">{tweet.contenido}</p>
        
        <div className="tweet_stats">
          <button className="stat_like" onClick={() => on_like(tweet.id)}>
            ❤️ {tweet.likes}
          </button>
          <span className="stat_retweet">🔄 {tweet.retweets}</span>
          <span className="stat_comentario">💬 {tweet.comentarios}</span>
        </div>
      </div>
    </div>
  )
}

export default TarjetaTweet