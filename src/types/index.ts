/**
 * Shared TypeScript types and interfaces for the application
 */

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "user";
  avatar?: string;
  status: "active" | "inactive";
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: "active" | "completed" | "on-hold" | "cancelled";
  progress: number;
  startDate: string;
  endDate?: string;
  clientId: string;
  managerId: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: "active" | "inactive";
  totalProjects: number;
  totalRevenue: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  clientId: string;
  projectId?: string;
  amount: number;
  status: "pending" | "processing" | "completed" | "cancelled";
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  duration: string;
  isActive: boolean;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  content: string;
  createdBy: string;
  createdAt: string;
  usageCount: number;
}

export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  subject: string;
  content: string;
  isRead: boolean;
  createdAt: string;
}

export interface AnalyticsData {
  totalUsers: number;
  totalProjects: number;
  totalRevenue: number;
  activeClients: number;
  revenueGrowth: number;
  projectCompletion: number;
}

export interface ChartData {
  name: string;
  value?: number;
  [key: string]: string | number | undefined;
}

export interface NavigationItem {
  key: string;
  href: string;
  icon: string;
  badge?: number;
}
