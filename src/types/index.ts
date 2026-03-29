export type TransactionType = 'income' | 'expense'

export interface Category {
  id: string; name: string; icon: string; color: string; isDefault: boolean
}

export interface Transaction {
  id: string; type: TransactionType; amount: number; description: string
  categoryId: string; date: string; createdAt: string
}

export interface FinancialSummary {
  balance: number; totalIncome: number; totalExpense: number
}
