// src/modules/audit/transactionAudit.ts

import { v4 as uuidv4 } from 'uuid';
import { AuditEvent, Transaction } from '../../types';

const auditLog: AuditEvent[] = [];

const logAuditEvent = (
  action: AuditEvent['action'],
  transaction: Partial<Transaction>,
  previousState?: Partial<Transaction>
) => {
  if (!transaction.id) return;

  const event: AuditEvent = {
    id: uuidv4(),
    timestamp: new Date().toISOString(),
    action,
    transactionId: transaction.id,
    details: {
      newState: action !== 'delete' ? transaction : undefined,
      previousState: action !== 'create' ? previousState : undefined,
    },
  };

  auditLog.push(event);
  console.log('Audit Event Logged:', event);
};

export const logTransactionCreation = (transaction: Transaction) => {
  logAuditEvent('create', transaction);
};

export const logTransactionDeletion = (transaction: Transaction) => {
  logAuditEvent('delete', transaction, transaction);
};

export const getAuditLog = (): AuditEvent[] => [...auditLog];
