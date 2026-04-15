"use client";

import React from 'react';

interface SeriesCardProps {
  id: number;
  title: string;
  author: string;
  tag: string;
  rank?: number;
  members?: string;
  isCompact?: boolean;
}

const SeriesCard = ({ title, author, tag, members, isCompact }: SeriesCardProps) => {
  if (isCompact) {
    return (
      <div className="flex items-center justify-between group cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-gray-200" />
          <div>
            <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{title}</h4>
            <p className="text-xs text-gray-500">{members} readers</p>
          </div>
        </div>
        <button className="text-xs font-bold text-gray-400 hover:text-black transition-colors">Join</button>
      </div>
    );
  }

  return (
    <div className="group cursor-pointer">
      <div className="aspect-3/4 bg-gray-200 rounded-xl overflow-hidden mb-3 relative">
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-3">
          <span className="text-white text-xs font-bold mb-2">{members || "98.5k"} Readers</span>
          <button className="w-full py-1.5 bg-primary text-black text-sm font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all shadow-sm">
            Read
          </button>
        </div>
        {/* Placeholder gradient for covers since we don't have images */}
        <div className="w-full h-full bg-linear-to-br from-neutral-200 to-neutral-400 group-hover:scale-105 transition-transform duration-500" />
      </div>
      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors leading-tight">
        {title}
      </h3>
      <p className="text-xs text-gray-500 mt-1">{author}</p>
    </div>
  );
};

export default SeriesCard;
