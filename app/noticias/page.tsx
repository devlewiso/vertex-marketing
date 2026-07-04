import Link from 'next/link';

const noticias = [
  {
    titulo: 'Vertex Marketing lanza nueva estrategia de Social Media para 2026',
    fecha: '28 de Junio, 2026',
    categoria: 'Redes Sociales',
    resumen: 'Descubre las últimas tendencias en gestión de redes sociales que estamos implementando para nuestros clientes.',
    imagen: 'https://v3b.fal.media/files/b/0aa0ec46/2U13_gavAKX1B4uK53wiD.jpg&q=80',
    color: 'from-rose-500 to-pink-500',
  },
  {
    titulo: 'Cómo el SEO ha evolucionado en la era de la IA',
    fecha: '25 de Junio, 2026',
    categoria: 'SEO',
    resumen: 'Análisis profundo de cómo la inteligencia artificial está cambiando el panorama del posicionamiento orgánico.',
    imagen: 'https://v3b.fal.media/files/b/0aa0ec48/bc0zSkxu3rNMVc1pi79vU.jpg&q=80',
    color: 'from-violet-500 to-purple-500',
  },
  {
    titulo: 'Case Study: Aumento del 200% en conversiones con Facebook Ads',
    fecha: '20 de Junio, 2026',
    categoria: 'Publicidad',
    resumen: 'Te contamos cómo logramos triplicar las conversiones de un cliente del sector retail.',
    imagen: 'https://v3b.fal.media/files/b/0aa0ec4a/-Lkc3WGbiZxUtnRybUDZH.jpg&q=80',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    titulo: 'Email Marketing sigue siendo rey en 2026',
    fecha: '15 de Junio, 2026',
    categoria: 'Email Marketing',
    resumen: 'Las estadísticas lo confirman: el email marketing tiene el ROI más alto de todos los canales digitales.',
    imagen: 'https://v3b.fal.media/files/b/0aa0ec4a/-Lkc3WGbiZxUtnRybUDZH.jpg&q=80',
    color: 'from-amber-500 to-orange-500',
  },
  {
    titulo: 'Tendencias de Video Marketing para este año',
    fecha: '10 de Junio, 2026',
    categoria: 'Video',
    resumen: 'El video corto domina las redes sociales. Aprende cómo aprovechar esta tendencia.',
    imagen: 'https://v3b.fal.media/files/b/0aa0ec4b/YBvWZ2_c0hEK4rInMqe9l.jpg&q=80',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    titulo: 'Analytics predictivo: El futuro del marketing de datos',
    fecha: '5 de Junio, 2026',
    categoria: 'Analytics',
    resumen: 'Cómo usar datos predictivos para anticiparte a las necesidades de tus clientes.',
    imagen: 'https://v3b.fal.media/files/b/0aa0ec4c/uuffZl72MVdVFrJ4RL96-.jpg&q=80',
    color: 'from-fuchsia-500 to-rose-500',
  },
];

const categorias = [
  { nombre: 'Todas', count: 24, icon: '📰' },
  { nombre: 'Redes Sociales', count: 8, icon: '📱' },
  { nombre: 'SEO', count: 6, icon: '🔍' },
  { nombre: 'Publicidad', count: 5, icon: '📢' },
  { nombre: 'Video', count: 5, icon: '🎬' },
];

export default function NoticiasPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero-alt"></div>
        <div className="absolute inset-0 bg-[url('https://v3b.fal.media/files/b/0aa0ec4c/uuffZl72MVdVFrJ4RL96-.jpg&q=80')] bg-cover bg-center opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            BLOG & ACTUALIZACIONES
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Noticias y <span className="bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">Tendencias</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Mantente informado sobre las últimas novedades de Vertex Marketing y el mundo del marketing digital
          </p>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((cat, i) => (
              <button
                key={i}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  i === 0
                    ? 'gradient-hero text-white shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.nombre}
                <span className="ml-2 text-sm opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((noticia, index) => (
              <article
                key={index}
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`bg-gradient-to-r ${noticia.color} text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg`}>
                      {noticia.categoria}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs text-slate-500 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {noticia.fecha}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 line-clamp-2 group-hover:gradient-text transition-all">
                    {noticia.titulo}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                    {noticia.resumen}
                  </p>
                  <Link href="#" className={`inline-flex items-center gap-2 font-semibold text-transparent bg-gradient-to-r ${noticia.color} bg-clip-text hover:gap-3 transition-all`}>
                    Leer artículo completo
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`w-12 h-12 rounded-full font-semibold transition-all ${
                  num === 1
                    ? 'gradient-hero text-white shadow-lg'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {num}
              </button>
            ))}
            <button className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              →
            </button>
          </div>
        </div>
      </section>

      {/* Blogs de los Integrantes */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
              EQUIPO VERTEX
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Blogs de Nuestro <span className="bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">Equipo</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Cada integrante comparte su experiencia y conocimientos especializados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { nombre: 'Blog de Marketing Digital', autor: 'Integrante 1', especialidad: 'Estrategia', icon: '📈', color: 'from-rose-500 to-pink-500' },
              { nombre: 'Estrategias Digitales', autor: 'Integrante 2', especialidad: 'Social Media', icon: '📱', color: 'from-violet-500 to-purple-500' },
              { nombre: 'SEO y Contenido', autor: 'Integrante 3', especialidad: 'SEO', icon: '🔍', color: 'from-cyan-500 to-blue-500' },
              { nombre: 'Social Media Tips', autor: 'Integrante 4', especialidad: 'Content', icon: '✏️', color: 'from-amber-500 to-orange-500' },
              { nombre: 'Analytics y Datos', autor: 'Integrante 5', especialidad: 'Analytics', icon: '📊', color: 'from-emerald-500 to-teal-500' },
            ].map((blog, i) => (
              <a
                key={i}
                href="#"
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${blog.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {blog.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{blog.nombre}</h3>
                <p className="text-sm text-slate-400 mb-1">Por {blog.autor}</p>
                <p className="text-xs text-slate-500">Especialidad: {blog.especialidad}</p>
                <div className="mt-4 text-sm font-semibold bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
                  Visitar blog →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://v3b.fal.media/files/b/0aa0ec4e/7vr1eaLQsJCY4y7W_S_Ow.jpg&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Suscríbete a Nuestro Newsletter
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Recibe las últimas noticias y consejos de marketing digital directamente en tu correo.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-6 py-4 rounded-full text-slate-800 bg-white focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button
              type="submit"
              className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 hover:scale-105 transition-all duration-300"
            >
              Suscribirse
            </button>
          </form>
          <p className="text-sm text-white/60 mt-4">
            🎁 Bonus: Recibe gratis nuestra guía "10 Estrategias de Marketing para 2026"
          </p>
        </div>
      </section>
    </div>
  );
}
