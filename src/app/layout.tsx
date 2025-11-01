import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Management Dashboard",
  description: "Enterprise management system for projects, clients, and analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
