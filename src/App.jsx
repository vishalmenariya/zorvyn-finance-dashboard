import React from 'react';
import DashboardLayout from './components/DashboardLayout';
import './styles/App.css'; // <-- THIS IS THE CRITICAL LINE

function App() {
  return (
    <div className="App">
      <DashboardLayout />
    </div>
  );
}

export default App;