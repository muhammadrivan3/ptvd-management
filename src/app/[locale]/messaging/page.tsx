/**
 * Messaging Page
 * Internal messaging and notification center
 */

"use client";

import { useTranslations } from "next-intl";
import DashboardLayout from "@/components/templates/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/molecules/Card";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import { mockMessages } from "@/services/mockData";
import { formatDate } from "@/lib/utils/formatters";
import { Plus, Inbox, Send, FileText } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export default function MessagingPage() {
  const t = useTranslations("messaging");
  const tCommon = useTranslations("common");

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
            {t("newMessage")}
          </Button>
        </div>

        {/* Messaging Layout */}
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Sidebar */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>{t("inbox")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <button
                className={cn(
                  "flex w-full items-center space-x-3 rounded-lg px-3 py-2",
                  "bg-blue-50 text-blue-600 dark:bg-blue-900/20"
                )}
              >
                <Inbox className="h-5 w-5" />
                <span className="text-sm font-medium">{t("inbox")}</span>
                <Badge variant="primary" className="ml-auto">
                  2
                </Badge>
              </button>
              <button
                className={cn(
                  "flex w-full items-center space-x-3 rounded-lg px-3 py-2",
                  "hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <Send className="h-5 w-5" />
                <span className="text-sm font-medium">{t("sent")}</span>
              </button>
              <button
                className={cn(
                  "flex w-full items-center space-x-3 rounded-lg px-3 py-2",
                  "hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <FileText className="h-5 w-5" />
                <span className="text-sm font-medium">{t("drafts")}</span>
              </button>
            </CardContent>
          </Card>

          {/* Messages List */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>{t("inbox")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockMessages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "rounded-lg border p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800",
                    !message.isRead && "border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-900/10"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{message.subject}</h3>
                        {!message.isRead && (
                          <Badge variant="primary" className="text-xs">
                            {t("unread")}
                          </Badge>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {message.content}
                      </p>
                      <p className="mt-2 text-xs text-gray-500">
                        {formatDate(message.createdAt)}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost">
                        {t("reply")}
                      </Button>
                      <Button size="sm" variant="ghost">
                        {tCommon("delete")}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {mockMessages.length === 0 && (
                <div className="py-12 text-center text-gray-500">
                  {tCommon("noData")}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
