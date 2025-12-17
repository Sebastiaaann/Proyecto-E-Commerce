import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart, Menu, Search, Leaf, X } from 'lucide-react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  cartCount: number;
  onSearch: () => void;
  onCartOpen: () => void;
  isCartAnimating?: boolean;
  onLogoClick?: () => void;
}

interface NavItem {
  label: string;
  id: string;
  href: string;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onSearch, onCartOpen, isCartAnimating = false, onLogoClick }) => {
  // --- Scroll State for Logo Animation ---
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Mobile State ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // --- 3D Pill State ---
  const [activeSection, setActiveSection] = useState('catalogo');
  const [expanded, setExpanded] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navItems: NavItem[] = [
    { label: 'Catálogo', id: 'catalogo', href: '#catalogo' },
    { label: 'Agricultores', id: 'agricultores', href: '#agricultores' },
    { label: 'Tecnología', id: 'tecnologia', href: '#tecnologia' },
    { label: 'Suscripciones', id: 'suscripciones', href: '#suscripciones' },
  ];

  // Spring animations for smooth motion
  const pillWidth = useSpring(160, { stiffness: 220, damping: 25, mass: 1 });
  const pillShift = useSpring(0, { stiffness: 220, damping: 25, mass: 1 });

  // Handle hover expansion
  useEffect(() => {
    if (hovering) {
      setExpanded(true);
      pillWidth.set(650); // Ancho suficiente para los items en español
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    } else {
      hoverTimeoutRef.current = setTimeout(() => {
        setExpanded(false);
        pillWidth.set(160);
      }, 600);
    }

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [hovering, pillWidth]);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const handleSectionClick = (item: NavItem) => {
    // Trigger transition state
    setIsTransitioning(true);
    setActiveSection(item.id);
    
    // Collapse the pill after selection
    setHovering(false);
    
    // Smooth Scroll Logic
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const handleLogoClick = () => {
    if (onLogoClick) onLogoClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeItem = navItems.find(item => item.id === activeSection) || navItems[0];

  return (
    <>
      {/* 
        Container Global
        Usamos pointer-events-none en el contenedor principal para que los clicks "pasen" a través del área vacía,
        pero reactivamos pointer-events-auto en los elementos interactivos.
        Z-Index restaurado a z-50.
      */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start px-4 sm:px-8 pt-6 pointer-events-none h-24">
        
        {/* --- LEFT: Logo --- */}
        <div className="pointer-events-auto flex items-center cursor-pointer group" onClick={handleLogoClick}>
            <div className="bg-white/80 backdrop-blur-md border border-white/50 shadow-lg p-2.5 rounded-2xl mr-3 transition-transform group-hover:scale-105 z-10">
              <Leaf className="h-6 w-6 text-agro-green" />
            </div>
            
            {/* Desktop Text Container with Animation */}
            <div 
              className={`hidden sm:flex flex-col transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap ${
                isScrolled ? 'max-w-0 opacity-0' : 'max-w-[300px] opacity-100'
              }`}
            >
                <span className="text-xl font-bold text-gray-800 tracking-tight leading-none">
                  Agro<span className="text-agro-green">Connect</span>
                </span>
                <span className="text-[11px] font-medium text-gray-500 tracking-wide mt-0.5">
                  Del campo a tu mesa en 24 horas
                </span>
            </div>

            {/* Mobile Text Container with Animation */}
            <div 
              className={`sm:hidden block transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap ${
                isScrolled ? 'max-w-0 opacity-0' : 'max-w-[200px] opacity-100'
              }`}
            >
              <span className="text-xl font-bold text-gray-800 tracking-tight drop-shadow-sm">
                Agro<span className="text-agro-green">Connect</span>
              </span>
            </div>
        </div>

        {/* --- CENTER: 3D Adaptive Pill (Desktop Only) --- */}
        <div className="hidden md:block pointer-events-auto">
          <motion.nav
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-full"
            style={{
              width: pillWidth,
              height: '56px',
              // Subtle gradient adapted to be clean but premium
              background: `
                linear-gradient(135deg, 
                  #ffffff 0%, 
                  #f8fdf9 30%, 
                  #f0fdf4 60%, 
                  #e6fffa 100%
                )
              `,
              boxShadow: expanded
                ? `
                  0 2px 4px rgba(47, 133, 90, 0.05),
                  0 6px 12px rgba(47, 133, 90, 0.08),
                  0 12px 24px rgba(47, 133, 90, 0.10),
                  inset 0 2px 2px rgba(255, 255, 255, 0.9),
                  inset 0 -1px 2px rgba(0, 0, 0, 0.05)
                `
                : `
                  0 3px 6px rgba(0, 0, 0, 0.08),
                  0 8px 16px rgba(47, 133, 90, 0.05),
                  inset 0 2px 1px rgba(255, 255, 255, 0.8),
                  inset 0 -1px 2px rgba(0, 0, 0, 0.05)
                `,
              x: pillShift,
              overflow: 'hidden',
              transition: 'box-shadow 0.3s ease-out',
            }}
          >
            {/* Lighting effects layers */}
            <div 
              className="absolute inset-x-0 top-0 rounded-t-full pointer-events-none"
              style={{
                height: '2px',
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)',
                filter: 'blur(0.5px)',
              }}
            />
            
            {/* Greenish glow at bottom */}
            <div 
              className="absolute inset-x-0 bottom-0 rounded-b-full pointer-events-none"
              style={{
                height: '30%',
                background: 'linear-gradient(0deg, rgba(47, 133, 90, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
              }}
            />

            {/* Gloss reflection */}
            <div 
              className="absolute rounded-full pointer-events-none"
              style={{
                left: expanded ? '15%' : '10%',
                top: '15%',
                width: expanded ? '120px' : '40px',
                height: '12px',
                background: 'rgba(255, 255, 255, 0.6)',
                filter: 'blur(3px)',
                transform: 'rotate(-10deg)',
                transition: 'all 0.3s ease',
              }}
            />

            {/* Navigation items container */}
            <div 
              ref={containerRef}
              className="relative z-10 h-full flex items-center justify-center px-6"
            >
              {/* Collapsed state */}
              {!expanded && (
                <div className="flex items-center relative">
                  <AnimatePresence mode="wait">
                    {activeItem && (
                      <motion.span
                        key={activeItem.id}
                        initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                        transition={{ duration: 0.35, ease: [0.4, 0.0, 0.2, 1] }}
                        style={{
                          fontSize: '15px',
                          fontWeight: 600,
                          color: '#2F855A', // Agro Green
                          letterSpacing: '0.5px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {activeItem.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Expanded state */}
              {expanded && (
                <div className="flex items-center justify-evenly w-full gap-4">
                  {navItems.map((item, index) => {
                    const isActive = item.id === activeSection;
                    
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ delay: index * 0.05, duration: 0.2 }}
                        onClick={() => handleSectionClick(item)}
                        className="relative cursor-pointer transition-all duration-200"
                        style={{
                          fontSize: '15px',
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? '#2F855A' : '#6B7280',
                          background: 'transparent',
                          border: 'none',
                          padding: '8px 12px',
                          outline: 'none',
                          whiteSpace: 'nowrap',
                          transform: isActive ? 'scale(1.05)' : 'scale(1)',
                        }}
                        onMouseEnter={(e) => {
                           if (!isActive) e.currentTarget.style.color = '#2F855A';
                        }}
                        onMouseLeave={(e) => {
                           if (!isActive) e.currentTarget.style.color = '#6B7280';
                        }}
                      >
                        {item.label}
                        {isActive && (
                          <motion.div 
                            layoutId="activeDot"
                            className="absolute -bottom-1 left-0 right-0 mx-auto w-1 h-1 bg-agro-green rounded-full"
                          />
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              )}
            </div>
          </motion.nav>
        </div>

        {/* --- RIGHT: Actions --- */}
        <div className="pointer-events-auto flex items-center space-x-3">
            {/* Search Button */}
            <button 
              onClick={onSearch}
              className="bg-white/80 backdrop-blur-md p-3 rounded-full shadow-sm hover:shadow-md border border-white/50 text-gray-500 hover:text-agro-green transition-all"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Cart Button */}
            <button 
              className={`relative bg-white/80 backdrop-blur-md p-3 rounded-full shadow-sm hover:shadow-md border border-white/50 transition-all duration-300 ${
                isCartAnimating 
                  ? 'scale-110 text-agro-green ring-2 ring-green-200' 
                  : 'text-gray-500 hover:text-agro-green'
              }`}
              onClick={onCartOpen}
            >
              <ShoppingCart className={`h-5 w-5 ${isCartAnimating ? 'animate-bounce' : ''}`} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-agro-orange text-white text-[10px] flex items-center justify-center font-bold rounded-full animate-pulse shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

             {/* Mobile Menu Toggle */}
             <button 
              className="md:hidden bg-white/80 backdrop-blur-md p-3 rounded-full shadow-sm border border-white/50 text-gray-500"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </header>

      {/* --- Mobile Menu (Classic Dropdown for small screens) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden animate-in slide-in-from-top-10 duration-200">
           <div className="flex flex-col space-y-4">
             {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-2xl font-bold text-gray-800 py-3 border-b border-gray-100 active:text-agro-green"
                  onClick={() => {
                      setIsMobileMenuOpen(false);
                      const el = document.getElementById(item.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.label}
                </a>
             ))}
           </div>
        </div>
      )}
    </>
  );
};