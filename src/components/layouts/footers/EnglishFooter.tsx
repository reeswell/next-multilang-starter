'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function EnglishFooter() {
  const t = useTranslations('Layout.footer');

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <h3 className="text-2xl font-bold">Modern Enterprise</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'github'].map((social) => (
                <div key={social} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm">📱</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t('company.title')}</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">{t('company.about')}</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">{t('company.careers')}</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">{t('company.press')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t('support.title')}</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">{t('support.help')}</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">{t('support.docs')}</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">{t('support.api')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
