"use client";

import { TrendingUp, Clock, Image as ImageIcon, Link as LinkIcon, Flame } from "lucide-react";
import Button from "@/components/ui/Button";
import FeedPost from "@/components/ui/FeedPost";
import SeriesCard from "@/components/ui/SeriesCard";

export default function CommunityFeed() {
  const feedPosts = [
    {
      id: 1,
      community: "c/TheGoldenIris",
      author: "LoreSeeker99",
      timeAgo: "Il y a 2 heures",
      title: "Théorie sur le Chapitre 45 : La véritable identité de l'Empereur (SPOILERS)",
      content: "Après avoir relu la scène du banquet au chapitre 12, j'ai remarqué que le reflet de l'Empereur dans les coupes ne correspond pas à son apparence actuelle. Si on regarde de près la couleur des yeux...",
      upvotes: 1205,
      comments: 134,
      tag: "Théorie"
    },
    {
      id: 2,
      community: "c/ActionShonen",
      author: "WebtoonCritique",
      timeAgo: "Il y a 5 heures",
      title: "Les webtoons d'action modernes s'appuient-ils trop sur les interfaces de système ?",
      content: "On a l'impression que chaque nouvelle sortie cette semaine présente un protagoniste se réveillant devant un écran holographique bleu. Bien que Solo Leveling l'ait fait parfaitement, n'est-ce pas devenu répétitif ?",
      upvotes: 854,
      comments: 312,
      tag: "Débat"
    },
    {
      id: 3,
      community: "c/MidnightEspresso",
      author: "CaffeineAddict",
      timeAgo: "Il y a 10 heures",
      title: "L'auteur confirme que la Saison 2 est en production ! 🎉",
      content: "Luna P. vient de poster sur sa chaîne officielle que les storyboards de la Saison 2 sont déjà terminés et que nous pouvons attendre une première le mois prochain !",
      upvotes: 2400,
      comments: 89,
      tag: "News"
    }
  ];

  const trendingWebtoons = [
    { id: 1, title: "The Golden Iris", rank: 1, members: "125k", author: "Studio YE", tag: "Fantaisie" },
    { id: 2, title: "Cybernetic Drift", rank: 2, members: "89k", author: "NeoTokyo", tag: "Sci-Fi" },
    { id: 3, title: "Midnight Espresso", rank: 3, members: "71k", author: "Luna P.", tag: "Romance" },
    { id: 4, title: "A Mage's Final Stand", rank: 4, members: "64k", author: "Inconnu", tag: "Fantaisie" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 pb-12">

      {/* Main Feed Column */}
      <div className="flex-1 space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-extrabold text-foreground mb-2">Hub Communautaire</h1>
          <p className="text-gray-500">Rejoignez la discussion, partagez vos théories et connectez-vous avec d'autres lecteurs.</p>
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
