"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowBigUp, MessageSquare, TrendingUp, MoreHorizontal } from 'lucide-react';
import Button from './Button';

interface FeedPostProps {
  id: number;
  community: string;
  author: string;
  timeAgo: string;
  title: string;
  content: string;
  upvotes: number;
  comments: number;
  tag: string;
}

const FeedPost = ({ community, author, timeAgo, title, content, upvotes, comments, tag }: FeedPostProps) => {
  return (
    <article className="ye-card flex h-full">
      {/* Vote Column */}
      <div className="w-12 bg-gray-50 flex flex-col items-center py-3 gap-1 border-r border-gray-100 shrink-0">
        <button className="p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-primary transition-colors">
          <ArrowBigUp className="w-6 h-6" />
        </button>
        <span className="text-sm font-bold text-gray-700">{upvotes}</span>
        <button className="p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-blue-500 transition-colors rotate-180">
          <ArrowBigUp className="w-6 h-6" />
        </button>
      </div>

      {/* Content Column */}
      <div className="p-4 flex-1">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <Link href={`/${community}`} className="font-bold text-gray-900 hover:underline">{community}</Link>
          <span>•</span>
          <span>Posté par <span className="hover:underline hover:text-gray-900">u/{author}</span></span>
          <span>{timeAgo}</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          <span className="ye-tag mr-2">{tag}</span>
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {content}
        </p>

        <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
          <Button variant="ghost" size="sm" className="gap-1.5 px-2 py-1.5">
            <MessageSquare className="w-4 h-4" />
            {comments} Commentaires
          </Button>
          <Button variant="ghost" size="sm" className="gap-1.5 px-2 py-1.5">
            <TrendingUp className="w-4 h-4" />
            Partager
          </Button>
          <Button variant="ghost" size="icon" className="ml-auto p-1.5">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default FeedPost;
