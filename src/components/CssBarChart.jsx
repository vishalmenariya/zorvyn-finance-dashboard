import React from 'react';
import { useSelector } from 'react-redux';

export default function CssBarChart() {
  const transactions = useSelector(state => state.transactions);
  
  // Calculate expenses by category
  const expenses = transactions.filter(t => t.type === 'expense');
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  
  const categoryTotals = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  // Find highest category for Insights
  let highestCategory = 'None';
  let highestAmount = 0;
  Object.entries(categoryTotals).forEach(([cat, amount]) => {
      if(amount > highestAmount) {
          highestAmount = amount;
          highestCategory = cat;
      }
  });

  if (totalExpenses === 0) return <div className="card">No expenses to display</div>;

  return (
    <div className="chart-container card">
      <h2>Spending Breakdown</h2>
      <div className="insight-box">
        <strong>Insight:</strong> Your highest spending category is <span>{highestCategory}</span> (${highestAmount}).
      </div>
      
      {Object.entries(categoryTotals).map(([category, amount]) => {
        const percentage = ((amount / totalExpenses) * 100).toFixed(1);
        return (
          <div key={category} className="bar-wrapper">
            <div className="bar-labels">
              <span>{category}</span>
              <span>${amount} ({percentage}%)</span>
            </div>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: `${percentage}%` }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}