import Link from 'next/link';

const noticias = [
  {
    titulo: 'Vertex Marketing lanza nueva estrategia de Social Media para 2026',
    fecha: '28 de Junio, 2026',
    categoria: 'Redes Sociales',
    resumen: 'Descubre las últimas tendencias en gestión de redes sociales que estamos implementando para nuestros clientes.',
    imagen: '📱',
  },
  {
    titulo: 'Cómo el SEO ha evolucionado en la era de la IA',
    fecha: '25 de Junio, 2026',
    categoria: 'SEO',
    resumen: 'Análisis profundo de cómo la inteligencia artificial está cambiando el panorama del posicionamiento orgánico.',
    imagen: '🔍',
  },
  {
    titulo: 'Case Study: Aumento del 200% en conversiones con Facebook Ads',
    fecha: '20 de Junio, 2026',
    categoria: 'Publicidad',
    resumen: 'Te contamos cómo logramos triplicar las conversiones de un cliente del sector retail.',
    imagen: '📈',
  },
  {
    titulo: 'Email Marketing sigue siendo rey en 2026',
    fecha: '15 de Junio, 2026',
    categoria: 'Email Marketing',
    resumen: 'Las estadísticas lo confirman: el email marketing tiene el ROI más alto de todos los canales digitales.',
    imagen: '📧',
  },
  {
    titulo: 'Tendencias de Video Marketing para este año',
    fecha: '10 de Junio, 2026',
    categoria: 'Video',
    resumen: 'El video corto domina las redes sociales. Aprende cómo aprovechar esta tendencia.',
    imagen: '🎬',
  },
];

export default function NoticiasPage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Noticias y Actualizaciones</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Mantente informado sobre las últimas novedades de Vertex Marketing y el mundo del marketing digital
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((noticia, index) => (
              <article key={index} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center text-6xl">
                  {noticia.imagen}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-semibold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
                      {noticia.categoria}
                    </span>
                    <span className="text-xs text-slate-500">{noticia.fecha}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                    {noticia.titulo}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {noticia.resumen}
                  </p>
                  <Link href="#" className="text-indigo-500 font-semibold hover:text-indigo-600 transition">
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs de los Integrantes */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            Blogs de Nuestro Equipo
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog 1 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Blog de Marketing Digital</h3>
              <p className="text-sm text-slate-500 mb-4">Por [Nombre Integrante 1]</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-600 text-sm">
                Visitar blog →
              </a>
            </div>
            {/* Blog 2 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Estrategias Digitales</h3>
              <p className="text-sm text-slate-500 mb-4">Por [Nombre Integrante 2]</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-600 text-sm">
                Visitar blog →
              </a>
            </div>
            {/* Blog 3 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2">SEO y Contenido</h3>
              <p className="text-sm text-slate-500 mb-4">Por [Nombre Integrante 3]</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-600 text-sm">
                Visitar blog →
              </a>
            </div>
            {/* Blog 4 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Social Media Tips</h3>
              <p className="text-sm text-slate-500 mb-4">Por [Nombre Integrante 4]</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-600 text-sm">
                Visitar blog →
              </a>
            </div>
            {/* Blog 5 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Analytics y Datos</h3>
              <p className="text-sm text-slate-500 mb-4">Por [Nombre Integrante 5]</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-600 text-sm">
                Visitar blog →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 gradient-hero">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Suscríbete a Nuestro Newsletter
          </h2>
          <p className="text-white/90 mb-8">
            Recibe las últimas noticias y consejos de marketing digital directamente en tu correo.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-4 rounded-full text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="bg-slate-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-700 transition">
              Suscribirse
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
