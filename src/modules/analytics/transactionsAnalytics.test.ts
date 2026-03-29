// NOTE: This file contains test stubs. To run these tests, you need to install a test runner like Vitest.
// Example installation: `npm install -D vitest`
// Then, you can run tests with `npx vitest` and uncommenting the code below.

/*
import { describe, it, expect } from 'vitest';
import { aggregateMonthlyCashFlow, aggregateByCategory } from './transactionsAnalytics';
import { Transaction } from '../../types';

// Mock data for testing
const mockTransactions: Transaction[] = [
  // January
  { id: '1', description: 'Salary', amount: 5000, date: '2023-01-05T00:00:00.000Z', type: 'income', category: 'salary' },
  { id: '2', description: 'Rent', amount: 1500, date: '2023-01-10T00:00:00.000Z', type: 'expense', category: 'housing' },
  { id: '3', description: 'Groceries', amount: 400, date: '2023-01-15T00:00:00.000Z', type: 'expense', category: 'food' },
  // February
  { id: '4', description: 'Freelance', amount: 1000, date: '2023-02-01T00:00:00.000Z', type: 'income', category: 'freelance' },
  { id: '5', description: 'Restaurant', amount: 150, date: '2023-02-20T00:00:00.000Z', type: 'expense', category: 'food' },
  // Transaction with no category
  { id: '6', description: 'Unknown expense', amount: 50, date: '2023-02-25T00:00:00.000Z', type: 'expense' },
];

const mockCategories = {
  'housing': 'Moradia',
  'food': 'Alimentação',
  'salary': 'Salário',
  'freelance': 'Freelance',
};

describe('Analytics Aggregations', () => {
  describe('aggregateMonthlyCashFlow', () => {
    it('should correctly sum income and expenses for each month and sort them', () => {
      const result = aggregateMonthlyCashFlow(mockTransactions);
      
      expect(result).toHaveLength(2);

      // Check January data (formatted as 'jan')
      expect(result[0].month).toBe('jan');
      expect(result[0].income).toBe(5000);
      expect(result[0].expense).toBe(1900); // 1500 + 400

      // Check February data (formatted as 'fev')
      expect(result[1].month).toBe('fev');
      expect(result[1].income).toBe(1000);
      expect(result[1].expense).toBe(200); // 150 + 50
    });

    it('should return an empty array for no transactions', () => {
      expect(aggregateMonthlyCashFlow([])).toEqual([]);
    });
  });

  describe('aggregateByCategory', () => {
    it('should correctly sum expenses for each category', () => {
      const result = aggregateByCategory(mockTransactions, mockCategories);
      
      const foodCategory = result.find(c => c.name === 'Alimentação');
      expect(foodCategory?.value).toBe(550); // 400 + 150

      const housingCategory = result.find(c => c.name === 'Moradia');
      expect(housingCategory?.value).toBe(1500);
    });

    it('should group transactions with no category under "Outros"', () => {
      const result = aggregateByCategory(mockTransactions, mockCategories);
      const othersCategory = result.find(c => c.name === 'Outros');
      expect(othersCategory).toBeDefined();
      expect(othersCategory?.value).toBe(50);
    });

    it('should ignore income transactions', () => {
        const result = aggregateByCategory(mockTransactions, mockCategories);
        const incomeCategories = ['Salário', 'Freelance'];
        result.forEach(r => {
            expect(incomeCategories).not.toContain(r.name);
        });
    });
  });
});
*/
