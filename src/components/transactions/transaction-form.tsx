import * as React from 'react'
import { useState } from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon, Check, ChevronsUpDown } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

const categories = [
  { label: 'Alimentação', value: 'alimentacao' },
  { label: 'Transporte', value: 'transporte' },
  { label: 'Moradia', value: 'moradia' },
  { label: 'Saúde', value: 'saude' },
  { label: 'Educação', value: 'educacao' },
  { label: 'Lazer', value: 'lazer' },
  { label: 'Compras', value: 'compras' },
  { label: 'Assinaturas', value: 'assinaturas' },
  { label: 'Outros', value: 'outros' },
]

export function TransactionForm() {
  const [date, setDate] = useState<Date>(new Date())
  const [amount, setAmount] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [transactionType, setTransactionType] = useState<string>('expense')
  const [category, setCategory] = useState<string>('')
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!amount || !description || !category) {
      toast.error('Por favor, preencha todos os campos')
      return
    }

    // Here you would normally save the transaction
    toast.success('Transação adicionada com sucesso!')

    // Reset form
    setAmount('')
    setDescription('')
    setCategory('')
    setDate(new Date())
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="type">Tipo de Transação</Label>
          <Select value={transactionType} onValueChange={setTransactionType}>
            <SelectTrigger id="type" className="w-full mt-1">
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="expense">Despesa</SelectItem>
              <SelectItem value="income">Receita</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="amount">Valor</Label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              R$
            </span>
            <Input
              id="amount"
              type="number"
              step="0.01"
              min="0"
              placeholder="0,00"
              className="pl-9"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="date">Data</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full mt-1 justify-start text-left font-normal"
              >
                <CalendarIcon className="h-4 w-4 mr-2" />
                {date ? format(date, 'PPP') : <span>Selecione uma data</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => newDate && setDate(newDate)}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label htmlFor="category">Categoria</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full mt-1 justify-between"
              >
                {category
                  ? categories.find((cat) => cat.value === category)?.label
                  : 'Selecione uma categoria'}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput
                  placeholder="Buscar categoria..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>Nenhuma categoria encontrada.</CommandEmpty>
                  <CommandGroup>
                    {categories.map((cat) => (
                      <CommandItem
                        key={cat.value}
                        value={cat.value}
                        onSelect={(currentValue) => {
                          setCategory(currentValue)
                          setOpen(false)
                        }}
                      >
                        {cat.label}
                        <Check
                          className={cn(
                            'ml-auto h-4 w-4',
                            category === cat.value
                              ? 'opacity-100'
                              : 'opacity-0',
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label htmlFor="description">Descrição</Label>
          <Input
            id="description"
            placeholder="Ex: Supermercado, Aluguel, etc."
            className="mt-1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Adicionar Transação
      </Button>
    </form>
  )
}
