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

// --- Added for Transaction Auditing ---

/**
 * Defines the structure for an audit event related to a transaction.
 */
export interface AuditEvent {
  id: string; // Unique ID for the audit event itself
  timestamp: string; // ISO 8601 string of when the event occurred
  action: 'create' | 'update' | 'delete';
  transactionId: string; // ID of the transaction that was affected
  details: {
    previousState?: Partial<Transaction>; // For 'update' and 'delete'
    newState?: Partial<Transaction>; // For 'create' and 'update'
  };
}
