import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="absolute inset-0 bg-[url('https://v3b.fal.media/files/b/0aa0ec4e/7vr1eaLQsJCY4y7W_S_Ow.jpg')] bg-cover bg-center opacity-20"></div>

        {/* Animated Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">¡Disponible para nuevos proyectos!</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Llevamos tu Marca al{' '}
                <span className="bg-gradient-to-r from-amber-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                  Siguiente Nivel
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Bienvenidos a <strong>Vertex Marketing</strong>. Somos tu aliado estratégico en
                marketing digital. Transformamos tu presencia online en resultados tangibles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="group bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 text-center"
                >
                  Cotizar Ahora
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition">→</span>
                </Link>
                <Link
                  href="/servicios"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 text-center"
                >
                  Ver Servicios
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-amber-300">500+</div>
                  <div className="text-white/70 text-sm">Clientes Felices</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-300">1000+</div>
                  <div className="text-white/70 text-sm">Proyectos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-300">98%</div>
                  <div className="text-white/70 text-sm">Retención</div>
                </div>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="hidden lg:block relative">
              <div className="relative z-10 animate-float">
                <div className="glass-dark rounded-3xl p-6 shadow-2xl">
                  <img
                    src="https://v3b.fal.media/files/b/0aa0ec45/RHlevCxUfzkZAVp9BgX_p.jpg"
                    alt="Marketing Dashboard"
                    className="rounded-2xl w-full"
                  />
                </div>
                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 glass-dark rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Crecimiento</div>
                      <div className="text-lg font-bold text-green-400">+127%</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 glass-dark rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Engagement</div>
                      <div className="text-lg font-bold text-rose-400">+85%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 70C1200 80 1320 85 1380 87.5L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" className="dark:fill-slate-900"/>
          </svg>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-rose-500 to-violet-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              NUESTROS SERVICIOS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Soluciones <span className="gradient-text">360°</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Todo lo que necesitas para hacer crecer tu presencia digital en un solo lugar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📱',
                titulo: 'Redes Sociales',
                descripcion: 'Gestión profesional de tus redes. Contenido estratégico que conecta con tu audiencia.',
                color: 'from-rose-500 to-pink-500',
                imagen: 'https://v3b.fal.media/files/b/0aa0ec46/2U13_gavAKX1B4uK53wiD.jpg',
              },
              {
                icon: '🔍',
                titulo: 'SEO / SEM',
                descripcion: 'Posicionamiento orgánico y campañas pagas que maximizan tu ROI.',
                color: 'from-violet-500 to-purple-500',
                imagen: 'https://v3b.fal.media/files/b/0aa0ec48/bc0zSkxu3rNMVc1pi79vU.jpg',
              },
              {
                icon: '📧',
                titulo: 'Email Marketing',
                descripcion: 'Campañas que convierten. Automatizaciones que venden mientras duermes.',
                color: 'from-cyan-500 to-blue-500',
                imagen: 'https://v3b.fal.media/files/b/0aa0ec4a/-Lkc3WGbiZxUtnRybUDZH.jpg',
              },
              {
                icon: '🎬',
                titulo: 'Video Marketing',
                descripcion: 'Contenido visual que captura atención y transmite tu mensaje.',
                color: 'from-amber-500 to-orange-500',
                imagen: 'https://v3b.fal.media/files/b/0aa0ec4b/YBvWZ2_c0hEK4rInMqe9l.jpg',
              },
              {
                icon: '📊',
                titulo: 'Analytics',
                descripcion: 'Datos que se convierten en insights accionables para tu negocio.',
                color: 'from-emerald-500 to-teal-500',
                imagen: 'https://v3b.fal.media/files/b/0aa0ec4c/uuffZl72MVdVFrJ4RL96-.jpg',
              },
              {
                icon: '🎨',
                titulo: 'Branding',
                descripcion: 'Identidad visual que destaca y permanece en la mente de tus clientes.',
                color: 'from-fuchsia-500 to-rose-500',
                imagen: 'https://v3b.fal.media/files/b/0aa0ec57/zbrMdDzp4xqa0WaCgLkwB.jpg',
              },
            ].map((servicio, index) => (
              <div
                key={index}
                className="group bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${servicio.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-4xl">{servicio.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:gradient-text transition-all">
                    {servicio.titulo}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {servicio.descripcion}
                  </p>
                  <Link href="/servicios" className={`inline-flex items-center gap-2 font-semibold text-transparent bg-gradient-to-r ${servicio.color} bg-clip-text hover:gap-3 transition-all`}>
                    Saber más →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/servicios" className="gradient-hero text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-rose hover:scale-105 transition-all duration-300 inline-block">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros Preview */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
                  alt="Equipo trabajando"
                  className="rounded-3xl shadow-2xl w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
                  alt="Reunión de equipo"
                  className="rounded-3xl shadow-2xl w-full h-64 object-cover mt-8"
                />
              </div>
              {/* Badge flotante */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gradient-hero rounded-full px-8 py-4 shadow-2xl animate-pulse-glow">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">8+</div>
                  <div className="text-sm opacity-90">Años de experiencia</div>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                SOBRE NOSOTROS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
                Tu socio estratégico en <span className="gradient-text">crecimiento digital</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">
                Vertex Marketing nació en 2017 con una misión clara: ayudar a las empresas a
                establecer una presencia digital sólida y efectiva.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
                Nuestro equipo de expertos trabaja contigo para desarrollar estrategias personalizadas
                que generen resultados medibles y sostenibles.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { num: '500+', label: 'Clientes satisfechos' },
                  { num: '1000+', label: 'Proyectos completados' },
                  { num: '50+', label: 'Premios ganados' },
                  { num: '24/7', label: 'Soporte dedicado' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${i % 2 === 0 ? 'from-rose-500 to-pink-500' : 'from-violet-500 to-cyan-500'} bg-clip-text text-transparent`}>
                      {stat.num}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/sobre-nosotros" className="gradient-hero text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-rose hover:scale-105 transition-all duration-300 inline-block">
                Conoce más sobre nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              TESTIMONIOS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Lo que dicen nuestros <span className="gradient-text-alt">clientes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                nombre: 'Carlos Rodríguez',
                rol: 'CEO, TechCorp',
                inicial: 'CR',
                color: 'from-rose-500 to-pink-500',
                texto: 'Vertex Marketing transformó completamente nuestra presencia digital. Las ventas aumentaron un 150% en solo 3 meses.',
                rating: 5,
              },
              {
                nombre: 'María López',
                rol: 'Directora de Marketing, RetailPlus',
                inicial: 'ML',
                color: 'from-violet-500 to-purple-500',
                texto: 'El equipo de Vertex entiende perfectamente las necesidades del negocio. Su estrategia de SEO nos posicionó en el #1 de Google.',
                rating: 5,
              },
              {
                nombre: 'Jorge García',
                rol: 'Fundador, StartupXYZ',
                inicial: 'JG',
                color: 'from-cyan-500 to-blue-500',
                texto: 'La mejor inversión que hemos hecho para nuestro negocio. El ROI de las campañas superó todas nuestras expectativas.',
                rating: 5,
              },
            ].map((testimonio, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-slate-100 dark:border-slate-700"
              >
                <div className="flex text-amber-400 mb-6">
                  {'★'.repeat(testimonio.rating)}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-8 italic text-lg leading-relaxed">
                  "{testimonio.texto}"
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${testimonio.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {testimonio.inicial}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 dark:text-white">{testimonio.nombre}</div>
                    <div className="text-sm text-slate-500">{testimonio.rol}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/50 to-violet-500/50"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para hacer crecer tu negocio?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos de marketing digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-rose-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300"
            >
              Solicitar Consulta Gratis
            </Link>
            <Link
              href="/servicios"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
