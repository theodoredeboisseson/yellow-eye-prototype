"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
  activeFillColor?: string; // Hex color for fill
  iconClassName?: string; // Tailwind class for icon stroke
  variant?: 'main' | 'sub';
}

export default function SidebarItem({
  href,
  label,
  icon: Icon,
  isActive = false,
  activeFillColor,
  iconClassName = "",
  variant = 'main'
}: SidebarItemProps) {

  const isMain = variant === 'main';

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${isActive
          ? "ye-active"
          : "text-gray-700 hover:bg-gray-100 font-medium"
        } ${!isMain && !isActive ? "text-gray-600 hover:text-gray-900" : ""}`}
    >
      <Icon
        className={`${isMain ? "size-5" : "size-4"} ${iconClassName} ${!isMain && !isActive ? "opacity-70 group-hover:opacity-100 transition-opacity" : ""
          }`}
        fill={isActive && activeFillColor ? activeFillColor : "none"}
        fillOpacity={0.3}
      />
      <span className={`${isMain ? "text-base" : "text-sm"} font-medium`}>
        {label}
      </span>
    </Link>
  );
}
