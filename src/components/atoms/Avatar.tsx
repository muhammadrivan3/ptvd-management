/**
 * Avatar Atom Component
 * User avatar component with fallback initials
 */

import { HTMLAttributes } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
};

export default function Avatar({
  src,
  alt,
  fallback,
  size = "md",
  className,
  ...props
}: AvatarProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {src ? (
        <Image 
          src={src} 
          alt={alt || "Avatar"} 
          fill
          className="object-cover"
        />
      ) : (
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {fallback || "?"}
        </span>
      )}
    </div>
  );
}
