'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ParallaxSectionProps {
  backgroundUrl?: string;
  children: ReactNode;
}

export default function ParallaxSection({ children, backgroundUrl }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollTop = window.scrollY;
        setOffsetY(scrollTop * 0.3);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="relative z-0 w-full overflow-hidden min-h-[300px]"
    >
      <div
        style={{
          transform: `translateY(${offsetY}px)`,
          backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full h-full transition-transform duration-300 ease-out"
      >
        <div className="w-full h-full backdrop-brightness-90 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
