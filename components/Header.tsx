'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-slate-200/50 dark:border-slate-700/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center shadow-rose group-hover:shadow-rose/50 transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-2xl">V</span>
            </div>
            <div>
              <span className="font-bold text-xl bg-gradient-to-r from-rose-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                Vertex
              </span>
              <span className="font-bold text-xl text-slate-700 dark:text-slate-200 ml-1">
                Marketing
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/" className="px-4 py-2 text-slate-600 hover:text-rose-500 dark:text-slate-300 dark:hover:text-rose-400 font-medium transition-all hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-full">
              Inicio
            </Link>
            <Link href="/servicios" className="px-4 py-2 text-slate-600 hover:text-violet-500 dark:text-slate-300 dark:hover:text-violet-400 font-medium transition-all hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-full">
              Servicios
            </Link>
            <Link href="/noticias" className="px-4 py-2 text-slate-600 hover:text-pink-500 dark:text-slate-300 dark:hover:text-pink-400 font-medium transition-all hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-full">
              Noticias
            </Link>
            <Link href="/sobre-nosotros" className="px-4 py-2 text-slate-600 hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-400 font-medium transition-all hover:bg-cyan-50 dark:hover:bg-cyan-900/20 rounded-full">
              Sobre Nosotros
            </Link>
            <Link href="/faq" className="px-4 py-2 text-slate-600 hover:text-amber-500 dark:text-slate-300 dark:hover:text-amber-400 font-medium transition-all hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-full">
              FAQ
            </Link>
            <Link href="/invierta" className="px-4 py-2 text-slate-600 hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-400 font-medium transition-all hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-full">
              Invierta
            </Link>
            <Link
              href="/contacto"
              className="ml-2 gradient-hero text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-rose hover:scale-105 transition-all duration-300"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col gap-2">
              <Link href="/" className="px-4 py-3 text-slate-600 hover:text-rose-500 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition" onClick={() => setMobileMenuOpen(false)}>
                Inicio
              </Link>
              <Link href="/servicios" className="px-4 py-3 text-slate-600 hover:text-violet-500 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-xl transition" onClick={() => setMobileMenuOpen(false)}>
                Servicios
              </Link>
              <Link href="/noticias" className="px-4 py-3 text-slate-600 hover:text-pink-500 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-xl transition" onClick={() => setMobileMenuOpen(false)}>
                Noticias
              </Link>
              <Link href="/sobre-nosotros" className="px-4 py-3 text-slate-600 hover:text-cyan-500 dark:text-slate-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 rounded-xl transition" onClick={() => setMobileMenuOpen(false)}>
                Sobre Nosotros
              </Link>
              <Link href="/faq" className="px-4 py-3 text-slate-600 hover:text-amber-500 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-xl transition" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <Link href="/invierta" className="px-4 py-3 text-slate-600 hover:text-orange-500 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-xl transition" onClick={() => setMobileMenuOpen(false)}>
                Invierta
              </Link>
              <Link href="/contacto" className="mx-4 mt-2 gradient-hero text-white px-6 py-3 rounded-full font-semibold text-center" onClick={() => setMobileMenuOpen(false)}>
                Contacto
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
