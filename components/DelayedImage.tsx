'use client';

import { useState, useEffect } from 'react';

interface DelayedImageProps {
  src: string;
  alt: string;
  delay?: number;
  width?: number;
  height?: number;
}

export function DelayedImage({ src, alt, delay = 2000, width = 800, height = 400 }: DelayedImageProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!loaded) {
    return (
      <div 
        className="image-placeholder loading-shimmer"
        style={{ width: '100%', height: `${height}px`, background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)', backgroundSize: '200% 100%' }}
      />
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      style={{ width: '100%', height: 'auto' }}
    />
  );
}
