'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { localeConfig } from '@/lib/i18n/config';
import { useEffect, useRef, useState } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLocaleChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentConfig = localeConfig[locale as keyof typeof localeConfig];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-lg border border-border bg-background px-3 py-2 text-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <span className="text-sm">{currentConfig?.flag}</span>
        <span className="text-sm font-medium">{currentConfig?.name}</span>
        <svg
          className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 w-full min-w-[140px] rounded-lg border border-border bg-card shadow-lg">
          {Object.entries(localeConfig).map(([key, config]) => (
            <button
              key={key}
              onClick={() => handleLocaleChange(key)}
              className={`flex w-full items-center space-x-2 px-3 py-2 text-sm transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg hover:bg-accent hover:text-accent-foreground ${key === locale ? 'bg-accent text-accent-foreground' : 'text-card-foreground'
                }`}
            >
              <span>{config.flag}</span>
              <span>{config.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
