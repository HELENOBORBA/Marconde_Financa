import { useState } from 'react'
import { TransactionForm } from '@/components/transactions/TransactionForm'
import { TransactionList } from '@/components/transactions/TransactionList'
import { useTransactions } from '@/hooks/useTransactions'

export function TransactionsPage() {
  const { transactions, addTransaction, deleteTransaction } = useTransactions()
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all')
  const filtered = filter === 'all' ? transactions : transactions.filter(t => t.type === filter)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Transações</h2>
        <p className="text-sm text-gray-500 mt-1">Gerencie suas receitas e despesas</p>
      </div>
      <div className="flex gap-2">
        {([['all','Todas'],['income','📈 Receitas'],['expense','📉 Despesas']] as const).map(([v,l]) => (
          <button key={v} onClick={() => setFilter(v as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filter === v ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {l}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1"><TransactionForm onAdd={addTransaction} /></div>
        <div className="lg:col-span-2"><TransactionList transactions={filtered} onDelete={deleteTransaction} /></div>
      </div>
    </div>
  )
}
