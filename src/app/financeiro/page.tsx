import { BarChart3, CreditCard, Filter, Wallet } from 'lucide-react'
import { Navbar } from '@/components/ui/navbar'
import { HeroSection } from '@/components/ui/hero-section'
import { FeatureCard } from '@/components/ui/feature-card'
import { Footer } from '@/components/ui/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main>
        <HeroSection />

        <section id="features" className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nossa plataforma oferece todas as ferramentas que você precisa
                para gerenciar suas finanças pessoais com eficiência e
                elegância.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={Wallet}
                title="Rastreamento de despesas"
                description="Registre e categorize suas despesas facilmente para um controle financeiro completo."
                delay={100}
              />
              <FeatureCard
                icon={BarChart3}
                title="Análises visuais"
                description="Visualize suas finanças através de gráficos e relatórios intuitivos e detalhados."
                delay={200}
              />
              <FeatureCard
                icon={Filter}
                title="Categorização inteligente"
                description="Organize suas transações por categorias e tags personalizáveis."
                delay={300}
              />
              <FeatureCard
                icon={CreditCard}
                title="Gerenciamento de contas"
                description="Acompanhe seus saldos e faça planejamento financeiro a longo prazo."
                delay={400}
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2 space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Assuma o controle das suas finanças hoje mesmo
                </h2>
                <p className="text-gray-600">
                  Nosso sistema intuitivo facilita o acompanhamento das suas
                  finanças pessoais, permitindo que você entenda seus padrões de
                  gastos e faça melhores escolhas financeiras.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p>Dashboard visual e intuitivo</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p>Segmentação de despesas por categorias</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p>Acompanhamento mensal de entradas e saídas</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p>Análise de tendências de gastos</p>
                  </div>
                </div>
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/financeiro/dashboard">Começar agora</Link>
                </Button>
              </div>

              <div className="md:w-1/2 glass-card rounded-2xl p-6 shadow-lg animate-scale-in">
                <img
                  src="https://placehold.co/600x400/e0eafc/6b82a7?text=Finanças+Dashboard"
                  alt="Dashboard Preview"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para começar?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Experimente nossa plataforma e dê o primeiro passo para uma vida
              financeira mais organizada e tranquila.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 py-6">
              <Link href="/financeiro/dashboard">Acessar Dashboard</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Index
