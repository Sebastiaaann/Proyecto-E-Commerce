import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Sprout } from "lucide-react";

interface FarmerCallToActionProps {
  onJoin: () => void;
}

export const FarmerCallToAction: React.FC<FarmerCallToActionProps> = ({ onJoin }) => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Rentable", "Justo", "Directo", "Digital", "Sustentable"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-white py-20 lg:py-32 relative overflow-hidden border-t border-gray-100">
      {/* Background decoration elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-agro-light rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex gap-8 items-center justify-center flex-col">
          
          {/* Badge */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-agro-light border border-green-100 rounded-full text-agro-green text-sm font-semibold shadow-sm mb-4">
              <Sprout className="w-4 h-4" />
              <span>Únete a la revolución digital del campo</span>
            </div>
          </div>

          {/* Animated Heading - Estructura Original */}
          <div className="flex gap-4 flex-col items-center">
             <h2 className="text-center font-bold text-gray-900 max-w-4xl">
                <span className="block text-lg md:text-xl text-gray-500 font-medium mb-4 uppercase tracking-wider">
                    ¿Eres Productor Agrícola?
                </span>
                
                <span className="text-5xl md:text-7xl tracking-tighter block text-gray-900 mb-2">
                    Haz tu negocio más
                </span>

                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 text-5xl md:text-7xl font-bold text-agro-green tracking-tighter">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
             </h2>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-500 max-w-2xl text-center mt-6">
              Te damos las herramientas para vender directo al consumidor, 
              optimizar tus cultivos con datos y mejorar tu rentabilidad. 
              <span className="hidden md:inline"> Olvida los intermediarios y toma el control de tu cosecha.</span>
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button 
                onClick={() => alert("Nuestros agrónomos están disponibles de Lunes a Viernes.")}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:border-agro-green hover:text-agro-green hover:bg-green-50 transition-all duration-300"
            >
              Agendar Asesoría <PhoneCall className="w-4 h-4" />
            </button>
            <button 
                onClick={onJoin}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-agro-orange text-white font-bold shadow-lg shadow-orange-100 hover:bg-orange-600 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Crear Cuenta Productor <MoveRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}