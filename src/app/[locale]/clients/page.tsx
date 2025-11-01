/**
 * Clients Page
 * Client management and tracking
 */

"use client";

import { useTranslations } from "next-intl";
import DashboardLayout from "@/components/templates/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/molecules/Card";
import DataTable, { Column } from "@/components/molecules/DataTable";
import SearchBar from "@/components/molecules/SearchBar";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import { mockClients } from "@/services/mockData";
import { Client } from "@/types";
import { formatCurrency, formatNumber } from "@/lib/utils/formatters";
import { Plus } from "lucide-react";

export default function ClientsPage() {
  const t = useTranslations("clients");
  const tCommon = useTranslations("common");

  const columns: Column<Client>[] = [
    {
      key: "name",
      header: tCommon("name"),
    },
    {
      key: "company",
      header: t("company"),
    },
    {
      key: "email",
      header: tCommon("email"),
    },
    {
      key: "phone",
      header: tCommon("phone"),
    },
    {
      key: "totalProjects",
      header: t("totalProjects"),
      render: (client) => formatNumber(client.totalProjects),
    },
    {
      key: "totalRevenue",
      header: t("totalRevenue"),
      render: (client) => formatCurrency(client.totalRevenue),
    },
    {
      key: "status",
      header: tCommon("status"),
      render: (client) => (
        <Badge variant={client.status === "active" ? "success" : "default"}>
          {client.status}
        </Badge>
      ),
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
            {t("addClient")}
          </Button>
        </div>

        {/* Clients Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{t("title")}</CardTitle>
              <SearchBar placeholder={tCommon("search")} className="w-64" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <DataTable data={mockClients} columns={columns} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
