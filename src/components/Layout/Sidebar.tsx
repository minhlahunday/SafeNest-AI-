import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  Camera, 
  Settings, 
  User,
  Bell,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { logout } = useAuth();

  const menuItems = [
    { id: 'dashboard', label: 'Tổng quan', icon: LayoutDashboard },
    { id: 'classes', label: 'Lớp học', icon: GraduationCap },
    { id: 'students', label: 'Người dùng', icon: Users },
    { id: 'cameras', label: 'Camera', icon: Camera },
    { id: 'account', label: 'Tài khoản', icon: User },
    { id: 'settings', label: 'Cài đặt', icon: Settings },
  ];

  return (
    <div className="bg-white shadow-lg h-full w-64 fixed left-0 top-0 z-30">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">Quản Lý Trường Học</h1>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-blue-50 transition-colors ${
                activeTab === item.id 
                  ? 'bg-blue-50 text-blue-600 border-r-3 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="absolute bottom-0 w-full p-6 border-t border-gray-200">
        <button
          onClick={logout}
          className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default Sidebar;