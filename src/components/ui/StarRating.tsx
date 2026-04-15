"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  initialRating?: number;
  readOnly?: boolean;
  onRate?: (rating: number) => void;
  size?: "sm" | "md" | "lg";
}

export default function StarRating({ initialRating = 0, readOnly = false, onRate, size = "md" }: StarRatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  const currentSize = sizeClasses[size];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (readOnly) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const isHalf = e.clientX - rect.left < rect.width / 2;
    setHoverRating(index + (isHalf ? 0.5 : 1));
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverRating(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (readOnly) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const isHalf = e.clientX - rect.left < rect.width / 2;
    const newRating = index + (isHalf ? 0.5 : 1);
    setRating(newRating);
    if (onRate) onRate(newRating);
  };

  return (
    <div className="flex items-center gap-1" onMouseLeave={handleMouseLeave}>
      {[...Array(5)].map((_, index) => {
        const currentVal = hoverRating > 0 ? hoverRating : rating;
        const fillPercentage = Math.min(Math.max((currentVal - index) * 100, 0), 100);

        return (
          <div
            key={index}
            className={`relative ${currentSize} ${!readOnly && "cursor-pointer transition-transform hover:scale-110"}`}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onClick={(e) => handleClick(e, index)}
          >
            {/* Étoile de fond (vide) */}
            <div className={`absolute top-0 left-0 ${currentSize}`}>
              <Star className="w-full h-full text-gray-300 stroke-1" fill="none" />
            </div>
            
            {/* Étoile de premier plan (remplie), coupée selon le pourcentage */}
            <div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <div className={`${currentSize}`}>
                <Star className="w-full h-full text-primary stroke-1" fill="currentColor" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
