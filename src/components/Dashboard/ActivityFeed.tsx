import React from 'react';
import { Clock, Users, Camera, AlertTriangle, CheckCircle } from 'lucide-react';

const ActivityFeed: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'user',
      message: 'Nguyễn Minh An đã đăng nhập',
      time: '2 phút trước',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      id: 2,
      type: 'attendance',
      message: 'Trần Bảo Nam điểm danh lớp 10A1',
      time: '5 phút trước',
      icon: CheckCircle,
      color: 'text-green-500'
    },
    {
      id: 3,
      type: 'camera',
      message: 'Lỗ Thu Trang kết nối camera',
      time: '8 phút trước',
      icon: Camera,
      color: 'text-purple-500'
    },
    {
      id: 4,
      type: 'alert',
      message: 'Phạm Hoàng Long cảnh báo an ninh',
      time: '12 phút trước',
      icon: AlertTriangle,
      color: 'text-orange-500'
    },
    {
      id: 5,
      type: 'system',
      message: 'Đỗ Mai Anh cập nhật hệ thống',
      time: '15 phút trước',
      icon: Clock,
      color: 'text-gray-500'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Hoạt động gần đây</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800">Xem tất cả</button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{activity.message}</p>
                <p className="text-xs text-gray-500 flex items-center mt-1">
                  <Clock className="w-3 h-3 mr-1" />
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* User Avatars */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <h4 className="text-sm font-medium text-gray-900 mb-3">18 cá cảo đỗ</h4>
        <div className="flex -space-x-2">
          {[
            'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1',
            'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1',
            'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1',
            'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1',
            'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1'
          ].map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`User ${index + 1}`}
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
          ))}
          <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center">
            <span className="text-xs font-medium text-gray-600">+13</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;