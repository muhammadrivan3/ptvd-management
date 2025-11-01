/**
 * Sidebar Organism Component
 * Main navigation sidebar with collapsible functionality
 */

"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  FolderKanban,
  FileText,
  Briefcase,
  Building2,
  UserCheck,
  ShoppingCart,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { navigationItems } from "@/config/navigation";
import { useSidebarStore } from "@/store/sidebarStore";
import { cn } from "@/lib/utils/cn";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  Users,
  BarChart3,
  FolderKanban,
  FileText,
  Briefcase,
  Building2,
  UserCheck,
  ShoppingCart,
  MessageSquare,
};

export default function Sidebar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar } = useSidebarStore();

  // Extract locale from pathname
  const locale = pathname.split("/")[1];

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen border-r border-gray-200 bg-white transition-all duration-300 dark:border-gray-700 dark:bg-gray-900",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo Section */}
      <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-700">
        {!isCollapsed && (
          <h1 className="text-xl font-bold text-blue-600">Dashboard</h1>
        )}
        <button
          onClick={toggleSidebar}
          className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="space-y-1 p-4">
        {navigationItems.map((item) => {
          const Icon = iconMap[item.icon];
          const href = `/${locale}${item.href}`;
          const isActive = pathname === href;

          return (
            <Link
              key={item.key}
              href={href}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              )}
              title={isCollapsed ? t(item.key as never) : undefined}
            >
              {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
              {!isCollapsed && (
                <span className="text-sm font-medium">{t(item.key as never)}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
