import React from 'react';
import { Server, Database, Brain, Network, Cpu, Layers } from 'lucide-react';
import { aiFeatures } from '../services/mockData';

export const TechnicalSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-agro-orange font-semibold tracking-wide uppercase">Innovación Tecnológica</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Potenciado por Microservicios e IA
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Nuestra plataforma utiliza tecnología de punta para asegurar escalabilidad y personalización.
          </p>
        </div>

        {/* Architecture Diagram Visualization */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-16 border border-gray-100">
           <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
             <Layers className="h-6 w-6 mr-2 text-agro-green" />
             Arquitectura Headless (AWS)
           </h3>
           <div className="relative flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center">
               
               {/* Step 1 */}
               <div className="bg-white p-6 rounded-2xl shadow-sm w-full md:w-1/4 relative z-10">
                   <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                       <Network className="h-6 w-6 text-blue-600" />
                   </div>
                   <h4 className="font-bold">1. Cliente Web</h4>
                   <p className="text-sm text-gray-500 mt-2">React SPA + CDN. Carga ultrarrápida para el usuario.</p>
               </div>

               {/* Connector */}
               <div className="hidden md:block absolute top-1/2 w-full h-1 bg-gray-200 -z-0"></div>

               {/* Step 2 */}
               <div className="bg-white p-6 rounded-2xl shadow-sm w-full md:w-1/4 relative z-10">
                   <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                       <Server className="h-6 w-6 text-purple-600" />
                   </div>
                   <h4 className="font-bold">2. API Gateway</h4>
                   <p className="text-sm text-gray-500 mt-2">Enrutamiento seguro y balanceo de carga en AWS.</p>
               </div>

               {/* Step 3 */}
               <div className="bg-white p-6 rounded-2xl shadow-sm w-full md:w-1/4 relative z-10">
                   <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                       <Cpu className="h-6 w-6 text-orange-600" />
                   </div>
                   <h4 className="font-bold">3. Microservicios</h4>
                   <p className="text-sm text-gray-500 mt-2">Servicios independientes: Catálogo, Pedidos, Trazabilidad.</p>
               </div>

               {/* Step 4 */}
               <div className="bg-white p-6 rounded-2xl shadow-sm w-full md:w-1/4 relative z-10">
                   <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                       <Database className="h-6 w-6 text-agro-green" />
                   </div>
                   <h4 className="font-bold">4. Datos (NoSQL)</h4>
                   <p className="text-sm text-gray-500 mt-2">MongoDB para flexibilidad en esquemas de productos estacionales.</p>
               </div>
           </div>
           <p className="mt-8 text-sm text-gray-500 italic text-center">
             * Justificación Técnica: El uso de microservicios permite escalar módulos específicos (ej: durante la cosecha de verano) sin duplicar toda la infraestructura, optimizando costos vs un Monolito.
           </p>
        </div>

        {/* ML Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
           {aiFeatures.map((feature) => (
             <div key={feature.id} className="relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow">
               <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-3 shadow-lg">
                 <Brain className="h-6 w-6 text-white" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
               <div className="w-16 h-1 bg-agro-green rounded-full mb-4"></div>
               <p className="text-gray-600 leading-relaxed">
                 {feature.description}
               </p>
               <div className="mt-4 inline-flex items-center text-sm text-indigo-600 font-medium">
                 Algoritmo: {feature.algorithm}
               </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};