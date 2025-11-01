/**
 * DashboardLayout Template Component
 * Main layout wrapper for dashboard pages
 * Combines Sidebar and Navbar with content area
 */

"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/organisms/Sidebar";
import Navbar from "@/components/organisms/Navbar";
import { useSidebarStore } from "@/store/sidebarStore";
import { cn } from "@/lib/utils/cn";

export interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { isCollapsed } = useSidebarStore();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <Navbar />
      <main
        className={cn(
          "pt-16 transition-all duration-300",
          isCollapsed ? "ml-16" : "ml-64"
        )}
      >
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
