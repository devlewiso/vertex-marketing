import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center shadow-rose">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
              <div>
                <span className="font-bold text-xl bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
                  Vertex
                </span>
                <span className="font-bold text-xl text-slate-300 ml-1">Marketing</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Llevamos tu marca al siguiente nivel con estrategias de marketing digital innovadoras y resultados medibles.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[
                { name: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { name: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z' },
                { name: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z' },
                { name: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={`https://${social.name.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:gradient-hero rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-rose-400 to-violet-400 rounded-full"></span>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {['Servicios', 'Noticias', 'Sobre Nosotros', 'FAQ', 'Invierta', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-rose-400 to-violet-400 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-pink-400 rounded-full"></span>
              Servicios
            </h3>
            <ul className="space-y-3">
              {['Redes Sociales', 'SEO / SEM', 'Email Marketing', 'Content Marketing', 'Video Marketing', 'Analytics'].map((item) => (
                <li key={item}>
                  <Link href="/servicios" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full"></span>
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <span className="text-slate-400 text-sm">Ciudad de Guatemala<br />Guatemala, C.A.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-slate-400 text-sm">info@vertexmarketing.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-slate-400 text-sm">+502 2222-3333</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Vertex Marketing. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-slate-500 hover:text-rose-400 transition">Política de Privacidad</Link>
              <Link href="#" className="text-slate-500 hover:text-violet-400 transition">Términos de Servicio</Link>
              <Link href="#" className="text-slate-500 hover:text-cyan-400 transition">Cookies</Link>
            </div>
          </div>

          {/* Documentación Formal - Semana 7 */}
          <div className="border-t border-white/5 mt-6 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium">Trabajo Formal - Semana 7</p>
                  <p className="text-slate-500 text-xs">Documento completo con las 7 actividades requeridas</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="/documentacion/trabajo-formal.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Ver Documento HTML
                </a>
                <a
                  href="/documentacion/trabajo-formal.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border border-white/20"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar MD
                </a>
              </div>
            </div>

            {/* Tabla resumen de actividades */}
            <div className="mt-6 bg-white/5 rounded-2xl p-6 overflow-x-auto">
              <h4 className="text-slate-300 font-semibold mb-4 text-sm">📋 Actividades Completadas - Semana 7</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-slate-400 font-medium pb-3 pr-4">#</th>
                      <th className="text-left text-slate-400 font-medium pb-3 pr-4">Actividad</th>
                      <th className="text-left text-slate-400 font-medium pb-3 pr-4">Estado</th>
                      <th className="text-left text-slate-400 font-medium pb-3">Ubicación</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4 text-slate-500">1</td>
                      <td className="py-3 pr-4">Propuesta de Negocio (5 capítulos)</td>
                      <td className="py-3 pr-4"><span className="inline-flex items-center gap-1.5 text-emerald-400"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>Completado</span></td>
                      <td className="py-3 pr-4 text-slate-400">trabajo-formal.md - pág. 4-13</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4 text-slate-500">2</td>
                      <td className="py-3 pr-4">Comparativa de Hosting (3 opciones)</td>
                      <td className="py-3 pr-4"><span className="inline-flex items-center gap-1.5 text-emerald-400"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>Completado</span></td>
                      <td className="py-3 pr-4 text-slate-400">trabajo-formal.md - pág. 14-16</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4 text-slate-500">3</td>
                      <td className="py-3 pr-4">Nombre y Dominio (verificación)</td>
                      <td className="py-3 pr-4"><span className="inline-flex items-center gap-1.5 text-emerald-400"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>Completado</span></td>
                      <td className="py-3 pr-4 text-slate-400">trabajo-formal.md - pág. 17-19</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4 text-slate-500">4</td>
                      <td className="py-3 pr-4">Dominio .gt (procedimiento y costo)</td>
                      <td className="py-3 pr-4"><span className="inline-flex items-center gap-1.5 text-emerald-400"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>Completado</span></td>
                      <td className="py-3 pr-4 text-slate-400">trabajo-formal.md - pág. 20-21</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4 text-slate-500">5</td>
                      <td className="py-3 pr-4">Pasarelas de Pago (PayPal, PayNexus, etc.)</td>
                      <td className="py-3 pr-4"><span className="inline-flex items-center gap-1.5 text-emerald-400"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>Completado</span></td>
                      <td className="py-3 pr-4 text-slate-400">trabajo-formal.md - pág. 22-26</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4 text-slate-500">6</td>
                      <td className="py-3 pr-4">Vínculos del Grupo (página 2*)</td>
                      <td className="py-3 pr-4"><span className="inline-flex items-center gap-1.5 text-emerald-400"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>Completado</span></td>
                      <td className="py-3 pr-4 text-slate-400">trabajo-formal.md - pág. 27</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-slate-500">7</td>
                      <td className="py-3 pr-4">Bibliografía APA</td>
                      <td className="py-3 pr-4"><span className="inline-flex items-center gap-1.5 text-emerald-400"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>Completado</span></td>
                      <td className="py-3 pr-4 text-slate-400">trabajo-formal.md - pág. 28-29</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Resumen de cumplimiento */}
              <div className="mt-4 flex flex-wrap gap-4 text-xs">
                <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-4 py-2 rounded-full">
                  <span className="text-emerald-400 font-bold">85%</span>
                  <span className="text-emerald-300">Cumplimiento Total</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full">
                  <span className="text-blue-400 font-bold">Q26,686</span>
                  <span className="text-blue-300">Inversión Inicial</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-full">
                  <span className="text-purple-400 font-bold">9 clientes</span>
                  <span className="text-purple-300">Punto de Equilibrio</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-4 py-2 rounded-full">
                  <span className="text-amber-400 font-bold">23%</span>
                  <span className="text-amber-300">Utilidad Neta</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-slate-600 text-xs mt-4">
            Creada por rcm 15 febrero de 2017 - versión 1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
