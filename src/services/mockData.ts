/**
 * Mock data for development and testing
 * This will be replaced with actual API calls in production
 */

import type {
  User,
  Project,
  Client,
  Order,
  Service,
  Template,
  Message,
  AnalyticsData,
  ChartData,
} from "@/types";

export const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    status: "active",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "manager",
    status: "active",
    createdAt: "2024-02-20T10:00:00Z",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "user",
    status: "active",
    createdAt: "2024-03-10T10:00:00Z",
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice.williams@example.com",
    role: "user",
    status: "inactive",
    createdAt: "2024-04-05T10:00:00Z",
  },
];

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "Website Redesign",
    description: "Complete redesign of corporate website",
    status: "active",
    progress: 65,
    startDate: "2024-01-01T00:00:00Z",
    clientId: "1",
    managerId: "2",
  },
  {
    id: "2",
    name: "Mobile App Development",
    description: "iOS and Android mobile application",
    status: "active",
    progress: 40,
    startDate: "2024-02-15T00:00:00Z",
    clientId: "2",
    managerId: "2",
  },
  {
    id: "3",
    name: "E-commerce Platform",
    description: "Full-stack e-commerce solution",
    status: "completed",
    progress: 100,
    startDate: "2023-10-01T00:00:00Z",
    endDate: "2024-03-31T00:00:00Z",
    clientId: "3",
    managerId: "1",
  },
];

export const mockClients: Client[] = [
  {
    id: "1",
    name: "Tech Corp",
    email: "contact@techcorp.com",
    phone: "+1-555-0101",
    company: "Tech Corp Inc.",
    status: "active",
    totalProjects: 5,
    totalRevenue: 250000,
  },
  {
    id: "2",
    name: "Digital Solutions",
    email: "info@digitalsolutions.com",
    phone: "+1-555-0102",
    company: "Digital Solutions LLC",
    status: "active",
    totalProjects: 3,
    totalRevenue: 180000,
  },
  {
    id: "3",
    name: "Innovation Labs",
    email: "hello@innovationlabs.com",
    phone: "+1-555-0103",
    company: "Innovation Labs Ltd.",
    status: "active",
    totalProjects: 8,
    totalRevenue: 420000,
  },
];

export const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-2024-001",
    clientId: "1",
    projectId: "1",
    amount: 50000,
    status: "processing",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-16T14:30:00Z",
  },
  {
    id: "2",
    orderNumber: "ORD-2024-002",
    clientId: "2",
    projectId: "2",
    amount: 75000,
    status: "completed",
    createdAt: "2024-02-01T10:00:00Z",
    updatedAt: "2024-02-28T16:00:00Z",
  },
  {
    id: "3",
    orderNumber: "ORD-2024-003",
    clientId: "3",
    amount: 30000,
    status: "pending",
    createdAt: "2024-03-10T10:00:00Z",
    updatedAt: "2024-03-10T10:00:00Z",
  },
];

export const mockServices: Service[] = [
  {
    id: "1",
    name: "Web Development",
    description: "Custom website development services",
    category: "Development",
    price: 5000,
    duration: "4-8 weeks",
    isActive: true,
  },
  {
    id: "2",
    name: "Mobile App Development",
    description: "iOS and Android app development",
    category: "Development",
    price: 10000,
    duration: "8-12 weeks",
    isActive: true,
  },
  {
    id: "3",
    name: "UI/UX Design",
    description: "User interface and experience design",
    category: "Design",
    price: 3000,
    duration: "2-4 weeks",
    isActive: true,
  },
  {
    id: "4",
    name: "SEO Optimization",
    description: "Search engine optimization services",
    category: "Marketing",
    price: 2000,
    duration: "Ongoing",
    isActive: true,
  },
];

export const mockTemplates: Template[] = [
  {
    id: "1",
    name: "Project Proposal",
    description: "Standard project proposal template",
    category: "Proposals",
    content: "Project proposal content...",
    createdBy: "1",
    createdAt: "2024-01-01T00:00:00Z",
    usageCount: 25,
  },
  {
    id: "2",
    name: "Client Contract",
    description: "Standard client service agreement",
    category: "Legal",
    content: "Contract content...",
    createdBy: "1",
    createdAt: "2024-01-15T00:00:00Z",
    usageCount: 18,
  },
  {
    id: "3",
    name: "Invoice Template",
    description: "Professional invoice template",
    category: "Finance",
    content: "Invoice content...",
    createdBy: "2",
    createdAt: "2024-02-01T00:00:00Z",
    usageCount: 42,
  },
];

export const mockMessages: Message[] = [
  {
    id: "1",
    senderId: "2",
    recipientId: "1",
    subject: "Project Update Required",
    content: "Please review the latest project deliverables.",
    isRead: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    senderId: "3",
    recipientId: "1",
    subject: "Meeting Request",
    content: "Can we schedule a meeting for next week?",
    isRead: true,
    createdAt: "2024-03-14T14:30:00Z",
  },
];

export const mockAnalytics: AnalyticsData = {
  totalUsers: 156,
  totalProjects: 48,
  totalRevenue: 850000,
  activeClients: 32,
  revenueGrowth: 12.5,
  projectCompletion: 87.3,
};

export const mockRevenueData: ChartData[] = [
  { name: "Jan", revenue: 65000, expenses: 45000 },
  { name: "Feb", revenue: 72000, expenses: 48000 },
  { name: "Mar", revenue: 68000, expenses: 46000 },
  { name: "Apr", revenue: 85000, expenses: 52000 },
  { name: "May", revenue: 92000, expenses: 55000 },
  { name: "Jun", revenue: 88000, expenses: 53000 },
];

export const mockProjectStatusData: ChartData[] = [
  { name: "Active", value: 18 },
  { name: "Completed", value: 24 },
  { name: "On Hold", value: 4 },
  { name: "Cancelled", value: 2 },
];
