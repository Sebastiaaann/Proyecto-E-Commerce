import React from 'react';
import { Check } from 'lucide-react';
import { subscriptionPlans } from '../services/mockData';

interface SubscriptionSectionProps {
  onSubscribe: (planTitle: string) => void;
}

export const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({ onSubscribe }) => {
  return (
    <section id="suscripciones" className="py-24 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-agro-orange font-semibold tracking-wide uppercase">Suscripciones Flexibles</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Canastas Semanales Inteligentes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Olvídate de comprar verduras todas las semanas. Deja que nuestros algoritmos personalicen tu canasta según tu gusto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col ${
                plan.recommendedTag ? 'bg-white shadow-2xl scale-105 border-2 border-agro-green z-10' : 'bg-white shadow-lg border border-gray-100'
              }`}
            >
              {plan.recommendedTag && (
                <div className="bg-agro-green text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
                  {plan.recommendedTag}
                </div>
              )}
              
              <div className="h-48 overflow-hidden relative">
                 <div className="absolute inset-0 bg-black/20 z-10"></div>
                 <img src={plan.imageUrl} alt={plan.title} className="w-full h-full object-cover" />
                 <div className="absolute bottom-4 left-4 z-20 text-white">
                    <h3 className="text-2xl font-bold text-shadow">{plan.title}</h3>
                 </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price.toLocaleString('es-CL')}</span>
                  <span className="ml-1 text-xl text-gray-500">/{plan.frequency}</span>
                </div>
                <p className="text-gray-500 mb-6">{plan.description}</p>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-agro-green" />
                      </div>
                      <p className="ml-3 text-sm text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onSubscribe(plan.title)}
                  className={`w-full block text-center rounded-xl py-3 px-6 font-bold transition-colors ${
                    plan.recommendedTag 
                      ? 'bg-agro-green text-white hover:bg-agro-darkGreen shadow-lg shadow-green-200' 
                      : 'bg-green-50 text-agro-green hover:bg-green-100'
                  }`}
                >
                  Suscribirme Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};