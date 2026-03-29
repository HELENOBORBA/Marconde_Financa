import { useState } from 'react'
import { TransactionType } from '@/types'
import { defaultCategories } from '@/data/categories'
import { clsx } from 'clsx'

interface Props {
  onAdd: (tx: { type: TransactionType; amount: number; description: string; categoryId: string; date: string }) => void
}

export function TransactionForm({ onAdd }: Props) {
  const [type, setType] = useState<TransactionType>('expense')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [categoryId, setCategoryId] = useState(defaultCategories[0].id)
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!amount || !description) return
    onAdd({ type, amount: parseFloat(amount), description, categoryId, date })
    setAmount(''); setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <h3 className="text-lg font-semibold">Nova Transação</h3>
      <div className="flex gap-2">
        {(['income', 'expense'] as const).map(t => (
          <button key={t} type="button" onClick={() => setType(t)}
            className={clsx('flex-1 py-2 rounded-lg text-sm font-medium transition-colors',
              type === t ? (t === 'income' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700') : 'bg-gray-50 text-gray-500')}>
            {t === 'income' ? '📈 Receita' : '📉 Despesa'}
          </button>
        ))}
      </div>
      <input type="number" step="0.01" min="0" placeholder="Valor (R$)" value={amount} onChange={e => setAmount(e.target.value)} className="input-field" required />
      <input type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} className="input-field" required />
      <select value={categoryId} onChange={e => setCategoryId(e.target.value)} className="input-field">
        {defaultCategories.map(c => <option key={c.id} value={c.id}>{c.icon} {c.name}</option>)}
      </select>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} className="input-field" />
      <button type="submit" className="btn-primary w-full">Adicionar</button>
    </form>
  )
}
