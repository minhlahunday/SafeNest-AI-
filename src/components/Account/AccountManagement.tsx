import React, { useState } from 'react';
import { 
  User, 
  Shield, 
  Bell, 
  MapPin, 
  Calendar, 
  Phone, 
  Mail, 
  Camera,
  Eye,
  EyeOff,
  Smartphone,
  Settings
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AccountManagement: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [activeTab, setActiveTab] = useState('personal');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    birthDate: user?.birthDate || '',
    gender: user?.gender || 'Nam'
  });

  const menuItems = [
    { id: 'personal', label: 'Thông tin cá nhân', icon: User },
    { id: 'security', label: 'Bảo mật', icon: Shield },
    { id: 'notifications', label: 'Thông báo', icon: Bell },
    { id: 'location', label: 'Địa chỉ', icon: MapPin },
    { id: 'history', label: 'Lịch sử hoạt động', icon: Calendar }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    updateUser(formData);
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
            {user?.avatar ? (
              <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <User className="w-8 h-8 text-gray-400" />
            )}
          </div>
          <button className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600">
            <Camera className="w-3 h-3" />
          </button>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Ảnh đại diện</h3>
          <p className="text-sm text-gray-500">Cho phép định dạng JPG, GIF hoặc PNG. Kích thước tối đa 1MB</p>
          <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">Cập nhật ảnh</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ngày sinh</label>
          <input
            type="date"
            value={formData.birthDate}
            onChange={(e) => handleInputChange('birthDate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Giới tính</label>
          <select
            value={formData.gender}
            onChange={(e) => handleInputChange('gender', e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Lưu thay đổi
        </button>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center p-4 bg-blue-50 rounded-lg">
          <Shield className="w-5 h-5 text-blue-500 mr-3" />
          <div>
            <h4 className="font-medium text-gray-900">Đổi mật khẩu</h4>
            <p className="text-sm text-gray-500">Cập nhật mật khẩu để bảo vệ tài khoản</p>
          </div>
          <button className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium">
            Cập nhật
          </button>
        </div>

        <div className="flex items-center p-4 bg-green-50 rounded-lg">
          <Eye className="w-5 h-5 text-green-500 mr-3" />
          <div>
            <h4 className="font-medium text-gray-900">Xác thực hai yếu tố</h4>
            <p className="text-sm text-gray-500">Thêm lớp bảo mật bổ sung cho tài khoản</p>
          </div>
          <button className="ml-auto text-green-600 hover:text-green-800 text-sm font-medium">
            Thiết lập
          </button>
        </div>

        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
          <Smartphone className="w-5 h-5 text-gray-500 mr-3" />
          <div>
            <h4 className="font-medium text-gray-900">Thiết bị đã đăng nhập</h4>
            <p className="text-sm text-gray-500">Quản lý các thiết bị đăng nhập gần đây</p>
          </div>
          <button className="ml-auto text-gray-600 hover:text-gray-800 text-sm font-medium">
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'personal':
        return renderPersonalInfo();
      case 'security':
        return renderSecurity();
      case 'notifications':
        return (
          <div className="text-center py-12">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Cài đặt thông báo sẽ có sớm</p>
          </div>
        );
      case 'location':
        return (
          <div className="text-center py-12">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Quản lý địa chỉ sẽ có sớm</p>
          </div>
        );
      case 'history':
        return (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Lịch sử hoạt động sẽ có sớm</p>
          </div>
        );
      default:
        return renderPersonalInfo();
    }
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Quản lý tài khoản</h2>
          <p className="text-sm text-gray-500 mt-1">Quản lý thông tin và cài đặt tài khoản của bạn</p>
        </div>
        
        <nav className="p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-2xl">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              {menuItems.find(item => item.id === activeTab)?.label}
            </h1>
          </div>
          
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;