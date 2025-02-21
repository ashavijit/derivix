'use client'

import { Moon, Sun, Monitor, LineChart } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          {/* Light Mode Icon */}
          <Sun
            className={`h-5 w-5 transition-all ${
              theme === 'light' ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'
            }`}
          />
          {/* Dark Mode Icon */}
          <Moon
            className={`absolute h-5 w-5 transition-all ${
              theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
            }`}
          />
          {/* Trading Mode Icon */}
          <LineChart
            className={`absolute h-5 w-5 transition-all ${
              theme === 'trading' ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
            }`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('trading')}>
          <LineChart className="mr-2 h-4 w-4" />
          <span>Trading</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Monitor className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
