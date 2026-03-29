import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { defaultCategories } from '@/data/categories'

interface Props { byCategory: Record<string, number> }

export function CategoryChart({ byCategory }: Props) {
  const data = Object.entries(byCategory).map(([catId, value]) => {
    const cat = defaultCategories.find(c => c.id === catId)
    return { name: cat?.name || 'Outros', value, color: cat?.color || '#6b7280' }
  }).sort((a, b) => b.value - a.value)

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Despesas por Categoria</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} innerRadius={60} paddingAngle={2}>
            {data.map((d, i) => <Cell key={i} fill={d.color} />)}
          </Pie>
          <Tooltip formatter={(v: number) => `R$ ${v.toLocaleString('pt-BR')}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
