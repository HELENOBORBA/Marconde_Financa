// src/modules/financial/utils.ts

/**
 * Converts a float amount (e.g., 123.45) to an integer in cents (e.g., 12345).
 * This helps avoid floating-point inaccuracies in financial calculations.
 * @param amount The monetary amount in float.
 * @returns The amount in cents as an integer.
 */
export const toCents = (amount: number): number => {
  if (isNaN(amount)) return 0;
  return Math.round(amount * 100);
};

/**
 * Converts an integer amount in cents back to a float.
 * @param amountInCents The monetary amount in cents.
 * @returns The amount as a float.
 */
export const fromCents = (amountInCents: number): number => {
  return amountInCents / 100;
};

/**
 * Safely adds multiple numbers by converting them to cents first.
 * @param numbers An array of numbers to add.
 * @returns The sum as a float.
 */
export const safeAdd = (numbers: number[]): number => {
  const sumInCents = numbers.reduce((acc, num) => acc + toCents(num), 0);
  return fromCents(sumInCents);
};
