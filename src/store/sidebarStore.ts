/**
 * Zustand store for sidebar state management
 * Handles sidebar collapse/expand state
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarState {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      isCollapsed: false,
      setIsCollapsed: (isCollapsed) => set({ isCollapsed }),
      toggleSidebar: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
    }),
    {
      name: "dashboard-sidebar",
    }
  )
);
