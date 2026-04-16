"use client";

import Image from 'next/image';
import { Star } from 'lucide-react';

interface SeriesCardProps {
  id: number;
  title: string;
  slug: string;
  author: string;
  tag: string;
  imageUrl?: string;
  rank?: number;
  members?: string;
  isCompact?: boolean;
  userRating?: number;
}

import Link from 'next/link';

const SeriesCard = ({ title, author, tag, imageUrl, members, isCompact, userRating, slug }: SeriesCardProps) => {
  if (isCompact) {
    return (
      <Link href={`/s/${slug}`} className="flex items-center justify-between group cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-gray-200 relative overflow-hidden">
            {imageUrl && (
              <Image 
                src={imageUrl} 
                alt={title} 
                fill 
                sizes="32px"
                className="object-cover" 
              />
            )}
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{title}</h4>
            <p className="text-xs text-gray-500">{members} lecteurs</p>
          </div>
        </div>
        <button className="text-xs font-bold text-gray-400 hover:text-black transition-colors cursor-pointer">Rejoindre</button>
      </Link>
    );
  }

  return (
    <Link href={`/s/${slug}`} className="group cursor-pointer block">
      <div className="aspect-3/4 bg-gray-200 rounded-xl overflow-hidden mb-3 relative">
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-3">
          <span className="text-white text-xs font-bold mb-2">{members || "98.5k"} Lecteurs</span>
          <button className="w-full py-1.5 bg-primary text-black text-sm font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all shadow-sm cursor-pointer">
            Lire
          </button>
        </div>
        
        {/* Actual Image or Placeholder Gradient */}
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 17vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-neutral-200 to-neutral-400 group-hover:scale-105 transition-transform duration-500" />
        )}

        {/* Genre Tag Badge */}
        <div className="absolute top-2 right-2 z-20">
          <span className="px-2 py-0.5 rounded-md bg-yellow-900/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-wider shadow-sm border border-white/10">
            {tag}
          </span>
        </div>

        {/* User Rating Badge (Letterboxd style) */}
        {userRating !== undefined && (
          <div className="absolute bottom-2 right-2 z-20 flex items-center gap-1 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 text-primary">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold leading-none">{userRating}</span>
          </div>
        )}
      </div>
      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors leading-tight">
        {title}
      </h3>
      <div className="mt-1">
        <p className="text-xs text-gray-500 font-medium">{author}</p>
      </div>
    </Link>
  );
};

export default SeriesCard;
