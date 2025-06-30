
import { useLocale } from 'next-intl';
import { EnglishHeader } from './headers/EnglishHeader';
import { ChineseHeader } from './headers/ChineseHeader';
import { JapaneseHeader } from './headers/JapaneseHeader';
import { EnglishFooter } from './footers/EnglishFooter';
import { ChineseFooter } from './footers/ChineseFooter';
import { JapaneseFooter } from './footers/JapaneseFooter';
import Header from '@/components/layouts/headers/Header';

interface LocalizedLayoutProps {
  children: React.ReactNode;
}

export function LocalizedLayout({ children }: LocalizedLayoutProps) {
  const locale = useLocale();

  const headers = {
    en: EnglishHeader,
    zh: ChineseHeader,
    ja: JapaneseHeader,
  };
  const footers = {
    en: EnglishFooter,
    zh: ChineseFooter,
    ja: JapaneseFooter,
  };


  // const Header = headers[locale as keyof typeof headers] || EnglishHeader;
  const Footer = footers[locale as keyof typeof footers] || EnglishFooter;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
