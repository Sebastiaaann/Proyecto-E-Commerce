import React, { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { featuredFarmers } from '../services/mockData';
import { Farmer } from '../types';

interface FarmersSectionProps {
  onReadStory: (farmerName: string) => void;
}

interface FarmerSpotlightProps {
  farmer: Farmer;
  index: number;
  onReadStory: (name: string) => void;
  onNext: (index: number) => void;
}

const FarmerSpotlight: React.FC<FarmerSpotlightProps> = ({ farmer, index, onReadStory, onNext }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  // Colors based on existing theme (gray-900: #111827, muted: #6B7280, agro-green: #2F855A)
  const foregroundColor = "#111827"; 
  const mutedColor = "#6B7280";
  const whiteColor = "#FFFFFF";

  const handleCardClick = () => {
    onNext(index);
  };

  const handleStoryClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que se active el scroll al hacer clic en el botón específico
    onReadStory(farmer.name);
  };

  return (
    <div
      className={`group relative flex cursor-pointer flex-col items-center gap-8 md:gap-12 lg:gap-24 py-16 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      title="Haz clic para ir al siguiente productor"
    >
      {/* Text Block */}
      <div className={`relative z-10 flex w-full max-w-[320px] shrink-0 flex-col items-center text-center md:w-[340px] ${
        isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'
      } lg:w-[380px] lg:pt-4`}>
        
        {/* Label with animated line */}
        <div className={`mb-6 flex items-center gap-3 md:mb-8 md:gap-4 ${!isEven ? 'flex-row-reverse' : ''}`}>
          <div
            className="h-px bg-gray-900 transition-all duration-700"
            style={{
              width: isHovered ? 48 : 32,
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
          <span
            className="text-[10px] font-medium uppercase tracking-[0.25em] text-agro-green transition-all duration-700 md:text-xs"
            style={{
              letterSpacing: isHovered ? "0.3em" : "0.25em",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            Productor Local
          </span>
        </div>

        {/* Title */}
        <h2 className="relative">
          <span
            className="block text-4xl font-normal tracking-tight text-gray-900 transition-all duration-700 sm:text-5xl md:text-5xl lg:text-6xl"
            style={{
              transform: isHovered ? "translateY(-2px)" : "translateY(0)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {farmer.name}
          </span>
          <span
            className="block text-2xl font-light italic tracking-tight text-gray-500 mt-2 transition-all duration-700 sm:text-3xl md:text-3xl lg:text-4xl"
            style={{
              transform: isHovered ? (isEven ? "translateX(12px)" : "translateX(-12px)") : "translateX(0)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {farmer.mainCrop}
          </span>
        </h2>

        {/* Location Badge */}
        <div 
            className="mt-4 flex items-center text-sm text-gray-500 transition-all duration-700"
            style={{
                opacity: isHovered ? 1 : 0.7,
                transform: isHovered ? "translateY(-2px)" : "translateY(0)",
            }}
        >
            <MapPin className="w-4 h-4 mr-1 text-agro-green" />
            {farmer.location}
        </div>

        {/* Description */}
        <p
          className="mt-6 max-w-[280px] text-sm leading-relaxed transition-all duration-700 md:mt-8 md:max-w-[300px] md:text-base lg:mt-10 lg:max-w-[320px]"
          style={{
            color: isHovered ? mutedColor : "rgba(107, 114, 128, 0.6)",
            transform: isHovered ? "translateY(-4px)" : "translateY(0)",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {farmer.story.length > 100 ? `${farmer.story.substring(0, 100)}...` : farmer.story}
        </p>

        {/* Minimal CTA */}
        <div 
            className={`mt-6 flex items-center gap-4 md:mt-8 lg:mt-10 ${!isEven ? 'flex-row-reverse' : ''}`}
            onClick={handleStoryClick} // Solo este clic abre el modal
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 md:h-11 md:w-11 lg:h-12 lg:w-12 cursor-pointer hover:bg-gray-100"
            style={{
              borderColor: isHovered ? foregroundColor : "rgba(107, 114, 128, 0.3)",
              backgroundColor: isHovered ? foregroundColor : "transparent",
              color: isHovered ? whiteColor : foregroundColor,
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              boxShadow: isHovered ? "0 8px 32px rgba(17, 24, 39, 0.15)" : "0 0 0 transparent",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-500 md:h-4 md:w-4"
              style={{
                transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </div>
          <span
            className="text-[10px] font-medium uppercase tracking-widest transition-all duration-700 md:text-xs text-gray-900 cursor-pointer hover:underline"
            style={{
              opacity: isHovered ? 1 : 0.5,
              transform: isHovered ? "translateX(0)" : (isEven ? "translateX(-8px)" : "translateX(8px)"),
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: isHovered ? "100ms" : "0ms",
            }}
          >
            Ver Historia
          </span>
        </div>
      </div>

      {/* Image Block */}
      <div
        className="relative transition-all duration-700"
        style={{
          transform: isHovered ? "translateX(4px) translateY(-4px)" : "translateX(0) translateY(0)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Frame outline */}
        <div
          className="absolute -inset-3 border transition-all duration-700 md:-inset-4"
          style={{
            borderColor: isHovered ? "rgba(17, 24, 39, 0.15)" : "transparent",
            transform: isHovered ? "scale(1.01)" : "scale(1)",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        {/* Image container */}
        <div className="relative h-[280px] w-[260px] overflow-hidden sm:h-[320px] sm:w-[300px] md:h-[360px] md:w-[320px] lg:h-[420px] lg:w-[380px] shadow-2xl rounded-sm">
          <div
            className="absolute -inset-1 transition-all duration-700"
            style={{
              boxShadow: isHovered ? "0 24px 64px rgba(17, 24, 39, 0.2)" : "0 0 0 transparent",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
          <img
            src={farmer.imageUrl}
            alt={farmer.name}
            className="h-full w-full object-cover transition-all duration-1000 grayscale hover:grayscale-0"
            style={{
              transform: isHovered ? "scale(1.03)" : "scale(1.1)",
              filter: isHovered ? "grayscale(0%)" : "grayscale(30%)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-700"
            style={{
              opacity: isHovered ? 1 : 0,
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>

        {/* Index number */}
        <span
          className={`absolute -bottom-6 font-mono text-xs text-gray-400 transition-all duration-700 md:-bottom-8 md:text-sm ${
            isEven ? 'right-0' : 'left-0'
          }`}
          style={{
            opacity: isHovered ? 1 : 0.4,
            transform: isHovered ? "translateY(12px)" : "translateY(0)",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          0{index + 1}
        </span>
      </div>
    </div>
  );
};

export const FarmersSection: React.FC<FarmersSectionProps> = ({ onReadStory }) => {
  const handleNext = (currentIndex: number) => {
    const total = featuredFarmers.length;
    // Calcular siguiente índice (loop circular)
    const nextIndex = (currentIndex + 1) % total;
    const elementId = `farmer-spotlight-${nextIndex}`;
    const element = document.getElementById(elementId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="agricultores" className="py-24 bg-white scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="md:flex md:justify-between md:items-end mb-16 border-b border-gray-100 pb-8">
           <div>
             <h2 className="text-base text-agro-green font-semibold tracking-wide uppercase">Nuestros Aliados</h2>
             <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
               Conoce a quien cultiva tu comida
             </p>
           </div>
           <button onClick={() => alert("Cargando lista completa de agricultores...")} className="hidden md:block text-agro-green hover:text-agro-darkGreen font-semibold">
             Ver todos los agricultores &rarr;
           </button>
        </div>

        {/* Farmers Spotlight List */}
        <div className="flex flex-col gap-8">
          {featuredFarmers.map((farmer, index) => (
            <div 
                key={farmer.id} 
                id={`farmer-spotlight-${index}`} 
                className="border-b border-gray-100 last:border-0 scroll-mt-32"
            >
                <FarmerSpotlight 
                    farmer={farmer} 
                    index={index} 
                    onReadStory={onReadStory}
                    onNext={handleNext} 
                />
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button onClick={() => alert("Cargando lista completa de agricultores...")} className="text-agro-green hover:text-agro-darkGreen font-semibold">
             Ver todos los agricultores &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};