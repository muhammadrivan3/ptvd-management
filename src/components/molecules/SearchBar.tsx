/**
 * SearchBar Molecule Component
 * Search input with icon
 */

"use client";

import { InputHTMLAttributes } from "react";
import { Search } from "lucide-react";
import Input from "@/components/atoms/Input";
import { cn } from "@/lib/utils/cn";

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

export default function SearchBar({
  className,
  onSearch,
  ...props
}: SearchBarProps) {
  return (
    <div className={cn("relative", className)}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <Input
        className="pl-10"
        onChange={(e) => onSearch?.(e.target.value)}
        {...props}
      />
    </div>
  );
}
