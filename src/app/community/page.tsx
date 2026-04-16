"use client";

import { TrendingUp, Clock, Image as ImageIcon, Link as LinkIcon, Flame } from "lucide-react";
import Button from "@/components/ui/Button";
import FeedPost from "@/components/ui/FeedPost";
import SeriesCard from "@/components/ui/SeriesCard";
import seriesData from "@/data/series.json";

export default function CommunityFeed() {
  const feedPosts = [
    {
      id: 1,
      community: "c/SoloLeveling",
      author: "LoreSeeker99",
      timeAgo: "Il y a 2 heures",
      title: "Théorie sur le Chapitre 45 : La véritable identité de l'Empereur (SPOILERS)",
      content: "Après avoir relu la scène du banquet au chapitre 12, j'ai remarqué que le reflet de l'Empereur dans les coupes ne correspond pas à son apparence actuelle...",
      upvotes: 1205,
      comments: 134,
      tag: "Théorie"
    },
    {
      id: 2,
      community: "c/Eleceed",
      author: "WebtoonCritique",
      timeAgo: "Il y a 5 heures",
      title: "Jiwoo vs Kayden : Qui gagnerait vraiment dans un combat sérieux ?",
      content: "On sait tous que Kayden est le plus fort, mais Jiwoo progresse à une vitesse folle. Dans les derniers chapitres...",
      upvotes: 854,
      comments: 312,
      tag: "Débat"
    },
    {
      id: 3,
      community: "c/WindBreaker",
      author: "CaffeineAddict",
      timeAgo: "Il y a 10 heures",
      title: "La saison 4 arrive enfin ! 🎉",
      content: "L'auteur vient de confirmer sur les réseaux sociaux que la suite des aventures de Jay et son équipe reprendra le mois prochain !",
      upvotes: 2400,
      comments: 89,
      tag: "News"
    }
  ];

  const trendingWebtoons = seriesData.slice(0, 4).map((series, index) => ({
    ...series,
    rank: index + 1
  }));

  return (
    <div className="flex flex-col lg:flex-row gap-6 pb-12">

      {/* Main Feed Column */}
      <div className="flex-1 space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-extrabold text-foreground mb-2">Hub Communautaire</h1>
          <p className="text-gray-500">Rejoignez la discussion, partagez vos théories et connectez-vous avec d&#39;autres lecteurs.</p>
        </div>

        {/* Create Post Input */}
        <div className="ye-card bg-white p-4 flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0" />
          <input
            type="text"
            placeholder="Lancez une nouvelle discussion ou une polémique..."
            className="ye-input flex-1"
          />
          <Button variant="ghost" size="icon">
            <ImageIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <LinkIcon className="w-5 h-5" />
          </Button>
        </div>

        {/* Feed Sorting */}
        <div className="ye-card bg-white p-2 flex items-center gap-2">
          <Button variant="primary" size="sm" className="gap-2 bg-yellow-50 text-yellow-900 border-none">
            <Flame className="w-4 h-4 text-orange-500" /> Populaire
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Clock className="w-4 h-4" /> Nouveau
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <TrendingUp className="w-4 h-4" /> Top
          </Button>
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {feedPosts.map((post) => (
            <FeedPost key={post.id} {...post} />
          ))}
        </div>
      </div>

      {/* Right Column / Sidebar for Community context */}
      <div className="w-full lg:w-80 space-y-6 pt-14">

        {/* Trending Webtoons */}
        <div className="ye-card bg-white p-5">
          <h3 className="font-bold text-gray-900 mb-4">Webtoons Tendances</h3>
          <div className="space-y-4">
            {trendingWebtoons.map((series) => (
              <SeriesCard key={series.id} {...series} isCompact />
            ))}
          </div>
          <Button variant="secondary" className="w-full mt-4 text-primary border-primary hover:bg-yellow-50">
            Voir toutes les séries
          </Button>
        </div>

      </div>
    </div>
  );
}
