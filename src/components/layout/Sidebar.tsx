"use client";

import { Plus, Crown, Flame, BookOpen, ChevronDown, Hexagon, Users } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  // Styles inspired by modern feed apps (like Reddit) but cleaner/unique.
  // We use a wider sidebar with distinct sections.

  return (
    <aside 
      className={`
        fixed inset-y-0 left-0 z-30 flex flex-col w-64
        bg-[#fdfdfd] border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
    >
      <div className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
        
        {/* Main Navigation */}
        <div className="space-y-1 mb-8">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-yellow-50 text-yellow-900 font-semibold group">
            <BookOpen className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            Home Selection
          </Link>
          <Link href="/community" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors">
            <Users className="w-5 h-5 text-blue-500" />
            Community Feed
          </Link>
          <Link href="/popular" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors">
            <Flame className="w-5 h-5 text-orange-500" />
            Hot Debates
          </Link>
        </div>

        {/* Thematic Hubs (Genres) */}
        <div className="mb-8">
          <div className="px-3 mb-2 flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider">
            <span>Themes & Genres</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            {['Action & Shonen', 'Romance', 'Fantasy World', 'Sci-Fi & Cyberpunk', 'Thriller'].map((genre) => (
              <Link key={genre} href={`/t/${genre.toLowerCase().replace(/ /g, '-')}`} className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <Hexagon className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium">{genre}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Specific Series / Guilds */}
        <div className="mb-8">
          <div className="px-3 mb-2 flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider">
            <span>Series Communities</span>
            <Plus className="w-4 h-4 cursor-pointer hover:text-gray-800" />
          </div>
          <div className="space-y-1">
            {[
              { name: "The Golden Iris", icon: "👁️" }, 
              { name: "Midnight Espresso", icon: "☕" },
              { name: "Solo Leveling", icon: "🗡️" }
            ].map((series) => (
              <Link key={series.name} href={`/s/${series.name.toLowerCase().replace(/ /g, '-')}`} className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <span className="text-base">{series.icon}</span>
                <span className="text-sm font-medium">{series.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Upgrade Action */}
      <div className="p-4 border-t border-gray-200 bg-gray-50 mt-auto">
        <div className="bg-linear-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4 text-center">
          <Crown className="w-8 h-8 text-primary mx-auto mb-2" />
          <h4 className="font-bold text-gray-900 text-sm mb-1">Yellow Eye Premium</h4>
          <p className="text-xs text-gray-600 mb-3">Support creators & unlock exclusive discussions.</p>
          <button className="w-full bg-primary hover:bg-primary-hover text-black font-semibold text-sm py-2 rounded-lg transition-colors shadow-sm">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}
