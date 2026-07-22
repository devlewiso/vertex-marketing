import Link from 'next/link';

const servicios = [
  {
    icon: '📱',
    titulo: 'Gestión de Redes Sociales',
    descripcion: 'Administración profesional de tus redes sociales. Creamos contenido estratégico, programamos publicaciones y gestionamos la interacción con tu audiencia.',
    beneficios: ['Content Calendar mensual', 'Diseño gráfico personalizado', 'Community Management 24/7', 'Reportes de rendimiento'],
    imagen: 'https://v3b.fal.media/files/b/0aa0ec46/2U13_gavAKX1B4uK53wiD.jpg',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: '🔍',
    titulo: 'SEO y Posicionamiento',
    descripcion: 'Optimizamos tu sitio web para motores de búsqueda. Aumentamos tu visibilidad orgánica y atraemos tráfico calificado.',
    beneficios: ['Auditoría SEO completa', 'Optimización on-page', 'Link building estratégico', 'Monitoreo de rankings'],
    imagen: 'https://v3b.fal.media/files/b/0aa0ec48/bc0zSkxu3rNMVc1pi79vU.jpg',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: '📢',
    titulo: 'Publicidad Digital (SEM)',
    descripcion: 'Campañas publicitarias efectivas en Google Ads, Facebook Ads, Instagram Ads y LinkedIn Ads.',
    beneficios: ['Segmentación avanzada', 'Optimización de ROI', 'A/B testing continuo', 'Reportes detallados'],
    imagen: 'https://v3b.fal.media/files/b/0aa0ec4a/-Lkc3WGbiZxUtnRybUDZH.jpg',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: '✉️',
    titulo: 'Email Marketing',
    descripcion: 'Campañas de email marketing que convierten. Desde newsletters hasta automatizaciones de venta.',
    beneficios: ['Diseño responsive', 'Segmentación de audiencia', 'Automatización de flujos', 'Analytics avanzado'],
    imagen: 'https://v3b.fal.media/files/b/0aa0ec4a/-Lkc3WGbiZxUtnRybUDZH.jpg',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: '🎬',
    titulo: 'Producción de Video',
    descripcion: 'Videos profesionales para redes sociales, publicidad y contenido corporativo.',
    beneficios: ['Guion y storyboard', 'Grabación profesional', 'Edición y post-producción', 'Optimización por plataforma'],
    imagen: 'https://v3b.fal.media/files/b/0aa0ec4b/YBvWZ2_c0hEK4rInMqe9l.jpg',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: '📊',
    titulo: 'Analytics y Reportes',
    descripcion: 'Medición y análisis de datos para tomar decisiones informadas y optimizar tus campañas.',
    beneficios: ['Dashboards personalizados', 'KPIs definidos', 'Insights accionables', 'Reuniones de seguimiento'],
    imagen: 'https://v3b.fal.media/files/b/0aa0ec4c/uuffZl72MVdVFrJ4RL96-.jpg',
    color: 'from-fuchsia-500 to-rose-500',
  },
];

export default function ServiciosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="absolute inset-0 bg-[url('https://v3b.fal.media/files/b/0aa0ec4e/7vr1eaLQsJCY4y7W_S_Ow.jpg')] bg-cover bg-center opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            NUESTROS SERVICIOS
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Soluciones para hacer <span className="bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">crecer tu negocio</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Estrategias integrales de marketing digital diseñadas para maximizar tu ROI
          </p>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-48 md:h-full overflow-hidden">
                    <img
                      src={servicio.imagen}
                      alt={servicio.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${servicio.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}></div>
                    <div className="absolute bottom-4 left-4 text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {servicio.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                      {servicio.titulo}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {servicio.descripcion}
                    </p>
                    <ul className="space-y-3">
                      {servicio.beneficios.map((beneficio, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${servicio.color} flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          {beneficio}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
              CÓMO TRABAJAMOS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Nuestro <span className="gradient-text">proceso</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', titulo: 'Descubrimiento', desc: 'Analizamos tu negocio y objetivos', color: 'from-rose-500 to-pink-500' },
              { num: '02', titulo: 'Estrategia', desc: 'Diseñamos un plan personalizado', color: 'from-violet-500 to-purple-500' },
              { num: '03', titulo: 'Ejecución', desc: 'Implementamos las acciones', color: 'from-cyan-500 to-blue-500' },
              { num: '04', titulo: 'Optimización', desc: 'Medimos y mejoramos resultados', color: 'from-amber-500 to-orange-500' },
            ].map((paso, i) => (
              <div key={i} className="relative text-center">
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${paso.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-3xl font-bold text-white">{paso.num}</span>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 -z-10"></div>
                )}
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{paso.titulo}</h3>
                <p className="text-slate-600 dark:text-slate-400">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
              PLANES Y PRECIOS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Inversión <span className="gradient-text">flexible</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                nombre: 'Startup',
                precio: 'Q3,900',
                desc: 'Para negocios que comienzan',
                features: ['3 Redes Sociales', '8 Posts/mes', 'Reporte mensual', 'Soporte por email'],
                color: 'from-slate-500 to-slate-600',
                popular: false,
              },
              {
                nombre: 'Business',
                precio: 'Q9,360',
                desc: 'El más popular',
                features: ['6 Redes Sociales', '20 Posts/mes', 'Campañas Ads', 'Reporte quincenal', 'Soporte prioritario'],
                color: 'from-rose-500 to-pink-500',
                popular: true,
              },
              {
                nombre: 'Enterprise',
                precio: 'Q19,500',
                desc: 'Soluciones completas',
                features: ['Redes ilimitadas', 'Posts ilimitados', 'Todas las campañas', 'Reporte semanal', 'Manager dedicado', 'Reuniones semanales'],
                color: 'from-violet-500 to-purple-500',
                popular: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg ${plan.popular ? 'ring-4 ring-rose-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-hero text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    MÁS POPULAR
                  </div>
                )}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6`}>
                  <span className="text-2xl font-bold text-white">{plan.nombre[0]}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{plan.nombre}</h3>
                <p className="text-slate-500 mb-6">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-slate-800 dark:text-white">{plan.precio}</span>
                  <span className="text-slate-500">/mes</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacto"
                  className={`block text-center py-4 rounded-full font-bold transition-all ${
                    plan.popular
                      ? 'gradient-hero text-white hover:shadow-rose'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-200'
                  }`}
                >
                  Empezar Ahora
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://v3b.fal.media/files/b/0aa0ec4e/7vr1eaLQsJCY4y7W_S_Ow.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Necesitas un servicio personalizado?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Diseñamos estrategias a medida para las necesidades específicas de tu negocio.
          </p>
          <Link
            href="/contacto"
            className="bg-white text-rose-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 inline-block"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
