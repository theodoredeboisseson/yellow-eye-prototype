"use client";

import { useState } from "react";
import { Clock, Star, Users, MessageSquare, Flame } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SeriesCard from "@/components/ui/SeriesCard";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Populaire");

  const filters = [
    { name: "Populaire", icon: Flame },
    { name: "Récents", icon: Clock },
    { name: "Premium", icon: Star },
  ];

  const featuredSeries = [
    { id: 1, title: "The Sovereign's Ascent", author: "Studio YE", tag: "Fantasy" },
    { id: 2, title: "Midnight Espresso", author: "Luna P.", tag: "Romance" },
    { id: 3, title: "Cybernetic Drift", author: "NeoTokyo", tag: "Sci-Fi" },
    { id: 4, title: "Solo Leveling", author: "Chugong", tag: "Action" },
    { id: 5, title: "Omniscient Reader", author: "Sing Shong", tag: "Fantasy" },
    { id: 6, title: "Tower of God", author: "SIU", tag: "Adventure" },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner */}
      <section className="relative w-full h-100 md:h-125 rounded-2xl overflow-hidden shadow-lg group bg-neutral-900">
        <div className="absolute inset-0 bg-linear-to-r from-neutral-900 via-neutral-900/80 to-transparent z-10" />
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=2067&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12 w-full md:w-2/3">
          <span className="ye-tag ye-tag-primary w-fit mb-4">
            Exclusivités récentes
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            The Golden Iris
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl">
            Dans un monde où les secrets sont une monnaie d&#39;échange, elle possède les seuls yeux capables de voir la vérité. Découvrez le webtoon le plus attendu de l&#39;année.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" className="shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:scale-105">
              Lire le Chapitre 1
            </Button>
            <Button variant="ghost" size="lg" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20">
              Ajouter à la bibliothèque
            </Button>
          </div>
        </div>
      </section>

      {/* Community Callout Section */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden">
        <div className="z-10 mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-yellow-900 mb-1 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" /> Rejoignez le mouvement
          </h2>
          <p className="text-sm text-yellow-800">
            Partagez vos théories, débattez des arcs narratifs et connectez-vous avec d&#39;autres lecteurs sur notre hub communautaire.
          </p>
        </div>
        <Link href="/community" passHref>
          <Button variant="secondary" className="ml-8 z-10 border-yellow-300 hover:border-primary text-yellow-900">
            <MessageSquare className="w-4 h-4" /> Aller au Hub Communautaire
          </Button>
        </Link>
      </section>

      {/* Quick Nav / Filters - Simplified & Restored Yellow Icons */}
      <nav className="flex gap-4 pb-2 px-2">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.name;
            return (
              <Button
                key={filter.name}
                variant={isActive ? "dark" : "secondary"}
                isActive={isActive}
                onClick={() => setActiveFilter(filter.name)}
                className="gap-2 whitespace-nowrap transition-all duration-300 hover:-translate-y-3 hover:shadow-xl shadow-md"
              >
                <Icon 
                  className="w-4 h-4 text-primary" 
                  fill={isActive ? "#FFD700" : "none"} 
                  fillOpacity={0.3} 
                /> 
                {filter.name}
              </Button>
            );
          })}
        </nav>

      {/* Trending Series */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            Séries tendances <Flame className="text-primary w-6 h-6" />
          </h2>
          <Button variant="ghost" size="sm" className="font-semibold text-gray-500 hover:text-black">
            Voir toutes les séries
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
          {featuredSeries.map((series) => (
            <SeriesCard key={series.id} {...series} />
          ))}
        </div>
      </section>

      {/* Promotion Block */}
      <section className="bg-neutral-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg relative overflow-hidden mt-8">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
        <div className="z-10 mb-6 md:mb-0 md:mr-8">
          <h2 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-2">
            Débloquez le contenu <span className="text-primary">Premium</span>
          </h2>
          <p className="text-gray-400 max-w-md">
            Soutenez directement les créateurs, accédez aux chapitres en avant-première et bénéficiez d&#39;avantages exclusifs dans les guildes en devenant Premium.
          </p>
        </div>
        <div className="z-10 shrink-0">
          <Button variant="primary" size="lg" className="shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:scale-105 gap-2">
            <Star className="fill-current w-5 h-5" />
            Devenir Premium
          </Button>
        </div>
      </section>
    </div>
  );
}
