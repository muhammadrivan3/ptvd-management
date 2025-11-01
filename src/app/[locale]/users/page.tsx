/**
 * Users Page
 * User management with table view
 */

"use client";

import { useTranslations } from "next-intl";
import DashboardLayout from "@/components/templates/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/molecules/Card";
import DataTable, { Column } from "@/components/molecules/DataTable";
import SearchBar from "@/components/molecules/SearchBar";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import { mockUsers } from "@/services/mockData";
import { User } from "@/types";
import { formatDate } from "@/lib/utils/formatters";
import { Plus } from "lucide-react";

export default function UsersPage() {
  const t = useTranslations("users");
  const tCommon = useTranslations("common");

  const columns: Column<User>[] = [
    {
      key: "name",
      header: tCommon("name"),
    },
    {
      key: "email",
      header: tCommon("email"),
    },
    {
      key: "role",
      header: t("role"),
      render: (user) => (
        <Badge variant="primary">
          {t(user.role as never)}
        </Badge>
      ),
    },
    {
      key: "status",
      header: tCommon("status"),
      render: (user) => (
        <Badge variant={user.status === "active" ? "success" : "default"}>
          {t(user.status as never)}
        </Badge>
      ),
    },
    {
      key: "createdAt",
      header: t("createdAt"),
      render: (user) => formatDate(user.createdAt),
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
            {t("addUser")}
          </Button>
        </div>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{t("title")}</CardTitle>
              <SearchBar placeholder={tCommon("search")} className="w-64" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <DataTable data={mockUsers} columns={columns} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
