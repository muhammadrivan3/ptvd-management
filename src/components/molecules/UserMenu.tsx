/**
 * UserMenu Molecule Component
 * User profile dropdown menu
 */

"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { LogOut, Settings, User } from "lucide-react";
import Avatar from "@/components/atoms/Avatar";
import { useUserStore } from "@/store/userStore";
import { cn } from "@/lib/utils/cn";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("common");
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  if (!user) return null;

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <Avatar fallback={initials} size="sm" />
        <div className="hidden text-left md:block">
          <p className="text-sm font-medium">{user.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{user.role}</p>
        </div>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 z-20 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="p-2">
              <button
                className={cn(
                  "flex w-full items-center space-x-2 rounded-lg px-3 py-2 text-sm",
                  "hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
              >
                <User className="h-4 w-4" />
                <span>{t("profile")}</span>
              </button>
              <button
                className={cn(
                  "flex w-full items-center space-x-2 rounded-lg px-3 py-2 text-sm",
                  "hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
              >
                <Settings className="h-4 w-4" />
                <span>{t("settings")}</span>
              </button>
              <hr className="my-2 border-gray-200 dark:border-gray-700" />
              <button
                onClick={logout}
                className={cn(
                  "flex w-full items-center space-x-2 rounded-lg px-3 py-2 text-sm text-red-600",
                  "hover:bg-red-50 dark:hover:bg-red-900/20"
                )}
              >
                <LogOut className="h-4 w-4" />
                <span>{t("logout")}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
