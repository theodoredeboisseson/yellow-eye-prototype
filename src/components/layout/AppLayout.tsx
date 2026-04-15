"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar - fixed on desktop, toggleable on mobile */}
      <Sidebar isOpen={sidebarOpen} />
      
      {/* Main Content Area */}
      <div 
        className={`flex flex-col flex-1 min-w-0 transition-all duration-300 ease-in-out md:ml-[72px]`}
      >
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto bg-gray-50">
          {/* Mobile Overlay for when sidebar is open */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-20 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          
          <div className="mx-auto max-w-7xl w-full p-4 md:p-6 lg:p-8 animate-in fade-in duration-500">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
