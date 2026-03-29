import { StatCard } from '@/components/dashboard/StatCard'
import { CashFlowChart } from '@/components/dashboard/CashFlowChart'
import { CategoryChart } from '@/components/dashboard/CategoryChart'
import { TransactionList } from '@/components/transactions/TransactionList'
import { useTransactions } from '@/hooks/useTransactions'

export function DashboardPage() {
  const { transactions, summary, byCategory, deleteTransaction } = useTransactions()
  const fmt = (v: number) => `R$ ${v.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-sm text-gray-500 mt-1">Visão geral das suas finanças</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Saldo Atual" value={fmt(summary.balance)} icon="💰" color="blue" />
        <StatCard title="Total Receitas" value={fmt(summary.totalIncome)} icon="📈" color="green" />
        <StatCard title="Total Despesas" value={fmt(summary.totalExpense)} icon="📉" color="red" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CashFlowChart transactions={transactions} />
        <CategoryChart byCategory={byCategory} />
      </div>
      <TransactionList transactions={transactions.slice(0, 5)} onDelete={deleteTransaction} />
    </div>
  )
}
