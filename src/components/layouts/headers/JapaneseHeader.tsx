'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export function JapaneseHeader() {
  const t = useTranslations('Layout.header');

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Minimalist Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-1 h-12 bg-blue-500"></div>
              <div className="w-1 h-8 bg-blue-300"></div>
              <div className="w-1 h-6 bg-blue-200"></div>
            </div>
            <div>
              <h1 className="text-2xl font-light text-gray-800 tracking-wide">{t('title')}</h1>
              <p className="text-sm text-gray-500 font-light">{t('subtitle')}</p>
            </div>
          </div>

          {/* Minimal Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {[
              { key: 'home', href: '/ja' },
              { key: 'about', href: '/ja/about' },
              { key: 'products', href: '/ja/products' },
              { key: 'contact', href: '/ja/contact' }
            ].map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="relative group text-gray-600 hover:text-blue-600 font-light text-lg transition-colors"
              >
                {t(`nav.${item.key}`)}
                <div className="absolute -bottom-2 left-1/2 w-0 h-px bg-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Minimal CTA */}
          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
            <button className="border border-blue-500 text-blue-600 px-6 py-2 rounded font-light hover:bg-blue-500 hover:text-white transition-all duration-200">
              {t('cta')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
