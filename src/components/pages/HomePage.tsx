'use client';

import { useLocale, useTranslations } from 'next-intl';

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
        <div key={index} className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>,
        <div key={index} className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
          <svg className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>,
        <div key={index} className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
          <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      ],
      ja: [
        <div key={index} className="mb-6 h-12 w-1 bg-primary"></div>,
        <div key={index} className="mb-6 h-12 w-1 bg-primary/80"></div>,
        <div key={index} className="mb-6 h-12 w-1 bg-primary/60"></div>
      ],
      en: [
        <div key={index} className="mb-6 text-4xl">🚀</div>,
        <div key={index} className="mb-6 text-4xl">⭐</div>,
        <div key={index} className="mb-6 text-4xl">🛠️</div>
      ]
    };

    return icons[locale as keyof typeof icons]?.[index] || icons.en[index];
  };

  return (
    <div>
      <section className={getHeroClasses()}>
        <div className="container mx-auto px-4 text-center">
          {locale === 'zh' && (
            <div className="mb-8 flex justify-center">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-primary/60"></div>
                <div className="h-3 w-3 rounded-full bg-primary/80"></div>
                <div className="h-3 w-3 rounded-full bg-primary"></div>
              </div>
            </div>
          )}

          {locale === 'ja' && (
            <div className="mb-12 flex justify-center">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary/60 to-primary"></div>
            </div>
          )}

          <h1 className={`mb-6 text-foreground ${locale === 'zh' ? 'text-5xl font-bold' :
            locale === 'ja' ? 'text-4xl font-light' :
              'text-6xl font-bold'
            }`}>
            {t('hero.title')}
          </h1>

          <p className={`mx-auto mb-8 max-w-3xl ${locale === 'zh' ? 'text-xl text-muted-foreground' :
            locale === 'ja' ? 'text-lg font-light text-muted-foreground' :
              'text-xl text-primary-foreground/90'
            }`}>
            {t('hero.subtitle')}
          </p>

          <button className={`rounded-lg px-8 py-4 text-lg font-semibold transition-all duration-200 ${locale === 'zh' ? 'bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl' :
            locale === 'ja' ? 'border-2 border-primary px-12 py-3 text-primary hover:bg-primary hover:text-primary-foreground' :
              'bg-background text-primary shadow-lg hover:bg-accent hover:text-accent-foreground hover:shadow-xl'
            }`}>
            {t('hero.cta')}
          </button>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className={`mb-4 text-foreground ${locale === 'zh' ? 'text-4xl font-bold' :
              locale === 'ja' ? 'text-3xl font-light' :
                'text-4xl font-bold'
              }`}>
              {t('features.title')}
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 bg-primary"></div>
          </div>

          <div className={`grid gap-8 ${locale === 'zh' ? 'grid-cols-1 md:grid-cols-3' :
            locale === 'ja' ? 'mx-auto max-w-4xl grid-cols-1 md:grid-cols-2' :
              'grid-cols-1 md:grid-cols-3'
            }`}>
            {t.raw('features.items').map((feature: Record<string, string>, index: number) => (
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

      <section className="bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            {locale === 'zh' ? '准备开始了吗？' :
              locale === 'ja' ? '始めましょう' :
                'Ready to get started?'}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            {locale === 'zh' ? '立即体验我们的产品，开启您的数字化转型之旅' :
              locale === 'ja' ? '今すぐ製品を体験して、デジタル変革の旅を始めましょう' :
                'Experience our product today and start your digital transformation journey'}
          </p>
          <button className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary/90">
            {locale === 'zh' ? '免费试用' :
              locale === 'ja' ? '無料トライアル' :
                'Start Free Trial'}
          </button>
        </div>
      </section>
    </div>
  );
}
