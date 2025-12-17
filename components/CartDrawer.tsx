import React, { useEffect, useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (productId: string) => void;
  onUpdateQuantity: (productId: string, delta: number) => void;
  onCheckout?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onRemove, 
  onUpdateQuantity,
  onCheckout
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // Wait for animation
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  if (!isVisible && !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`relative w-full max-w-md bg-white shadow-2xl h-full flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-agro-green" />
            <h2 className="text-xl font-bold text-gray-800">Tu Canasta</h2>
            <span className="bg-green-100 text-agro-darkGreen text-xs font-bold px-2 py-0.5 rounded-full">
              {items.length} items
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 custom-scrollbar bg-gray-50/50">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="bg-gray-100 p-6 rounded-full">
                <ShoppingBag className="h-12 w-12 text-gray-300" />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">Tu canasta está vacía</p>
                <p className="text-gray-500 text-sm mt-1">¡Explora el catálogo y apoya a los agricultores!</p>
              </div>
              <button 
                onClick={onClose}
                className="mt-4 px-6 py-2 border border-agro-green text-agro-green font-medium rounded-xl hover:bg-green-50 transition"
              >
                Volver al Catálogo
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4">
                  {/* Image */}
                  <div className="h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src={item.product.imageUrl} 
                      alt={item.product.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm line-clamp-1">{item.product.name}</h3>
                      <p className="text-xs text-gray-500">{item.product.unit}</p>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          disabled={item.quantity <= 1}
                          className="p-1 rounded-md hover:bg-white hover:shadow-sm disabled:opacity-30 transition"
                        >
                          <Minus className="h-3 w-3 text-gray-600" />
                        </button>
                        <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="p-1 rounded-md hover:bg-white hover:shadow-sm transition"
                        >
                          <Plus className="h-3 w-3 text-gray-600" />
                        </button>
                      </div>
                      <p className="font-bold text-gray-900">
                        ${(item.product.price * item.quantity).toLocaleString('es-CL')}
                      </p>
                    </div>
                  </div>

                  {/* Remove */}
                  <button 
                    onClick={() => onRemove(item.product.id)}
                    className="self-start text-gray-300 hover:text-red-500 transition p-1"
                    title="Eliminar"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-white">
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-500 text-sm">
                <span>Subtotal</span>
                <span>${total.toLocaleString('es-CL')}</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                <span>Envío (Calculado al final)</span>
                <span className="text-agro-green font-medium">Por calcular</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-dashed border-gray-200">
                <span>Total</span>
                <span>${total.toLocaleString('es-CL')}</span>
              </div>
            </div>
            
            <button 
              onClick={() => {
                  if (onCheckout) onCheckout();
              }}
              className="w-full bg-agro-orange text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-100 hover:bg-orange-600 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              Ir a Pagar <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">
              Transacción segura encriptada
            </p>
          </div>
        )}
      </div>
    </div>
  );
};