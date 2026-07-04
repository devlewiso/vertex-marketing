import Link from 'next/link';

const redes = [
  {
    nombre: 'Facebook',
    url: 'https://facebook.com/vertexmarketing',
    seguidores: '15.2K',
    descripcion: 'Noticias, actualizaciones y contenido exclusivo sobre marketing digital.',
    color: 'from-blue-600 to-blue-700',
    icono: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    nombre: 'Twitter / X',
    url: 'https://twitter.com/vertexmarketing',
    seguidores: '8.5K',
    descripcion: 'Tips rápidos, tendencias y conversaciones en tiempo real.',
    color: 'from-slate-700 to-slate-900',
    icono: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
  },
  {
    nombre: 'Instagram',
    url: 'https://instagram.com/vertexmarketing',
    seguidores: '22.8K',
    descripcion: 'Contenido visual, behind the scenes y casos de éxito.',
    color: 'from-pink-500 via-rose-500 to-amber-500',
    icono: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    nombre: 'LinkedIn',
    url: 'https://linkedin.com/company/vertexmarketing',
    seguidores: '5.3K',
    descripcion: 'Contenido profesional, networking y oportunidades laborales.',
    color: 'from-blue-700 to-blue-800',
    icono: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    nombre: 'YouTube',
    url: 'https://youtube.com/@vertexmarketing',
    seguidores: '12.1K',
    descripcion: 'Tutoriales, webinars, casos de estudio y contenido educativo.',
    color: 'from-red-600 to-red-700',
    icono: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    nombre: 'TikTok',
    url: 'https://tiktok.com/@vertexmarketing',
    seguidores: '18.7K',
    descripcion: 'Contenido corto, trends y tips de marketing en formato vertical.',
    color: 'from-slate-800 via-pink-500 to-cyan-400',
    icono: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.51.39-.9-.02-6.63 0-13.25 0-19.88z"/>
      </svg>
    ),
  },
];

const postsDestacados = [
  {
    plataforma: 'Instagram',
    titulo: '5 Métricas que debes seguir en 2026',
    desc: 'Descubre las KPIs esenciales para medir el éxito de tus campañas.',
    imagen: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
    color: 'from-pink-500 to-rose-500',
    emoji: '📊',
  },
  {
    plataforma: 'LinkedIn',
    titulo: 'Cómo segmentar tu audiencia B2B',
    desc: 'Estrategias efectivas para llegar a tomadores de decisiones.',
    imagen: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80',
    color: 'from-blue-600 to-cyan-500',
    emoji: '🎯',
  },
  {
    plataforma: 'TikTok',
    titulo: 'Trends de marketing para este mes',
    desc: 'Los formatos de video que están dominando las redes.',
    imagen: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&q=80',
    color: 'from-slate-800 via-pink-500 to-cyan-400',
    emoji: '🎬',
  },
];

export default function RedesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero-alt"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&q=80')] bg-cover bg-center opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            CONECTA CON NOSOTROS
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Síguenos en <span className="bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">Redes Sociales</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Conéctate con nosotros en todas nuestras plataformas y mantente actualizado
          </p>
        </div>
      </section>

      {/* Redes Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {redes.map((red, index) => (
              <a
                key={index}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${red.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {red.icono}
                  </div>
                  <span className="text-sm font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    {red.seguidores}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:gradient-text transition-all">
                  {red.nombre}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                  {red.descripcion}
                </p>
                <div className="flex items-center text-sm font-semibold bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent">
                  Seguir ahora
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contenido Destacado */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
              LO MÁS RECIENTE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Contenido <span className="gradient-text-alt">Destacado</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Lo último que hemos publicado en nuestras redes sociales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {postsDestacados.map((post, index) => (
              <div
                key={index}
                className="group bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.imagen}
                    alt={post.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${post.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-semibold">
                      {post.plataforma}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-4xl">{post.emoji}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                    {post.titulo}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                    {post.desc}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 font-semibold bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent hover:gap-3 transition-all">
                    Ver publicación
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestro Alcance en Números
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '82.6K', label: 'Seguidores totales', icon: '👥' },
              { num: '150+', label: 'Posts por mes', icon: '📝' },
              { num: '5.2M', label: 'Impresiones mensuales', icon: '👁️' },
              { num: '8.5%', label: 'Engagement rate', icon: '💝' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.num}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            ¿Quieres más contenido exclusivo?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
            Suscríbete a nuestro newsletter y recibe contenido premium directamente en tu correo.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-6 py-4 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="gradient-hero text-white px-8 py-4 rounded-full font-bold hover:shadow-rose hover:scale-105 transition-all duration-300"
            >
              Suscribirse
            </button>
          </form>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
            🎁 Bonus: Recibe gratis nuestra guía "10 Estrategias de Marketing para 2026"
          </p>
        </div>
      </section>
    </div>
  );
}
