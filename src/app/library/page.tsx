"use client";

import { History, BookmarkCheck } from "lucide-react";
import Image from "next/image";
import SeriesCard from "@/components/ui/SeriesCard";
import Button from "@/components/ui/Button";
import seriesData from "@/data/series.json";

export default function LibraryPage() {
  const librarySeries = seriesData
    .filter((s) => [1, 4, 5].includes(s.id))
    .map((s) => ({
      ...s,
      userRating: s.id === 1 ? 5 : 4.5,
    }));

  const toReadSeries = seriesData.filter((s) => [2, 6].includes(s.id));

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg relative overflow-hidden">
        <div className="z-10 relative flex flex-col md:flex-row items-end justify-between">
          <div className="flex items-center gap-6">
            <div className="relative group/profile">
              <div className="w-28 h-28 rounded-3xl bg-linear-to-tr from-primary via-orange-400 to-yellow-300 p-1 shadow-2xl transition-transform duration-500 group-hover/profile:scale-105 group-hover/profile:rotate-1">
                <div className="w-full h-full rounded-[20px] bg-neutral-900 p-1 overflow-hidden relative">
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    fill
                    sizes="112px"
                    className="object-cover rounded-[18px]"
                    priority
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[18px]" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full border-4 border-neutral-900 flex items-center justify-center shadow-lg">
                <div className="w-2 h-2 bg-neutral-900 rounded-full animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-white flex items-center gap-2">
                Larry
              </h1>
              <p className="text-gray-400 mt-1">Ma bibliothèque</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <div className="text-center">
              <span className="block text-2xl font-bold text-primary">{librarySeries.length}</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Évaluations</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-white">{toReadSeries.length}</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">À lire</span>
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
