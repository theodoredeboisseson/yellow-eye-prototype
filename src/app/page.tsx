import { TrendingUp, Clock, BookOpen, Star, Users, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Home() {
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
          <span className="px-3 py-1 bg-primary text-black text-xs font-bold uppercase tracking-wider rounded-full w-fit mb-4">
            Exclusive Release
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            The Golden Iris
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl">
            In a world where secrets are currency, she possesses the only eyes that can see the truth. Discover the most anticipated webtoon of the year.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-primary hover:bg-primary-hover text-black font-bold rounded-full transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]">
              Read Chapter 1
            </button>
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm font-semibold rounded-full border border-white/20 transition-colors">
              Add to Library
            </button>
          </div>
        </div>
      </section>

      {/* Quick Nav / Filters */}
      <nav className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full whitespace-nowrap font-medium transition-transform shadow-md hover:-translate-y-1">
          <TrendingUp className="w-4 h-4 text-primary" /> Popular
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full whitespace-nowrap font-medium transition-colors hover:border-primary">
          <Clock className="w-4 h-4 text-gray-500" /> Recent
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full whitespace-nowrap font-medium transition-colors hover:border-primary">
          <Star className="w-4 h-4 text-gray-500" /> Premium
        </button>
      </nav>

      {/* Community Callout Section */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden">
        <div className="z-10 mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-yellow-900 mb-1 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" /> Join the Conversation
          </h2>
          <p className="text-sm text-yellow-800">
            Share theories, debate character arcs, and connect with other readers on our community hub.
          </p>
        </div>
        <Link href="/community" className="z-10 shrink-0 bg-white border border-yellow-300 hover:border-primary text-yellow-900 px-6 py-2.5 rounded-xl font-bold shadow-sm transition-colors flex items-center gap-2">
          <MessageSquare className="w-4 h-4" /> Go to Community Feed
        </Link>
      </section>

      {/* Trending Series */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            Must Read Series <BookOpen className="text-primary w-6 h-6" />
          </h2>
          <button className="text-sm font-semibold text-gray-500 hover:text-black transition-colors">
            View All Series
          </button>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
          {featuredSeries.map((series) => (
            <div key={series.id} className="group cursor-pointer">
              <div className="aspect-3/4 bg-gray-200 rounded-xl overflow-hidden mb-3 relative">
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-3">
                  <span className="text-white text-xs font-bold mb-2">98.5k Readers</span>
                  <button className="w-full py-1.5 bg-primary text-black text-sm font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all shadow-sm">
                    Read
                  </button>
                </div>
                {/* Placeholder gradient for covers since we don't have images */}
                <div className="w-full h-full bg-linear-to-br from-neutral-200 to-neutral-400 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors leading-tight">
                {series.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{series.author}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Promotion Block */}
      <section className="bg-neutral-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg relative overflow-hidden mt-8">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
        <div className="z-10 mb-6 md:mb-0 md:mr-8">
          <h2 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-2">
            Unlock <span className="text-primary">Premium</span> Content
          </h2>
          <p className="text-gray-400 max-w-md">
            Support creators directly, get early access chapters, and exclusive reading guild perks by unocking Premium.
          </p>
        </div>
        <div className="z-10 shrink-0">
          <button className="bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:scale-105 transition-transform flex items-center gap-2">
            <Star className="fill-current w-5 h-5" />
            Get Premium
          </button>
        </div>
      </section>
    </div>
  );
}
