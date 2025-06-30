'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Copyright from '@/components/layouts/footers/Copyright';

export function ChineseFooter() {
  const t = useTranslations('Layout.footer');

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-foreground">您的品牌</h3>
              <p className="text-muted-foreground text-sm">
                专业、创新、可信赖的解决方案提供商
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
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
                  className={`px-3 py-2 text-sm text-muted-foreground border border-border rounded-md transition-colors duration-200 ${social.color}`}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 text-foreground">
              {t('company.title')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  {t('company.about')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  {t('company.careers')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  {t('company.press')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 text-foreground">
              {t('support.title')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  {t('support.help')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  {t('support.docs')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  {t('support.api')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  服务状态
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Copyright copyright={t('copyright')} />
        </div>
      </div>
    </footer>
  );
}
