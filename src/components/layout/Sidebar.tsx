"use client";

import { Home, Compass, Plus, Crown, Settings, BookOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  // Mobile: sidebar is hidden when closed, Desktop: always visible but maybe thin.
  // Actually, standard Discord design is just a permanent thin bar on the left.
  // We'll make it 72px wide, Discord style.

  const guilds = [
    { id: 1, name: "Fantasy Realm", initials: "FR", color: "bg-blue-500", image: null },
    { id: 2, name: "Romance Club", initials: "RC", color: "bg-pink-500", image: null },
    { id: 3, name: "Action Heroes", initials: "AH", color: "bg-red-500", image: null },
  ];

  return (
    <aside 
      className={`
        fixed inset-y-0 left-0 z-30 flex flex-col items-center py-3 w-[72px] 
        bg-[#e3e5e8] border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:flex
      `}
    >
      {/* Top action (Home/Main DB) */}
      <div className="w-full flex justify-center mb-2">
        <div className="group relative flex items-center justify-center">
          {/* Active indicator pill (Discord style) */}
          <div className="absolute left-0 w-1 bg-foreground rounded-r-full transition-all h-8 opacity-0 group-hover:opacity-100" />
          
          <Link href="/" className="w-12 h-12 rounded-[24px] hover:rounded-[16px] bg-white text-foreground flex items-center justify-center transition-all duration-200 shadow-sm group-hover:bg-primary group-hover:text-black">
            <Home className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <div className="w-8 h-[2px] bg-gray-300 rounded-full mx-auto mb-2" />

      {/* Guild Server List */}
      <div className="flex-1 w-full flex flex-col items-center gap-2 overflow-y-auto no-scrollbar py-2">
        {guilds.map((guild) => (
          <div key={guild.id} className="group relative flex items-center justify-center w-full">
            <div className="absolute left-0 w-1 bg-foreground rounded-r-full transition-all h-2 opacity-0 group-hover:opacity-100 group-hover:h-5 " />
            
            <button className={`w-12 h-12 rounded-[24px] hover:rounded-[16px] ${guild.color} text-white font-bold text-sm flex items-center justify-center transition-all duration-200 shadow-sm shadow-blue-500/20`}>
              {guild.initials}
            </button>
            <div className="absolute left-full ml-4 px-2 py-1 bg-black text-white text-xs font-bold rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none whitespace-nowrap z-50 origin-left">
              {guild.name}
              {/* Tooltip arrow */}
              <div className="absolute top-1/2 -left-1 -mt-1 w-2 h-2 bg-black rotate-45" />
            </div>
          </div>
        ))}

        <div className="group relative flex items-center justify-center w-full mt-1">
          <button className="w-12 h-12 rounded-[24px] hover:rounded-[16px] bg-white text-green-500 hover:bg-green-500 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm border border-dashed border-gray-300 hover:border-transparent">
            <Plus className="w-6 h-6" />
          </button>
          <div className="absolute left-full ml-4 px-2 py-1 bg-black text-white text-xs font-bold rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none whitespace-nowrap z-50 origin-left">
            Discover servers
          </div>
        </div>
      </div>

      {/* Bottom actions (Premium, Settings) */}
      <div className="w-full flex flex-col items-center gap-2 mt-auto pt-2">
        <div className="w-8 h-[2px] bg-gray-300 rounded-full mx-auto" />
        
        <div className="group relative flex items-center justify-center w-full mt-2">
          <button className="w-12 h-12 rounded-[24px] hover:rounded-[16px] bg-primary text-black flex items-center justify-center transition-all duration-200 shadow-md shadow-yellow-500/30 hover:scale-105">
            <Crown className="w-6 h-6 fill-current opacity-80" />
          </button>
          <div className="absolute left-full ml-4 px-2 py-1 bg-black text-white text-xs font-bold rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none whitespace-nowrap z-50 origin-left flex items-center gap-1">
             <span className="text-primary">✦</span> Premium
          </div>
        </div>

        <div className="group relative flex items-center justify-center w-full mb-2">
          <button className="w-12 h-12 rounded-[24px] hover:rounded-[16px] bg-transparent text-gray-500 hover:bg-gray-200 flex items-center justify-center transition-all duration-200">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </div>
    </aside>
  );
}
