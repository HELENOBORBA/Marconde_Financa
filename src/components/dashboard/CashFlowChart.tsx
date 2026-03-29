import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Transaction } from '@/types'

interface Props { transactions: Transaction[] }

export function CashFlowChart({ transactions }: Props) {
  const monthlyData: Record<string, { month: string; receitas: number; despesas: number }> = {}
  transactions.forEach(t => {
    const month = t.date.slice(0, 7)
    if (!monthlyData[month]) monthlyData[month] = { month, receitas: 0, despesas: 0 }
    if (t.type === 'income') monthlyData[month].receitas += t.amount
    else monthlyData[month].despesas += t.amount
  })
  const data = Object.values(monthlyData).sort((a, b) => a.month.localeCompare(b.month))

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Fluxo de Caixa</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={(v: number) => `R$ ${v.toLocaleString('pt-BR')}`} />
          <Legend />
          <Bar dataKey="receitas" fill="#22c55e" radius={[4,4,0,0]} />
          <Bar dataKey="despesas" fill="#ef4444" radius={[4,4,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
