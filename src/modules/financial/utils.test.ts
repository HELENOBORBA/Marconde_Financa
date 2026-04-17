// src/modules/financial/utils.test.ts

import { toCents, fromCents, safeAdd } from './utils';

// These tests assume a test environment like Vitest or Jest,
// where 'describe', 'it', and 'expect' are globally available.

describe('Financial Utils', () => {
  describe('toCents', () => {
    it('should convert a positive float to cents', () => {
      expect(toCents(123.45)).toBe(12345);
    });

    it('should correctly round to the nearest cent', () => {
      expect(toCents(10.999)).toBe(1100);
    });
  });

  describe('fromCents', () => {
    it('should convert cents back to a float', () => {
      expect(fromCents(12345)).toBe(123.45);
    });
  });

  describe('safeAdd', () => {
    it('should correctly add floats without precision errors', () => {
      expect(safeAdd([0.1, 0.2])).toBe(0.3);
    });

    it('should return correct sum for multiple numbers', () => {
      expect(safeAdd([10.5, 20.25, 5.125])).toBe(35.88);
    });
  });
});
