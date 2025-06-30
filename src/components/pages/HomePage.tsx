'use client';

import { useTranslations, useLocale } from 'next-intl';

export function HomePage() {
  const locale = useLocale();
  const t = useTranslations('Pages.home');

  const getHeroClasses = () => {
    switch (locale) {
      case 'zh':
        return 'bg-gradient-to-br from-background via-muted to-background py-24';
      case 'ja':
        return 'bg-gradient-to-b from-background to-muted/50 py-32 text-center';
      default:
        return 'bg-gradient-to-br from-primary via-primary/80 to-primary py-24 text-primary-foreground';
    }
  };

  const getFeatureClasses = () => {
    switch (locale) {
      case 'zh':
        return 'bg-card p-8 rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300';
      case 'ja':
        return 'bg-card p-8 border-l-4 border-primary hover:shadow-lg transition-shadow duration-300';
      default:
        return 'bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border';
    }
  };

  const getFeatureIcon = (index: number) => {
    const icons = {
      zh: [
        <div key={index} className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>,
        <div key={index} className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>,
        <div key={index} className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      ],
      ja: [
        <div key={index} className="w-1 h-12 bg-primary mb-6"></div>,
        <div key={index} className="w-1 h-12 bg-primary/80 mb-6"></div>,
        <div key={index} className="w-1 h-12 bg-primary/60 mb-6"></div>
      ],
      en: [
        <div key={index} className="text-4xl mb-6">🚀</div>,
        <div key={index} className="text-4xl mb-6">⭐</div>,
        <div key={index} className="text-4xl mb-6">🛠️</div>
      ]
    };

    return icons[locale as keyof typeof icons]?.[index] || icons.en[index];
  };

  return (
    <div>
      {/* Hero Section */}
      <section className={getHeroClasses()}>
        <div className="container mx-auto px-4 text-center">
          {/* 简洁的装饰元素 */}
          {locale === 'zh' && (
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-primary/60 rounded-full"></div>
                <div className="w-3 h-3 bg-primary/80 rounded-full"></div>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
            </div>
          )}

          {locale === 'ja' && (
            <div className="flex justify-center mb-12">
              <div className="w-16 h-1 bg-gradient-to-r from-primary/60 to-primary rounded-full"></div>
            </div>
          )}

          <h1 className={`mb-6 text-foreground ${locale === 'zh' ? 'text-5xl font-bold' :
            locale === 'ja' ? 'text-4xl font-light' :
              'text-6xl font-bold'
            }`}>
            {t('hero.title')}
          </h1>

          <p className={`mb-8 max-w-3xl mx-auto ${locale === 'zh' ? 'text-xl text-muted-foreground' :
            locale === 'ja' ? 'text-lg text-muted-foreground font-light' :
              'text-xl text-primary-foreground/90'
            }`}>
            {t('hero.subtitle')}
          </p>

          <button className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${locale === 'zh' ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl' :
            locale === 'ja' ? 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-3' :
              'bg-background text-primary hover:bg-accent hover:text-accent-foreground shadow-lg hover:shadow-xl'
            }`}>
            {t('hero.cta')}
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`mb-4 text-foreground ${locale === 'zh' ? 'text-4xl font-bold' :
              locale === 'ja' ? 'text-3xl font-light' :
                'text-4xl font-bold'
              }`}>
              {t('features.title')}
            </h2>

            {/* 添加副标题 */}
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className={`grid gap-8 ${locale === 'zh' ? 'grid-cols-1 md:grid-cols-3' :
            locale === 'ja' ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' :
              'grid-cols-1 md:grid-cols-3'
            }`}>
            {t.raw('features.items').map((feature: any, index: number) => (
              <div key={index} className={getFeatureClasses()}>
                {getFeatureIcon(index)}

                <h3 className={`mb-4 text-card-foreground ${locale === 'zh' ? 'text-xl font-semibold' :
                  locale === 'ja' ? 'text-xl font-light' :
                    'text-xl font-semibold'
                  }`}>
                  {feature.title}
                </h3>

                <p className={`text-muted-foreground ${locale === 'ja' ? 'font-light leading-relaxed' :
                  'leading-relaxed'
                  }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {locale === 'zh' ? '准备开始了吗？' :
              locale === 'ja' ? '始めましょう' :
                'Ready to get started?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {locale === 'zh' ? '立即体验我们的产品，开启您的数字化转型之旅' :
              locale === 'ja' ? '今すぐ製品を体験して、デジタル変革の旅を始めましょう' :
                'Experience our product today and start your digital transformation journey'}
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
            {locale === 'zh' ? '免费试用' :
              locale === 'ja' ? '無料トライアル' :
                'Start Free Trial'}
          </button>
        </div>
      </section>
    </div>
  );
}
