/**
 * Templates Page
 * Template management and usage tracking
 */

"use client";

import { useTranslations } from "next-intl";
import DashboardLayout from "@/components/templates/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/molecules/Card";
import DataTable, { Column } from "@/components/molecules/DataTable";
import SearchBar from "@/components/molecules/SearchBar";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import { mockTemplates } from "@/services/mockData";
import { Template } from "@/types";
import { formatDate } from "@/lib/utils/formatters";
import { Plus } from "lucide-react";

export default function TemplatesPage() {
  const t = useTranslations("templates");
  const tCommon = useTranslations("common");

  const columns: Column<Template>[] = [
    {
      key: "name",
      header: tCommon("name"),
    },
    {
      key: "category",
      header: t("category"),
      render: (template) => <Badge variant="primary">{template.category}</Badge>,
    },
    {
      key: "usageCount",
      header: t("usageCount"),
    },
    {
      key: "createdAt",
      header: tCommon("date"),
      render: (template) => formatDate(template.createdAt),
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
            {t("addTemplate")}
          </Button>
        </div>

        {/* Templates Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{t("title")}</CardTitle>
              <SearchBar placeholder={tCommon("search")} className="w-64" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <DataTable data={mockTemplates} columns={columns} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
