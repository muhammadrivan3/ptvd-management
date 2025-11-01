/**
 * DashboardStats Organism Component
 * Statistics overview section for dashboard
 */

"use client";

import { useTranslations } from "next-intl";
import { Users, FolderKanban, DollarSign, UserCheck } from "lucide-react";
import StatCard from "@/components/molecules/StatCard";
import { formatCurrency, formatNumber } from "@/lib/utils/formatters";
import type { AnalyticsData } from "@/types";

export interface DashboardStatsProps {
  data: AnalyticsData;
}

export default function DashboardStats({ data }: DashboardStatsProps) {
  const t = useTranslations("dashboard");

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title={t("totalUsers")}
        value={formatNumber(data.totalUsers)}
        icon={<Users className="h-6 w-6 text-blue-600" />}
      />
      <StatCard
        title={t("totalProjects")}
        value={formatNumber(data.totalProjects)}
        icon={<FolderKanban className="h-6 w-6 text-green-600" />}
        trend={{
          value: data.projectCompletion,
          isPositive: true,
        }}
      />
      <StatCard
        title={t("totalRevenue")}
        value={formatCurrency(data.totalRevenue)}
        icon={<DollarSign className="h-6 w-6 text-purple-600" />}
        trend={{
          value: data.revenueGrowth,
          isPositive: data.revenueGrowth > 0,
        }}
      />
      <StatCard
        title={t("activeClients")}
        value={formatNumber(data.activeClients)}
        icon={<UserCheck className="h-6 w-6 text-orange-600" />}
      />
    </div>
  );
}
