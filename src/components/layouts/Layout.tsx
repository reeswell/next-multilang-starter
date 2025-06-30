import Footer from '@/components/layouts/footers/Copyright'
import Header from '@/components/layouts/headers/Header'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="container h-full max-w-7xl">{children}</main>
      <Footer />
    </>
  )
}
