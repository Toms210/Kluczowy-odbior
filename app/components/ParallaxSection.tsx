
'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ParallaxSectionProps {
  backgroundUrl?: string;
  height?: string;
  children?: ReactNode;
}

export default function ParallaxSection({ backgroundUrl, height = '60vh', children }: ParallaxSectionProps) {
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
      className="relative z-0 w-full overflow-hidden"
      style={{
        height,
        backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : undefined,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        transform: `translateY(${offsetY}px)`
      }}
    >
      <div className="w-full h-full flex items-center justify-center bg-black/40 text-white text-3xl font-semibold">
        {children}
      </div>
    </div>
  );
}
