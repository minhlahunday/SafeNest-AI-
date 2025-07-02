import React, { useState } from 'react';
import { 
  Users, 
  Camera, 
  AlertTriangle, 
  Eye, 
  MapPin, 
  Search, 
  Filter, 
  MoreVertical,
  Plus,
  Download,
  Bell,
  Shield,
  Activity,
  TrendingUp,
  BarChart3,
  PieChart,
  Smartphone
} from 'lucide-react';

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Tất cả');

  const stats = [
    {
      title: 'Thể đồng gián sát',
      value: '45',
      icon: Eye,
      color: 'blue',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Camera hoạt động',
      value: '12',
      icon: Camera,
      color: 'green',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Cảnh báo hôm nay',
      value: '8',
      icon: AlertTriangle,
      color: 'red',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      title: 'Hệ thống AI',
      value: '100%',
      icon: Activity,
      color: 'purple',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  const alerts = [
    {
      id: 1,
      type: 'error',
      title: 'Lỗi treo',
      location: 'Lớp Môn 1',
      time: '2 phút trước',
      status: 'active'
    },
    {
      id: 2,
      type: 'warning',
      title: 'Ra khỏi vùng',
      location: 'Sân chơi',
      time: '15 phút trước',
      status: 'resolved'
    },
    {
      id: 3,
      type: 'info',
      title: 'Va chạm',
      location: 'Lớp chủ 2',
      time: '30 phút trước',
      status: 'investigating'
    }
  ];

  const cameraFeeds = [
    {
      id: 1,
      name: 'Lớp Môn 1',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      status: 'online'
    },
    {
      id: 2,
      name: 'Sân chơi',
      image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      status: 'online'
    },
    {
      id: 3,
      name: 'Lớp chủ 2',
      image: 'https://images.pexels.com/photos/159306/library-la-trobe-study-students-159306.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      status: 'offline'
    },
    {
      id: 4,
      name: 'Hành lang',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      status: 'online'
    }
  ];

  const users = [
    {
      id: 1,
      name: 'Nguyễn Minh An',
      email: 'minh.an@school.edu.vn',
      role: 'Giáo viên',
      status: 'Đang hoạt động',
      lastLogin: '2 phút trước',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    },
    {
      id: 2,
      name: 'Trần Bảo Nam',
      email: 'bao.nam@school.edu.vn',
      role: 'Quản trị viên',
      status: 'Đang hoạt động',
      lastLogin: '5 phút trước',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    },
    {
      id: 3,
      name: 'Lê Thu Trang',
      email: 'thu.trang@school.edu.vn',
      role: 'Giáo viên',
      status: 'Offline',
      lastLogin: '1 giờ trước',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    },
    {
      id: 4,
      name: 'Phạm Hoàng Long',
      email: 'hoang.long@school.edu.vn',
      role: 'Bảo vệ',
      status: 'Đang hoạt động',
      lastLogin: '10 phút trước',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    },
    {
      id: 5,
      name: 'Đỗ Mai Anh',
      email: 'mai.anh@school.edu.vn',
      role: 'Giáo viên',
      status: 'Đang hoạt động',
      lastLogin: '15 phút trước',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return <Bell className="w-4 h-4 text-blue-500" />;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'error':
        return 'border-l-red-500 bg-red-50';
      case 'warning':
        return 'border-l-yellow-500 bg-yellow-50';
      default:
        return 'border-l-blue-500 bg-blue-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản Lý Người Dùng</h1>
          <p className="text-gray-600 mt-1">Theo dõi và quản lý người dùng hệ thống</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Xuất báo cáo
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Thêm người dùng
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Camera Feeds */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Theo dõi trực tiếp</h3>
              <button className="text-sm text-blue-600 hover:text-blue-800">Xem tất cả</button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {cameraFeeds.map((camera) => (
                <div key={camera.id} className="relative group cursor-pointer">
                  <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={camera.image}
                      alt={camera.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
                    
                    {/* Status indicator */}
                    <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
                      camera.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                    } shadow-sm`}></div>
                    
                    {/* Camera name */}
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
                      {camera.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alerts Panel */}
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Cảnh báo mới nhất</h3>
              <button className="text-sm text-blue-600 hover:text-blue-800">Xem tất cả</button>
            </div>
            
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className={`border-l-4 p-3 rounded-r-lg ${getAlertColor(alert.type)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-2">
                      {getAlertIcon(alert.type)}
                      <div>
                        <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                        <p className="text-xs text-gray-600">{alert.location}</p>
                        <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-blue-500" />
              Thống kê nhanh
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="text-sm text-gray-600 mb-4">Gián lưu theo giờ</div>
            <div className="flex items-end space-x-2 h-32">
              {[65, 45, 80, 70, 85, 60, 75].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-blue-500 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2">{index + 6}h</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <PieChart className="w-5 h-5 mr-2 text-blue-500" />
              Phân loại cảnh báo
            </h3>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 42 42">
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="#e5e7eb"
                  strokeWidth="3"
                />
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="#ef4444"
                  strokeWidth="3"
                  strokeDasharray="40 60"
                  strokeDashoffset="0"
                />
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  strokeDasharray="30 70"
                  strokeDashoffset="-40"
                />
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray="20 80"
                  strokeDashoffset="-70"
                />
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="#6b7280"
                  strokeWidth="3"
                  strokeDasharray="10 90"
                  strokeDashoffset="-90"
                />
              </svg>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span>Nghiêm trọng</span>
              </div>
              <span className="font-medium">40%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span>Cảnh báo</span>
              </div>
              <span className="font-medium">30%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span>Thông tin</span>
              </div>
              <span className="font-medium">20%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
                <span>Khác</span>
              </div>
              <span className="font-medium">10%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-500" />
            Bản đồ vùng nguy hiểm
          </h3>
          <button className="text-sm text-blue-600 hover:text-blue-800">Xem chi tiết</button>
        </div>
        
        <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
          {/* Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100">
            <svg
              className="w-full h-full opacity-20"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid pattern */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Mock areas */}
              <circle cx="100" cy="100" r="30" fill="rgba(239, 68, 68, 0.3)" stroke="#ef4444" strokeWidth="2" />
              <circle cx="250" cy="150" r="25" fill="rgba(245, 158, 11, 0.3)" stroke="#f59e0b" strokeWidth="2" />
              <circle cx="320" cy="80" r="20" fill="rgba(16, 185, 129, 0.3)" stroke="#10b981" strokeWidth="2" />
            </svg>
          </div>

          {/* Danger Zone Markers */}
          <div className="absolute top-16 left-20">
            <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full shadow-lg animate-pulse">
              <AlertTriangle className="w-4 h-4 text-white" />
            </div>
            <div className="mt-1 text-xs bg-white px-2 py-1 rounded shadow-sm">
              Vùng nguy hiểm
            </div>
          </div>

          <div className="absolute top-32 left-48">
            <div className="flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-full shadow-lg">
              <AlertTriangle className="w-4 h-4 text-white" />
            </div>
            <div className="mt-1 text-xs bg-white px-2 py-1 rounded shadow-sm">
              Cảnh báo
            </div>
          </div>

          <div className="absolute top-20 right-20">
            <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full shadow-lg">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div className="mt-1 text-xs bg-white px-2 py-1 rounded shadow-sm">
              An toàn
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <button className="bg-white p-2 rounded shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xl font-bold text-gray-600">+</span>
            </button>
            <button className="bg-white p-2 rounded shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xl font-bold text-gray-600">-</span>
            </button>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                <span>Nguy hiểm</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                <span>Cảnh báo</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                <span>An toàn</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Danh sách người dùng</h3>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Tìm kiếm người dùng..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Tất cả">Tất cả vai trò</option>
              <option value="Giáo viên">Giáo viên</option>
              <option value="Quản trị viên">Quản trị viên</option>
              <option value="Bảo vệ">Bảo vệ</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Người dùng
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vai trò
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Đăng nhập cuối
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === 'Đang hoạt động' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <h4 className="font-semibold text-gray-900">KidGuard</h4>
            </div>
            <p className="text-sm text-gray-600">Hệ thống giám sát an toàn trẻ em thông minh</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Liên hệ</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Hotline: 1900 xxxx</p>
              <p>Email: support@kidguard.vn</p>
              <p>Địa chỉ: Hà Nội, Việt Nam</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Hỗ trợ</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Cài đặt thường gặp</p>
              <p>Chính sách bảo mật</p>
            </div>
            <div className="mt-3 space-y-2">
              <button className="w-full bg-black text-white py-2 px-4 rounded-lg text-sm">
                App Store
              </button>
              <button className="w-full bg-black text-white py-2 px-4 rounded-lg text-sm">
                Google Play
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
          © 2024 KidGuard. Bảo lưu mọi quyền.
        </div>
      </div>
    </div>
  );
};

export default UserManagement;