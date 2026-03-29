import { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { defaultCategories as categories } from '@/data/categories'
import { useTransactions } from '../../hooks/useTransactions';
import { aggregateByCategory } from '../../modules/analytics/transactionsAnalytics';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919'];

// Helper to create a map from the category list for the analytics function
const categoryMap = categories.reduce((acc, cat) => {
  acc[cat.id] = cat.name;
  return acc;
}, {} as Record<string, string>);

export function CategoryChart() {
  const { transactions } = useTransactions();

  const chartData = useMemo(() => {
    // Use the extracted analytics function
    return aggregateByCategory(transactions, categoryMap);
  }, [transactions]);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Distribuição de Despesas</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value as number)} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
