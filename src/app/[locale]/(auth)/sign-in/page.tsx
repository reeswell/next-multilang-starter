'use client'

import SignIn from '@/components/SignIn'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'

export default function SignInPage() {
  const locale = useLocale()
  const t = useTranslations('Pages.auth')

  return (
    <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-20">
      <Link
        href={`/${locale}`}
        className={cn(buttonVariants({ variant: 'ghost' }), 'mt-5 self-start')}
      >
        <FaChevronLeft className="mr-2 h-4 w-4" />
        {t('home')}
      </Link>

      <SignIn />
    </div>
  )
}
