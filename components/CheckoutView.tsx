import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Calendar, Truck, ShieldCheck, CheckCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutViewProps {
  cartItems: CartItem[];
  onBack: () => void;
  onSuccess: () => void;
}

export const CheckoutView: React.FC<CheckoutViewProps> = ({ cartItems, onBack, onSuccess }) => {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shippingCost = subtotal > 35000 ? 0 : 3990; // Free shipping over $35.000
  const total = subtotal + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  if (step === 'success') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center animate-in fade-in zoom-in duration-500">
        <div className="bg-green-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-12 w-12 text-agro-green" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Gracias por tu compra!</h2>
        <p className="text-gray-500 text-lg mb-8">
          Tu pedido <span className="font-mono font-bold text-gray-800">#AG-{Math.floor(Math.random() * 10000)}</span> ha sido confirmado.
          <br />Hemos enviado el detalle a tu correo electrónico.
        </p>
        <div className="bg-white border border-gray-200 rounded-2xl p-6 max-w-md mx-auto mb-8 shadow-sm">
           <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">Resumen de Entrega</h3>
           <div className="flex items-start text-left mb-3">
              <Truck className="h-5 w-5 text-agro-orange mr-3 mt-0.5" />
              <div>
                 <p className="font-medium text-gray-900">Mañana, 09:00 - 13:00 hrs</p>
                 <p className="text-sm text-gray-500">Logística AgroConnect</p>
              </div>
           </div>
           <div className="flex items-start text-left">
              <ShieldCheck className="h-5 w-5 text-agro-green mr-3 mt-0.5" />
              <div>
                 <p className="font-medium text-gray-900">Garantía de Frescura</p>
                 <p className="text-sm text-gray-500">Si algo no llega bien, lo reponemos.</p>
              </div>
           </div>
        </div>
        <button 
          onClick={onSuccess}
          className="bg-agro-green text-white px-8 py-3 rounded-xl font-bold hover:bg-agro-darkGreen transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Volver a la Tienda
        </button>
      </div>
    );
  } else if (step === 'processing') {
      return (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <div className="relative w-24 h-24 mb-8">
                  <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-agro-green rounded-full border-t-transparent animate-spin"></div>
                  <LeafIcon className="absolute inset-0 m-auto text-agro-green h-8 w-8 animate-pulse" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Procesando tu pedido...</h2>
              <p className="text-gray-500">Estamos conectando con el banco y los agricultores.</p>
          </div>
      )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in slide-in-from-right-10 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-500 hover:text-agro-green mb-8 transition"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Volver al Catálogo
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form Column */}
        <div className="lg:col-span-7">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Finalizar Compra</h1>
          
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* Contact Info */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-agro-green text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">1</span>
                Información de Contacto
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2">
                   <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                   <input required type="email" placeholder="ejemplo@correo.com" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-agro-green focus:outline-none transition" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                   <input required type="text" placeholder="Juan" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-agro-green focus:outline-none transition" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                   <input required type="text" placeholder="Pérez" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-agro-green focus:outline-none transition" />
                </div>
                <div className="col-span-2">
                   <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                   <input required type="tel" placeholder="+56 9 1234 5678" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-agro-green focus:outline-none transition" />
                </div>
              </div>
            </section>

            {/* Shipping Info */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-agro-green text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">2</span>
                Dirección de Entrega
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2">
                   <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                   <input required type="text" placeholder="Av. Providencia 1234, Depto 501" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-agro-green focus:outline-none transition" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Comuna</label>
                   <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-agro-green focus:outline-none transition">
                     <option>Providencia</option>
                     <option>Las Condes</option>
                     <option>Ñuñoa</option>
                     <option>Santiago Centro</option>
                     <option>Vitacura</option>
                   </select>
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Entrega</label>
                   <div className="relative">
                     <input type="date" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-agro-green focus:outline-none transition" />
                     <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                   </div>
                </div>
              </div>
            </section>

             {/* Payment Method */}
             <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-agro-green text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">3</span>
                Método de Pago
              </h2>
              <div className="grid grid-cols-1 gap-3">
                 <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'credit' ? 'border-agro-green bg-green-50' : 'border-gray-200'}`}>
                    <input type="radio" name="payment" value="credit" checked={paymentMethod === 'credit'} onChange={() => setPaymentMethod('credit')} className="text-agro-green focus:ring-agro-green" />
                    <div className="ml-3 flex items-center flex-1 justify-between">
                       <span className="font-medium text-gray-900">Tarjeta de Crédito / Débito</span>
                       <div className="flex space-x-2">
                          <div className="h-6 w-8 bg-gray-200 rounded"></div>
                          <div className="h-6 w-8 bg-gray-200 rounded"></div>
                       </div>
                    </div>
                 </label>
                 <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'transfer' ? 'border-agro-green bg-green-50' : 'border-gray-200'}`}>
                    <input type="radio" name="payment" value="transfer" checked={paymentMethod === 'transfer'} onChange={() => setPaymentMethod('transfer')} className="text-agro-green focus:ring-agro-green" />
                    <div className="ml-3">
                       <span className="font-medium text-gray-900">Transferencia Bancaria</span>
                       <span className="block text-xs text-gray-500">5% de descuento adicional</span>
                    </div>
                 </label>
              </div>

              {paymentMethod === 'credit' && (
                <div className="mt-4 p-4 bg-gray-50 rounded-xl space-y-3 animate-in fade-in">
                    <div className="relative">
                        <CreditCard className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <input type="text" placeholder="Número de Tarjeta" className="w-full pl-10 p-3 bg-white border border-gray-200 rounded-xl" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="MM/AA" className="w-full p-3 bg-white border border-gray-200 rounded-xl" />
                        <input type="text" placeholder="CVC" className="w-full p-3 bg-white border border-gray-200 rounded-xl" />
                    </div>
                </div>
              )}
            </section>

          </form>
        </div>

        {/* Summary Column */}
        <div className="lg:col-span-5">
           <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Resumen del Pedido</h3>
              
              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
                 {cartItems.map(item => (
                   <div key={item.product.id} className="flex justify-between items-start">
                      <div className="flex items-center">
                         <div className="h-12 w-12 rounded-lg bg-gray-100 overflow-hidden mr-3">
                           <img src={item.product.imageUrl} alt="" className="h-full w-full object-cover" />
                         </div>
                         <div>
                            <p className="text-sm font-medium text-gray-900 line-clamp-1">{item.product.name}</p>
                            <p className="text-xs text-gray-500">Cant: {item.quantity}</p>
                         </div>
                      </div>
                      <p className="text-sm font-semibold text-gray-900">${(item.product.price * item.quantity).toLocaleString('es-CL')}</p>
                   </div>
                 ))}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2 mb-6">
                 <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString('es-CL')}</span>
                 </div>
                 <div className="flex justify-between text-gray-600">
                    <span>Envío</span>
                    {shippingCost === 0 ? (
                      <span className="text-agro-green font-bold">GRATIS</span>
                    ) : (
                      <span>${shippingCost.toLocaleString('es-CL')}</span>
                    )}
                 </div>
                 {shippingCost > 0 && (
                   <div className="text-xs text-orange-500 bg-orange-50 p-2 rounded-lg mt-2 text-center">
                     ¡Agrega ${(35000 - subtotal).toLocaleString('es-CL')} más para envío gratis!
                   </div>
                 )}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-8">
                 <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total a Pagar</span>
                    <span className="text-2xl font-bold text-agro-green">${total.toLocaleString('es-CL')}</span>
                 </div>
              </div>

              <button 
                type="submit"
                form="checkout-form"
                className="w-full bg-agro-orange text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-100 hover:bg-orange-600 transition transform active:scale-95"
              >
                Confirmar y Pagar
              </button>
              
              <div className="mt-4 flex items-center justify-center text-xs text-gray-400">
                 <ShieldCheck className="h-3 w-3 mr-1" />
                 Pagos procesados de forma segura con encriptación SSL
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// Helper component icon
const LeafIcon = ({className}: {className?:string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
);