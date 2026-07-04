import Link from 'next/link';

export default function SobreNosotrosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Vertex Marketing</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Conoce la historia, misión y equipo detrás de nuestra agencia
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                Nuestra Historia
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Vertex Marketing nació en 2017 con una misión clara: ayudar a las empresas a
                establecer una presencia digital sólida y efectiva. Lo que comenzó como un
                pequeño equipo de entusiastas del marketing se ha convertido en una agencia
                full-service reconocida.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                A lo largo de los años, hemos trabajado con más de 500 clientes de diversos
                sectores, desde startups hasta empresas consolidadas. Cada proyecto nos ha
                permitido aprender, crecer y perfeccionar nuestras estrategias.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Hoy en día, Vertex Marketing es sinónimo de resultados, innovación y compromiso
                con el éxito de nuestros clientes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-sky-500 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                    2017
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Fundación</h3>
                    <p className="text-white/80">Vertex Marketing abre sus puertas</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                    2019
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expansión</h3>
                    <p className="text-white/80">Nuevo equipo y servicios ampliados</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                    2022
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Reconocimiento</h3>
                    <p className="text-white/80">Premio a la Mejor Agencia Digital</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                    2026
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Liderazgo</h3>
                    <p className="text-white/80">+500 clientes satisfechos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Misión</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Empoderar a las empresas con estrategias de marketing digital innovadoras que
                generen crecimiento sostenible y resultados medibles.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Visión</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Ser la agencia de marketing digital de referencia en la región, reconocida
                por nuestra excelencia, innovación y compromiso con el éxito del cliente.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Valores</h3>
              <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                <li>✓ Integridad</li>
                <li>✓ Innovación</li>
                <li>✓ Transparencia</li>
                <li>✓ Excelencia</li>
                <li>✓ Compromiso</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 text-center">
            Nuestro Equipo
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Profesionales apasionados dedicados a hacer crecer tu negocio
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { nombre: '[Integrante 1]', rol: 'CEO & Fundador', inicial: 'A' },
              { nombre: '[Integrante 2]', rol: 'Directora de Marketing', inicial: 'B' },
              { nombre: '[Integrante 3]', rol: 'Especialista SEO', inicial: 'C' },
              { nombre: '[Integrante 4]', rol: 'Community Manager', inicial: 'D' },
              { nombre: '[Integrante 5]', rol: 'Analista de Datos', inicial: 'E' },
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

      {/* Ubicación */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            Nuestra Ubicación
          </h2>
          <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg">
            <div className="h-96 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              <p className="text-slate-500 dark:text-slate-400">
                [Mapa de Google Maps aquí]
              </p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Dirección</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    [Dirección completa]<br />
                    Ciudad, País
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Contacto</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Teléfono: [+00 0000 0000]<br />
                    Email: info@vertexmarketing.com
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Horario</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Lunes - Viernes: 9am - 6pm<br />
                    Sábado: 9am - 1pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Quieres trabajar con nosotros?
          </h2>
          <p className="text-white/90 mb-8">
            Contáctanos y descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
          <Link href="/contacto" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition">
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
