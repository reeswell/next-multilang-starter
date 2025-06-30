import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
  if (!locales.includes(locale as any)) notFound();

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    messages: (await import(`../../../locales/${locale}/index.json`)).default
  };
});
