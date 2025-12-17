import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// --- Data for the image accordion ---
const steps = [
  {
    id: 1,
    title: '1. Pides Online',
    description: 'Explora el catálogo y pide desde tu celular.',
    // Imagen de persona comprando/tecnología
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop', 
  },
  {
    id: 2,
    title: '2. Cosecha Fresca',
    description: 'El agricultor cosecha solo lo que pediste.',
    // Imagen de agricultura/cosecha
    imageUrl: 'https://images.unsplash.com/photo-1595855709915-3977535ec83d?q=80&w=2070&auto=format&fit=crop', 
  },
  {
    id: 3,
    title: '3. Logística Ágil',
    description: 'Ruta optimizada sin intermediarios.',
    // Imagen de transporte/cajas
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=2070&auto=format&fit=crop', 
  },
  {
    id: 4,
    title: '4. Recibes en 24h',
    description: 'Del campo a tu mesa al día siguiente.',
    // Imagen de comida/mesa
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop', 
  },
];

// --- Accordion Item Component ---
interface AccordionItemProps {
  item: typeof steps[0];
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
        ${isActive ? 'flex-[4]' : 'flex-[1]'}
        group
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
         <img
            src={item.imageUrl}
            alt={item.title}
            className={`
                w-full h-full object-cover transition-transform duration-1000
                ${isActive ? 'scale-100' : 'scale-110 group-hover:scale-105'}
            `}
        />
        {/* Overlays */}
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-50'}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full pointer-events-none">
         {/* Title & Description Container */}
        <div className={`
            transition-all duration-500 ease-out w-full
            ${isActive 
                ? 'translate-y-0 rotate-0' 
                : 'absolute bottom-12 left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap origin-center w-auto'
            }
        `}>
             <h3 className={`
                font-bold text-white tracking-tight leading-none
                ${isActive ? 'text-2xl md:text-3xl mb-3' : 'text-lg md:text-xl'}
             `}>
                {item.title}
             </h3>
             
             {/* Description only visible when active */}
             <div className={`
                overflow-hidden transition-all duration-500 ease-in-out
                ${isActive ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}
             `}>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-sm">
                    {item.description}
                </p>
             </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Section Component ---
export const HowItWorks: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="como-funciona" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-base text-agro-green font-bold tracking-wide uppercase mb-3">
              Proceso Simple
            </h2>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Cómo funciona <span className="text-agro-green">AgroConnect</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Eliminamos intermediarios innecesarios para asegurar que pagues lo justo y recibas lo mejor. Conectamos tecnología moderna con la tradición del campo.
            </p>
            
            <a
                href="#catalogo"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl hover:bg-agro-green hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 group"
            >
                Empezar a Comprar 
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-row gap-3 h-[400px] lg:h-[500px]">
              {steps.map((step, index) => (
                <AccordionItem
                  key={step.id}
                  item={step}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};