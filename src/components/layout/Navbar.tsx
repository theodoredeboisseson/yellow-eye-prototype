"use client";

import { Menu, Search, Bell } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-20 shadow-sm transition-colors duration-200">
      {/* Left section: Hamburger / Logo */}
      <div className="flex items-center gap-3">
        <button 
          onClick={toggleSidebar}
          className="p-2 -ml-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold shadow-sm transition-transform group-hover:scale-105">
            YE
          </div>
          <span className="font-bold text-lg hidden sm:block tracking-tight text-foreground">
            Yellow Eye
          </span>
        </Link>
      </div>

      {/* Middle section: Search */}
      <div className="flex-1 max-w-md mx-4">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 sm:text-sm"
            placeholder="Rechercher des webtoons, créateurs..."
          />
        </div>
      </div>

      {/* Right section: User profile & actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors hidden sm:block">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>
        
        <button className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition-colors">
          <div className="w-8 h-8 rounded-full bg-linear-to-tr from-primary to-orange-400 overflow-hidden border-2 border-transparent">
            {/* Fallback avatar if no image */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
              U
            </div>
          </div>
        </button>
      </div>
    </header>
  );
}
