import { useTransactions } from '@/hooks/useTransactions'
import { defaultCategories } from '@/data/categories'

export function InsightsPage() {
  const { summary, byCategory, transactions } = useTransactions()
  const topExpense = Object.entries(byCategory).sort((a, b) => b[1] - a[1])[0]
  const topCat = topExpense ? defaultCategories.find(c => c.id === topExpense[0]) : null
  const savingsRate = summary.totalIncome > 0 ? ((summary.totalIncome - summary.totalExpense) / summary.totalIncome * 100) : 0

  const insights = [
    {
      icon: '💡', title: 'Taxa de Poupança',
      message: savingsRate > 20 ? `Excelente! Você está poupando ${savingsRate.toFixed(0)}% da sua renda.` :
               savingsRate > 0 ? `Você está poupando ${savingsRate.toFixed(0)}% da renda. Tente aumentar para 20%.` :
               'Atenção! Suas despesas superam suas receitas.',
      type: savingsRate > 20 ? 'success' : savingsRate > 0 ? 'warning' : 'danger',
    },
    ...(topCat ? [{
      icon: topCat.icon, title: 'Maior Gasto',
      message: `Sua maior categoria de despesa é ${topCat.name} com R$ ${topExpense![1].toLocaleString('pt-BR', { minimumFractionDigits: 2 })}.`,
      type: 'info',
    }] : []),
    {
      icon: '📊', title: 'Total de Transações',
      message: `Você tem ${transactions.length} transações registradas.`,
      type: 'info',
    },
  ]

  const colors: Record<string, string> = {
    success: 'border-l-green-500 bg-green-50',
    warning: 'border-l-yellow-500 bg-yellow-50',
    danger: 'border-l-red-500 bg-red-50',
    info: 'border-l-blue-500 bg-blue-50',
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Insights</h2>
        <p className="text-sm text-gray-500 mt-1">Inteligência financeira automática</p>
      </div>
      <div className="space-y-4">
        {insights.map((ins, i) => (
          <div key={i} className={`card border-l-4 ${colors[ins.type]}`}>
            <div className="flex items-start gap-3">
              <span className="text-2xl">{ins.icon}</span>
              <div>
                <h4 className="font-semibold">{ins.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{ins.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
