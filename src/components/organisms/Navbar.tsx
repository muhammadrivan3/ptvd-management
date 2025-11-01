/**
 * Navbar Organism Component
 * Top navigation bar with language switcher and user menu
 */

"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import UserMenu from "@/components/molecules/UserMenu";
import { useSidebarStore } from "@/store/sidebarStore";
import { cn } from "@/lib/utils/cn";
import { useState } from "react";

export default function Navbar() {
  const t = useTranslations("common");
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { isCollapsed } = useSidebarStore();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const currentLocale = pathname.split("/")[1];

  const switchLocale = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
    setShowLangMenu(false);
  };

  return (
    <header
      className={cn(
        "fixed right-0 top-0 z-30 h-16 border-b border-gray-200 bg-white transition-all duration-300 dark:border-gray-700 dark:bg-gray-900",
        isCollapsed ? "left-16" : "left-64"
      )}
    >
      <div className="flex h-full items-center justify-between px-6">
        {/* Page Title */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {/* Page title will be set by individual pages */}
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center space-x-2 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              title={t("language")}
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium uppercase">{currentLocale}</span>
            </button>

            {showLangMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowLangMenu(false)}
                />
                <div className="absolute right-0 z-20 mt-2 w-32 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                  <div className="p-2">
                    <button
                      onClick={() => switchLocale("en")}
                      className={cn(
                        "w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700",
                        currentLocale === "en" && "bg-blue-50 text-blue-600 dark:bg-blue-900/20"
                      )}
                    >
                      English
                    </button>
                    <button
                      onClick={() => switchLocale("id")}
                      className={cn(
                        "w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700",
                        currentLocale === "id" && "bg-blue-50 text-blue-600 dark:bg-blue-900/20"
                      )}
                    >
                      Indonesia
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            title={t("theme")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* User Menu */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
