'use client'
import { useState, useEffect } from 'react'

import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/financeiro' },
  { label: 'Dashboard', href: '/financeiro/dashboard' },
  { label: 'Transactions', href: '/financeiro/transactions' },
  { label: 'Categories', href: '/financeiro/categories' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/financeiro"
          className="text-xl font-semibold text-primary flex items-center gap-2"
        >
          <span className="w-3 h-3 rounded-full bg-finance-expense animate-pulse"></span>
          <span className="w-3 h-3 rounded-full bg-finance-income animate-pulse delay-100"></span>
          <span className="w-3 h-3 rounded-full bg-finance-savings animate-pulse delay-200"></span>
          <span className="ml-1">Finanças - MODELO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                location === item.href
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-100',
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Trigger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col pt-20 px-6 md:hidden transition-all duration-400 ease-spring',
          isOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none',
        )}
      >
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-4 py-3 rounded-lg text-base font-medium transition-all',
                location === item.href
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-100',
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
