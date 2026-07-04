import Link from 'next/link';

export default function SobreNosotrosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')] bg-cover bg-center opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            CONOCE AL EQUIPO
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sobre <span className="bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">Vertex Marketing</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Más de 8 años transformando negocios a través del marketing digital
          </p>
        </div>
      </section>

      {/* Historia y Timeline */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
                Nuestra Historia
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">
                Vertex Marketing nació en 2017 con una misión clara: ayudar a las empresas a
                establecer una presencia digital sólida y efectiva. Lo que comenzó como un
                pequeño equipo de entusiastas del marketing se ha convertido en una agencia
                full-service reconocida.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">
                A lo largo de los años, hemos trabajado con más de 500 clientes de diversos
                sectores, desde startups hasta empresas consolidadas.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Hoy en día, Vertex Marketing es sinónimo de resultados, innovación y compromiso
                con el éxito de nuestros clientes.
              </p>
            </div>

            <div className="relative">
              <div className="space-y-6">
                {[
                  { year: '2017', title: 'Fundación', desc: 'Vertex Marketing abre sus puertas', color: 'from-rose-500 to-pink-500' },
                  { year: '2019', title: 'Expansión', desc: 'Nuevo equipo y servicios ampliados', color: 'from-violet-500 to-purple-500' },
                  { year: '2022', title: 'Reconocimiento', desc: 'Premio a la Mejor Agencia Digital', color: 'from-cyan-500 to-blue-500' },
                  { year: '2026', title: 'Liderazgo', desc: '+500 clientes satisfechos', color: 'from-amber-500 to-orange-500' },
                ].map((hito, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${hito.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-white font-bold text-lg">{hito.year}</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">{hito.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{hito.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
              NUESTROS PILARES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Misión, Visión y <span className="gradient-text">Valores</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                titulo: 'Misión',
                desc: 'Empoderar a las empresas con estrategias de marketing digital innovadoras que generen crecimiento sostenible y resultados medibles.',
                color: 'from-rose-500 to-pink-500',
              },
              {
                icon: '👁️',
                titulo: 'Visión',
                desc: 'Ser la agencia de marketing digital de referencia en la región, reconocida por nuestra excelencia, innovación y compromiso.',
                color: 'from-violet-500 to-purple-500',
              },
              {
                icon: '💎',
                titulo: 'Valores',
                desc: 'Integridad, Innovación, Transparencia, Excelencia y Compromiso guían cada decisión y acción que tomamos.',
                color: 'from-cyan-500 to-blue-500',
                items: ['Integridad', 'Innovación', 'Transparencia', 'Excelencia', 'Compromiso'],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">{item.titulo}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{item.desc}</p>
                {item.items && (
                  <ul className="space-y-2">
                    {item.items.map((val, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}></span>
                        {val}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
              NUESTRO EQUIPO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Mentes <span className="gradient-text-alt">Creativas</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Profesionales apasionados dedicados a hacer crecer tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { nombre: '[Integrante 1]', rol: 'CEO & Fundador', color: 'from-rose-500 to-pink-500' },
              { nombre: '[Integrante 2]', rol: 'Directora de Marketing', color: 'from-violet-500 to-purple-500' },
              { nombre: '[Integrante 3]', rol: 'Especialista SEO', color: 'from-cyan-500 to-blue-500' },
              { nombre: '[Integrante 4]', rol: 'Community Manager', color: 'from-amber-500 to-orange-500' },
              { nombre: '[Integrante 5]', rol: 'Analista de Datos', color: 'from-emerald-500 to-teal-500' },
            ].map((miembro, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-r ${miembro.color} p-1 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-4xl font-bold text-slate-600 dark:text-slate-300">
                      {miembro.nombre.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 gradient-hero text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver perfil
                  </div>
                </div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">{miembro.nombre}</h3>
                <p className="text-slate-500 text-sm">{miembro.rol}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
              UBICACIÓN
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Nuestras <span className="gradient-text">Oficinas</span>
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="h-96 lg:h-auto relative">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Oficinas Vertex Marketing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
                      <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      Dirección
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Zona 10, Ciudad de Guatemala<br />
                      Guatemala, C.A.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
                      <div className="w-10 h-10 gradient-hero-alt rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      Contacto
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      info@vertexmarketing.com<br />
                      +502 2222-3333
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Horario
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Lun - Vie: 9am - 6pm<br />
                      Sáb: 9am - 1pm
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      Equipo
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      +20 profesionales<br />
                      5 departamentos
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contacto"
                    className="gradient-hero text-white px-8 py-4 rounded-full font-bold hover:shadow-rose hover:scale-105 transition-all duration-300 inline-block"
                  >
                    Agendar una visita
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Quieres trabajar con nosotros?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Contáctanos y descubre cómo podemos ayudarte a alcanzar tus objetivos.
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
