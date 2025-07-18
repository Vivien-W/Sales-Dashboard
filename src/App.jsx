// App.jsx

import Sidebar from './components/layout/Sidebar.jsx';
import Clock from './components/layout/Clock.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import SalesPage from './pages/SalesPage.jsx';
import CustomerPage from './pages/CustomerPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext.jsx';

function App() {
  return (
     <DarkModeProvider>
      <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-400 flex items-center justify-center p-4">
       <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800 border border-white/40 dark:border-gray-200/10 rounded-3xl shadow-lg w-full max-w-7xl overflow-hidden">
        <div className="flex min-h-screen text-gray-950 dark:text-white">
         <Sidebar />
         <main className="flex-1 p-6">
            <div className="flex items-center justify-between mb-6">
             <h1 className="text-3xl font-bold">Sales Dashboard</h1>
              <Clock />
            </div>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/sales" element={<SalesPage />} />
              <Route path="/customers" element={<CustomerPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
       </div>
      </div>
    </Router>
  </DarkModeProvider>
  );
}

export default App;
