import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Leaf, Facebook, Instagram, Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Plataforma',
    links: [
      { title: 'Catálogo de Temporada', href: '#catalogo' },
      { title: 'Nuestros Agricultores', href: '#agricultores' },
      { title: 'Suscripciones', href: '#suscripciones' },
      { title: 'Trazabilidad Blockchain', href: '#tecnologia' },
    ],
  },
  {
    label: 'Compañía',
    links: [
      { title: 'Sobre Nosotros', href: '#' },
      { title: 'Impacto Social', href: '#' },
      { title: 'Únete como Productor', href: '#' },
      { title: 'Blog del Campo', href: '#' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { title: 'Términos y Condiciones', href: '#' },
      { title: 'Política de Privacidad', href: '#' },
      { title: 'Uso de Datos (IA)', href: '#' },
      { title: 'Centro de Ayuda', href: '#' },
    ],
  },
  {
    label: 'Síguenos',
    links: [
      { title: 'Instagram', href: '#', icon: Instagram },
      { title: 'Facebook', href: '#', icon: Facebook },
      { title: 'Twitter', href: '#', icon: Twitter },
      { title: 'LinkedIn', href: '#', icon: Linkedin },
    ],
  },
];

export function Footer() {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#FAFAFA] pt-12">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#FAFAFA] to-transparent pointer-events-none" />
      
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-[3rem] border-t border-white/10 bg-agro-darkGreen px-6 py-12 lg:py-20 overflow-hidden shadow-2xl">
        
        {/* Radial Gradient Effect on Top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
        
        {/* Top Glow Line */}
        <div className="absolute top-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-green-400/50 to-transparent blur-[2px]" />

        <div className="grid w-full gap-12 xl:grid-cols-3 xl:gap-16 relative z-10">
          
          {/* Brand Column */}
          <AnimatedContainer className="flex flex-col items-start space-y-6">
            <div 
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 cursor-pointer hover:bg-white/20 transition-colors"
                onClick={handleLogoClick}
            >
                <Leaf className="size-6 text-green-400" />
                <span className="text-xl font-bold text-white tracking-tight">
                  Agro<span className="text-green-400">Connect</span>
                </span>
            </div>
            
            <p className="text-green-100/80 text-sm leading-relaxed max-w-xs">
              Democratizando el acceso a alimentos reales. Conectamos el campo con la ciudad en 24 horas, garantizando precios justos y sostenibilidad.
            </p>

            <div className="text-green-100/60 text-xs mt-8">
              © {new Date().getFullYear()} AgroConnect Inc. <br/>Todos los derechos reservados.
            </div>
          </AnimatedContainer>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider text-[11px] opacity-90">
                    {section.label}
                  </h3>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          className="group flex items-center text-sm text-green-100/70 hover:text-green-300 transition-all duration-300"
                        >
                          {link.icon && <link.icon className="mr-2 size-4 opacity-80 group-hover:opacity-100" />}
                          <span className="relative">
                            {link.title}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-green-400 transition-all group-hover:w-full opacity-50"></span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20" />
      </div>
    </footer>
  );
};

type ViewAnimationProps = {
  delay?: number;
  className?: string;
  children?: React.ReactNode;
  key?: React.Key;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: 10, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}