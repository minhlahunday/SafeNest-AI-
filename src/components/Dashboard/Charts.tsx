import React from 'react';
import { BarChart3, PieChart } from 'lucide-react';

const Charts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Bar Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-blue-500" />
            Phân bố học sinh theo lớp
          </h3>
        </div>
        
        <div className="space-y-4">
          {[
            { class: '10A1', count: 35, percentage: 95 },
            { class: '10A2', count: 32, percentage: 87 },
            { class: '10A3', count: 33, percentage: 89 },
            { class: '10A4', count: 34, percentage: 92 },
            { class: '10A5', count: 31, percentage: 84 }
          ].map((item) => (
            <div key={item.class} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">{item.class}</span>
                <span className="text-gray-500">{item.count} học sinh</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <PieChart className="w-5 h-5 mr-2 text-blue-500" />
            Tỷ lệ nam/nữ
          </h3>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="relative w-40 h-40">
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
                stroke="#3b82f6"
                strokeWidth="3"
                strokeDasharray="65 35"
                strokeDashoffset="0"
              />
              <circle
                cx="21"
                cy="21"
                r="15.915"
                fill="transparent"
                stroke="#f97316"
                strokeWidth="3"
                strokeDasharray="35 65"
                strokeDashoffset="-65"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">450</div>
                <div className="text-sm text-gray-500">Tổng số</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Nam</span>
            </div>
            <span className="text-sm font-medium text-gray-900">65%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Nữ</span>
            </div>
            <span className="text-sm font-medium text-gray-900">35%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;