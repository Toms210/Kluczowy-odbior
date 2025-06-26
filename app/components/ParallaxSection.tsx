
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
      style={{
        transform: `translateY(${offsetY}px)`,
        backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="relative z-0 w-full overflow-hidden min-h-[300px]"
    >
      <div className="backdrop-brightness-90 w-full h-full">
        {children}
      </div>
    </div>
  );
}
