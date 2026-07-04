import Link from 'next/link';

export default function InviertaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559526324-4b87bef5e0c9?w=1920&q=80')] bg-cover bg-center opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            OPORTUNIDAD DE INVERSIÓN
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Invierta con <span className="bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">Nosotros</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Únete a Vertex Marketing y forma parte de una agencia en crecimiento exponencial
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '150%', label: 'Crecimiento anual promedio', icon: '📈', color: 'from-rose-500 to-pink-500' },
              { num: '500+', label: 'Clientes activos', icon: '👥', color: 'from-violet-500 to-purple-500' },
              { num: '35%', label: 'Margen EBITDA', icon: '💰', color: 'from-cyan-500 to-blue-500' },
              { num: '8+', label: 'Años en el mercado', icon: '🏆', color: 'from-amber-500 to-orange-500' },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-3xl shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-slate-800 dark:text-white mb-2">{stat.num}</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oportunidad */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
                POR QUÉ INVERTIR
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-8">
                Una oportunidad <span className="gradient-text">única</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">
                El mercado de marketing digital está en constante crecimiento, con una proyección
                de alcanzar $1.5 billones para 2030. Vertex Marketing está posicionada para
                capitalizar esta tendencia con una trayectoria comprobada de éxito.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Crecimiento anual del 150% en los últimos 3 años',
                  'Cartera diversificada de 500+ clientes',
                  'Equipo experimentado de profesionales',
                  'Tecnología de punta y procesos optimizados',
                  'Modelo de negocio escalable y rentable',
                  'Oportunidades de expansión regional',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contacto" className="gradient-hero text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-rose hover:scale-105 transition-all duration-300 inline-block">
                Solicitar Información
              </Link>
            </div>

            {/* Proyecciones */}
            <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">Proyecciones Financieras</h3>
              <div className="space-y-6">
                {[
                  { label: 'Revenue 2024', value: '$1.2M', growth: '+45%' },
                  { label: 'Proyección 2025', value: '$2.5M', growth: '+108%' },
                  { label: 'Proyección 2026', value: '$5.0M', growth: '+100%' },
                  { label: 'Margen EBITDA', value: '35%', growth: 'Estable' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/20 pb-4 last:border-0">
                    <div>
                      <div className="text-white/80 text-sm mb-1">{item.label}</div>
                      <div className="text-3xl font-bold">{item.value}</div>
                    </div>
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      item.growth.includes('+') ? 'bg-white/20 text-green-300' : 'bg-white/10 text-white/80'
                    }`}>
                      {item.growth}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">ROI Esperado (3 años)</span>
                  <span className="text-3xl font-bold text-amber-300">250%+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Informativo */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
              VIDEO PRESENTACIÓN
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Conoce Más Sobre Esta <span className="gradient-text">Oportunidad</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Nuestro equipo te explica los beneficios y oportunidades de invertir en Vertex Marketing
            </p>
          </div>

          {/* Video Container - 480x360 */}
          <div className="relative max-w-[640px] mx-auto">
            <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87bef5e0c9?w=640&q=80"
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-white font-semibold mb-1">📹 Video Informativo de Inversión</p>
                  <p className="text-white/70 text-sm">Duración: 1 minuto | Todos los integrantes del grupo</p>
                </div>
              </div>
            </div>

            {/* Instrucciones */}
            <div className="mt-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
              <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
                <span>📋</span> Requisitos para el video:
              </h4>
              <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
                <li>• Crear un canal de YouTube del grupo</li>
                <li>• Grabar video de máximo 1 minuto (480x360)</li>
                <li>• Explicar oportunidades y beneficios de participar en este negocio</li>
                <li>• Deben aparecer TODOS los integrantes del grupo</li>
                <li>• Insertar el embed de YouTube en este espacio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modelos de Inversión */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-violet-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
              OPCIONES DE INVERSIÓN
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Modelos <span className="gradient-text">Disponibles</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Ofrecemos diferentes opciones para adaptarnos a tus intereses y capacidad de inversión
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                nivel: 'A',
                nombre: 'Inversionista Ángel',
                desc: 'Para inversionistas individuales interesados en participar en rondas de inversión temprana.',
                inversion: '$10,000+',
                equity: '2-5%',
                beneficios: ['Reportes trimestrales', 'Derecho a información', 'Actualizaciones mensuales', 'Acceso a dashboard'],
                color: 'from-slate-500 to-slate-600',
                popular: false,
              },
              {
                nivel: 'B',
                nombre: 'Socio Estratégico',
                desc: 'Para empresas o inversionistas que buscan participación activa y beneficios estratégicos.',
                inversion: '$50,000+',
                equity: '10-20%',
                beneficios: ['Asiento en advisory board', 'Beneficios de servicios', 'Voto en decisiones', 'Dividendos preferentes'],
                color: 'from-rose-500 to-pink-500',
                popular: true,
              },
              {
                nivel: 'C',
                nombre: 'Franquicia Regional',
                desc: 'Opera una sucursal de Vertex Marketing en tu región con nuestro respaldo y metodología.',
                inversion: '$100,000+',
                equity: 'Territorio exclusivo',
                beneficios: ['Territorio exclusivo', 'Training completo', 'Soporte continuo', 'Marketing compartido'],
                color: 'from-violet-500 to-purple-500',
                popular: false,
              },
            ].map((modelo, i) => (
              <div
                key={i}
                className={`relative bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg ${
                  modelo.popular ? 'ring-4 ring-rose-500 scale-105' : ''
                }`}
              >
                {modelo.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-hero text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
                    MÁS POPULAR
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${modelo.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <span className="text-3xl font-bold text-white">{modelo.nivel}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">{modelo.nombre}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{modelo.desc}</p>

                <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-500">Inversión mínima</span>
                    <span className="text-xl font-bold text-slate-800 dark:text-white">{modelo.inversion}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Equity / Beneficio</span>
                    <span className="text-xl font-bold text-slate-800 dark:text-white">{modelo.equity}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {modelo.beneficios.map((beneficio, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {beneficio}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto"
                  className={`block text-center py-4 rounded-full font-bold transition-all ${
                    modelo.popular
                      ? 'gradient-hero text-white hover:shadow-rose'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-200'
                  }`}
                >
                  Solicitar Información
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo Directivo */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
              LIDERAZGO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Equipo <span className="gradient-text">Directivo</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { nombre: '[Integrante 1]', rol: 'CEO', color: 'from-rose-500 to-pink-500' },
              { nombre: '[Integrante 2]', rol: 'CFO', color: 'from-violet-500 to-purple-500' },
              { nombre: '[Integrante 3]', rol: 'COO', color: 'from-cyan-500 to-blue-500' },
              { nombre: '[Integrante 4]', rol: 'CMO', color: 'from-amber-500 to-orange-500' },
              { nombre: '[Integrante 5]', rol: 'CTO', color: 'from-emerald-500 to-teal-500' },
            ].map((miembro, i) => (
              <div key={i} className="text-center group">
                <div className={`w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-r ${miembro.color} p-1 shadow-xl group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-2xl font-bold text-slate-600 dark:text-slate-300">
                    {miembro.nombre.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">{miembro.nombre}</h3>
                <p className="text-slate-500 text-sm">{miembro.rol}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559526324-4b87bef5e0c9?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Interesado en Invertir?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Contáctanos para recibir información detallada y agendar una reunión con nuestro equipo directivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-rose-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300"
            >
              Contactar Ahora
            </Link>
            <a
              href="#"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              📥 Descargar Pitch Deck
            </a>
          </div>
          <p className="text-white/70 text-sm mt-8">
            O escribe directamente a: inversionistas@vertexmarketing.com
          </p>
        </div>
      </section>
    </div>
  );
}
