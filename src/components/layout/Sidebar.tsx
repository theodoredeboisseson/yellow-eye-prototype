"use client";

import { useState } from "react";
import { Plus, Crown, Library, BookOpen, ChevronDown, Users, Zap, Heart, Sparkles, Cpu, Ghost, Eye, Coffee, Sword } from "lucide-react";
import { usePathname } from "next/navigation";
import SidebarItem from "@/components/ui/SidebarItem";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();
  const [isGenresExpanded, setIsGenresExpanded] = useState(true);
  const [isSeriesExpanded, setIsSeriesExpanded] = useState(true);

  const navLinks = [
    { href: "/", label: "Lecture", icon: BookOpen, color: "#FFD700", textClass: "text-primary" },
    { href: "/community", label: "Communauté", icon: Users, color: "#3b82f6", textClass: "text-blue-500" },
    { href: "/library", label: "Bibliothèque", icon: Library, color: "#10b981", textClass: "text-emerald-500" },
  ];

  const genres = [
    { name: 'Action & Shonen', icon: Zap, color: 'text-orange-500' },
    { name: 'Romance', icon: Heart, color: 'text-pink-500' },
    { name: 'Fantasy World', icon: Sparkles, color: 'text-purple-500' },
    { name: 'Sci-Fi & Cyberpunk', icon: Cpu, color: 'text-cyan-500' },
    { name: 'Thriller', icon: Ghost, color: 'text-foreground' },
  ];

  const series = [
    { name: "The Golden Iris", icon: Eye, color: "text-amber-500" },
    { name: "Midnight Espresso", icon: Coffee, color: "text-amber-900" },
    { name: "Solo Leveling", icon: Sword, color: "text-blue-600" }
  ];

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

        {/* Simplified Main Navigation */}
        <div className="space-y-1 mb-8">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? "ye-active" 
                    : "text-gray-700 hover:bg-gray-100 font-medium"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${link.textClass}`}
                  fill={isActive ? link.color : "none"}
                  fillOpacity={0.3}
                />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Thematic Hubs (Genres) */}
        <div className="mb-6">
          <button 
            onClick={() => setIsGenresExpanded(!isGenresExpanded)}
            className="w-full px-3 mb-2 flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider hover:text-gray-600 transition-colors group/toggle"
          >
            <span>Thèmes & Genres</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isGenresExpanded ? "rotate-0" : "-rotate-90"}`} />
          </button>
          <div className={`space-y-1 overflow-hidden transition-all duration-300 ${isGenresExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
            {genres.map((genre) => (
              <SidebarItem
                key={genre.name}
                href={"/community"}
                label={genre.name}
                icon={genre.icon}
                iconClassName={genre.color}
                variant="sub"
              />
            ))}
          </div>
        </div>

        {/* Specific Series / Guilds */}
        <div className="mb-8">
          <button 
            onClick={() => setIsSeriesExpanded(!isSeriesExpanded)}
            className="w-full px-3 mb-2 flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider hover:text-gray-600 transition-colors"
          >
            <span>Communautés par Séries</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSeriesExpanded ? "rotate-0" : "-rotate-90"}`} />
          </button>
          <div className={`space-y-1 overflow-hidden transition-all duration-300 ${isSeriesExpanded ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}>
            {series.map((item) => (
              <SidebarItem
                key={item.name}
                href={"/community"}
                label={item.name}
                icon={item.icon}
                iconClassName={item.color}
                variant="sub"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Upgrade Action */}
      <div className="p-4 border-t border-gray-200 bg-gray-50 mt-auto">
        <div className="bg-linear-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4 text-center">
          <Crown className="w-8 h-8 text-primary mx-auto mb-2" />
          <h4 className="font-bold text-gray-900 text-sm mb-1">YellowEye Premium</h4>
          <p className="text-xs text-gray-600 mb-3">Soutenez les créateurs & débloquez des discussions exclusives.</p>
          <button className="w-full bg-primary hover:bg-primary-hover text-black font-semibold text-sm py-2 rounded-lg transition-colors shadow-sm">
            S&#39;abonner maintenant
          </button>
        </div>
      </div>
    </aside>
  );
}
