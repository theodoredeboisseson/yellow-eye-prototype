"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, Search, Bell, MessageSquare, Flame, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const notifications = [
    {
      id: 1,
      title: "Nouveau Chapitre !",
      message: "Solo Leveling : Chapitre 178 est maintenant disponible.",
      time: "Il y a 5 min",
      icon: Flame,
      iconClass: "text-orange-500 bg-orange-50",
      unread: true
    },
    {
      id: 2,
      title: "Réponse reçue",
      message: "LoreSeeker99 a répondu à votre théorie dans c/SoloLeveling.",
      time: "Il y a 1 heure",
      icon: MessageSquare,
      iconClass: "text-blue-500 bg-blue-50",
      unread: true
    },
    {
      id: 3,
      title: "Série Tendances",
      message: "Omniscient Reader vient d'intégrer le Top 3 cette semaine !",
      time: "Il y a 3 heures",
      icon: Sparkles,
      iconClass: "text-purple-500 bg-purple-50",
      unread: false
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-20 shadow-sm transition-colors duration-200">
      {/* Left section: Hamburger / Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-2 -ml-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
          aria-label="Toggle Sidebar"
        >
          <Menu className="size-5" />
        </button>

        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative size-10 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Yellow Eye Logo"
              fill
              className="object-contain rounded"
              priority
            />
          </div>
          <span className="font-bold text-lg hidden sm:block tracking-tight text-foreground">
            YellowEye
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
            placeholder="Rechercher des webtoons, créateurs, posts..."
          />
        </div>
      </div>

      {/* Right section: User profile & actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={`relative p-2 rounded-full transition-all duration-200 ${showNotifications ? "bg-primary/20 text-primary" : "text-gray-500 hover:bg-gray-100"}`}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in duration-200 origin-top-right">
              <div className="px-5 py-3 border-b border-gray-50 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">Notifications</h3>
                <button className="text-xs text-primary font-bold hover:underline py-1 px-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  Tout marquer comme lu
                </button>
              </div>
              <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                {notifications.map((notif) => {
                  const Icon = notif.icon;
                  return (
                    <div 
                      key={notif.id} 
                      className={`px-5 py-4 flex gap-4 hover:bg-gray-50 transition-colors cursor-pointer group relative ${notif.unread ? "bg-blue-50/30" : ""}`}
                    >
                      <div className={`size-10 rounded-xl flex items-center justify-center shrink-0 ${notif.iconClass}`}>
                        <Icon className="size-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className={`text-sm font-bold ${notif.unread ? "text-gray-900" : "text-gray-600"}`}>{notif.title}</p>
                          <span className="text-[10px] text-gray-400 font-medium">{notif.time}</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed leading-snug">
                          {notif.message}
                        </p>
                      </div>
                      {notif.unread && (
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-full" />
                      )}
                    </div>
                  )
                })}
              </div>
              <div className="px-5 py-3 border-t border-gray-50 text-center">
                <button className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors">
                  Voir toutes les notifications
                </button>
              </div>
            </div>
          )}
        </div>

        <Link href="/library" className="flex items-center gap-2 p-1 rounded-xl hover:bg-gray-100 transition-all duration-300 active:scale-95">
          <div className="w-9 h-9 rounded-xl overflow-hidden p-0.5 bg-linear-to-tr from-primary via-orange-400 to-yellow-300 shadow-md relative group/avatar">
            <div className="w-full h-full rounded-[10px] bg-white p-px overflow-hidden">
              <Image
                src="/profile.png"
                alt="User Avatar"
                fill
                sizes="36px"
                className="object-cover rounded-[9px]"
              />
            </div>
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity pointer-events-none" />
          </div>
        </Link>
      </div>
    </header>
  );
}
