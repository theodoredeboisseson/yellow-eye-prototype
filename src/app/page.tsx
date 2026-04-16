"use client";

import { Clock, Star, Users, MessageSquare, Flame } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SeriesCard from "@/components/ui/SeriesCard";
import seriesData from "@/data/series.json";

export default function Home() {
  const categories = [
    { name: "Populaire", icon: Flame },
    { name: "Nouveau", icon: Clock },
    { name: "Premium", icon: Star },
  ];

  const featuredSeries = seriesData;

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner */}
      <section className="relative w-full h-100 md:h-125 rounded-2xl overflow-hidden shadow-lg group bg-neutral-900">
        <div className="absolute inset-0 bg-linear-to-r from-neutral-900 via-neutral-900/80 to-transparent z-10" />
        <div className="absolute inset-0 opacity-40 bg-[url('https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx119257-Pi21aq3ey9GG.jpg')] bg-cover bg-center" />

        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12 w-full md:w-2/3">
          <span className="ye-tag ye-tag-primary w-fit mb-4">
            Exclusivités récentes
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Omniscient Reader
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl">
            &#34;Ce roman est devenu la réalité.&#34; Dokja était un employé de bureau ordinaire dont le seul loisir était la lecture de son web novel préféré. Mais le monde devient soudainement celui de l&#39;histoire...
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

      {/* Catégories de séries (Grilles multiples au lieu de filtres) */}
      <div className="space-y-12">
        {categories.map((category, index) => {
          const Icon = category.icon;
          // Variation factice de l'ordre pour la démo
          const displaySeries = index === 1 ? [...featuredSeries].reverse() : index === 2 ? featuredSeries.slice(0, 4) : featuredSeries;

          return (
            <section key={category.name}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  {category.name} <Icon className="text-primary w-6 h-6" />
                </h2>
                <Button variant="ghost" size="sm" className="font-semibold text-gray-500 hover:text-black">
                  Voir tout
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
                {displaySeries.map((series) => (
                  <SeriesCard key={`${category.name}-${series.id}`} {...series} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

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
          <Link href="/premium">
            <Button variant="primary" size="lg" className="shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:scale-105 gap-2">
              <Star className="fill-current w-5 h-5" />
              Devenir Premium
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
