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
      timeAgo: "2 hours ago",
      title: "Theory on Chapter 45: The Emperor's real identity (SPOILERS)",
      content: "After re-reading the banquet scene in chapter 12, I noticed the Emperor's reflection in the goblets doesn't match his current guise. If you look closely at the eye color...",
      upvotes: 1205,
      comments: 134,
      tag: "Theory"
    },
    {
      id: 2,
      community: "c/ActionShonen",
      author: "WebtoonCritique",
      timeAgo: "5 hours ago",
      title: "Are modern action webtoons relying too heavily on systemic UI panels?",
      content: "It feels like every new release this week features a protagonist waking up to a blue holographic screen. While Solo Leveling did it perfectly, isn't it getting repetitive?",
      upvotes: 854,
      comments: 312,
      tag: "Debate"
    },
    {
      id: 3,
      community: "c/MidnightEspresso",
      author: "CaffeineAddict",
      timeAgo: "10 hours ago",
      title: "Author confirmed Season 2 is in production! 🎉",
      content: "Luna P. just posted on her official channel that storyboards for Season 2 are already done and we can expect a premiere next month!",
      upvotes: 2400,
      comments: 89,
      tag: "News"
    }
  ];

  const trendingWebtoons = [
    { id: 1, title: "The Golden Iris", rank: 1, members: "125k", author: "Studio YE", tag: "Fantasy" },
    { id: 2, title: "Cybernetic Drift", rank: 2, members: "89k", author: "NeoTokyo", tag: "Sci-Fi" },
    { id: 3, title: "Midnight Espresso", rank: 3, members: "71k", author: "Luna P.", tag: "Romance" },
    { id: 4, title: "A Mage's Final Stand", rank: 4, members: "64k", author: "Unknown", tag: "Fantasy" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 pb-12">

      {/* Main Feed Column */}
      <div className="flex-1 space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-extrabold text-foreground mb-2">Community Hub</h1>
          <p className="text-gray-500">Join the discussion, share theories, and connect with other readers.</p>
        </div>

        {/* Create Post Input */}
        <div className="ye-card bg-white p-4 flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0" />
          <input
            type="text"
            placeholder="Start a new discussion or controversy..."
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
            <Flame className="w-4 h-4 text-orange-500" /> Hot
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Clock className="w-4 h-4" /> New
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
          <h3 className="font-bold text-gray-900 mb-4">Trending Webtoons</h3>
          <div className="space-y-4">
            {trendingWebtoons.map((series) => (
              <SeriesCard key={series.id} {...series} isCompact />
            ))}
          </div>
          <Button variant="secondary" className="w-full mt-4 text-primary border-primary hover:bg-yellow-50">
            View All Series
          </Button>
        </div>

      </div>
    </div>
  );
}
