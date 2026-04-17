import { useState, useMemo, useEffect } from 'react'
import { Transaction, FinancialSummary } from '@/types'
import { sampleTransactions } from '@/data/sampleTransactions'
import { v4 as uuidv4 } from 'uuid'
import {
  logTransactionCreation,
  logTransactionDeletion,
} from '../modules/audit/transactionAudit';

const STORAGE_KEY = 'transactions';

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : sampleTransactions;
    } catch (error) {
      console.error('Failed to parse transactions from localStorage', error);
      return sampleTransactions;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx: Omit<Transaction, 'id' | 'createdAt'>) => {
    const newTransaction: Transaction = { ...tx, id: uuidv4(), createdAt: new Date().toISOString() };
    setTransactions(prev => [newTransaction, ...prev]);
    logTransactionCreation(newTransaction);
  }

  const deleteTransaction = (id: string) => {
    const transactionToDelete = transactions.find(t => t.id === id);
    if (transactionToDelete) {
      setTransactions(prev => prev.filter(t => t.id !== id));
      logTransactionDeletion(transactionToDelete);
    }
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

  return { transactions, addTransaction, deleteTransaction, summary, byCategory, setTransactions }
}
