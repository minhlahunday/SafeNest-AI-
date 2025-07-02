import React from 'react';
import { Camera, Wifi, WifiOff } from 'lucide-react';

const CameraGrid: React.FC = () => {
  const cameras = [
    {
      id: 1,
      name: 'Camera Lớp Môn 1',
      location: 'Tầng trên, Khu A',
      status: 'online',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 2,
      name: 'Camera Công Chính',
      location: 'Cổng chính',
      status: 'online',
      image: 'https://images.pexels.com/photos/159306/library-la-trobe-study-students-159306.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 3,
      name: 'Camera Lớp Môn 2',
      location: 'Cổng phụ vào khu A',
      status: 'offline',
      image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 4,
      name: 'Camera Nhà Ăn',
      location: 'Nhà ăn trường',
      status: 'online',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 5,
      name: 'Phát hiện có chạm mé',
      location: 'Phòng học 9C1',
      status: 'online',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 6,
      name: 'Do thiếu giang an toàn',
      location: 'Hiện lúc thử 9',
      status: 'online',
      image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 7,
      name: 'Chỗ không trong hành lang',
      location: 'Tầng chính khu N',
      status: 'online',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 8,
      name: 'Thiết bị rẻ không nhận',
      location: 'Quả thiết kế 9',
      status: 'offline',
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    }
  ];

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-red-500'
  };

  const statusIcons = {
    online: Wifi,
    offline: WifiOff
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Camera className="w-5 h-5 mr-2 text-blue-500" />
          Trạng thái Camera
        </h3>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Hoạt động</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Offline</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cameras.map((camera) => {
          const StatusIcon = statusIcons[camera.status as keyof typeof statusIcons];
          return (
            <div key={camera.id} className="relative group cursor-pointer">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={camera.image}
                  alt={camera.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
                
                {/* Status indicator */}
                <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${statusColors[camera.status as keyof typeof statusColors]} shadow-sm`}></div>
                
                {/* Status icon */}
                <div className={`absolute top-2 left-2 p-1 rounded ${camera.status === 'online' ? 'bg-green-500' : 'bg-red-500'} bg-opacity-80`}>
                  <StatusIcon className="w-3 h-3 text-white" />
                </div>
              </div>
              
              <div className="mt-2">
                <h4 className="text-sm font-medium text-gray-900 truncate">{camera.name}</h4>
                <p className="text-xs text-gray-500 truncate">{camera.location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CameraGrid;