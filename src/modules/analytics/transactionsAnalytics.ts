import { format, parseISO, startOfMonth } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Transaction } from '../../types';

export interface MonthlyCashFlow {
  month: string;
  date: Date;
  income: number;
  expense: number;
}

/**
 * Aggregates transactions to calculate monthly income and expenses.
 * @param transactions The list of transactions.
 * @returns An array of monthly cash flow data, sorted by month.
 */
export const aggregateMonthlyCashFlow = (transactions: Transaction[]): Omit<MonthlyCashFlow, 'date'>[] => {
  const monthlyData = transactions.reduce<Record<string, MonthlyCashFlow>>((acc, transaction) => {
    const monthKey = format(parseISO(transaction.date), 'yyyy-MM');
    const monthDate = startOfMonth(parseISO(transaction.date));

    if (!acc[monthKey]) {
      acc[monthKey] = {
        month: format(monthDate, 'MMM', { locale: ptBR }),
        date: monthDate,
        income: 0,
        expense: 0,
      };
    }

    if (transaction.type === 'income') {
      acc[monthKey].income += transaction.amount;
    } else {
      acc[monthKey].expense += transaction.amount;
    }

    return acc;
  }, {});

  return Object.values(monthlyData)
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .map(({ date, ...rest }) => rest); // Remove date before returning
};

export interface CategoryDistribution {
  name: string;
  value: number;
}

/**
 * Aggregates expense transactions by category.
 * @param transactions The list of transactions.
 * @param categories A map of category IDs to names.
 * @returns An array of category distribution data.
 */
export const aggregateByCategory = (transactions: Transaction[], categories: Record<string, string>): CategoryDistribution[] => {
  const categoryData = transactions
    .filter(t => t.type === 'expense')
    .reduce<Record<string, number>>((acc, transaction) => {
      const categoryName = transaction.category ? categories[transaction.category] || 'Outros' : 'Outros';
      
      if (!acc[categoryName]) {
        acc[categoryName] = 0;
      }
      acc[categoryName] += transaction.amount;
      
      return acc;
    }, {});

  return Object.entries(categoryData).map(([name, value]) => ({
    name,
    value,
  }));
};
