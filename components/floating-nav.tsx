'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LineChart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from '@/components/theme-switcher'

const navItems = [
  {
    name: 'Features',
    href: '/features',
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'Careers',
    href: '/careers',
  },
]

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Handle the scale effect
      if (currentScrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Handle the visibility based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4',
        'transition-all duration-200',
        isScrolled ? 'scale-95' : 'scale-100',
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      )}
    >
      <nav
        className={cn(
          'flex items-center justify-between px-8 py-4 rounded-full',
          'bg-background/70 backdrop-blur-lg border',
          'transition-all duration-200',
          isScrolled ? 'shadow-lg' : ''
        )}
      >
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <LineChart className="h-6 w-6" />
            <span className="font-bold text-lg">Derivix</span>
          </Link>

          {!isHomePage && (
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm transition-colors',
                    pathname === item.href
                      ? 'text-foreground font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <Button asChild size="sm">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </nav>
    </div>
  )
}
