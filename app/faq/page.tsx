'use client';

import { useState } from 'react';

const faqs = [
  {
    pregunta: '¿Qué servicios ofrece Vertex Marketing?',
    respuesta: 'Ofrecemos un amplio rango de servicios de marketing digital incluyendo: Gestión de Redes Sociales, SEO y Posicionamiento, Publicidad Digital (SEM), Email Marketing, Producción de Video y Analytics. Cada servicio puede contratarse de forma individual o como parte de un paquete integral.'
  },
  {
    pregunta: '¿Cuánto cuesta contratar sus servicios?',
    respuesta: 'Los precios varían según el servicio y las necesidades específicas de tu negocio. Ofrecemos paquetes desde $500/mes para pequeñas empresas hasta soluciones empresariales personalizadas. Contáctanos para una cotización gratuita adaptada a tus necesidades.'
  },
  {
    pregunta: '¿En cuánto tiempo veré resultados?',
    respuesta: 'Los tiempos varían según el servicio: las campañas de publicidad pueden mostrar resultados en días, mientras que el SEO típicamente toma 3-6 meses para mostrar impacto significativo. En Vertex Marketing, proporcionamos reportes mensuales para que siempre estés informado del progreso.'
  },
  {
    pregunta: '¿Trabajan con empresas pequeñas?',
    respuesta: '¡Absolutamente! Trabajamos con empresas de todos los tamaños, desde startups y pequeños negocios hasta corporaciones establecidas. Adaptamos nuestras estrategias y presupuestos a las necesidades y capacidades de cada cliente.'
  },
  {
    pregunta: '¿Ofrecen contratos a largo plazo?',
    respuesta: 'Sí, ofrecemos tanto contratos mensuales sin compromiso de permanencia como paquetes anuales con descuentos especiales. Recomendamos un mínimo de 3-6 meses para estrategias de marketing integral para ver resultados óptimos.'
  },
  {
    pregunta: '¿Cómo se comunicarán conmigo?',
    respuesta: 'Asignamos un gerente de cuenta dedicado a cada cliente. La comunicación se realiza mediante reuniones semanales o quincenales, reportes mensuales detallados, y disponibilidad por email, teléfono y WhatsApp durante horario laboral.'
  },
  {
    pregunta: '¿Qué necesito proporcionar para comenzar?',
    respuesta: 'Necesitamos información básica de tu negocio, tus objetivos de marketing, acceso a tus cuentas existentes (redes sociales, Google Analytics, etc.), y cualquier material de marca que tengas (logos, guías de estilo, etc.). Te guiaremos paso a paso en el proceso de onboarding.'
  },
  {
    pregunta: '¿Trabajan con negocios fuera de Guatemala?',
    respuesta: 'Sí, trabajamos con clientes internacionalmente. Gracias a las herramientas digitales, podemos gestionar campañas y estrategias para negocios en cualquier país. De hecho, tenemos clientes en varios países de Latinoamérica y Estados Unidos.'
  },
  {
    pregunta: '¿Qué pasa si no estoy satisfecho con los resultados?',
    respuesta: 'La satisfacción del cliente es nuestra prioridad. Si no estás satisfecho, trabajaremos contigo para ajustar la estrategia. Ofrecemos garantía de satisfacción y si después de los ajustes no logramos los objetivos acordados, puedes cancelar sin penalidad.'
  },
  {
    pregunta: '¿Ofrecen servicios de diseño web?',
    respuesta: 'Sí, ofrecemos servicios de diseño y desarrollo web, incluyendo sitios corporativos, landing pages, y tiendas en línea. También optimizamos sitios existentes para mejorar su rendimiento en buscadores y conversión.'
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Preguntas Frecuentes</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                >
                  <span className="font-semibold text-slate-800 dark:text-white pr-4">
                    {faq.pregunta}
                  </span>
                  <svg
                    className={`w-6 h-6 text-indigo-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 dark:text-slate-400">
                      {faq.respuesta}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto CTA */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
            ¿Tienes más preguntas?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Nuestro equipo está listo para resolver cualquier duda que tengas.
          </p>
          <a
            href="/contacto"
            className="bg-indigo-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-600 transition"
          >
            Contactar Ahora
          </a>
        </div>
      </section>
    </div>
  );
}
