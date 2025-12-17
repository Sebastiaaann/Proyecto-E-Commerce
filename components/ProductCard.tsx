import React from 'react';
import { QrCode, Star, ShoppingBag, RotateCw } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
  onTrace: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAdd, onTrace }) => {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col h-full">
      {/* Badge de Suscripción */}
      {product.isSubscriptionAvailable && (
        <div className="absolute top-4 left-4 z-10 bg-agro-orange/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center">
          <RotateCw className="w-3 h-3 mr-1" />
          Suscripción Disponible
        </div>
      )}

      {/* Imagen del Producto */}
      <div className="aspect-w-4 aspect-h-3 bg-gray-200 relative overflow-hidden h-48">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* QR Button Overlay */}
        <button 
          onClick={() => onTrace(product.traceabilityId)}
          className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-xl shadow hover:bg-white text-gray-700 transition" 
          title="Ver Trazabilidad Blockchain"
        >
          <QrCode className="h-5 w-5" />
        </button>
      </div>

      {/* Contenido */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Categoría */}
        <p className="text-sm text-agro-green font-medium mb-1">{product.category}</p>
        
        {/* Nombre y Precio */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
          <div className="text-right">
             <span className="block text-lg font-bold text-gray-900">${product.price}</span>
             <span className="text-xs text-gray-500">/ {product.unit}</span>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-50">
            {/* Storytelling del Agricultor */}
            <div className="flex items-center space-x-3 mb-4">
                <img 
                    src={product.farmer.avatarUrl} 
                    alt={product.farmer.name} 
                    className="h-10 w-10 rounded-full border-2 border-white shadow-sm object-cover"
                />
                <div>
                    <p className="text-sm font-semibold text-gray-800">{product.farmer.name}</p>
                    <div className="flex items-center text-xs text-yellow-500">
                         <Star className="h-3 w-3 fill-current" />
                         <span className="ml-1 text-gray-500">{product.farmer.rating} • {product.farmer.location}</span>
                    </div>
                </div>
            </div>
            
            {/* Botón de compra */}
            <button 
              onClick={() => onAdd(product)}
              className="w-full bg-gray-50 hover:bg-agro-green hover:text-white text-gray-800 font-semibold py-2 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center group-hover:bg-agro-green group-hover:text-white"
            >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Agregar al Carrito
            </button>
        </div>
      </div>
    </div>
  );
};