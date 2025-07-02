import React from 'react';
import { Users, GraduationCap, Eye, TrendingUp, MapPin, Activity } from 'lucide-react';
import StatsCard from './StatsCard';
import MapView from './MapView';
import ActivityFeed from './ActivityFeed';
import CameraGrid from './CameraGrid';
import Charts from './Charts';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Tổng số lớp"
          value="15"
          icon={GraduationCap}
          color="blue"
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatsCard
          title="Tổng số học sinh"
          value="450"
          icon={Users}
          color="green"
          trend={{ value: 2.1, isPositive: true }}
        />
        <StatsCard
          title="Lớp đang hoạt động"
          value="12"
          icon={Activity}
          color="purple"
        />
        <StatsCard
          title="Tỷ lệ đạt chuẩn"
          value="92%"
          icon={TrendingUp}
          color="orange"
          trend={{ value: 1.8, isPositive: true }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                Bản đồ theo dõi trực tiếp
              </h3>
              <div className="flex space-x-2">
                <button className="text-sm text-blue-600 hover:text-blue-800">Tất cả vị trí</button>
                <span className="text-gray-300">|</span>
                <button className="text-sm text-blue-600 hover:text-blue-800">Xem toàn màn hình</button>
              </div>
            </div>
            <MapView />
          </div>
        </div>

        {/* Activity Feed */}
        <div>
          <ActivityFeed />
        </div>
      </div>

      {/* Charts Section */}
      <Charts />

      {/* Camera Grid */}
      <CameraGrid />
    </div>
  );
};

export default Dashboard;