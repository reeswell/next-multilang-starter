'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import  LanguageSwitcher  from '@/components/LanguageSwitcher';

export function ChineseHeader() {
  const t = useTranslations('Layout.header');

  return (
    <header className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
      {/* Traditional Chinese Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute top-8 right-8 w-12 h-12 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-4 left-1/4 w-8 h-8 border-2 border-yellow-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo Section with Traditional Elements */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-red-800 font-bold text-2xl">中</span>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full"></div>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h1 className="text-3xl font-bold text-white">{t('title')}</h1>
              <p className="text-yellow-200 text-lg">{t('subtitle')}</p>
            </div>
          </div>

          {/* Traditional Style Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { key: 'home', href: '/zh' },
              { key: 'about', href: '/zh/about' },
              { key: 'products', href: '/zh/products' },
              { key: 'contact', href: '/zh/contact' }
            ].map((item) => (
              <Link 
                key={item.key}
                href={item.href} 
                className="relative group text-white hover:text-yellow-300 font-medium text-lg transition-colors"
              >
                {t(`nav.${item.key}`)}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* CTA & Language Switcher */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-800 px-8 py-3 rounded-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-yellow-400">
              {t('cta')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
