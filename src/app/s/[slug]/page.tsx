"use client";

import { useState } from "react";
import Image from "next/image";
import { BookmarkPlus, MessageSquare, Heart, Share2 } from "lucide-react";
import Button from "@/components/ui/Button";
import StarRating from "@/components/ui/StarRating";

// This is a dynamic route page, for prototype purposes we use static mock data
export default function SeriesPage({ params }: { params: { slug: string } }) {
  const [userRating, setUserRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState("");

  const series = {
    title: "Solo Leveling",
    author: "Chugong",
    artist: "DUBU (REDICE STUDIO)",
    synopsis: "Dans un monde où des portails reliant notre monde à des donjons remplis de monstres sont apparus, des personnes ont acquis des pouvoirs pour les chasser : les Chasseurs. Sung Jinwoo est le plus faible des chasseurs de rang E. Après avoir frôlé la mort dans un double donjon caché, il se réveille avec un étrange écran devant lui, lui proposant des quêtes pour devenir plus fort. Il est devenu le seul chasseur capable de monter en niveau !",
    genres: ["Action", "Fantasy", "Shonen"],
    imageUrl: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    members: "1.2M",
  };

  const communityReviews = [
    {
      id: 1,
      user: "ShadowMonarch",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
      rating: 5,
      date: "Il y a 2 jours",
      content: "Un chef-d'œuvre absolu. L'évolution de Jinwoo est incroyablement satisfaisante à suivre et le style artistique de DUBU est tout simplement légendaire. RIP.",
      likes: 342,
    },
    {
      id: 2,
      user: "MangaReader99",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop",
      rating: 4.5,
      date: "Il y a 1 semaine",
      content: "Très bonne série d'action. L'histoire n'est pas la plus complexe qui soit, mais elle excelle dans ce qu'elle veut faire : de l'action pure et dure avec un côté 'badass' assumé.",
      likes: 128,
    },
    {
      id: 3,
      user: "Katarina_Loves",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
      rating: 3.5,
      date: "Il y a 3 semaines",
      content: "C'est sympa mais un peu répétitif vers la fin. Les personnages secondaires manquent cruellement de développement par rapport au héros.",
      likes: 56,
    }
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
        <div className="h-48 md:h-64 w-full relative">
          <div className="absolute inset-0 bg-neutral-900/40 z-10" />
          <Image src={series.imageUrl} alt={series.title} fill className="object-cover object-top blur-xl scale-110 opacity-60" />
        </div>
        
        <div className="px-6 md:px-10 pb-10 relative z-20 flex flex-col md:flex-row gap-8 -mt-20">
          {/* Cover */}
          <div className="w-40 md:w-56 shrink-0 rounded-xl overflow-hidden shadow-2xl aspect-3/4 relative ring-4 ring-white">
            <Image src={series.imageUrl} alt={series.title} fill className="object-cover" />
          </div>
          
          {/* Details */}
          <div className="flex-1 mt-20 md:mt-24">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                  {series.title}
                </h1>
                <p className="text-lg text-gray-500 mt-2 font-medium">Histoire par {series.author} • Dessins par {series.artist}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" className="gap-2">
                  <Share2 className="w-4 h-4" /> Partager
                </Button>
                <Button variant="primary" className="gap-2 shadow-sm">
                  <BookmarkPlus className="w-4 h-4" /> Ajouter
                </Button>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              {series.genres.map(genre => (
                <span key={genre} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold">
                  {genre}
                </span>
              ))}
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-4xl">
              {series.synopsis}
            </p>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Create Review */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm sticky top-24">
            <h3 className="font-bold text-lg text-gray-900 mb-4 border-b border-gray-100 pb-3">Mon Avis</h3>
            <div className="mb-6 flex flex-col items-center gap-2">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Ma note</span>
              <StarRating initialRating={userRating} onRate={setUserRating} size="lg" />
              {userRating > 0 && <span className="font-bold text-xl text-primary mt-1">{userRating}/5</span>}
            </div>
            <div className="space-y-4">
              <textarea 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none transition-all"
                rows={4}
                placeholder="Écrivez votre avis ici..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
              <Button variant="primary" className="w-full justify-center">Publier l'avis</Button>
            </div>
          </div>
        </div>

        {/* Right Column: Community Reviews */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              Avis de la communauté <MessageSquare className="w-5 h-5 text-gray-400" />
            </h2>
            <div className="text-sm text-gray-500">
              <span className="font-bold text-black">{series.rating}</span>/5 basé sur {series.members} notes
            </div>
          </div>
          
          <div className="space-y-4">
            {communityReviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img src={review.avatar} alt={review.user} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{review.user}</h4>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="bg-neutral-900 px-3 py-1 rounded-full flex items-center gap-1">
                    <StarRating initialRating={review.rating} readOnly size="sm" />
                    <span className="text-white text-xs font-bold ml-1">{review.rating}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  {review.content}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-4 text-gray-400 text-sm">
                  <button className="flex items-center gap-1 hover:text-red-500 transition-colors font-medium">
                    <Heart className="w-4 h-4" /> {review.likes}
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 transition-colors font-medium">
                    <MessageSquare className="w-4 h-4" /> Répondre
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
