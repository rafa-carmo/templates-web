'use client'
import { useState } from 'react'
import { ArrowDown, ArrowUp, Filter, Plus, Search } from 'lucide-react'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TransactionForm } from '@/components/transactions/transaction-form'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface Transaction {
  id: string
  title: string
  amount: number
  date: string
  category: string
  type: 'expense' | 'income'
}

const DUMMY_TRANSACTIONS: Transaction[] = [
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
  {
    id: '6',
    title: 'Restaurante',
    amount: 89.9,
    date: '01 Jun 2023',
    category: 'Alimentação',
    type: 'expense',
  },
  {
    id: '7',
    title: 'Cinema',
    amount: 45.0,
    date: '28 Mai 2023',
    category: 'Lazer',
    type: 'expense',
  },
  {
    id: '8',
    title: 'Farmácia',
    amount: 67.25,
    date: '25 Mai 2023',
    category: 'Saúde',
    type: 'expense',
  },
]

const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [sortOrder, setSortOrder] = useState('newest')
  const [openDialog, setOpenDialog] = useState(false)

  const filteredTransactions = DUMMY_TRANSACTIONS.filter((transaction) => {
    // Filter by search query
    const matchesSearch =
      transaction.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchQuery.toLowerCase())

    // Filter by transaction type
    const matchesType =
      filterType === 'all' ||
      (filterType === 'expense' && transaction.type === 'expense') ||
      (filterType === 'income' && transaction.type === 'income')

    return matchesSearch && matchesType
  }).sort((a, b) => {
    // Parse dates for comparison (assuming date format DD MMM YYYY)
    const dateA = new Date(a.date.split(' ').reverse().join(' '))
    const dateB = new Date(b.date.split(' ').reverse().join(' '))

    // Sort by date
    if (sortOrder === 'newest') {
      return dateB.getTime() - dateA.getTime()
    } else {
      return dateA.getTime() - dateB.getTime()
    }
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 animate-slide-down">
            <div>
              <h1 className="text-3xl font-bold mb-2">Transações</h1>
              <p className="text-gray-600">
                Gerencie e acompanhe suas transações financeiras.
              </p>
            </div>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  <Plus size={18} />
                  Nova Transação
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Adicionar Nova Transação</DialogTitle>
                </DialogHeader>
                <TransactionForm />
              </DialogContent>
            </Dialog>
          </div>

          <div className="glass-card p-6 rounded-xl mb-8 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar transações..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex gap-3">
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-[180px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filtrar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas transações</SelectItem>
                    <SelectItem value="expense">Despesas</SelectItem>
                    <SelectItem value="income">Receitas</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortOrder} onValueChange={setSortOrder}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Mais recentes</SelectItem>
                    <SelectItem value="oldest">Mais antigas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {filteredTransactions.length === 0 ? (
            <div className="text-center py-10 animate-fade-in">
              <p className="text-gray-500 mb-4">Nenhuma transação encontrada</p>
              <Button variant="outline" onClick={() => setOpenDialog(true)}>
                Adicionar Transação
              </Button>
            </div>
          ) : (
            <div className="glass-card rounded-xl overflow-hidden animate-fade-in">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Descrição
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Categoria
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Data
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Valor
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredTransactions.map((transaction) => (
                      <tr
                        key={transaction.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div
                              className={cn(
                                'flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center',
                                transaction.type === 'expense'
                                  ? 'bg-red-50'
                                  : 'bg-green-50',
                              )}
                            >
                              {transaction.type === 'expense' ? (
                                <ArrowDown className="h-4 w-4 text-finance-expense" />
                              ) : (
                                <ArrowUp className="h-4 w-4 text-finance-income" />
                              )}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {transaction.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {transaction.category}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {transaction.date}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div
                            className={cn(
                              'text-sm font-medium',
                              transaction.type === 'expense'
                                ? 'text-finance-expense'
                                : 'text-finance-income',
                            )}
                          >
                            {transaction.type === 'expense' ? '-' : '+'}
                            R$ {transaction.amount.toFixed(2)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Transactions
