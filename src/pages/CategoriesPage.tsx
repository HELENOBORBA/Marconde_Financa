import { defaultCategories } from '@/data/categories'

export function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Categorias</h2>
        <p className="text-sm text-gray-500 mt-1">Organize suas transações por categoria</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {defaultCategories.map(cat => (
          <div key={cat.id} className="card flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ backgroundColor: cat.color + '15' }}>
              {cat.icon}
            </div>
            <div>
              <p className="font-semibold">{cat.name}</p>
              <p className="text-xs text-gray-400">{cat.isDefault ? 'Categoria padrão' : 'Personalizada'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
