/**
 * Projects Page
 * Project management with progress tracking
 */

"use client";

import { useTranslations } from "next-intl";
import DashboardLayout from "@/components/templates/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/molecules/Card";
import DataTable, { Column } from "@/components/molecules/DataTable";
import SearchBar from "@/components/molecules/SearchBar";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import { mockProjects } from "@/services/mockData";
import { Project } from "@/types";
import { formatDate } from "@/lib/utils/formatters";
import { Plus } from "lucide-react";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const tCommon = useTranslations("common");

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "active":
        return "primary";
      case "completed":
        return "success";
      case "on-hold":
        return "warning";
      case "cancelled":
        return "danger";
      default:
        return "default";
    }
  };

  const columns: Column<Project>[] = [
    {
      key: "name",
      header: t("projectName"),
    },
    {
      key: "status",
      header: tCommon("status"),
      render: (project) => (
        <Badge variant={getStatusVariant(project.status)}>
          {t(project.status as never)}
        </Badge>
      ),
    },
    {
      key: "progress",
      header: t("progress"),
      render: (project) => (
        <div className="flex items-center space-x-2">
          <div className="h-2 w-24 rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-2 rounded-full bg-blue-600"
              style={{ width: `${project.progress}%` }}
            />
          </div>
          <span className="text-sm">{project.progress}%</span>
        </div>
      ),
    },
    {
      key: "startDate",
      header: t("startDate"),
      render: (project) => formatDate(project.startDate),
    },
    {
      key: "actions",
      header: tCommon("actions"),
      render: () => (
        <div className="flex space-x-2">
          <Button size="sm" variant="ghost">
            {tCommon("edit")}
          </Button>
          <Button size="sm" variant="ghost">
            {tCommon("delete")}
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {t("title")}
            </h1>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            {t("addProject")}
          </Button>
        </div>

        {/* Projects Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{t("title")}</CardTitle>
              <SearchBar placeholder={tCommon("search")} className="w-64" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <DataTable data={mockProjects} columns={columns} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
