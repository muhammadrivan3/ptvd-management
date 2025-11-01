/**
 * Dashboard Page
 * Main dashboard with analytics overview
 */

"use client";

import { useTranslations } from "next-intl";
import DashboardLayout from "@/components/templates/DashboardLayout";
import DashboardStats from "@/components/organisms/DashboardStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/molecules/Card";
import { mockAnalytics, mockRevenueData, mockProjectStatusData } from "@/services/mockData";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

export default function DashboardPage() {
  const t = useTranslations("dashboard");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {t("title")}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {t("welcome")}
          </p>
        </div>

        {/* Stats Overview */}
        <DashboardStats data={mockAnalytics} />

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle>{t("revenueChart")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3b82f6"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="#ef4444"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Project Status Chart */}
          <Card>
            <CardHeader>
              <CardTitle>{t("projectStatus")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={mockProjectStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry: { name: string; percent: number }) =>
                      `${entry.name}: ${(entry.percent * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {mockProjectStatusData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
