import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { TechnicalSection } from './components/TechnicalSection';
import { Footer } from './components/Footer';
import { HowItWorks } from './components/HowItWorks';
import { FarmersSection } from './components/FarmersSection';
import { SubscriptionSection } from './components/SubscriptionSection';
import { Modal } from './components/Modal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutView } from './components/CheckoutView';
import { SubscriptionModalContent } from './components/SubscriptionModalContent';
import VideoPresentation from './components/VideoPresentation';
import { products, featuredFarmers, subscriptionPlans } from './services/mockData';
import { Product, CartItem } from './types';
import { Filter, CheckCircle, MapPin, Truck, Package } from 'lucide-react';
import { AIChef } from './components/AIChef';
import { LocationInsight } from './components/LocationInsight';
import { FarmerCallToAction } from './components/FarmerCallToAction';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartAnimating, setIsCartAnimating] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'checkout' | 'video'>('home');

  // Derived state for cart count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Modal State
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    content: React.ReactNode;
  }>({
    isOpen: false,
    title: '',
    content: null,
  });

  const closeModal = () => setModalState(prev => ({ ...prev, isOpen: false }));

  const categories = ['Todos', 'Verdura', 'Fruta', 'Procesado'];

  const filteredProducts = activeCategory === 'Todos'
    ? products
    : products.filter(p => p.category === activeCategory);

  // --- Handlers ---

  const handleSearch = () => {
    const term = prompt("🔍 ¿Qué producto estás buscando?");
    if (term) {
      alert(`Buscando: "${term}"\n\n(Funcionalidad simulada: En producción esto filtraría el grid de productos en tiempo real)`);
    }
  };

  const handleFilterClick = () => {
    setModalState({
      isOpen: true,
      title: 'Filtros Avanzados',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Refina tu búsqueda por:</p>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded text-agro-green focus:ring-agro-green" />
              <span>Orgánico Certificado</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded text-agro-green focus:ring-agro-green" />
              <span>Sin Agroquímicos</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded text-agro-green focus:ring-agro-green" />
              <span>Productor Local (&lt; 50km)</span>
            </label>
          </div>
          <button
            onClick={closeModal}
            className="w-full mt-4 bg-agro-green text-white py-2 rounded-xl font-semibold hover:bg-agro-darkGreen transition"
          >
            Aplicar Filtros
          </button>
        </div>
      )
    });
  };

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    // Trigger Navbar animation
    setIsCartAnimating(true);
    setTimeout(() => setIsCartAnimating(false), 300);

    setModalState({
      isOpen: true,
      title: '¡Producto Agregado!',
      content: (
        <div className="text-center">
          <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center mb-4">
            <CheckCircle className="h-10 w-10 text-agro-green" />
          </div>
          <h4 className="text-lg font-bold text-gray-800">{product.name}</h4>
          <p className="text-gray-500 mb-6">Se ha añadido a tu canasta correctamente.</p>
          <div className="flex space-x-3">
            <button onClick={closeModal} className="flex-1 py-2 border border-gray-300 rounded-xl text-gray-600 font-medium hover:bg-gray-50">
              Seguir comprando
            </button>
            <button onClick={() => { closeModal(); setIsCartOpen(true); }} className="flex-1 py-2 bg-agro-green text-white rounded-xl font-bold hover:bg-agro-darkGreen">
              Ver Canasta
            </button>
          </div>
        </div>
      )
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.product.id === productId) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTraceability = (traceId: string) => {
    setModalState({
      isOpen: true,
      title: 'Trazabilidad Blockchain',
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Blockchain ID</p>
            <p className="font-mono text-sm text-agro-darkGreen break-all font-bold">{traceId}-8f7d6a5c9e2b1a0</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="relative flex items-start mb-8 ml-1">
              <div className="absolute left-0 p-1 bg-white">
                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center ring-4 ring-white">
                  <Package className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="ml-10">
                <h4 className="font-bold text-gray-900">Cosecha en Campo</h4>
                <p className="text-sm text-gray-500">Limache, Valparaíso</p>
                <p className="text-xs text-gray-400 mt-1">14 Oct 2023 • 06:30 AM</p>
              </div>
            </div>

            <div className="relative flex items-start mb-8 ml-1">
              <div className="absolute left-0 p-1 bg-white">
                <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center ring-4 ring-white">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="ml-10">
                <h4 className="font-bold text-gray-900">Control de Calidad</h4>
                <p className="text-sm text-gray-500">Aprobado por Ing. Agrónomo</p>
                <p className="text-xs text-gray-400 mt-1">14 Oct 2023 • 10:45 AM</p>
              </div>
            </div>

            <div className="relative flex items-start ml-1">
              <div className="absolute left-0 p-1 bg-white">
                <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center ring-4 ring-white">
                  <Truck className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="ml-10">
                <h4 className="font-bold text-gray-900">Centro de Distribución</h4>
                <p className="text-sm text-gray-500">Listo para despacho</p>
                <p className="text-xs text-gray-400 mt-1">15 Oct 2023 • 08:00 AM</p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-50 text-green-800 text-sm rounded-lg flex items-start">
            <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            <p>Este producto ha sido verificado en la red Polygon para asegurar su origen orgánico.</p>
          </div>
        </div>
      )
    });
  };

  const handleSubscribe = (planTitle: string) => {
    const plan = subscriptionPlans.find(p => p.title === planTitle);

    if (!plan) return;

    setModalState({
      isOpen: true,
      title: 'Configura tu Suscripción',
      content: (
        <SubscriptionModalContent
          plan={plan}
          onConfirm={() => {
            closeModal();
            alert("Redirigiendo a pasarela de pago segura...");
          }}
          onCancel={closeModal}
        />
      )
    });
  };

  const handleFarmerStory = (farmerName: string) => {
    const farmer = featuredFarmers.find(f => f.name === farmerName);
    if (!farmer) return;

    setModalState({
      isOpen: true,
      title: `Historia de ${farmer.name}`,
      content: (
        <div>
          <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
            <img src={farmer.imageUrl} className="w-full h-full object-cover" alt={farmer.name} />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-bold flex items-center">
                <MapPin className="h-4 w-4 mr-1" /> {farmer.location}
              </p>
            </div>
          </div>

          <div className="prose text-gray-600">
            <p className="font-medium text-lg text-gray-800 mb-2">"El campo es nuestra vida"</p>
            <p>{farmer.story}</p>
            <p className="mt-4">
              {farmer.name} trabaja con técnicas regenerativas que recuperan la salud del suelo,
              utilizando 40% menos de agua que la agricultura tradicional. Al comprar sus productos,
              estás apoyando directamente a su familia y comunidad.
            </p>
          </div>

          {/* Integración de Maps Grounding */}
          <LocationInsight location={farmer.location} />

          <div className="mt-6 flex justify-end">
            <button
              onClick={closeModal}
              className="text-agro-green font-semibold hover:text-agro-darkGreen"
            >
              Cerrar historia
            </button>
          </div>
        </div>
      )
    });
  };

  const handleJoinProducer = () => {
    setModalState({
      isOpen: true,
      title: 'Únete como Productor',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Completa tus datos y un especialista agrícola te contactará en 24 horas.</p>
          <input type="text" placeholder="Nombre de tu Fundo/Agrícola" className="w-full p-3 border border-gray-200 rounded-xl" />
          <input type="text" placeholder="Ubicación (Región/Comuna)" className="w-full p-3 border border-gray-200 rounded-xl" />
          <input type="tel" placeholder="+56 9 ..." className="w-full p-3 border border-gray-200 rounded-xl" />

          <button
            onClick={() => {
              closeModal();
              alert("¡Solicitud enviada! Te contactaremos pronto.");
            }}
            className="w-full bg-agro-green text-white py-3 rounded-xl font-bold hover:bg-agro-darkGreen transition shadow-lg"
          >
            Enviar Solicitud
          </button>
        </div>
      )
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {currentView === 'video' ? (
        // Video Presentation - Standalone page without navbar/footer
        <>
          <VideoPresentation />
          <div className="fixed top-4 left-4 z-50">
            <button
              onClick={() => setCurrentView('home')}
              className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all"
            >
              ← Volver al Inicio
            </button>
          </div>
        </>
      ) : (
        // Normal app with navbar and footer
        <>
          <Navbar
            cartCount={cartCount}
            onSearch={handleSearch}
            onCartOpen={() => setIsCartOpen(true)}
            isCartAnimating={isCartAnimating}
            onLogoClick={() => setCurrentView('home')}
          />

          {currentView === 'home' ? (
            <>
              <Hero />

              <main className="flex-grow">
                {/* Sección: Cómo funciona */}
                <HowItWorks />

                {/* Sección de Catálogo */}
                <section id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-16">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <div>
                      <h2 className="text-base text-agro-green font-semibold tracking-wide uppercase">Marketplace</h2>
                      <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight">Cosecha de la Semana</p>
                      <p className="mt-2 text-gray-500">Productos seleccionados por nuestros algoritmos de calidad.</p>
                    </div>

                    {/* Filter Pills */}
                    <div className="mt-4 md:mt-0 flex space-x-2 overflow-x-auto pb-2 md:pb-0">
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeCategory === cat
                              ? 'bg-agro-green text-white shadow-lg shadow-green-200'
                              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                            }`}
                        >
                          {cat}
                        </button>
                      ))}
                      <button
                        onClick={handleFilterClick}
                        className="px-4 py-2 rounded-full bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 flex items-center text-sm font-medium whitespace-nowrap"
                      >
                        <Filter className="h-4 w-4 mr-2" /> Filtros
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAdd={handleAddToCart}
                        onTrace={handleTraceability}
                      />
                    ))}
                  </div>

                  {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                      <p className="text-gray-500 text-lg">No hay productos en esta categoría por esta temporada.</p>
                    </div>
                  )}
                </section>

                {/* Sección: Suscripciones */}
                <SubscriptionSection onSubscribe={handleSubscribe} />

                {/* Sección: Agricultores */}
                <FarmersSection onReadStory={handleFarmerStory} />

               

                {/* New Animated Call to Action for Farmers */}
                <FarmerCallToAction onJoin={handleJoinProducer} />

               

              </main>
            </>
          ) : (
            <main className="flex-grow bg-gray-50/50">
              <CheckoutView
                cartItems={cartItems}
                onBack={() => setCurrentView('home')}
                onSuccess={handleOrderSuccess}
              />
            </main>
          )}

          <Footer />

          {/* Global Modal */}
          <Modal
            isOpen={modalState.isOpen}
            onClose={closeModal}
            title={modalState.title}
          >
            {modalState.content}
          </Modal>

          {/* Shopping Cart Drawer */}
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            items={cartItems}
            onRemove={handleRemoveFromCart}
            onUpdateQuantity={handleUpdateQuantity}
            onCheckout={handleCheckout}
          />

          {/* AI Assistant */}
          <AIChef />
        </>
      )}
    </div>
  );
};

export default App;