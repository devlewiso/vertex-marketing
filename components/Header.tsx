'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="font-bold text-xl text-slate-800 dark:text-white">
              Vertex<span className="text-indigo-500">Marketing</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 transition">
              Inicio
            </Link>
            <Link href="/servicios" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 transition">
              Servicios
            </Link>
            <Link href="/noticias" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 transition">
              Noticias
            </Link>
            <Link href="/sobre-nosotros" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 transition">
              Sobre la Empresa
            </Link>
            <Link href="/faq" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 transition">
              FAQ
            </Link>
            <Link href="/invierta" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 transition">
              Invierta
            </Link>
            <Link href="/contacto" className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition">
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
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
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                Inicio
              </Link>
              <Link href="/servicios" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                Servicios
              </Link>
              <Link href="/noticias" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                Noticias
              </Link>
              <Link href="/sobre-nosotros" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                Sobre la Empresa
              </Link>
              <Link href="/faq" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <Link href="/invierta" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                Invierta
              </Link>
              <Link href="/contacto" className="bg-indigo-500 text-white px-4 py-2 rounded-full text-center" onClick={() => setMobileMenuOpen(false)}>
                Contacto
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
