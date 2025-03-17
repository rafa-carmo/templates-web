import { ArrowDown, ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Transaction {
  id: string
  title: string
  amount: number
  date: string
  category: string
  type: 'expense' | 'income'
}

const TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    title: 'Supermercado',
    amount: 250.8,
    date: '15 Jun 2023',
    category: 'Alimentação',
    type: 'expense',
  },
  {
    id: '2',
    title: 'Salário',
    amount: 3500.0,
    date: '10 Jun 2023',
    category: 'Renda',
    type: 'income',
  },
  {
    id: '3',
    title: 'Uber',
    amount: 28.5,
    date: '08 Jun 2023',
    category: 'Transporte',
    type: 'expense',
  },
  {
    id: '4',
    title: 'Amazon',
    amount: 120.99,
    date: '05 Jun 2023',
    category: 'Compras',
    type: 'expense',
  },
  {
    id: '5',
    title: 'Freelance',
    amount: 850.0,
    date: '02 Jun 2023',
    category: 'Renda',
    type: 'income',
  },
]

export function RecentTransactions() {
  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Transações Recentes</h3>
        <Button variant="outline" size="sm" asChild>
          <Link href="/financeiro/transactions">Ver todas</Link>
        </Button>
      </div>

      <div className="space-y-4">
        {TRANSACTIONS.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center',
                  transaction.type === 'expense' ? 'bg-red-50' : 'bg-green-50',
                )}
              >
                {transaction.type === 'expense' ? (
                  <ArrowDown className="h-5 w-5 text-finance-expense" />
                ) : (
                  <ArrowUp className="h-5 w-5 text-finance-income" />
                )}
              </div>

              <div>
                <p className="font-medium">{transaction.title}</p>
                <p className="text-xs text-gray-500">{transaction.category}</p>
              </div>
            </div>

            <div className="text-right">
              <p
                className={cn(
                  'font-medium',
                  transaction.type === 'expense'
                    ? 'text-finance-expense'
                    : 'text-finance-income',
                )}
              >
                {transaction.type === 'expense' ? '-' : '+'}
                R$ {transaction.amount.toFixed(2)}
              </p>
              <p className="text-xs text-gray-500">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
