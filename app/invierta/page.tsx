import Link from 'next/link';

export default function InviertaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Invierta con Nosotros</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Únete a Vertex Marketing y forma parte de una agencia en crecimiento
          </p>
        </div>
      </section>

      {/* Oportunidad de Inversión */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                ¿Por qué invertir en Vertex Marketing?
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
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
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-sky-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Proyecciones Financieras</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                  <span>Revenue 2024</span>
                  <span className="text-2xl font-bold">$1.2M</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                  <span>Proyección 2025</span>
                  <span className="text-2xl font-bold">$2.5M</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                  <span>Proyección 2026</span>
                  <span className="text-2xl font-bold">$5.0M</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span>Margen EBITDA</span>
                  <span className="text-2xl font-bold">35%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Informativo */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 text-center">
            Conoce Más Sobre Esta Oportunidad
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12">
            Nuestro equipo te explica los beneficios y oportunidades de invertir en Vertex Marketing
          </p>

          {/* Video Container - 480x360 */}
          <div className="aspect-video max-w-[480px] mx-auto bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
            {/* Placeholder para video de YouTube */}
            <div className="w-full h-full flex flex-col items-center justify-center text-white">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <p className="text-lg font-semibold mb-2">Video Informativo</p>
                <p className="text-sm text-white/70">Duración: 1 minuto</p>
                <p className="text-xs text-white/50 mt-4">
                  [Insertar video de YouTube aquí con todos los integrantes del grupo]
                </p>
                <p className="text-xs text-white/50">
                  Tamaño: 480x360
                </p>
              </div>
            </div>
          </div>

          {/* Instrucciones para el video */}
          <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              📹 Instrucciones para el video:
            </h4>
            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>• Crear un canal de YouTube del grupo</li>
              <li>• Grabar video de máximo 1 minuto</li>
              <li>• Explicar oportunidades y beneficios de participar en este negocio</li>
              <li>• Deben aparecer TODOS los integrantes del grupo</li>
              <li>• Insertar el embed de YouTube en este espacio</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Modelos de Inversión */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 text-center">
            Modelos de Inversión Disponibles
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Ofrecemos diferentes opciones para adaptarnos a tus intereses y capacidad de inversión
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Modelo 1 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
              <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                Inversionista Ángel
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Para inversionistas individuales interesados en participar en rondas de inversión temprana.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
                <li>• Inversión mínima: $10,000</li>
                <li>• Equity: 2-5%</li>
                <li>• Reportes trimestrales</li>
                <li>• Derecho a información</li>
              </ul>
            </div>

            {/* Modelo 2 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border-2 border-indigo-500">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  MÁS POPULAR
                </span>
              </div>
              <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">B</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                Socio Estratégico
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Para empresas o inversionistas que buscan participación activa y beneficios estratégicos.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
                <li>• Inversión mínima: $50,000</li>
                <li>• Equity: 10-20%</li>
                <li>• Asiento en advisory board</li>
                <li>• Beneficios de servicios</li>
              </ul>
            </div>

            {/* Modelo 3 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
              <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                Franquicia Regional
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Opera una sucursal de Vertex Marketing en tu región con nuestro respaldo y metodología.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
                <li>• Inversión: $100,000+</li>
                <li>• Territorio exclusivo</li>
                <li>• Training completo</li>
                <li>• Soporte continuo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Directivo */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-12 text-center">
            Nuestro Equipo Directivo
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { nombre: '[Integrante 1]', rol: 'CEO', inicial: 'A' },
              { nombre: '[Integrante 2]', rol: 'CFO', inicial: 'B' },
              { nombre: '[Integrante 3]', rol: 'COO', inicial: 'C' },
              { nombre: '[Integrante 4]', rol: 'CMO', inicial: 'D' },
              { nombre: '[Integrante 5]', rol: 'CTO', inicial: 'E' },
            ].map((miembro, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">
                  {miembro.inicial}
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-white">{miembro.nombre}</h3>
                <p className="text-sm text-slate-500">{miembro.rol}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Inversionistas */}
      <section className="py-20 gradient-hero">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Interesado en Invertir?
          </h2>
          <p className="text-white/90 mb-8">
            Contáctanos para recibir información detallada y agendar una reunión con nuestro equipo directivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition">
              Contactar Ahora
            </Link>
            <a href="#" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition">
              Descargar Pitch Deck
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
