import { Transaction } from '@/types'

export const sampleTransactions: Transaction[] = [
  { id: 't1', type: 'income', amount: 8500, description: 'Salário mensal', categoryId: '8', date: '2024-01-05', createdAt: '2024-01-05T10:00:00Z' },
  { id: 't2', type: 'expense', amount: 1200, description: 'Aluguel', categoryId: '3', date: '2024-01-10', createdAt: '2024-01-10T10:00:00Z' },
  { id: 't3', type: 'expense', amount: 450, description: 'Supermercado', categoryId: '1', date: '2024-01-12', createdAt: '2024-01-12T10:00:00Z' },
  { id: 't4', type: 'expense', amount: 200, description: 'Combustível', categoryId: '2', date: '2024-01-13', createdAt: '2024-01-13T10:00:00Z' },
  { id: 't5', type: 'expense', amount: 150, description: 'Cinema e jantar', categoryId: '4', date: '2024-01-15', createdAt: '2024-01-15T10:00:00Z' },
  { id: 't6', type: 'income', amount: 2000, description: 'Freelance design', categoryId: '8', date: '2024-01-18', createdAt: '2024-01-18T10:00:00Z' },
  { id: 't7', type: 'expense', amount: 500, description: 'Tesouro Direto', categoryId: '5', date: '2024-01-20', createdAt: '2024-01-20T10:00:00Z' },
  { id: 't8', type: 'expense', amount: 180, description: 'Farmácia', categoryId: '6', date: '2024-01-22', createdAt: '2024-01-22T10:00:00Z' },
  { id: 't9', type: 'expense', amount: 350, description: 'Curso online', categoryId: '7', date: '2024-01-25', createdAt: '2024-01-25T10:00:00Z' },
  { id: 't10', type: 'expense', amount: 280, description: 'Restaurante', categoryId: '1', date: '2024-01-28', createdAt: '2024-01-28T10:00:00Z' },
]
