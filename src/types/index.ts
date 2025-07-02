export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'teacher' | 'student';
  phone?: string;
  birthDate?: string;
  gender?: 'Nam' | 'Nữ';
}

export interface Student {
  id: string;
  classId: string;
  className: string;
  teacherName: string;
  studentCount: number;
  year: string;
  status: 'Đang hoạt động' | 'Tạm dừng';
}

export interface DashboardStats {
  totalActiveUsers: number;
  totalUsers: number;
  totalCalls: number;
  cameraActive: number;
  totalCameras: number;
  aiAccuracy: number;
}

export interface CameraStatus {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline' | 'warning';
}

export interface Activity {
  id: string;
  type: string;
  description: string;
  time: string;
  location?: string;
}