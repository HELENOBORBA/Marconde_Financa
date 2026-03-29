import { Transaction } from '@/types'
import { defaultCategories } from '@/data/categories'
import { clsx } from 'clsx'

interface Props { transactions: Transaction[]; onDelete: (id: string) => void }

export function TransactionList({ transactions, onDelete }: Props) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Transações</h3>
      <div className="space-y-3">
        {transactions.length === 0 && <p className="text-sm text-gray-400 text-center py-8">Nenhuma transação encontrada</p>}
        {transactions.map(t => {
          const cat = defaultCategories.find(c => c.id === t.categoryId)
          return (
            <div key={t.id} className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0 group">
              <span className="text-xl">{cat?.icon || '📦'}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{t.description}</p>
                <p className="text-xs text-gray-400">{cat?.name} · {new Date(t.date).toLocaleDateString('pt-BR')}</p>
              </div>
              <span className={clsx('text-sm font-bold', t.type === 'income' ? 'text-green-600' : 'text-red-600')}>
                {t.type === 'income' ? '+' : '-'}R$ {t.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
              <button onClick={() => onDelete(t.id)} className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 transition text-xs">✕</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
