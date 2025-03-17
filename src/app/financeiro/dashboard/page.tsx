import {
  ArrowDown,
  ArrowUp,
  CreditCard,
  DollarSign,
  Wallet,
} from 'lucide-react'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { StatCard } from '@/components/ui/stat-card'
import { ExpenseChart } from '@/components/dashboard/expense-chart'
import { RecentTransactions } from '@/components/dashboard/recent-transactions'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 animate-slide-down">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-600">
              Bem-vindo de volta! Aqui está o resumo das suas finanças.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Saldo Total"
              value="R$ 8.425,00"
              description="Atualizado hoje"
              icon={Wallet}
              className="animate-scale-in"
            />
            <StatCard
              title="Receitas"
              value="R$ 4.350,00"
              trend={8}
              trendLabel="último mês"
              icon={ArrowUp}
              className="animate-scale-in delay-[100ms]"
            />
            <StatCard
              title="Despesas"
              value="R$ 2.180,00"
              trend={-3}
              trendLabel="último mês"
              icon={ArrowDown}
              className="animate-scale-in delay-[200ms]"
            />
            <StatCard
              title="Economia"
              value="R$ 2.170,00"
              description="50% das receitas"
              icon={CreditCard}
              className="animate-scale-in delay-[300ms]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 animate-fade-in delay-[100ms]">
              <ExpenseChart />
            </div>
            <div className="animate-fade-in delay-[200ms]">
              <div className="glass-card p-6 rounded-xl mb-6">
                <h3 className="text-lg font-semibold mb-4">Ação Rápida</h3>
                <div className="space-y-4">
                  <Button
                    asChild
                    className="w-full justify-start"
                    variant="outline"
                  >
                    <Link href="/financeiro/transactions">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Adicionar Transação
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full justify-start"
                    variant="outline"
                  >
                    <Link href="/financeiro/categories">
                      <ArrowUp className="mr-2 h-4 w-4" />
                      Gerenciar Categorias
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Resumo do Mês</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Receitas</span>
                    <span className="font-medium text-finance-income">
                      R$ 4.350,00
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Despesas</span>
                    <span className="font-medium text-finance-expense">
                      R$ 2.180,00
                    </span>
                  </div>
                  <div className="h-px bg-gray-200 my-2"></div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saldo</span>
                    <span className="font-bold">R$ 2.170,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in delay-[400ms]">
            <RecentTransactions />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Dashboard
