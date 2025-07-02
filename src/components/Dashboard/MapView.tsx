import React from 'react';
import { MapPin, Camera, AlertTriangle } from 'lucide-react';

const MapView: React.FC = () => {
  return (
    <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100">
        <svg
          className="w-full h-full opacity-20"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid pattern to simulate map */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Mock street lines */}
          <path d="M50 100 L350 100" stroke="#d1d5db" strokeWidth="3" />
          <path d="M50 150 L350 150" stroke="#d1d5db" strokeWidth="3" />
          <path d="M50 200 L350 200" stroke="#d1d5db" strokeWidth="3" />
          <path d="M100 50 L100 250" stroke="#d1d5db" strokeWidth="3" />
          <path d="M200 50 L200 250" stroke="#d1d5db" strokeWidth="3" />
          <path d="M300 50 L300 250" stroke="#d1d5db" strokeWidth="3" />
        </svg>
      </div>

      {/* Location Markers */}
      <div className="absolute top-16 left-20">
        <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full shadow-lg animate-pulse">
          <Camera className="w-4 h-4 text-white" />
        </div>
        <div className="mt-1 text-xs bg-white px-2 py-1 rounded shadow-sm">
          Camera 1
        </div>
      </div>

      <div className="absolute top-32 left-48">
        <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full shadow-lg">
          <MapPin className="w-4 h-4 text-white" />
        </div>
        <div className="mt-1 text-xs bg-white px-2 py-1 rounded shadow-sm">
          Lớp 10A1
        </div>
      </div>

      <div className="absolute top-24 right-24">
        <div className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full shadow-lg animate-pulse">
          <AlertTriangle className="w-4 h-4 text-white" />
        </div>
        <div className="mt-1 text-xs bg-white px-2 py-1 rounded shadow-sm">
          Cảnh báo
        </div>
      </div>

      <div className="absolute bottom-16 left-32">
        <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full shadow-lg">
          <Camera className="w-4 h-4 text-white" />
        </div>
        <div className="mt-1 text-xs bg-white px-2 py-1 rounded shadow-sm">
          Camera 2
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

      {/* Status Legend */}
      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-sm">
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
            <span>Camera hoạt động</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
            <span>Lớp học</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-1"></div>
            <span>Cảnh báo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;