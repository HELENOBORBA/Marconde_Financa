import { useState, useMemo } from 'react'
import { Transaction, FinancialSummary } from '@/types'
import { sampleTransactions } from '@/data/sampleTransactions'
import { v4 as uuidv4 } from 'uuid'

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>(sampleTransactions)

  const addTransaction = (tx: Omit<Transaction, 'id' | 'createdAt'>) => {
    setTransactions(prev => [{ ...tx, id: uuidv4(), createdAt: new Date().toISOString() }, ...prev])
  }

  const deleteTransaction = (id: string) => {
    setTransactions(prev => prev.filter(t => t.id !== id))
  }

  const summary: FinancialSummary = useMemo(() => {
    const totalIncome = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0)
    const totalExpense = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0)
    return { balance: totalIncome - totalExpense, totalIncome, totalExpense }
  }, [transactions])

  const byCategory = useMemo(() => {
    const map: Record<string, number> = {}
    transactions.filter(t => t.type === 'expense').forEach(t => {
      map[t.categoryId] = (map[t.categoryId] || 0) + t.amount
    })
    return map
  }, [transactions])

  return { transactions, addTransaction, deleteTransaction, summary, byCategory }
}
