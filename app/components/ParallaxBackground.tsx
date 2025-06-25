
'use client';

import { useEffect, useRef, useState } from 'react';

export default function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollTop = window.scrollY;
        setOffsetY(scrollTop * 0.3); // Adjust speed of parallax
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      style={{ transform: `translateY(${offsetY}px)` }}
      className="relative z-0 w-full overflow-hidden"
    >
      {children}
    </div>
  );
}
