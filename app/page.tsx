import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Llevamos tu Marca al <span className="underline">Siguiente Nivel</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Bienvenidos a Vertex Marketing. Somos tu aliado estratégico en marketing digital.
              Transformamos tu presencia online en resultados tangibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition">
                Cotizar Ahora
              </Link>
              <Link href="/servicios" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition">
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Soluciones integrales de marketing digital para hacer crecer tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">Gestión de Redes Sociales</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Creamos y gestionamos tu presencia en redes sociales para conectar con tu audiencia y aumentar tu engagement.
              </p>
            </div>

            {/* Servicio 2 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">SEO y Posicionamiento</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Optimizamos tu sitio web para que aparezca en los primeros resultados de búsqueda y atraigas tráfico orgánico.
              </p>
            </div>

            {/* Servicio 3 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.002 4.002 0 012.157 9.814a4 4 0 015.58-3.672l2.263.757" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">Publicidad Digital</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Campañas publicitarias efectivas en Google Ads, Facebook Ads y otras plataformas para maximizar tu ROI.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/servicios" className="text-indigo-500 font-semibold hover:text-indigo-600 transition">
              Ver todos los servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros Preview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
                Sobre Vertex Marketing
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Somos una agencia de marketing digital comprometida con el éxito de tus proyectos.
                Con años de experiencia en el mercado, hemos ayudado a cientos de empresas a
                establecer y fortalecer su presencia digital.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Nuestro equipo de expertos trabaja contigo para desarrollar estrategias personalizadas
                que generen resultados medibles y sostenibles.
              </p>
              <Link href="/sobre-nosotros" className="text-indigo-500 font-semibold hover:text-indigo-600 transition">
                Conoce más sobre nosotros →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-sky-500 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-white/80">Clientes Felices</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <div className="text-white/80">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-white/80">Tasa de Retención</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-white/80">Soporte Dedicado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
              <div className="flex text-yellow-400 mb-4">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 italic">
                "Vertex Marketing transformó completamente nuestra presencia digital.
                Las ventas aumentaron un 150% en solo 3 meses."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  CR
                </div>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-white">Carlos Rodríguez</div>
                  <div className="text-sm text-slate-500">CEO, TechCorp</div>
                </div>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
              <div className="flex text-yellow-400 mb-4">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 italic">
                "El equipo de Vertex entiende perfectamente las necesidades del negocio.
                Su estrategia de SEO nos posicionó en el #1 de Google."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                  ML
                </div>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-white">María López</div>
                  <div className="text-sm text-slate-500">Directora de Marketing, RetailPlus</div>
                </div>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
              <div className="flex text-yellow-400 mb-4">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 italic">
                "La mejor inversión que hemos hecho para nuestro negocio.
                El ROI de las campañas de publicidad digital superó todas nuestras expectativas."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  JG
                </div>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-white">Jorge García</div>
                  <div className="text-sm text-slate-500">Fundador, StartupXYZ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Hacer Crecer tu Negocio?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos de marketing digital.
          </p>
          <Link href="/contacto" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition inline-block">
            Solicitar Consulta Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
