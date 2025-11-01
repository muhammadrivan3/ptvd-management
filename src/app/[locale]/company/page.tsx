/**
 * Company Page
 * Company settings and information
 */

"use client";

import { useTranslations } from "next-intl";
import DashboardLayout from "@/components/templates/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/molecules/Card";
import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";
import { Building2, Globe, Shield, Bell } from "lucide-react";

export default function CompanyPage() {
  const t = useTranslations("company");
  const tCommon = useTranslations("common");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {t("title")}
          </h1>
        </div>

        {/* Settings Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Company Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Building2 className="h-5 w-5 text-blue-600" />
                <CardTitle>{t("companyInfo")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                label={t("companyName")}
                placeholder="Enter company name"
                defaultValue="Tech Corp Inc."
              />
              <FormField
                label={tCommon("email")}
                type="email"
                placeholder="company@example.com"
                defaultValue="contact@techcorp.com"
              />
              <FormField
                label={tCommon("phone")}
                type="tel"
                placeholder="+1-555-0000"
                defaultValue="+1-555-0101"
              />
              <FormField
                label={t("address")}
                placeholder="Enter address"
                defaultValue="123 Business St, City, State 12345"
              />
              <FormField
                label={t("website")}
                type="url"
                placeholder="https://example.com"
                defaultValue="https://techcorp.com"
              />
              <FormField
                label={t("taxId")}
                placeholder="Enter tax ID"
                defaultValue="12-3456789"
              />
              <Button>{tCommon("save")}</Button>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-green-600" />
                <CardTitle>{t("preferences")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {tCommon("language")}
                </label>
                <select className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800">
                  <option value="en">English</option>
                  <option value="id">Indonesia</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Currency</label>
                <select className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800">
                  <option value="USD">USD - US Dollar</option>
                  <option value="IDR">IDR - Indonesian Rupiah</option>
                  <option value="EUR">EUR - Euro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Timezone</label>
                <select className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800">
                  <option value="UTC">UTC</option>
                  <option value="America/New_York">Eastern Time</option>
                  <option value="Asia/Jakarta">Jakarta Time</option>
                </select>
              </div>
              <Button>{tCommon("save")}</Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-yellow-600" />
                <CardTitle>{t("notifications")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Email Notifications</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Project Updates</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">New Orders</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Client Messages</span>
                <input type="checkbox" className="h-4 w-4" />
              </div>
              <Button>{tCommon("save")}</Button>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-red-600" />
                <CardTitle>{t("security")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                label="Current Password"
                type="password"
                placeholder="Enter current password"
              />
              <FormField
                label="New Password"
                type="password"
                placeholder="Enter new password"
              />
              <FormField
                label="Confirm Password"
                type="password"
                placeholder="Confirm new password"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">Two-Factor Authentication</span>
                <input type="checkbox" className="h-4 w-4" />
              </div>
              <Button>{tCommon("save")}</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
