export const tweets_iniciales = [
  {
    id: '1',
    usuario_nombre: 'Ana Garcia',
    usuario_username: 'anagarcia',
    usuario_avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    contenido: 'Aprendiendo React con hooks avanzados. Increible lo poderoso que es',
    fecha: new Date(Date.now() - 3600000).toLocaleString(),
    likes: 45,
    retweets: 12,
    comentarios: 8
  },
  {
    id: '2',
    usuario_nombre: 'Carlos Lopez',
    usuario_username: 'carloslopez',
    usuario_avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    contenido: 'El sistema de autenticacion con Context API es una maravilla',
    fecha: new Date(Date.now() - 7200000).toLocaleString(),
    likes: 32,
    retweets: 7,
    comentarios: 5
  },
  {
    id: '3',
    usuario_nombre: 'Maria Fernandez',
    usuario_username: 'mariaf',
    usuario_avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    contenido: 'Protegiendo rutas en React con componentes de orden superior',
    fecha: new Date(Date.now() - 10800000).toLocaleString(),
    likes: 67,
    retweets: 23,
    comentarios: 15
  }
]