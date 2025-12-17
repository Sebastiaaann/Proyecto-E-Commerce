import React, { useState } from 'react';
import { Calendar, Clock, Check, ShieldCheck, CreditCard, ChevronRight } from 'lucide-react';
import { SubscriptionPlan } from '../types';

interface SubscriptionModalContentProps {
  plan: SubscriptionPlan;
  onConfirm: () => void;
  onCancel: () => void;
}

export const SubscriptionModalContent: React.FC<SubscriptionModalContentProps> = ({ plan, onConfirm, onCancel }) => {
  const [frequency, setFrequency] = useState<'semanal' | 'quincenal' | 'mensual'>('semanal');
  const [selectedDay, setSelectedDay] = useState<string>('Viernes');

  const frequencies = [
    { id: 'semanal', label: 'Semanal', discount: null, text: 'Mejor valor' },
    { id: 'quincenal', label: 'Quincenal', discount: null, text: 'Popular' },
    { id: 'mensual', label: 'Mensual', discount: '5% extra', text: 'Flexible' },
  ];

  const days = [
    { id: 'Lunes', label: 'Lun' },
    { id: 'Miércoles', label: 'Mié' },
    { id: 'Viernes', label: 'Vie' },
  ];

  return (
    <div className="flex flex-col">
      {/* Plan Header */}
      <div className="flex items-center p-3 mb-6 bg-gray-50 rounded-2xl border border-gray-100">
        <img 
          src={plan.imageUrl} 
          alt={plan.title} 
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div className="ml-4 flex-1">
          <h4 className="font-bold text-gray-900 text-lg">{plan.title}</h4>
          <div className="flex items-baseline">
            <span className="text-agro-green font-bold text-xl">${plan.price.toLocaleString('es-CL')}</span>
            <span className="text-gray-500 text-sm ml-1">/ envío</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Frequency Selector */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center">
            <Clock className="w-4 h-4 mr-2 text-agro-green" />
            Frecuencia de entrega
          </label>
          <div className="grid grid-cols-3 gap-3">
            {frequencies.map((freq) => (
              <button
                key={freq.id}
                onClick={() => setFrequency(freq.id as any)}
                className={`relative p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                  frequency === freq.id 
                    ? 'border-agro-green bg-green-50 shadow-sm' 
                    : 'border-gray-100 bg-white hover:border-green-200'
                }`}
              >
                {frequency === freq.id && (
                  <div className="absolute -top-2 -right-2 bg-agro-green text-white rounded-full p-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                )}
                <div className="text-sm font-bold text-gray-800 capitalize">{freq.label}</div>
                <div className="text-[10px] text-gray-500 mt-1">{freq.text}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Day Selector */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-agro-green" />
            Día de preferencia
          </label>
          <div className="flex gap-3">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setSelectedDay(day.id)}
                className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-all ${
                  selectedDay === day.id
                    ? 'bg-gray-800 text-white shadow-lg transform scale-105'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2 ml-1">
            * Las entregas se realizan entre 09:00 y 18:00 hrs.
          </p>
        </div>
      </div>

      {/* Footer / Summary */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-4 text-sm">
           <span className="text-gray-600 flex items-center">
             <ShieldCheck className="w-4 h-4 mr-1 text-gray-400" />
             Sin compromisos
           </span>
           <span className="text-agro-green font-medium bg-green-50 px-2 py-1 rounded-lg text-xs">
             Cancela o pausa cuando quieras
           </span>
        </div>

        <button 
          onClick={onConfirm}
          className="w-full bg-agro-orange text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-100 hover:bg-orange-600 hover:scale-[1.02] transition-all flex items-center justify-center group"
        >
          <span>Suscribirme por ${plan.price.toLocaleString('es-CL')}</span>
          <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="text-center text-[10px] text-gray-400 mt-3 flex items-center justify-center">
          <CreditCard className="w-3 h-3 mr-1" />
          Primer cobro se realizará al momento del despacho
        </p>
      </div>
    </div>
  );
};