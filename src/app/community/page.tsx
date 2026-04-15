import { TrendingUp, MessageSquare, ArrowBigUp, Clock, FileText, Image as ImageIcon, Link as LinkIcon, MoreHorizontal, Flame } from "lucide-react";
import Link from "next/link";

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
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex gap-3 shadow-sm items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
          <input 
            type="text" 
            placeholder="Start a new discussion or controversy..." 
            className="flex-1 bg-gray-50 border border-gray-200 hover:border-gray-300 transition-colors rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white"
          />
          <button className="p-2.5 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
            <ImageIcon className="w-5 h-5" />
          </button>
          <button className="p-2.5 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
            <LinkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Feed Sorting */}
        <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-xl p-2 shadow-sm">
          <button className="flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-900 rounded-lg font-bold transition-colors">
            <Flame className="w-4 h-4 text-orange-500" /> Hot
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
            <Clock className="w-4 h-4" /> New
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
            <TrendingUp className="w-4 h-4" /> Top
          </button>
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {feedPosts.map((post) => (
            <article key={post.id} className="bg-white border border-gray-200 rounded-xl flex overflow-hidden shadow-sm hover:border-gray-300 transition-colors cursor-pointer group">
              {/* Vote Column */}
              <div className="w-12 bg-gray-50 flex flex-col items-center py-3 gap-1 border-r border-gray-100 shrink-0">
                <button className="p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-primary transition-colors">
                  <ArrowBigUp className="w-6 h-6" />
                </button>
                <span className="text-sm font-bold text-gray-700">{post.upvotes}</span>
                <button className="p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-blue-500 transition-colors rotate-180">
                  <ArrowBigUp className="w-6 h-6" />
                </button>
              </div>

              {/* Content Column */}
              <div className="p-4 flex-1">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <Link href={`/${post.community}`} className="font-bold text-gray-900 hover:underline">{post.community}</Link>
                  <span>•</span>
                  <span>Posted by <span className="hover:underline hover:text-gray-900">u/{post.author}</span></span>
                  <span>{post.timeAgo}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  <span className="inline-block mr-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 rounded">
                    {post.tag}
                  </span>
                  {post.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.content}
                </p>

                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
                  <button className="flex items-center gap-1.5 hover:bg-gray-100 px-2 py-1.5 rounded transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    {post.comments} Comments
                  </button>
                  <button className="flex items-center gap-1.5 hover:bg-gray-100 px-2 py-1.5 rounded transition-colors">
                    <TrendingUp className="w-4 h-4" />
                    Share
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded ml-auto transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Right Column / Sidebar for Community context */}
      <div className="w-full lg:w-80 space-y-6 pt-14">
        
        {/* Trending Webtoons */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">Trending Webtoons</h3>
          <div className="space-y-4">
            {[
              { title: "The Golden Iris", rank: 1, members: "125k" },
              { title: "Cybernetic Drift", rank: 2, members: "89k" },
              { title: "Midnight Espresso", rank: 3, members: "71k" },
              { title: "A Mage's Final Stand", rank: 4, members: "64k" },
            ].map((item) => (
              <div key={item.rank} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-400 w-4">{item.rank}</span>
                  <div className="w-8 h-8 rounded bg-gray-200" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.members} readers</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-gray-400 hover:text-black transition-colors">Join</button>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-50 font-bold rounded-lg text-sm transition-colors">
            View All Series
          </button>
        </div>

      </div>
    </div>
  );
}
