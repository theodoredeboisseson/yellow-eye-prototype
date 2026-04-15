"use client";

import { Star, Library, Disc, History, BookmarkCheck } from "lucide-react";
import SeriesCard from "@/components/ui/SeriesCard";
import Button from "@/components/ui/Button";

export default function LibraryPage() {
  const librarySeries = [
    { id: 1, title: "The Sovereign's Ascent", author: "Studio YE", tag: "Fantasy", imageUrl: "https://images.unsplash.com/photo-1541512416146-3cf58d9b271b?q=80&w=400&auto=format&fit=crop", userRating: 5 },
    { id: 4, title: "Solo Leveling", author: "Chugong", tag: "Action", imageUrl: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=400&auto=format&fit=crop", userRating: 4.5 },
    { id: 5, title: "Omniscient Reader", author: "Sing Shong", tag: "Fantasy", imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", userRating: 4.5 },
  ];

  const toReadSeries = [
    { id: 2, title: "Midnight Espresso", author: "Luna P.", tag: "Romance", imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=400&auto=format&fit=crop" },
    { id: 6, title: "Tower of God", author: "SIU", tag: "Adventure", imageUrl: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=400&auto=format&fit=crop" },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg relative overflow-hidden">
        <div className="z-10 relative flex flex-col md:flex-row items-end justify-between">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-linear-to-tr from-primary to-orange-400 p-1">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full border-4 border-neutral-900" 
              />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-white flex items-center gap-2">
                Ma Bibliothèque
              </h1>
              <p className="text-gray-400 mt-1">3 Lues • 2 À lire</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <div className="text-center">
              <span className="block text-2xl font-bold text-primary">3</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Vérifiées</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-white">12</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Créateurs</span>
            </div>
          </div>
        </div>
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 pb-px">
        <Button variant="ghost" className="text-primary border-b-2 border-primary rounded-none px-4 py-2 font-bold hover:bg-transparent -mb-px">
          Séries Lues
        </Button>
        <Button variant="ghost" className="text-gray-500 hover:text-gray-900 rounded-none px-4 py-2 font-medium">
          À lire
        </Button>
        <Button variant="ghost" className="text-gray-500 hover:text-gray-900 rounded-none px-4 py-2 font-medium">
          Tags
        </Button>
      </div>

      {/* Grids */}
      <section>
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6">
          Dernières lectures évaluées <History className="text-gray-400 w-5 h-5" />
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
          {librarySeries.map((series) => (
            <SeriesCard key={series.id} {...series} />
          ))}
        </div>
      </section>

      <section className="pt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            Liste d'envies <BookmarkCheck className="text-gray-400 w-5 h-5" />
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
          {toReadSeries.map((series) => (
            <SeriesCard key={series.id} {...series} />
          ))}
        </div>
      </section>
    </div>
  );
}
