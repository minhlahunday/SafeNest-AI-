import React, { useState } from 'react';
import { 
   
  Search, 
   
  MoreVertical, 
  Play, 
   
  Volume2, 
  
  Maximize,
  Settings,
  AlertTriangle,
 
  Users,
  TrendingUp,
 
} from 'lucide-react';

const CameraManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Tất cả camera');
  const [selectedCamera, setSelectedCamera] = useState(1);

  const cameras = [
    {
      id: 1,
      name: 'Camera 1',
      location: 'Khu vực 1',
      status: 'online',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 2,
      name: 'Camera 2',
      location: 'Khu vực 2',
      status: 'online',
      image: 'https://images.pexels.com/photos/159306/library-la-trobe-study-students-159306.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 3,
      name: 'Camera 3',
      location: 'Khu vực 3',
      status: 'offline',
      image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 4,
      name: 'Camera 4',
      location: 'Khu vực 4',
      status: 'online',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 5,
      name: 'Camera 5',
      location: 'Khu vực 5',
      status: 'online',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 6,
      name: 'Camera 6',
      location: 'Khu vực 6',
      status: 'online',
      image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 7,
      name: 'Camera 7',
      location: 'Khu vực 7',
      status: 'online',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 8,
      name: 'Camera 8',
      location: 'Khu vực 8',
      status: 'offline',
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    }
  ];

  const alerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Phát hiện thời gian trực',
      camera: 'Camera 2',
      time: '5 phút trước'
    },
    {
      id: 2,
      type: 'info',
      message: 'Chuyển động bất thường',
      camera: 'Camera 5',
      time: '10 phút trước'
    }
  ];

  const selectedCameraData = cameras.find(cam => cam.id === selectedCamera);

  const getStatusColor = (status: string) => {
    return status === 'online' ? 'bg-green-500' : 'bg-red-500';
  };

  const getStatusText = (status: string) => {
    return status === 'online' ? 'Hoạt động' : 'Offline';
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      {/* <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Camera className="w-6 h-6 text-blue-500" />
              <h1 className="text-xl font-semibold text-gray-900">CamAI</h1>
            </div>
            <nav className="flex space-x-6">
              <button className="text-blue-600 border-b-2 border-blue-600 pb-1">Trang chủ</button>
              <button className="text-gray-600 hover:text-blue-600">Quản lý Camera</button>
              <button className="text-gray-600 hover:text-blue-600">Báo cáo</button>
              <button className="text-gray-600 hover:text-blue-600">Cài đặt</button>
            </nav>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Settings className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span className="text-sm font-medium">Admin</span>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex-1 flex">
        {/* Main Camera View */}
        <div className="flex-1 bg-gray-900 relative">
          {selectedCameraData && (
            <>
              <img
                src={selectedCameraData.image}
                alt={selectedCameraData.name}
                className="w-full h-full object-cover"
              />
              
              {/* Camera Info Overlay */}
              <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-2 rounded">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(selectedCameraData.status)}`}></div>
                  <span className="text-sm font-medium">{selectedCameraData.name} - {selectedCameraData.location}</span>
                </div>
                <div className="text-xs text-gray-300 mt-1">
                  {getStatusText(selectedCameraData.status)}
                </div>
              </div>

              {/* Camera Controls */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black bg-opacity-60 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button className="text-white hover:text-blue-400">
                        <Play className="w-5 h-5" />
                      </button>
                      <button className="text-white hover:text-blue-400">
                        <Volume2 className="w-5 h-5" />
                      </button>
                      <span className="text-white text-sm">00:45:23</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="text-white hover:text-blue-400">
                        <Settings className="w-5 h-5" />
                      </button>
                      <button className="text-white hover:text-blue-400">
                        <Maximize className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          {/* AI Analysis */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Phân tích AI</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-700">Nhận diện người</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-medium text-green-600">Đang hoạt động</span>
                  <span className="text-sm text-gray-500">5 người</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-purple-500" />
                  <span className="text-sm text-gray-700">Phát hiện chuyển động</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-medium text-blue-600">3 khu vực</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-700">Cảnh báo</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-medium text-orange-600">1 cảnh báo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Chart */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Biểu đồ hoạt động</h3>
            
            <div className="h-32 flex items-end space-x-1">
              {[60, 45, 80, 70, 85, 60, 75, 90, 65, 55, 70, 80].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-blue-500 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>00:00</span>
              <span>04:00</span>
              <span>08:00</span>
              <span>12:00</span>
              <span>20:00</span>
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Cảnh báo gần đây</h3>
            
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    alert.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500">{alert.camera} • {alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Camera Grid */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Danh sách Camera</h3>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Tìm kiếm camera..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              <option value="Tất cả camera">Tất cả camera</option>
              <option value="Hoạt động">Hoạt động</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {cameras.map((camera) => (
            <div 
              key={camera.id} 
              className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                selectedCamera === camera.id 
                  ? 'border-blue-500 shadow-lg' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedCamera(camera.id)}
            >
              <div className="aspect-video bg-gray-200">
                <img
                  src={camera.image}
                  alt={camera.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Status Badge */}
                <div className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-medium ${
                  camera.status === 'online' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                }`}>
                  {getStatusText(camera.status)}
                </div>

                {/* Camera Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2">
                  <p className="text-sm font-medium">{camera.name}</p>
                  <p className="text-xs text-gray-300">{camera.location}</p>
                </div>

                {/* Menu Button */}
                <button className="absolute top-2 right-2 p-1 bg-black bg-opacity-60 rounded text-white hover:bg-opacity-80">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CameraManagement;