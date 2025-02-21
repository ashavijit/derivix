'use client'

import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { FloatingNav } from '@/components/floating-nav'
import { usePathname } from 'next/navigation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {!isHomePage && <FloatingNav />}
          <div className={!isHomePage ? 'pt-24' : ''}>{children}</div>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
