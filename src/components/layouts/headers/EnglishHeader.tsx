'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import  LanguageSwitcher from '@/components/LanguageSwitcher';

export function EnglishHeader() {
  const t = useTranslations('Layout.header');

  return (
    <header className="bg-white shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{t('title')}</h1>
              <p className="text-sm text-gray-500">{t('subtitle')}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/en" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('nav.home')}
            </Link>
            <Link href="/en/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('nav.about')}
            </Link>
            <Link href="/en/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('nav.products')}
            </Link>
            <Link href="/en/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* CTA & Language Switcher */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              {t('cta')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
