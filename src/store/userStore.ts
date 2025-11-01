/**
 * Zustand store for user state management
 * Handles current user authentication and profile data
 */

import { create } from "zustand";
import type { User } from "@/types";

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    status: "active",
    createdAt: "2024-01-15T10:00:00Z",
  },
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
