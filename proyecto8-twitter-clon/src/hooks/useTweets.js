import { useState, useEffect } from 'react'
import { tweets_iniciales } from '../data/datos_iniciales'

export function useTweets() {
  const [tweets, set_tweets] = useState([])
  const [cargando, set_cargando] = useState(true)

  useEffect(() => {
    const tweets_guardados = localStorage.getItem('twitter_tweets')
    if (tweets_guardados) {
      set_tweets(JSON.parse(tweets_guardados))
    } else {
      set_tweets(tweets_iniciales)
      localStorage.setItem('twitter_tweets', JSON.stringify(tweets_iniciales))
    }
    set_cargando(false)
  }, [])

  const agregar_tweet = (contenido, usuario_actual) => {
    const nuevo_tweet = {
      id: `${Date.now()}_${Math.random()}`,
      usuario_nombre: usuario_actual.nombre,
      usuario_username: usuario_actual.username,
      usuario_avatar: usuario_actual.avatar,
      contenido: contenido,
      fecha: new Date().toLocaleString(),
      likes: 0,
      retweets: 0,
      comentarios: 0
    }
    
    const nuevos_tweets = [nuevo_tweet, ...tweets]
    set_tweets(nuevos_tweets)
    localStorage.setItem('twitter_tweets', JSON.stringify(nuevos_tweets))
  }

  const dar_like = (tweet_id) => {
    const tweets_actualizados = tweets.map(tweet =>
      tweet.id === tweet_id
        ? { ...tweet, likes: tweet.likes + 1 }
        : tweet
    )
    set_tweets(tweets_actualizados)
    localStorage.setItem('twitter_tweets', JSON.stringify(tweets_actualizados))
  }

  const eliminar_tweet = (tweet_id, usuario_actual) => {
    const tweet_a_eliminar = tweets.find(t => t.id === tweet_id)
    if (tweet_a_eliminar && tweet_a_eliminar.usuario_username === usuario_actual.username) {
      const tweets_filtrados = tweets.filter(t => t.id !== tweet_id)
      set_tweets(tweets_filtrados)
      localStorage.setItem('twitter_tweets', JSON.stringify(tweets_filtrados))
      return true
    }
    return false
  }

  return {
    tweets,
    cargando,
    agregar_tweet,
    dar_like,
    eliminar_tweet
  }
}