"use client";

import { CheckCircle2, Crown, Star, ShieldCheck, Zap, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function PremiumPage() {
  const benefits = [
    {
      title: "Accès Anticipé",
      description: "Lisez vos chapitres préférés 24h avant tout le monde.",
      icon: Clock,
    },
    {
      title: "Lecture Sans Pub",
      description: "Une immersion totale dans vos histoires sans aucune interruption.",
      icon: ShieldCheck,
    },
    {
      title: "Badges Exclusifs",
      description: "Affichez votre statut premium sur votre profil et dans les commentaires.",
      icon: Crown,
    },
    {
      title: "Support Direct",
      description: "Une plus grande part de votre abonnement va directement aux artistes.",
      icon: Heart,
    },
    {
      title: "Guilde Premium",
      description: "Rejoignez des salons de discussion réservés aux membres.",
      icon: MessageSquare,
    },
    {
      title: "Vitesse Boostée",
      description: "Serveurs haute performance pour un chargement instantané des pages.",
      icon: Zap,
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-100 text-yellow-900 font-bold text-xs mb-4">
          <Star className="w-3.5 h-3.5 fill-current" /> Offre Limitée : 1 mois offert
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          L&#39;expérience <span className="px-2 bg-linear-to-r from-primary to-orange-400 bg-clip-text text-transparent italic">Ultimate</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
          Rejoignez la guilde d&#39;élite et débloquez tout le potentiel de vos webtoons.
        </p>
      </section>

      {/* Compact Benefits List */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto px-6 mb-12">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              className="ye-card bg-white p-4 flex items-center gap-3 hover:border-primary/50 transition-all"
            >
              <div className="size-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                <Icon className="size-5 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 leading-tight">{benefit.title}</h3>
            </div>
          );
        })}
      </div>

      {/* Pricing Cards */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Monthly Plan */}
          <div className="ye-card bg-white p-6 border-2 border-transparent hover:border-gray-200 transition-all flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Mensuel</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-3xl font-extrabold">4.99€</span>
              <span className="text-gray-500 text-sm">/mois</span>
            </div>
            <ul className="space-y-2 mb-6 flex-1">
              <li className="flex items-center gap-2 text-xs text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Accès total catalogue
              </li>
              <li className="flex items-center gap-2 text-xs text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Sans publicités
              </li>
            </ul>
            <Button variant="secondary" className="w-full justify-center h-10 text-sm">
              Choisir le mensuel
            </Button>
          </div>

          {/* Yearly Plan - Featured */}
          <div className="ye-card bg-neutral-900 p-6 relative overflow-hidden ring-4 ring-primary/30 shadow-2xl flex flex-col">
            <div className="absolute top-0 right-0 bg-primary text-black font-bold text-[8px] uppercase tracking-widest px-3 py-1 rounded-bl-lg">
              Populaire
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Annuel</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-3xl font-extrabold text-white">49.99€</span>
              <span className="text-gray-400 text-sm">/an</span>
            </div>
            <p className="text-primary text-[10px] font-bold mb-4">2 mois gratuits !</p>
            <ul className="space-y-2 mb-6 flex-1">
              <li className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Tous les avantages
              </li>
              <li className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Badge "Fondateur"
              </li>
            </ul>
            <Button variant="primary" className="w-full justify-center h-10 text-sm shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              Devenir Premium
            </Button>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <div className="text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors text-sm font-medium">
          Retour à l&#39;accueil <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

// Missing imports in the block above, fixing them
import { Clock, Heart } from "lucide-react";
