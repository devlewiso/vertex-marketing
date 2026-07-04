'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Nos pondremos en contacto pronto.');
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="absolute inset-0 bg-[url('https://v3b.fal.media/files/b/0aa0ec4e/7vr1eaLQsJCY4y7W_S_Ow.jpg')] bg-cover bg-center opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            HABLEMOS
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contacto
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            ¿Listo para hacer crecer tu negocio? ¡Estamos aquí para ayudarte!
          </p>
        </div>
      </section>

      {/* Formulario y Info */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Formulario */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Completa el formulario y te responderemos en menos de 24 horas
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        placeholder="juan@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        placeholder="+502 0000 0000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Servicio de interés
                    </label>
                    <select
                      value={formData.servicio}
                      onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="redes">Gestión de Redes Sociales</option>
                      <option value="seo">SEO y Posicionamiento</option>
                      <option value="sem">Publicidad Digital (SEM)</option>
                      <option value="email">Email Marketing</option>
                      <option value="video">Producción de Video</option>
                      <option value="analytics">Analytics y Reportes</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      required
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
                      placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle que nos ayude a entenderte mejor..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gradient-hero text-white py-5 rounded-full font-bold text-lg hover:shadow-rose hover:scale-[1.02] transition-all duration-300"
                  >
                    Enviar Mensaje
                    <span className="ml-2">🚀</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Información de Contacto */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: '📍',
                      titulo: 'Dirección',
                      info: ['Zona 10, Ciudad de Guatemala', 'Guatemala, C.A.'],
                      color: 'from-rose-500 to-pink-500',
                    },
                    {
                      icon: '📧',
                      titulo: 'Email',
                      info: ['info@vertexmarketing.com', 'contacto@vertexmarketing.com'],
                      color: 'from-violet-500 to-purple-500',
                    },
                    {
                      icon: '📱',
                      titulo: 'Teléfono',
                      info: ['+502 2222-3333', '+502 5555-6666'],
                      color: 'from-cyan-500 to-blue-500',
                    },
                    {
                      icon: '🕐',
                      titulo: 'Horario',
                      info: ['Lun - Vie: 9:00 AM - 6:00 PM', 'Sáb: 9:00 AM - 1:00 PM'],
                      color: 'from-amber-500 to-orange-500',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-xl flex-shrink-0 shadow-lg`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white">{item.titulo}</h4>
                        {item.info.map((line, j) => (
                          <p key={j} className="text-slate-600 dark:text-slate-400 text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mapa */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl overflow-hidden">
                <h3 className="font-bold text-slate-800 dark:text-white mb-4">Ubicación</h3>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <img
                    src="https://v3b.fal.media/files/b/0aa0ec4c/uuffZl72MVdVFrJ4RL96-.jpg"
                    alt="Mapa de ubicación"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <p className="font-semibold">Ciudad de Guatemala</p>
                      <p className="text-sm opacity-80">Zona 10, Avenida Principal</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="font-bold text-xl mb-4">Síguenos en Redes</h3>
                <p className="text-slate-400 mb-6 text-sm">
                  Conéctate con nosotros para contenido diario y actualizaciones
                </p>
                <div className="flex gap-3 flex-wrap">
                  {['📘 Facebook', '🐦 Twitter', '📸 Instagram', '💼 LinkedIn', '📺 YouTube'].map((red, i) => (
                    <a
                      key={i}
                      href="#"
                      className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                    >
                      {red}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápida */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
              PREGUNTAS FRECUENTES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              ¿Necesitas ayuda?
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { p: '¿Cuánto tiempo tardan en responder?', r: 'Respondemos todas las consultas en menos de 24 horas hábiles.' },
              { p: '¿Ofrecen presupuesto sin compromiso?', r: 'Sí, todas nuestras cotizaciones son gratuitas y sin compromiso.' },
              { p: '¿Trabajan con empresas pequeñas?', r: '¡Absolutamente! Trabajamos con negocios de todos los tamaños.' },
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-slate-800 dark:text-white mb-2">{faq.p}</h3>
                <p className="text-slate-600 dark:text-slate-400">{faq.r}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/faq" className="text-rose-500 font-semibold hover:text-rose-600 transition">
              Ver más preguntas frecuentes →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
