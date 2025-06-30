export const locales = ['en', 'zh', 'ja'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

export const localeConfig = {
  en: {
    name: 'English',
    flag: '🇺🇸',
    direction: 'ltr',
    theme: 'modern'
  },
  zh: {
    name: '中文',
    flag: '🇨🇳',
    direction: 'ltr',
    theme: 'traditional'
  },
  ja: {
    name: '日本語',
    flag: '🇯🇵',
    direction: 'ltr',
    theme: 'minimal'
  }
} as const;
