/**
 * Orders Page
 * Order management and tracking
 */

"use client";

import { useTranslations } from "next-intl";
import DashboardLayout from "@/components/templates/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/molecules/Card";
import DataTable, { Column } from "@/components/molecules/DataTable";
import SearchBar from "@/components/molecules/SearchBar";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import { mockOrders } from "@/services/mockData";
import { Order } from "@/types";
import { formatCurrency, formatDate } from "@/lib/utils/formatters";
import { Plus } from "lucide-react";

export default function OrdersPage() {
  const t = useTranslations("orders");
  const tCommon = useTranslations("common");

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "success";
      case "processing":
        return "primary";
      case "pending":
        return "warning";
      case "cancelled":
        return "danger";
      default:
        return "default";
    }
  };

  const columns: Column<Order>[] = [
    {
      key: "orderNumber",
      header: t("orderNumber"),
    },
    {
      key: "amount",
      header: t("amount"),
      render: (order) => formatCurrency(order.amount),
    },
    {
      key: "status",
      header: tCommon("status"),
      render: (order) => (
        <Badge variant={getStatusVariant(order.status)}>
          {t(order.status as never)}
        </Badge>
      ),
    },
    {
      key: "createdAt",
      header: t("createdAt"),
      render: (order) => formatDate(order.createdAt),
    },
    {
      key: "updatedAt",
      header: t("updatedAt"),
      render: (order) => formatDate(order.updatedAt),
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
            {t("addOrder")}
          </Button>
        </div>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{t("title")}</CardTitle>
              <SearchBar placeholder={tCommon("search")} className="w-64" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <DataTable data={mockOrders} columns={columns} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
