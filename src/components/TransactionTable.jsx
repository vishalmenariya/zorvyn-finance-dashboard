import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction, addTransaction } from '../redux/actions';

export default function TransactionTable() {
  const transactions = useSelector(state => state.transactions);
  const role = useSelector(state => state.role);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  
  // New Transaction Form State
  const [newDesc, setNewDesc] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newType, setNewType] = useState('expense');

  const filteredTransactions = transactions.filter(t => 
    t.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newDesc || !newAmount) return;
    
    const newTx = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      amount: parseFloat(newAmount),
      category: newDesc,
      type: newType
    };
    dispatch(addTransaction(newTx));
    setNewDesc(''); setNewAmount('');
  };

  return (
    <div className="table-container card">
      <div className="table-header">
        <h2>Transactions</h2>
        <input 
          type="text" 
          placeholder="Search categories..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="search-input"
        />
      </div>

      {role === 'ADMIN' && (
        <form className="add-form" onSubmit={handleAdd}>
          <input type="text" placeholder="Category" value={newDesc} onChange={e => setNewDesc(e.target.value)} required />
          <input type="number" placeholder="Amount" value={newAmount} onChange={e => setNewAmount(e.target.value)} required />
          <select value={newType} onChange={e => setNewType(e.target.value)}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <button type="submit" className="btn-add">Add Transaction</button>
        </form>
      )}

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Type</th>
            <th>Amount</th>
            {role === 'ADMIN' && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.length === 0 ? (
            <tr><td colSpan="5" className="empty-state">No transactions found.</td></tr>
          ) : (
            filteredTransactions.map(t => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>{t.category}</td>
                <td><span className={`badge ${t.type}`}>{t.type}</span></td>
                <td>${t.amount}</td>
                {role === 'ADMIN' && (
                  <td>
                    <button className="btn-delete" onClick={() => dispatch(deleteTransaction(t.id))}>Delete</button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}