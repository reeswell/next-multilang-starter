'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function JapaneseFooter() {
  const t = useTranslations('Layout.footer');

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-1 h-8 bg-blue-500"></div>
            <div className="w-1 h-6 bg-blue-400"></div>
            <div className="w-1 h-4 bg-blue-300"></div>
            <h3 className="text-2xl font-light text-gray-800 mx-4">日本企業</h3>
            <div className="w-1 h-4 bg-blue-300"></div>
            <div className="w-1 h-6 bg-blue-400"></div>
            <div className="w-1 h-8 bg-blue-500"></div>
          </div>
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="w-12 h-1 bg-blue-500 mx-auto mb-6"></div>
            <h4 className="text-lg font-light text-gray-800 mb-6">{t('company.title')}</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-light transition-colors">{t('company.about')}</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-light transition-colors">{t('company.careers')}</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-light transition-colors">{t('company.press')}</Link></li>
            </ul>
          </div>

          <div className="text-center">
            <div className="w-12 h-1 bg-blue-500 mx-auto mb-6"></div>
            <h4 className="text-lg font-light text-gray-800 mb-6">{t('products.title')}</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-light transition-colors">{t('products.features')}</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-light transition-colors">{t('products.pricing')}</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-light transition-colors">{t('products.enterprise')}</Link></li>
            </ul>
          </div>

          <div className="text-center">
            <div className="w-12 h-1 bg-blue-500 mx-auto mb-6"></div>
            <h4 className="text-lg font-light text-gray-800 mb-6">{t('support.title')}</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-light transition-colors">{t('support.help')}</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-light transition-colors">{t('support.docs')}</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-light transition-colors">{t('support.api')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-100">
          <div className="flex justify-center space-x-8 mb-4">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <div key={social} className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors cursor-pointer">
                <span className="text-xs">○</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 font-light">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
