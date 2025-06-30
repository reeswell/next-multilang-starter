'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Copyright from '@/components/layouts/footers/Copyright';

export function ChineseFooter() {
  const t = useTranslations('Layout.footer');

  return (
    <footer className="border-t border-border bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-semibold text-foreground">您的品牌</h3>
              <p className="text-sm text-muted-foreground">
                专业、创新、可信赖的解决方案提供商
              </p>
            </div>

            <p className="mb-6 max-w-md leading-relaxed text-muted-foreground">
              {t('description')}
            </p>

            <div className="flex space-x-4">
              {[
                {
                  name: '微信',
                  color: 'hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50'
                },
                {
                  name: '微博',
                  color: 'hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400 hover:border-red-500/50'
                },
                {
                  name: '抖音',
                  color: 'hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/50'
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-colors duration-200 ${social.color}`}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-medium text-foreground">
              {t('company.title')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {t('company.about')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {t('company.careers')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {t('company.press')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-medium text-foreground">
              {t('support.title')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {t('support.help')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {t('support.docs')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {t('support.api')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  服务状态
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <Copyright copyright={t('copyright')} />
        </div>
      </div>
    </footer>
  );
}
