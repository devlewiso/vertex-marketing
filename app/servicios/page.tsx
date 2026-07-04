import Link from 'next/link';

const servicios = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    titulo: 'Gestión de Redes Sociales',
    descripcion: 'Administración profesional de tus redes sociales. Creamos contenido estratégico, programamos publicaciones y gestionamos la interacción con tu audiencia.',
    beneficios: ['Content Calendar mensual', 'Diseño gráfico personalizado', 'Community Management 24/7', 'Reportes de rendimiento'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    titulo: 'SEO y Posicionamiento',
    descripcion: 'Optimizamos tu sitio web para motores de búsqueda. Aumentamos tu visibilidad orgánica y atraemos tráfico calificado.',
    beneficios: ['Auditoría SEO completa', 'Optimización on-page', 'Link building estratégico', 'Monitoreo de rankings'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.002 4.002 0 012.157 9.814a4 4 0 015.58-3.672l2.263.757" />
      </svg>
    ),
    titulo: 'Publicidad Digital (SEM)',
    descripcion: 'Campañas publicitarias efectivas en Google Ads, Facebook Ads, Instagram Ads y LinkedIn Ads.',
    beneficios: ['Segmentación avanzada', 'Optimización de ROI', 'A/B testing continuo', 'Reportes detallados'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    titulo: 'Email Marketing',
    descripcion: 'Campañas de email marketing que convierten. Desde newsletters hasta automatizaciones de venta.',
    beneficios: ['Diseño responsive', 'Segmentación de audiencia', 'Automatización de flujos', 'Analytics avanzado'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    titulo: 'Producción de Video',
    descripcion: 'Videos profesionales para redes sociales, publicidad y contenido corporativo.',
    beneficios: ['Guion y storyboard', 'Grabación profesional', 'Edición y post-producción', 'Optimización por plataforma'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      </svg>
    ),
    titulo: 'Analytics y Reportes',
    descripcion: 'Medición y análisis de datos para tomar decisiones informadas y optimizar tus campañas.',
    beneficios: ['Dashboards personalizados', 'KPIs definidos', 'Insights accionables', 'Reuniones de seguimiento'],
  },
];

export default function ServiciosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Soluciones integrales de marketing digital diseñadas para hacer crecer tu negocio
          </p>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition">
                <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-6 text-white">
                  {servicio.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                  {servicio.titulo}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {servicio.descripcion}
                </p>
                <ul className="space-y-2">
                  {servicio.beneficios.map((beneficio, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
            ¿Necesitas un servicio personalizado?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Diseñamos estrategias a medida para las necesidades específicas de tu negocio.
          </p>
          <Link href="/contacto" className="bg-indigo-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-600 transition">
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
