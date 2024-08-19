// src/hooks/useParallaxScroll.tsx
"use client";

import { useEffect, useRef, useState } from 'react';

export const useParallaxScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const newIndex = Math.min(Math.floor(scrollTop / viewportHeight), parallaxRefs.current.length - 1);
      
      setCurrentIndex(newIndex);

      parallaxRefs.current.forEach((ref, index) => {
        if (ref) {
          ref.style.transform = `translateY(${scrollTop * 0.5}px)`;
          ref.classList.toggle('hidden', index !== newIndex);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return parallaxRefs;
};
