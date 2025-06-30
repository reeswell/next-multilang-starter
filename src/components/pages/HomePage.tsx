'use client';

import { useTranslations, useLocale } from 'next-intl';

export function HomePage() {
  const locale = useLocale();
  const t = useTranslations('Pages.home');

  const getHeroClasses = () => {
    switch (locale) {
      case 'zh':
        return 'bg-gradient-to-r from-red-600 via-red-700 to-yellow-600 text-white py-24';
      case 'ja':
        return 'bg-white py-32 text-center';
      default:
        return 'bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-24';
    }
  };

  const getFeatureClasses = () => {
    switch (locale) {
      case 'zh':
        return 'bg-white p-8 rounded-lg border-4 border-red-200 hover:border-red-400 transition-colors shadow-lg';
      case 'ja':
        return 'bg-white p-8 border-l-4 border-blue-500 hover:shadow-lg transition-shadow';
      default:
        return 'bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className={getHeroClasses()}>
        <div className="container mx-auto px-4 text-center">
          {locale === 'zh' && (
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-red-800 font-bold text-2xl">龙</span>
              </div>
            </div>
          )}

          {locale === 'ja' && (
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2">
                <div className="w-2 h-16 bg-blue-500"></div>
                <div className="w-2 h-12 bg-blue-400"></div>
                <div className="w-2 h-8 bg-blue-300"></div>
              </div>
            </div>
          )}

          <h1 className={`mb-6 ${locale === 'zh' ? 'text-5xl font-bold' :
            locale === 'ja' ? 'text-4xl font-light text-gray-800' :
              'text-6xl font-bold'
            }`}>
            {t('hero.title')}
          </h1>

          <p className={`mb-8 max-w-3xl mx-auto ${locale === 'zh' ? 'text-xl text-yellow-100' :
            locale === 'ja' ? 'text-lg text-gray-600 font-light' :
              'text-xl opacity-90'
            }`}>
            {t('hero.subtitle')}
          </p>

          <button className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 ${locale === 'zh' ? 'bg-yellow-500 text-red-800 hover:bg-yellow-400 shadow-lg' :
            locale === 'ja' ? 'border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white' :
              'bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl'
            }`}>
            {t('hero.cta')}
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className={`text-center mb-16 ${locale === 'zh' ? 'text-4xl font-bold text-red-800' :
            locale === 'ja' ? 'text-3xl font-light text-gray-800' :
              'text-4xl font-bold text-gray-800'
            }`}>
            {t('features.title')}
          </h2>

          <div className={`grid gap-8 ${locale === 'zh' ? 'grid-cols-1 md:grid-cols-3' :
            locale === 'ja' ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' :
              'grid-cols-1 md:grid-cols-3'
            }`}>
            {t.raw('features.items').map((feature: any, index: number) => (
              <div key={index} className={getFeatureClasses()}>
                {locale === 'zh' && (
                  <div className="w-16 h-16 bg-red-500 rounded-full mb-6 mx-auto flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                )}

                {locale === 'ja' && (
                  <div className="w-1 h-12 bg-blue-500 mb-6"></div>
                )}

                {locale === 'en' && (
                  <div className="text-4xl mb-6">
                    {['🚀', '⭐', '🛠️'][index]}
                  </div>
                )}

                <h3 className={`mb-4 ${locale === 'zh' ? 'text-2xl font-bold text-red-800' :
                  locale === 'ja' ? 'text-xl font-light text-gray-800' :
                    'text-2xl font-bold text-gray-800'
                  }`}>
                  {feature.title}
                </h3>

                <p className={
                  locale === 'ja' ? 'text-gray-600 font-light leading-relaxed' :
                    'text-gray-600 leading-relaxed'
                }>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
