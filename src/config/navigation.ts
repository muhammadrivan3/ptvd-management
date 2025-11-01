/**
 * Navigation configuration for the application
 * Defines all routes and their associated icons for the sidebar
 */

export interface NavItem {
  key: string;
  href: string;
  icon: string;
}

export const navigationItems: NavItem[] = [
  {
    key: "dashboard",
    href: "/dashboard",
    icon: "LayoutDashboard",
  },
  {
    key: "users",
    href: "/users",
    icon: "Users",
  },
  {
    key: "analytics",
    href: "/analytics",
    icon: "BarChart3",
  },
  {
    key: "projects",
    href: "/projects",
    icon: "FolderKanban",
  },
  {
    key: "templates",
    href: "/templates",
    icon: "FileText",
  },
  {
    key: "services",
    href: "/services",
    icon: "Briefcase",
  },
  {
    key: "company",
    href: "/company",
    icon: "Building2",
  },
  {
    key: "clients",
    href: "/clients",
    icon: "UserCheck",
  },
  {
    key: "orders",
    href: "/orders",
    icon: "ShoppingCart",
  },
  {
    key: "messaging",
    href: "/messaging",
    icon: "MessageSquare",
  },
];
