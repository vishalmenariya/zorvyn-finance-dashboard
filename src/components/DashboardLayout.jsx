import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRole } from '../redux/actions';
import SummaryCards from './SummaryCards';
import CssBarChart from './CssBarChart';
import TransactionTable from './TransactionTable';

export default function DashboardLayout() {
  const role = useSelector(state => state.role);
  const dispatch = useDispatch();

  const toggleRole = () => {
    dispatch(setRole(role === 'VIEWER' ? 'ADMIN' : 'VIEWER'));
  };

  return (
    <div className="dashboard-layout">
      <header className="header">
        <h1>Finance Dashboard</h1>
        <div className="role-toggle">
          <span>Current Role: <strong>{role}</strong></span>
          <button onClick={toggleRole} className="btn-toggle">
            Switch to {role === 'VIEWER' ? 'ADMIN' : 'VIEWER'}
          </button>
        </div>
      </header>
      
      <main className="main-content">
        <SummaryCards />
        <div className="grid-layout">
          <CssBarChart />
          <TransactionTable />
        </div>
      </main>
    </div>
  );
}