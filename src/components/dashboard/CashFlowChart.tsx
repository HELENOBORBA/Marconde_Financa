import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { useTransactions } from '../../hooks/useTransactions';
import { aggregateMonthlyCashFlow } from '../../modules/analytics/transactionsAnalytics';

const formatCurrencyBRL = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

export function CashFlowChart() {
  const { transactions } = useTransactions();

  const chartData = useMemo(() => {
    return aggregateMonthlyCashFlow(transactions);
  }, [transactions]);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Fluxo de Caixa Mensal</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={(value) => formatCurrencyBRL(value as number)} tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            formatter={(value) => formatCurrencyBRL(value as number)}
            labelStyle={{ color: '#1f2937' }}
            itemStyle={{ fontWeight: '500' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar dataKey="income" fill="#10b981" name="Receitas" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expense" fill="#ef4444" name="Despesas" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
