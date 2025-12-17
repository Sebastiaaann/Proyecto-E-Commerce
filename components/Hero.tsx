import React, { useState } from 'react';
import { ArrowUpRight, Truck, ShieldCheck, Clock, Sprout } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Colores del tema (hardcoded para coincidir con tailwind config)
  const colors = {
    foreground: "#111827", // gray-900
    muted: "#6B7280",      // gray-500
    background: "#F0FFF4", // agro-light
    green: "#2F855A",      // agro-green
    white: "#FFFFFF"
  };

  return (
    <div className="relative overflow-hidden bg-agro-light min-h-[90vh] flex flex-col justify-center">
      
      {/* Main Interaction Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 z-10">
        <div
          className="group relative flex cursor-pointer flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left: Text Block */}
          <div className="relative z-10 flex w-full flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2">
            
            {/* Label with animated line */}
            <div className="mb-6 flex items-center gap-3 md:mb-8 md:gap-4">
              <div
                className="h-1 bg-agro-green transition-all duration-700 rounded-full"
                style={{
                  width: isHovered ? 64 : 32,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.25em] text-agro-green transition-all duration-700 md:text-sm"
                style={{
                  letterSpacing: isHovered ? "0.3em" : "0.25em",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                Marketplace Agrícola
              </span>
            </div>

            {/* Title - responsive text sizes */}
            <h1 className="relative font-extrabold text-gray-900">
              <span
                className="block text-5xl tracking-tight transition-all duration-700 sm:text-6xl md:text-7xl lg:text-8xl"
                style={{
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                Del Campo
              </span>
              <span
                className="block text-5xl tracking-tight text-gray-900 transition-all duration-700 sm:text-6xl md:text-7xl lg:text-8xl mt-2 lg:mt-4"
                style={{
                  transform: isHovered ? "translateX(16px)" : "translateX(0)",
                  color: isHovered ? colors.green : colors.foreground,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                A Tu Mesa
              </span>
            </h1>

            {/* Description - responsive spacing */}
            <p
              className="mt-8 max-w-lg text-lg leading-relaxed transition-all duration-700 md:mt-10 md:text-xl font-light"
              style={{
                color: isHovered ? colors.foreground : colors.muted,
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              Conectamos directamente a agricultores locales contigo en <span className="font-bold">24 horas</span>. Sin intermediarios, precios justos y trazabilidad completa.
            </p>

            {/* Minimal CTA - responsive spacing */}
            <div className="mt-10 flex items-center gap-6">
              <a href="#catalogo" className="group/btn flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-500"
                    style={{
                      borderColor: isHovered ? colors.green : "rgba(47, 133, 90, 0.3)",
                      backgroundColor: isHovered ? colors.green : "transparent",
                      color: isHovered ? colors.white : colors.green,
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                      boxShadow: isHovered ? "0 8px 32px rgba(47, 133, 90, 0.25)" : "0 0 0 transparent",
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <ArrowUpRight
                      className="h-6 w-6 transition-transform duration-500"
                      style={{
                        transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                      <span
                        className="text-sm font-bold uppercase tracking-widest transition-all duration-700 text-gray-900"
                        style={{
                          transform: isHovered ? "translateX(4px)" : "translateX(0)",
                          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        Comprar Ahora
                      </span>
                      <span className="text-xs text-gray-500">Ver catálogo fresco</span>
                  </div>
              </a>
            </div>
          </div>

          {/* Right: Image Block */}
          <div
            className="relative transition-all duration-700 mt-12 lg:mt-0 w-full lg:w-1/2 flex justify-center lg:justify-end"
            style={{
              transform: isHovered ? "translateX(8px) translateY(-8px)" : "translateX(0) translateY(0)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Frame outline */}
            <div
              className="absolute -inset-4 border-2 transition-all duration-700 rounded-3xl"
              style={{
                borderColor: isHovered ? "rgba(47, 133, 90, 0.2)" : "transparent",
                transform: isHovered ? "scale(1.02)" : "scale(1)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />

            {/* Image container - responsive sizing */}
            <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-2xl sm:h-[500px] lg:h-[600px] lg:w-[550px] shadow-2xl">
              <div
                className="absolute -inset-1 transition-all duration-700"
                style={{
                  boxShadow: isHovered ? "0 24px 64px rgba(47, 133, 90, 0.2)" : "0 0 0 transparent",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
                alt="Vegetales frescos del campo"
                className="h-full w-full object-cover transition-all duration-1000"
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />

              {/* Overlay Gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-700"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
              
              {/* Floating Badge inside image */}
               <div 
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg transition-all duration-700"
                style={{
                    transform: isHovered ? "translateY(0)" : "translateY(-10px)",
                    opacity: isHovered ? 1 : 0.8
                }}
               >
                   <Sprout className="w-5 h-5 text-agro-green" />
                   <span className="font-bold text-gray-800 text-sm">100% Orgánico</span>
               </div>

              {/* Corner accents */}
              <div
                className="absolute left-4 top-4 h-8 w-1 bg-white/90 transition-all duration-500 rounded-full"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "top",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "50ms",
                }}
              />
              <div
                className="absolute left-4 top-4 h-1 w-8 bg-white/90 transition-all duration-500 rounded-full"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "100ms",
                }}
              />
              <div
                className="absolute bottom-4 right-4 h-8 w-1 bg-white/90 transition-all duration-500 rounded-full"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "bottom",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "150ms",
                }}
              />
              <div
                className="absolute bottom-4 right-4 h-1 w-8 bg-white/90 transition-all duration-500 rounded-full"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "right",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "200ms",
                }}
              />
            </div>

            {/* Index number */}
            <span
              className="absolute -bottom-12 right-0 font-mono text-4xl font-bold text-gray-200 transition-all duration-700 hidden lg:block"
              style={{
                opacity: isHovered ? 1 : 0.4,
                transform: isHovered ? "translateY(0)" : "translateY(-20px)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              01
            </span>
          </div>
        </div>
      </div>
      
      {/* Value Props Strip (Preserved from original) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-12 relative z-20 pb-12">
         <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center space-x-4">
               <div className="bg-orange-100 p-3 rounded-full">
                 <Truck className="h-6 w-6 text-agro-orange" />
               </div>
               <div>
                 <h3 className="font-bold text-gray-800">Logística Propia</h3>
                 <p className="text-sm text-gray-500">Reparto optimizado urbano.</p>
               </div>
            </div>
            <div className="flex items-center space-x-4">
               <div className="bg-green-100 p-3 rounded-full">
                 <ShieldCheck className="h-6 w-6 text-agro-green" />
               </div>
               <div>
                 <h3 className="font-bold text-gray-800">Garantía de Origen</h3>
                 <p className="text-sm text-gray-500">Conoce al agricultor.</p>
               </div>
            </div>
             <div className="flex items-center space-x-4">
               <div className="bg-blue-100 p-3 rounded-full">
                 <Clock className="h-6 w-6 text-blue-600" />
               </div>
               <div>
                 <h3 className="font-bold text-gray-800">Frescura Extrema</h3>
                 <p className="text-sm text-gray-500">Cosechado horas antes.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};