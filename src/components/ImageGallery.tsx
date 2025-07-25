
import React, { useState, useEffect } from 'react';

interface ImageGalleryProps {
  images: string[];
  interval?: number;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  interval = 5000,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== activeIndex}
        >
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay con tonos de verde */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-maskani-dark-green/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-maskani-dark-green/20 to-transparent mix-blend-overlay" />
        </div>
      ))}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {images.length > 1 && images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-maskani-light-green scale-110' : 'bg-white/50'
            } shadow-md`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View image ${index + 1}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
