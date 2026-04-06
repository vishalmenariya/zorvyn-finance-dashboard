# Zorvyn Finance Dashboard

A clean, responsive, and interactive finance dashboard built to demonstrate frontend development skills, UI design, and state management.

## 🚀 Live Demo
*(Optional: Add your deployment link here if you have one)*

## 🛠️ Tech Stack
* **Framework:** React + Vite
* **State Management:** Core Redux
* **Styling:** Plain CSS
* **Data Visualization:** Pure CSS & React DOM rendering (No external chart libraries)

## ✨ Core Features
1. **Role-Based Access Control (RBAC):** Toggle between "Viewer" (read-only) and "Admin" (can add/delete transactions).
2. **Dynamic Financial Summary:** Real-time calculation of Total Balance, Income, and Expenses.
3. **Custom "Zero-Library" Data Visualizations:** Categorical spending breakdown built entirely from scratch using HTML `div` elements and inline CSS.
4. **Interactive Transactions Table:** Complete list with real-time search/filtering and empty state handling.

## ⚙️ Setup & Installation

1. Clone the repository:
    git clone https://github.com/vishalmenariya/zorvyn-finance-dashboard.git

2. Navigate to the directory:
    cd zorvyn-finance-dashboard

3. Install dependencies:
    npm install

4. Start the development server:
    npm run dev

## 🏗️ Architecture & Approach
* **State Management:** Core Redux was chosen to manage the global state (`transactions` and `role`). This ensures synchronous updates across charts, tables, and summaries without prop-drilling.
* **Component Modularity:** The UI is broken down into logical, reusable components (`SummaryCards`, `TransactionTable`, `CssBarChart`) to maintain clean, scalable code.
* **Responsive Design:** Built with CSS Grid and Flexbox to ensure the dashboard remains highly readable and functional across desktop, tablet, and mobile screens.