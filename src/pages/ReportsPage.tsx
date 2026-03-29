import { useTransactions } from '@/hooks/useTransactions'
import { defaultCategories } from '@/data/categories'

export function ReportsPage() {
  const { transactions, summary } = useTransactions()
  const fmt = (v: number) => `R$ ${v.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Relatórios</h2>
        <p className="text-sm text-gray-500 mt-1">Histórico completo de transações</p>
      </div>
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-2 font-semibold text-gray-500">Data</th>
              <th className="text-left py-3 px-2 font-semibold text-gray-500">Descrição</th>
              <th className="text-left py-3 px-2 font-semibold text-gray-500">Categoria</th>
              <th className="text-left py-3 px-2 font-semibold text-gray-500">Tipo</th>
              <th className="text-right py-3 px-2 font-semibold text-gray-500">Valor</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(t => {
              const cat = defaultCategories.find(c => c.id === t.categoryId)
              return (
                <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="py-3 px-2 text-gray-600">{new Date(t.date).toLocaleDateString('pt-BR')}</td>
                  <td className="py-3 px-2 font-medium">{t.description}</td>
                  <td className="py-3 px-2"><span className="inline-flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">{cat?.icon} {cat?.name}</span></td>
                  <td className="py-3 px-2"><span className={`text-xs font-medium px-2 py-1 rounded-full ${t.type === 'income' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{t.type === 'income' ? 'Receita' : 'Despesa'}</span></td>
                  <td className={`py-3 px-2 text-right font-bold ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>{t.type === 'income' ? '+' : '-'}{fmt(t.amount)}</td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr className="font-bold">
              <td colSpan={4} className="py-3 px-2">Saldo Total</td>
              <td className={`py-3 px-2 text-right ${summary.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>{fmt(summary.balance)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
