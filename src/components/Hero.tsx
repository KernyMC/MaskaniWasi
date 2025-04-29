
import React from 'react';
import ImageGallery from './ImageGallery';
import NewsletterButton from './NewsletterButton';

const Hero: React.FC = () => {
  // Forest-themed images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1920&q=80', // lake and trees
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80', // mountains
    'https://images.unsplash.com/photo-1515729729-b2a8a0a7da85?auto=format&fit=crop&w=1920&q=80', // forest path
    'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80' // river and mountains
  ];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <ImageGallery images={backgroundImages} />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/87169b26-c633-4fee-9737-0a924060190a.png"
              alt="Maskani Wasi Logo"
              className="h-24 w-24 md:h-32 md:w-32"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-wide mb-4 text-shadow-lg">
            MASKANI WASI
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl font-display italic mb-8 text-maskani-cream text-shadow-lg">
            Sembrando hoy un futuro sostenible
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-xl">
              Un proyecto amazónico que integra la protección del bosque y la riqueza cultural de la región. 
              A través de iniciativas sostenibles, busca responder a los desafíos socioambientales de este territorio, 
              promoviendo la conservación y el desarrollo comunitario en armonía con la naturaleza.
            </p>
          </div>
          
          <div className="mt-8">
            <NewsletterButton variant="primary" className="text-lg py-3 px-8 bg-emerald-500 hover:bg-emerald-600 transition-colors shadow-lg" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex flex-col items-center text-white" 
          aria-label="Scroll to about section"
        >
          <span className="text-sm mb-1 font-medium text-shadow-sm">Conocer más</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            className="filter drop-shadow"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
