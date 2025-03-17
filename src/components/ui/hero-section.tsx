'use client'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-10 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>

      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200/30 animate-pulse -z-10"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-300/20 animate-pulse delay-1000 -z-10"></div>

      <div className="max-w-4xl flex flex-col items-center text-center animate-fade-in">
        <div className="inline-flex gap-2 items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-6 animate-slide-down">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-sm font-medium text-gray-600">
            Gerenciamento financeiro simplificado
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-balance animate-slide-up">
          Controle suas finanças com{' '}
          <span className="text-primary">clareza</span> e{' '}
          <span className="text-primary">elegância</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl animate-slide-up delay-100">
          Um sistema intuitivo que torna o gerenciamento financeiro pessoal tão
          simples quanto deve ser. Visualize, organize e planeje seu dinheiro
          com facilidade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-200">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 py-6 transition-all duration-300 hover:shadow-lg"
          >
            <Link href="/financeiro/dashboard">Começar agora</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 transition-all duration-300"
            onClick={scrollToFeatures}
          >
            Conhecer recursos
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToFeatures}
          aria-label="Scroll to features"
        >
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>
  )
}
