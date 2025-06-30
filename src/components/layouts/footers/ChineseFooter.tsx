'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function ChineseFooter() {
  const t = useTranslations('Layout.footer');

  return (
    <footer className="bg-gradient-to-b from-red-900 to-red-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-8 w-32 h-32 border-4 border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 border-4 border-yellow-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-yellow-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-red-800 font-bold text-2xl">中</span>
              </div>
              <div className="border-l-4 border-yellow-400 pl-4">
                <h3 className="text-3xl font-bold">中华企业</h3>
                <p className="text-yellow-200">传统与现代的完美结合</p>
              </div>
            </div>
            <p className="text-red-100 text-lg leading-relaxed mb-8">
              {t('description')}
            </p>

            <div className="flex space-x-4">
              {['微信', '微博', '抖音'].map((social, index) => (
                <div key={social} className="w-12 h-12 bg-yellow-500 text-red-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 transition-colors cursor-pointer font-bold">
                  {social[0]}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-800 bg-opacity-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h4 className="text-xl font-bold mb-6 text-yellow-300">{t('company.title')}</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-red-100 hover:text-yellow-300 transition-colors text-lg">{t('company.about')}</Link></li>
              <li><Link href="#" className="text-red-100 hover:text-yellow-300 transition-colors text-lg">{t('company.careers')}</Link></li>
              <li><Link href="#" className="text-red-100 hover:text-yellow-300 transition-colors text-lg">{t('company.press')}</Link></li>
            </ul>
          </div>

          <div className="bg-red-800 bg-opacity-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h4 className="text-xl font-bold mb-6 text-yellow-300">{t('support.title')}</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-red-100 hover:text-yellow-300 transition-colors text-lg">{t('support.help')}</Link></li>
              <li><Link href="#" className="text-red-100 hover:text-yellow-300 transition-colors text-lg">{t('support.docs')}</Link></li>
              <li><Link href="#" className="text-red-100 hover:text-yellow-300 transition-colors text-lg">{t('support.api')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t-4 border-yellow-400 mt-12 pt-8 text-center bg-red-800 bg-opacity-30 rounded-lg">
          <p className="text-yellow-200 text-lg">{t('copyright')}</p>
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
