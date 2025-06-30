'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Copyright from '@/components/layouts/footers/Copyright';

export function JapaneseFooter() {
  const t = useTranslations('Layout.footer');

  const socialIcons = {
    Twitter: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    LinkedIn: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
      </svg>
    ),
    GitHub: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    )
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-1 h-8 bg-primary"></div>
            <div className="w-1 h-6 bg-primary/80"></div>
            <div className="w-1 h-4 bg-primary/60"></div>
            <h3 className="text-2xl font-light text-foreground mx-4">日本企業</h3>
            <div className="w-1 h-4 bg-primary/60"></div>
            <div className="w-1 h-6 bg-primary/80"></div>
            <div className="w-1 h-8 bg-primary"></div>
          </div>
          <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="w-12 h-1 bg-primary mx-auto mb-6"></div>
            <h4 className="text-lg font-light text-foreground mb-6">
              {t('company.title')}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary font-light transition-colors duration-200"
                >
                  {t('company.about')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary font-light transition-colors duration-200"
                >
                  {t('company.careers')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary font-light transition-colors duration-200"
                >
                  {t('company.press')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="w-12 h-1 bg-primary mx-auto mb-6"></div>
            <h4 className="text-lg font-light text-foreground mb-6">
              {t('products.title')}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary font-light transition-colors duration-200"
                >
                  {t('products.features')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary font-light transition-colors duration-200"
                >
                  {t('products.pricing')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary font-light transition-colors duration-200"
                >
                  {t('products.enterprise')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="w-12 h-1 bg-primary mx-auto mb-6"></div>
            <h4 className="text-lg font-light text-foreground mb-6">
              {t('support.title')}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary font-light transition-colors duration-200"
                >
                  {t('support.help')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary font-light transition-colors duration-200"
                >
                  {t('support.docs')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary font-light transition-colors duration-200"
                >
                  {t('support.api')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-border">
          <div className="flex justify-center space-x-8 mb-4">
            {Object.entries(socialIcons).map(([name, icon]) => (
              <a
                key={name}
                href="#"
                className="w-8 h-8 border border-border rounded flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
                aria-label={name}
              >
                {icon}
              </a>
            ))}
          </div>
          <div className="text-muted-foreground font-light">
            <Copyright copyright={t('copyright')} />
          </div>
        </div>
      </div>
    </footer>
  );
}
