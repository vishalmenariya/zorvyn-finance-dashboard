import React from 'react';
import { useSelector } from 'react-redux';

export default function SummaryCards() {
  const transactions = useSelector(state => state.transactions);

  const income = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  const expenses = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
  const balance = income - expenses;

  return (
    <div className="summary-cards">
      <div className="card">
        <h3>Total Balance</h3>
        <p className="amount">${balance}</p>
      </div>
      <div className="card income">
        <h3>Total Income</h3>
        <p className="amount">+${income}</p>
      </div>
      <div className="card expense">
        <h3>Total Expenses</h3>
        <p className="amount">-${expenses}</p>
      </div>
    </div>
  );
}