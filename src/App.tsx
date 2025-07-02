import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './components/Auth/LoginPage';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import ClassManagement from './components/Classes/ClassManagement';
import UserManagement from './components/Users/UserManagement';
import CameraManagement from './components/Camera/CameraManagement';
import AccountManagement from './components/Account/AccountManagement';
import UserDashboard from './components/User/UserDashboard';

const AppContent: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  // If user is not admin, show user dashboard
  if (user?.role !== 'admin') {
    return <UserDashboard />;
  }

  // Admin interface
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'classes':
        return <ClassManagement />;
      case 'students':
        return <UserManagement />;
      case 'cameras':
        return <CameraManagement />;
      case 'account':
        return <AccountManagement />;
      case 'settings':
        return (
          <div className="text-center py-12">
            <p className="text-gray-500">Cài đặt hệ thống sẽ có sớm</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Header />
      
      <main className="ml-64 pt-16">
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;