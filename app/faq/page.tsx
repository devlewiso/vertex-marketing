'use client';

import { useState } from 'react';

const faqs = [
  {
    categoria: 'Servicios',
    icono: '🎯',
    color: 'from-rose-500 to-pink-500',
    items: [
      {
        pregunta: '¿Qué servicios ofrece Vertex Marketing?',
        respuesta: 'Ofrecemos un amplio rango de servicios de marketing digital incluyendo: Gestión de Redes Sociales, SEO y Posicionamiento, Publicidad Digital (SEM), Email Marketing, Producción de Video y Analytics. Cada servicio puede contratarse de forma individual o como parte de un paquete integral.'
      },
      {
        pregunta: '¿Ofrecen servicios de diseño web?',
        respuesta: 'Sí, ofrecemos servicios de diseño y desarrollo web, incluyendo sitios corporativos, landing pages, y tiendas en línea. También optimizamos sitios existentes para mejorar su rendimiento en buscadores y conversión.'
      },
      {
        pregunta: '¿Puedo contratar solo un servicio específico?',
        respuesta: '¡Por supuesto! Puedes contratar cualquier servicio de forma individual. Sin embargo, nuestros paquetes integrados suelen ofrecer mejor ROI al trabajar todas las áreas de forma coordinada.'
      },
    ]
  },
  {
    categoria: 'Precios',
    icono: '💰',
    color: 'from-violet-500 to-purple-500',
    items: [
      {
        pregunta: '¿Cuánto cuesta contratar sus servicios?',
        respuesta: 'Los precios varían según el servicio y las necesidades específicas de tu negocio. Ofrecemos paquetes desde $500/mes para pequeñas empresas hasta soluciones empresariales personalizadas. Contáctanos para una cotización gratuita adaptada a tus necesidades.'
      },
      {
        pregunta: '¿Ofrecen contratos a largo plazo?',
        respuesta: 'Sí, ofrecemos tanto contratos mensuales sin compromiso de permanencia como paquetes anuales con descuentos especiales. Recomendamos un mínimo de 3-6 meses para estrategias de marketing integral para ver resultados óptimos.'
      },
      {
        pregunta: '¿Hay costos de configuración?',
        respuesta: 'Algunos servicios pueden tener un costo inicial de setup (auditoría, configuración de herramientas, etc.), pero esto se discute transparentemente antes de comenzar. Muchos servicios no tienen costo de configuración.'
      },
    ]
  },
  {
    categoria: 'Proceso',
    icono: '⚙️',
    color: 'from-cyan-500 to-blue-500',
    items: [
      {
        pregunta: '¿Qué necesito proporcionar para comenzar?',
        respuesta: 'Necesitamos información básica de tu negocio, tus objetivos de marketing, acceso a tus cuentas existentes (redes sociales, Google Analytics, etc.), y cualquier material de marca que tengas (logos, guías de estilo, etc.). Te guiaremos paso a paso en el proceso de onboarding.'
      },
      {
        pregunta: '¿Cómo se comunicarán conmigo?',
        respuesta: 'Asignamos un gerente de cuenta dedicado a cada cliente. La comunicación se realiza mediante reuniones semanales o quincenales, reportes mensuales detallados, y disponibilidad por email, teléfono y WhatsApp durante horario laboral.'
      },
      {
        pregunta: '¿En cuánto tiempo veré resultados?',
        respuesta: 'Los tiempos varían según el servicio: las campañas de publicidad pueden mostrar resultados en días, mientras que el SEO típicamente toma 3-6 meses para mostrar impacto significativo. En Vertex Marketing, proporcionamos reportes mensuales para que siempre estés informado del progreso.'
      },
    ]
  },
  {
    categoria: 'General',
    icono: '❓',
    color: 'from-amber-500 to-orange-500',
    items: [
      {
        pregunta: '¿Trabajan con empresas pequeñas?',
        respuesta: '¡Absolutamente! Trabajamos con empresas de todos los tamaños, desde startups y pequeños negocios hasta corporaciones establecidas. Adaptamos nuestras estrategias y presupuestos a las necesidades y capacidades de cada cliente.'
      },
      {
        pregunta: '¿Trabajan con negocios fuera de Guatemala?',
        respuesta: 'Sí, trabajamos con clientes internacionalmente. Gracias a las herramientas digitales, podemos gestionar campañas y estrategias para negocios en cualquier país. De hecho, tenemos clientes en varios países de Latinoamérica y Estados Unidos.'
      },
      {
        pregunta: '¿Qué pasa si no estoy satisfecho con los resultados?',
        respuesta: 'La satisfacción del cliente es nuestra prioridad. Si no estás satisfecho, trabajaremos contigo para ajustar la estrategia. Ofrecemos garantía de satisfacción y si después de los ajustes no logramos los objetivos acordados, puedes cancelar sin penalidad.'
      },
    ]
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<{categoria: number, pregunta: number} | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero-alt"></div>
        <div className="absolute inset-0 bg-[url('https://v3b.fal.media/files/b/0aa0ec4e/7vr1eaLQsJCY4y7W_S_Ow.jpg&q=80')] bg-cover bg-center opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            AYUDA Y SOPORTE
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Preguntas <span className="bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">Frecuentes</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="¿En qué podemos ayudarte? Busca tu pregunta..."
              className="w-full px-6 py-5 pl-14 rounded-2xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all text-lg"
            />
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* FAQs por Categoría */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((categoria, catIndex) => (
            <div key={catIndex} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${categoria.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {categoria.icono}
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{categoria.categoria}</h2>
              </div>

              <div className="space-y-4">
                {categoria.items.map((faq, faqIndex) => {
                  const globalIndex = { categoria: catIndex, pregunta: faqIndex };
                  const isOpen = openIndex?.categoria === catIndex && openIndex?.pregunta === faqIndex;

                  return (
                    <div
                      key={faqIndex}
                      className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                      >
                        <span className="font-semibold text-slate-800 dark:text-white pr-4 text-lg">
                          {faq.pregunta}
                        </span>
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${categoria.color} flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="pt-2 border-t border-slate-100 dark:border-slate-700">
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                              {faq.respuesta}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Contacto */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://v3b.fal.media/files/b/0aa0ec4e/7vr1eaLQsJCY4y7W_S_Ow.jpg&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Tienes más preguntas?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Nuestro equipo está listo para resolver cualquier duda que tengas.
          </p>
          <a
            href="/contacto"
            className="bg-white text-rose-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 inline-block"
          >
            Contactar Ahora
          </a>
        </div>
      </section>

      {/* Still here? */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            ¿No encontraste lo que buscabas?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/servicios" className="text-rose-500 hover:text-rose-600 font-semibold transition">
              Ver servicios →
            </a>
            <a href="/contacto" className="text-violet-500 hover:text-violet-600 font-semibold transition">
              Hablar con ventas →
            </a>
            <a href="/sobre-nosotros" className="text-cyan-500 hover:text-cyan-600 font-semibold transition">
              Conocer el equipo →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
