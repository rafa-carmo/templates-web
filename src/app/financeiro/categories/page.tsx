'use client'
import { useState } from 'react'
import { Check, Edit, Plus, Trash2 } from 'lucide-react'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

interface Category {
  id: string
  name: string
  type: 'expense' | 'income'
  transactionCount: number
}

const DUMMY_CATEGORIES: Category[] = [
  { id: '1', name: 'Alimentação', type: 'expense', transactionCount: 15 },
  { id: '2', name: 'Transporte', type: 'expense', transactionCount: 8 },
  { id: '3', name: 'Moradia', type: 'expense', transactionCount: 3 },
  { id: '4', name: 'Saúde', type: 'expense', transactionCount: 5 },
  { id: '5', name: 'Lazer', type: 'expense', transactionCount: 7 },
  { id: '6', name: 'Educação', type: 'expense', transactionCount: 2 },
  { id: '7', name: 'Salário', type: 'income', transactionCount: 6 },
  { id: '8', name: 'Investimentos', type: 'income', transactionCount: 4 },
  { id: '9', name: 'Freelance', type: 'income', transactionCount: 3 },
]

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>(DUMMY_CATEGORIES)
  const [activeTab, setActiveTab] = useState<'expense' | 'income'>('expense')
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [newCategoryName, setNewCategoryName] = useState('')

  const filteredCategories = categories.filter(
    (category) => category.type === activeTab,
  )

  const handleAddCategory = () => {
    if (!newCategoryName.trim()) {
      toast.error('O nome da categoria não pode estar vazio')
      return
    }

    const newCategory: Category = {
      id: Date.now().toString(),
      name: newCategoryName,
      type: activeTab,
      transactionCount: 0,
    }

    setCategories([...categories, newCategory])
    setNewCategoryName('')
    setIsAddDialogOpen(false)
    toast.success('Categoria adicionada com sucesso!')
  }

  const handleEditCategory = () => {
    if (!editingCategory) return
    if (!newCategoryName.trim()) {
      toast.error('O nome da categoria não pode estar vazio')
      return
    }

    setCategories(
      categories.map((cat) =>
        cat.id === editingCategory.id ? { ...cat, name: newCategoryName } : cat,
      ),
    )

    setNewCategoryName('')
    setEditingCategory(null)
    setIsEditDialogOpen(false)
    toast.success('Categoria atualizada com sucesso!')
  }

  const handleDeleteCategory = () => {
    if (!editingCategory) return

    setCategories(categories.filter((cat) => cat.id !== editingCategory.id))
    setEditingCategory(null)
    setIsDeleteDialogOpen(false)
    toast.success('Categoria removida com sucesso!')
  }

  const openEditDialog = (category: Category) => {
    setEditingCategory(category)
    setNewCategoryName(category.name)
    setIsEditDialogOpen(true)
  }

  const openDeleteDialog = (category: Category) => {
    setEditingCategory(category)
    setIsDeleteDialogOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 animate-slide-down">
            <div>
              <h1 className="text-3xl font-bold mb-2">Categorias</h1>
              <p className="text-gray-600">
                Gerencie as categorias para organizar suas transações.
              </p>
            </div>

            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  <Plus size={18} />
                  Nova Categoria
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Adicionar Nova Categoria</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <Label htmlFor="name" className="mb-2 block">
                    Nome da Categoria
                  </Label>
                  <Input
                    id="name"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    placeholder="Ex: Alimentação, Transporte, etc."
                  />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DialogClose>
                  <Button onClick={handleAddCategory}>Adicionar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="glass-card p-6 rounded-xl mb-8 animate-fade-in">
            <div className="flex gap-2 mb-6">
              <Button
                variant={activeTab === 'expense' ? 'default' : 'outline'}
                onClick={() => setActiveTab('expense')}
              >
                Despesas
              </Button>
              <Button
                variant={activeTab === 'income' ? 'default' : 'outline'}
                onClick={() => setActiveTab('income')}
              >
                Receitas
              </Button>
            </div>

            {filteredCategories.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500 mb-4">
                  Nenhuma categoria encontrada
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsAddDialogOpen(true)}
                >
                  Adicionar Categoria
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCategories.map((category) => (
                  <div
                    key={category.id}
                    className="glass-card p-4 rounded-lg hover-scale"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{category.name}</h3>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => openEditDialog(category)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-600"
                          onClick={() => openDeleteDialog(category)}
                          disabled={category.transactionCount > 0}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {category.transactionCount} transações
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="glass-card p-6 rounded-xl animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">
              Dicas para Categorização
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p>
                  Crie categorias claras e específicas para facilitar a análise
                  de gastos.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p>
                  Organize suas categorias em grupos lógicos como
                  &quot;Essenciais&quot;, &quot;Lazer&quot;, etc.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p>
                  Revise suas categorias periodicamente para garantir que elas
                  ainda são relevantes.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p>
                  Categorias com transações não podem ser excluídas - primeiro
                  reclassifique as transações.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Edit Category Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar Categoria</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Label htmlFor="edit-name" className="mb-2 block">
              Nome da Categoria
            </Label>
            <Input
              id="edit-name"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button onClick={handleEditCategory}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Category Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Remover Categoria</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>
              Tem certeza que deseja remover a categoria &quot;
              {editingCategory?.name}&quot?
            </p>
            {editingCategory?.transactionCount &&
              editingCategory.transactionCount > 0 && (
                <p className="text-red-500 mt-2">
                  Esta categoria contém transações e não pode ser removida.
                  Reclassifique as transações primeiro.
                </p>
              )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={handleDeleteCategory}
              disabled={
                !!(
                  editingCategory?.transactionCount &&
                  editingCategory.transactionCount > 0
                )
              }
            >
              Remover
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}

export default Categories
