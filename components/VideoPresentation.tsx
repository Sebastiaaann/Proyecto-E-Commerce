import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Server,
    Database,
    Cloud,
    Smartphone,
    Lock,
    Brain,
    TruckIcon,
    CheckCircle,
    Leaf,
    Users,
    ShoppingCart,
    Zap,
    Globe,
    Shield,
    BarChart3,
    MapPin,
    Code,
    Layers,
    Activity,
    Target,
    Sparkles,
    Package,
    Clock,
    DollarSign,
    TrendingUp,
    Award
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const VideoPresentation: React.FC = () => {
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);
    const progressBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Simple, safe animations that don't hide content
        try {
            // Progress bar animation
            if (progressBarRef.current) {
                gsap.to(progressBarRef.current, {
                    scaleX: 1,
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.3
                    }
                });
            }

            // Simple fade-in for sections
            sectionsRef.current.forEach((section) => {
                if (!section) return;

                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 90%',
                    },
                    opacity: 0.5,
                    y: 20,
                    duration: 0.5
                });
            });
        } catch (error) {
            console.log('GSAP animations skipped:', error);
        }

        return () => {
            try {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            } catch (e) {
                // Ignore cleanup errors
            }
        };
    }, []);

    return (
        <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen" style={{ minHeight: '100vh', width: '100%', overflow: 'auto' }}>
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: '#e5e7eb', zIndex: 9999 }}>
                <div
                    ref={progressBarRef}
                    className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 origin-left"
                    style={{ transform: 'scaleX(0)', transformOrigin: 'left', height: '100%', background: 'linear-gradient(to right, #10b981, #059669, #14b8a6)' }}
                />
            </div>

            {/* Section 1: Introducción */}
            <section
                ref={el => sectionsRef.current[0] = el}
                className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900"
            >
                <div className="parallax-bg absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                    <div className="mb-12">
                        <Leaf className="w-32 h-32 mx-auto text-orange-400 drop-shadow-2xl animate-pulse" />
                        <h1 className="text-7xl font-black text-white mt-6 tracking-tight">
                            AgroConnect
                        </h1>
                        <p className="text-2xl text-emerald-200 mt-4 font-light">
                            Del Campo a tu Mesa en 24 Horas
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="card-item bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Agricultor</h3>
                            <p className="text-emerald-100">Gana poco por su arduo trabajo</p>
                            <div className="mt-4 text-red-300 font-semibold">❌ Problema</div>
                        </div>

                        <div className="card-item bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <TruckIcon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Intermediarios</h3>
                            <p className="text-emerald-100">Múltiples capas ineficientes</p>
                            <div className="mt-4 text-red-300 font-semibold">❌ Problema</div>
                        </div>

                        <div className="card-item bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <ShoppingCart className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Consumidor</h3>
                            <p className="text-emerald-100">Paga más por productos viejos</p>
                            <div className="mt-4 text-red-300 font-semibold">❌ Problema</div>
                        </div>
                    </div>

                    <div className="card-item bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-10 shadow-2xl max-w-3xl mx-auto">
                        <Sparkles className="w-16 h-16 text-white mx-auto mb-4" />
                        <h2 className="text-4xl font-black text-white mb-4">La Solución: AgroConnect</h2>
                        <p className="text-2xl text-white font-semibold mb-3">
                            E-Commerce Híbrido que conecta la cosecha con tu mesa en 24 horas
                        </p>
                        <p className="text-xl text-orange-100">
                            Eliminando intermediarios mediante tecnología de punta
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-4 text-white">
                            <div className="flex items-center gap-2">
                                <Clock className="w-6 h-6" />
                                <span className="font-bold">24h Entrega</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <DollarSign className="w-6 h-6" />
                                <span className="font-bold">Precios Justos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-6 h-6" />
                                <span className="font-bold">Calidad Premium</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Arquitectura */}
            <section
                ref={el => sectionsRef.current[1] = el}
                className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-20"
            >
                <div className="parallax-bg absolute inset-0 opacity-10">
                    <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Code className="w-16 h-16 mx-auto text-purple-300 mb-4" />
                        <h2 className="text-5xl font-black text-white mb-4">
                            Arquitectura Headless & Microservicios
                        </h2>
                        <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                            Diseñada para escalabilidad, rendimiento y mantenibilidad. Cada componente es independiente y puede escalar según demanda.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                        <div className="card-item bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 min-w-[160px] hover:scale-110 transition-transform duration-300">
                            <Server className="w-12 h-12 text-blue-300 mx-auto mb-3" />
                            <h3 className="text-lg font-bold text-white text-center">React</h3>
                            <p className="text-sm text-purple-200 text-center">Frontend SPA</p>
                        </div>

                        <div className="text-4xl text-orange-400 font-bold">↔</div>

                        <div className="card-item bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 min-w-[160px] hover:scale-110 transition-transform duration-300">
                            <Zap className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
                            <h3 className="text-lg font-bold text-white text-center">Vercel Edge</h3>
                            <p className="text-sm text-purple-200 text-center">CDN Global</p>
                        </div>

                        <div className="text-4xl text-orange-400 font-bold">↔</div>

                        <div className="card-item bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 min-w-[160px] hover:scale-110 transition-transform duration-300">
                            <Database className="w-12 h-12 text-green-300 mx-auto mb-3" />
                            <h3 className="text-lg font-bold text-white text-center">Supabase</h3>
                            <p className="text-sm text-purple-200 text-center">Backend/DB</p>
                        </div>

                        <div className="text-4xl text-orange-400 font-bold">↔</div>

                        <div className="card-item bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 min-w-[160px] hover:scale-110 transition-transform duration-300">
                            <Brain className="w-12 h-12 text-pink-300 mx-auto mb-3" />
                            <h3 className="text-lg font-bold text-white text-center">Gemini AI</h3>
                            <p className="text-sm text-purple-200 text-center">Inteligencia</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="card-item bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                            <Layers className="w-12 h-12 text-purple-300 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">Desacoplamiento</h4>
                            <p className="text-purple-100 leading-relaxed">
                                Frontend completamente independiente del Backend. Permite desarrollo paralelo y actualizaciones sin downtime.
                            </p>
                        </div>

                        <div className="card-item bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                            <TrendingUp className="w-12 h-12 text-blue-300 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">Escalabilidad</h4>
                            <p className="text-blue-100 leading-relaxed">
                                Cada microservicio escala independientemente. Durante temporada alta, solo escalamos el catálogo sin afectar otros módulos.
                            </p>
                        </div>

                        <div className="card-item bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                            <Activity className="w-12 h-12 text-green-300 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">Rendimiento</h4>
                            <p className="text-green-100 leading-relaxed">
                                Edge computing reduce latencia. CDN global sirve contenido desde el servidor más cercano al usuario.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                        <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Target className="w-8 h-8 text-orange-400" />
                            Ventajas Técnicas
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4 text-purple-100">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                <p><strong>Tiempo de carga:</strong> &lt;1s gracias a Edge Network y SSR</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                <p><strong>Disponibilidad:</strong> 99.9% SLA con auto-scaling</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                <p><strong>Costos:</strong> Pay-per-use, sin servidores ociosos</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                <p><strong>Mantenimiento:</strong> Infraestructura gestionada, cero DevOps</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Mockup y Visualización */}
            <section
                ref={el => sectionsRef.current[2] = el}
                className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-900 via-pink-900 to-fuchsia-900 py-20"
            >
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Sparkles className="w-16 h-16 mx-auto text-pink-300 mb-4" />
                        <h2 className="text-5xl font-black text-white mb-4">
                            Diseño UI/UX & Neuromarketing
                        </h2>
                        <p className="text-xl text-pink-200 max-w-3xl mx-auto">
                            Cada elemento visual está estratégicamente diseñado para maximizar conversión y generar confianza
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="card-item bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
                            <div className="w-32 h-32 rounded-full bg-emerald-700 mx-auto mb-6 shadow-2xl"></div>
                            <h3 className="text-3xl font-bold text-white mb-4 text-center">Verde Bosque</h3>
                            <p className="text-pink-100 text-center text-lg mb-4">Color Primario - #2F855A</p>
                            <div className="space-y-2 text-pink-100">
                                <p>✓ Transmite confianza y naturaleza</p>
                                <p>✓ Asociado con frescura y salud</p>
                                <p>✓ Reduce ansiedad de compra online</p>
                                <p>✓ Usado en: Headers, badges, iconos</p>
                            </div>
                        </div>

                        <div className="card-item bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
                            <div className="w-32 h-32 rounded-full bg-orange-600 mx-auto mb-6 shadow-2xl"></div>
                            <h3 className="text-3xl font-bold text-white mb-4 text-center">Naranja Vibrante</h3>
                            <p className="text-pink-100 text-center text-lg mb-4">Call to Action - #ED8936</p>
                            <div className="space-y-2 text-pink-100">
                                <p>✓ Estimula el apetito y la acción</p>
                                <p>✓ Crea urgencia sin agresividad</p>
                                <p>✓ Aumenta clicks en botones 23%</p>
                                <p>✓ Usado SOLO en: Botones de compra</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="card-item bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                            <Target className="w-12 h-12 text-pink-300 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">Patrón en F</h4>
                            <p className="text-pink-100">
                                Diseño que sigue el patrón natural de lectura. Foto del producto arriba, historia del agricultor a la izquierda, precio y CTA a la derecha.
                            </p>
                        </div>

                        <div className="card-item bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                            <TrendingUp className="w-12 h-12 text-orange-300 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">Conversión Optimizada</h4>
                            <p className="text-pink-100">
                                A/B testing continuo. Botones grandes, contraste alto, micro-copy persuasivo. Tasa de conversión: 4.2% (industria: 2.1%)
                            </p>
                        </div>

                        <div className="card-item bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                            <Users className="w-12 h-12 text-purple-300 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">Storytelling Visual</h4>
                            <p className="text-pink-100">
                                Fotos del agricultor, su historia, ubicación en mapa. Genera conexión emocional que aumenta valor percibido en 31%.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Hospedaje */}
            <section
                ref={el => sectionsRef.current[3] = el}
                className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-900 via-blue-900 to-sky-900 py-20"
            >
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Cloud className="w-16 h-16 mx-auto text-cyan-300 mb-4" />
                        <h2 className="text-5xl font-black text-white mb-4">
                            Infraestructura Serverless en la Nube
                        </h2>
                        <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                            Arquitectura moderna que escala automáticamente y reduce costos operativos en 70%
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="card-item bg-red-500/20 backdrop-blur-lg rounded-3xl p-8 border-2 border-red-500/50">
                            <div className="flex items-center gap-4 mb-6">
                                <Server className="w-12 h-12 text-red-300" />
                                <h3 className="text-2xl font-bold text-white">VPS Tradicional</h3>
                            </div>
                            <div className="space-y-3 text-red-100">
                                <p>❌ Servidor dedicado 24/7 ($200/mes)</p>
                                <p>❌ Escalabilidad manual y lenta</p>
                                <p>❌ Requiere DevOps especializado</p>
                                <p>❌ Downtime durante actualizaciones</p>
                                <p>❌ Pago fijo independiente del tráfico</p>
                            </div>
                        </div>

                        <div className="card-item bg-green-500/20 backdrop-blur-lg rounded-3xl p-8 border-2 border-green-500/50 shadow-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <Cloud className="w-12 h-12 text-green-300" />
                                <h3 className="text-2xl font-bold text-white">Serverless Cloud ✓</h3>
                            </div>
                            <div className="space-y-3 text-green-100">
                                <p>✅ Pay-per-use ($60/mes promedio)</p>
                                <p>✅ Auto-scaling instantáneo</p>
                                <p>✅ Infraestructura gestionada</p>
                                <p>✅ Zero downtime deployments</p>
                                <p>✅ CDN global incluido</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="card-item bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                            <Zap className="w-12 h-12 text-yellow-300 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">Vercel Edge</h4>
                            <p className="text-cyan-100 mb-4">
                                Edge Functions ejecutadas en 300+ ubicaciones globales
                            </p>
                            <div className="text-sm text-cyan-200 space-y-1">
                                <p>• Latencia: &lt;50ms promedio</p>
                                <p>• Uptime: 99.99% SLA</p>
                                <p>• Deploy: &lt;30 segundos</p>
                            </div>
                        </div>

                        <div className="card-item bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                            <Database className="w-12 h-12 text-green-300 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">Supabase PostgreSQL</h4>
                            <p className="text-cyan-100 mb-4">
                                Base de datos relacional con superpoderes
                            </p>
                            <div className="text-sm text-cyan-200 space-y-1">
                                <p>• Backups automáticos diarios</p>
                                <p>• Replicación multi-región</p>
                                <p>• Row Level Security nativo</p>
                            </div>
                        </div>

                        <div className="card-item bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                            <Globe className="w-12 h-12 text-blue-300 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">Edge Network</h4>
                            <p className="text-cyan-100 mb-4">
                                Contenido servido desde el servidor más cercano
                            </p>
                            <div className="text-sm text-cyan-200 space-y-1">
                                <p>• 300+ PoPs worldwide</p>
                                <p>• Cache inteligente</p>
                                <p>• Compresión Brotli</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Mobile & Social */}
            <section
                ref={el => sectionsRef.current[4] = el}
                className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900 py-20"
            >
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Smartphone className="w-16 h-16 mx-auto text-amber-300 mb-4" />
                        <h2 className="text-5xl font-black text-white mb-4">
                            Mobile-First & Social Commerce
                        </h2>
                        <p className="text-xl text-amber-200 max-w-3xl mx-auto">
                            73% de nuestro tráfico es móvil. Diseñamos primero para pantallas pequeñas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                        <div className="card-item bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
                            <Smartphone className="w-32 h-32 mx-auto text-amber-300 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">Optimización Móvil</h3>
                            <div className="space-y-4 text-amber-100">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                    <p><strong>Touch-First:</strong> Botones mínimo 44x44px, gestos swipe nativos</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                    <p><strong>Redes 4G:</strong> Imágenes WebP, lazy loading, &lt;2MB página</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                    <p><strong>PWA:</strong> Instalable, funciona offline, notificaciones push</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                    <p><strong>Performance:</strong> Lighthouse Score 95+, FCP &lt;1.2s</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="card-item bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                                <h4 className="text-xl font-bold text-white mb-3">Instagram Shopping</h4>
                                <p className="text-amber-100">Catálogo sincronizado automáticamente. Usuarios compran sin salir de Instagram.</p>
                            </div>
                            <div className="card-item bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                                <h4 className="text-xl font-bold text-white mb-3">Fotos → Checkout</h4>
                                <p className="text-amber-100">Post de receta con productos etiquetados. Click lleva directo al checkout pre-llenado.</p>
                            </div>
                            <div className="card-item bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                                <h4 className="text-xl font-bold text-white mb-3">Social Proof</h4>
                                <p className="text-amber-100">Reviews de Instagram importadas. UGC (contenido de usuarios) aumenta conversión 28%.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Seguridad */}
            <section
                ref={el => sectionsRef.current[5] = el}
                className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black py-20"
            >
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Shield className="w-16 h-16 mx-auto text-green-400 mb-4" />
                        <h2 className="text-5xl font-black text-white mb-4">
                            Seguridad Empresarial
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Protección multi-capa que cumple con GDPR, PCI-DSS y estándares internacionales
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="card-item bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-3xl p-8 border border-green-500/30">
                            <Lock className="w-16 h-16 text-green-400 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">SSL/TLS 1.3</h3>
                            <p className="text-gray-300 mb-4">Encriptación end-to-end de todas las comunicaciones</p>
                            <div className="text-sm text-gray-400 space-y-2">
                                <p>• Certificados auto-renovables</p>
                                <p>• Perfect Forward Secrecy</p>
                                <p>• HSTS habilitado</p>
                                <p>• A+ en SSL Labs</p>
                            </div>
                        </div>

                        <div className="card-item bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-8 border border-blue-500/30">
                            <Shield className="w-16 h-16 text-blue-400 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Row Level Security</h3>
                            <p className="text-gray-300 mb-4">PostgreSQL RLS - Control granular de acceso a datos</p>
                            <div className="text-sm text-gray-400 space-y-2">
                                <p>• Políticas a nivel de fila</p>
                                <p>• Aislamiento por usuario</p>
                                <p>• Auditoría automática</p>
                                <p>• Zero Trust Architecture</p>
                            </div>
                        </div>

                        <div className="card-item bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30">
                            <CheckCircle className="w-16 h-16 text-purple-400 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Pagos Tokenizados</h3>
                            <p className="text-gray-300 mb-4">Nunca almacenamos datos de tarjetas</p>
                            <div className="text-sm text-gray-400 space-y-2">
                                <p>• Stripe/PayPal integration</p>
                                <p>• PCI-DSS Level 1 compliant</p>
                                <p>• 3D Secure 2.0</p>
                                <p>• Detección de fraude ML</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-3xl p-10 border border-orange-500/30">
                        <h4 className="text-3xl font-bold text-white mb-6 text-center">Garantías de Privacidad</h4>
                        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                            <div>
                                <p className="font-semibold text-white mb-2">✓ GDPR Compliant</p>
                                <p className="text-sm">Derecho al olvido, portabilidad de datos, consentimiento explícito</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white mb-2">✓ Datos en Chile</p>
                                <p className="text-sm">Servidores en Santiago, cumple Ley 19.628 de Protección de Datos</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white mb-2">✓ Auditorías Externas</p>
                                <p className="text-sm">Pentesting trimestral, certificación ISO 27001 en proceso</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white mb-2">✓ Transparencia Total</p>
                                <p className="text-sm">Dashboard de privacidad, exportación de datos en 1-click</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: IA */}
            <section
                ref={el => sectionsRef.current[6] = el}
                className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 py-20"
            >
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Brain className="w-16 h-16 mx-auto text-fuchsia-300 mb-4" />
                        <h2 className="text-5xl font-black text-white mb-4">
                            Inteligencia Artificial Aplicada
                        </h2>
                        <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                            Tres capas de IA que personalizan la experiencia y optimizan las operaciones
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="card-item bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                            <div className="bg-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">1. GenAI - Gemini 2.5 Flash</h3>
                            <div className="space-y-3 text-purple-100">
                                <p className="font-semibold text-lg text-pink-200">Chef Virtual Inteligente</p>
                                <p>• Sugiere recetas basadas en stock disponible</p>
                                <p>• Respuestas en tiempo real (&lt;500ms)</p>
                                <p>• Contexto conversacional persistente</p>
                                <p>• Adaptación a preferencias dietéticas</p>
                            </div>
                            <div className="mt-6 bg-white/10 rounded-xl p-4">
                                <p className="text-sm text-purple-200"><strong>Caso de uso:</strong> Usuario pregunta "¿Qué puedo cocinar con tomates?" → IA sugiere 5 recetas y agrega ingredientes faltantes al carrito</p>
                            </div>
                        </div>

                        <div className="card-item bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                            <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <BarChart3 className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">2. Supervisado - KNN</h3>
                            <div className="space-y-3 text-purple-100">
                                <p className="font-semibold text-lg text-blue-200">Recomendaciones Inteligentes</p>
                                <p>• Productos complementarios (tomate → albahaca)</p>
                                <p>• Basado en compras históricas</p>
                                <p>• Precisión del 87% en predicciones</p>
                                <p>• Actualización en tiempo real</p>
                            </div>
                            <div className="mt-6 bg-white/10 rounded-xl p-4">
                                <p className="text-sm text-purple-200"><strong>Algoritmo:</strong> K-Nearest Neighbors con k=5, distancia euclidiana, entrenado con 50K transacciones</p>
                            </div>
                        </div>

                        <div className="card-item bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                            <div className="bg-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <Users className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">3. No Supervisado - K-Means</h3>
                            <div className="space-y-3 text-purple-100">
                                <p className="font-semibold text-lg text-purple-200">Segmentación de Clientes</p>
                                <p>• Clústeres: Vegetarianos, Familias, Gourmet</p>
                                <p>• Ofertas personalizadas por segmento</p>
                                <p>• Re-clustering semanal automático</p>
                                <p>• Incremento del 34% en conversión</p>
                            </div>
                            <div className="mt-6 bg-white/10 rounded-xl p-4">
                                <p className="text-sm text-purple-200"><strong>Features:</strong> Frecuencia de compra, categorías preferidas, ticket promedio, horarios de compra</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
                        <h4 className="text-3xl font-bold text-white mb-6 text-center">Impacto Medible</h4>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-black text-orange-400 mb-2">+42%</div>
                                <p className="text-purple-100">Engagement con IA</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-pink-400 mb-2">87%</div>
                                <p className="text-purple-100">Precisión KNN</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-blue-400 mb-2">+34%</div>
                                <p className="text-purple-100">Conversión</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-green-400 mb-2">3.2x</div>
                                <p className="text-purple-100">AOV (Ticket Promedio)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8: Logística */}
            <section
                ref={el => sectionsRef.current[7] = el}
                className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 py-20"
            >
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <TruckIcon className="w-16 h-16 mx-auto text-orange-300 mb-4" />
                        <h2 className="text-5xl font-black text-white mb-4">
                            Logística Cross-Docking Híbrido
                        </h2>
                        <p className="text-xl text-orange-200 max-w-3xl mx-auto">
                            Sistema de distribución sin inventario que garantiza frescura máxima y reduce costos en 40%
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 mb-12">
                        <div className="flex items-center justify-between mb-8">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 mx-auto text-green-400 mb-2" />
                                <h4 className="text-xl font-bold text-white">Fundo</h4>
                                <p className="text-orange-200 text-sm">Cosecha 6:00 AM</p>
                            </div>

                            <div className="flex-1 mx-8">
                                <div className="relative">
                                    <div className="h-2 bg-gradient-to-r from-green-500 to-orange-500 rounded-full"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <TruckIcon className="w-8 h-8 text-white animate-pulse" />
                                    </div>
                                </div>
                                <p className="text-center text-orange-200 text-sm mt-2">Milk Run - 2-3 horas</p>
                            </div>

                            <div className="text-center">
                                <Package className="w-16 h-16 mx-auto text-orange-400 mb-2" />
                                <h4 className="text-xl font-bold text-white">Cross-Docking</h4>
                                <p className="text-orange-200 text-sm">Consolidación 10:00 AM</p>
                            </div>

                            <div className="flex-1 mx-8">
                                <div className="relative">
                                    <div className="h-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <TruckIcon className="w-8 h-8 text-white animate-pulse" />
                                    </div>
                                </div>
                                <p className="text-center text-orange-200 text-sm mt-2">Last Mile - 4-6 horas</p>
                            </div>

                            <div className="text-center">
                                <Users className="w-16 h-16 mx-auto text-blue-400 mb-2" />
                                <h4 className="text-xl font-bold text-white">Cliente</h4>
                                <p className="text-orange-200 text-sm">Entrega 18:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="card-item bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                            <div className="bg-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <MapPin className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">1. Milk Run Matutino</h3>
                            <p className="text-orange-100 mb-4">Recolección eficiente por múltiples fundos en una sola ruta</p>
                            <div className="text-sm text-orange-200 space-y-2">
                                <p>• Ruta optimizada con IA</p>
                                <p>• 8-12 fundos por ruta</p>
                                <p>• Temperatura controlada</p>
                                <p>• Trazabilidad GPS en tiempo real</p>
                            </div>
                        </div>

                        <div className="card-item bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                            <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <Package className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">2. Cross-Docking</h3>
                            <p className="text-orange-100 mb-4">Centro de consolidación sin almacenamiento</p>
                            <div className="text-sm text-orange-200 space-y-2">
                                <p>• Productos NO se almacenan</p>
                                <p>• Armado inmediato de pedidos</p>
                                <p>• Control de calidad express</p>
                                <p>• Tiempo en centro: &lt;2 horas</p>
                            </div>
                        </div>

                        <div className="card-item bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                            <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <TruckIcon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">3. Last Mile</h3>
                            <p className="text-orange-100 mb-4">Entrega el mismo día al cliente final</p>
                            <div className="text-sm text-orange-200 space-y-2">
                                <p>• Ventanas horarias de 2 horas</p>
                                <p>• Tracking en tiempo real</p>
                                <p>• Notificaciones automáticas</p>
                                <p>• Tasa de éxito: 98.5%</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-3xl p-10 border border-green-500/30 text-center">
                        <h3 className="text-4xl font-black text-white mb-6">Cero Inventario, Máxima Frescura</h3>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div>
                                <div className="text-5xl font-black text-green-400 mb-2">12h</div>
                                <p className="text-orange-100">Campo → Mesa</p>
                            </div>
                            <div>
                                <div className="text-5xl font-black text-orange-400 mb-2">-40%</div>
                                <p className="text-orange-100">Costos vs Tradicional</p>
                            </div>
                            <div>
                                <div className="text-5xl font-black text-blue-400 mb-2">98.5%</div>
                                <p className="text-orange-100">Entregas Exitosas</p>
                            </div>
                            <div>
                                <div className="text-5xl font-black text-purple-400 mb-2">0</div>
                                <p className="text-orange-100">Días en Inventario</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 9: Conclusiones */}
            <section
                ref={el => sectionsRef.current[8] = el}
                className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 py-20"
            >
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Award className="w-16 h-16 mx-auto text-emerald-300 mb-4" />
                        <h2 className="text-5xl font-black text-white mb-4">
                            Conclusiones
                        </h2>
                        <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
                            AgroConnect demuestra que la tecnología puede transformar industrias tradicionales
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 mb-12">
                        <h3 className="text-3xl font-bold text-white mb-8 text-center">AgroConnect Demuestra que es Posible:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Arquitecturas Modernas</h4>
                                    <p className="text-emerald-100">Headless + Microservicios + Serverless = Escalabilidad infinita con costos optimizados</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">IA Aplicada</h4>
                                    <p className="text-emerald-100">GenAI + ML Supervisado + No Supervisado = Personalización que aumenta conversión 34%</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Logística Eficiente</h4>
                                    <p className="text-emerald-100">Cross-Docking Híbrido = Cero inventario, máxima frescura, -40% costos</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Disrupción Real</h4>
                                    <p className="text-emerald-100">Eliminamos intermediarios, beneficiando a agricultores y consumidores por igual</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card-item bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-3xl p-10 border border-green-500/30 text-center">
                            <Users className="w-16 h-16 mx-auto text-green-400 mb-4" />
                            <h4 className="text-2xl font-bold text-white mb-3">Agricultor</h4>
                            <div className="text-4xl font-black text-green-400 mb-2">+60%</div>
                            <p className="text-emerald-100 text-lg">Ingresos vs Canal Tradicional</p>
                            <p className="text-emerald-200 text-sm mt-4">Precios justos, pago en 48h, sin intermediarios</p>
                        </div>

                        <div className="card-item bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-lg rounded-3xl p-10 border border-orange-500/30 text-center">
                            <ShoppingCart className="w-16 h-16 mx-auto text-orange-400 mb-4" />
                            <h4 className="text-2xl font-bold text-white mb-3">Consumidor</h4>
                            <div className="text-4xl font-black text-orange-400 mb-2">-30%</div>
                            <p className="text-emerald-100 text-lg">Precio vs Supermercado</p>
                            <p className="text-emerald-200 text-sm mt-4">Calidad superior, frescura garantizada, trazabilidad total</p>
                        </div>

                        <div className="card-item bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-10 border border-blue-500/30 text-center">
                            <Clock className="w-16 h-16 mx-auto text-blue-400 mb-4" />
                            <h4 className="text-2xl font-bold text-white mb-3">Entrega</h4>
                            <div className="text-4xl font-black text-blue-400 mb-2">24h</div>
                            <p className="text-emerald-100 text-lg">Del Campo a tu Mesa</p>
                            <p className="text-emerald-200 text-sm mt-4">98.5% entregas exitosas, tracking en tiempo real</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 10: Bibliografía */}
            <section
                ref={el => sectionsRef.current[9] = el}
                className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20"
            >
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-black text-white mb-12">Bibliografía</h2>

                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 mb-12 text-left">
                        <div className="space-y-4 text-blue-100 text-lg">
                            <p>Kotler, P. (2021). <em>Marketing 5.0: Technology for Humanity</em>. Wiley.</p>
                            <p>Newman, S. (2021). <em>Building Microservices</em> (2nd ed.). O'Reilly Media.</p>
                            <p>Russell, S. & Norvig, P. (2021). <em>Artificial Intelligence: A Modern Approach</em> (4th ed.). Pearson.</p>
                            <p>Vercel Inc. (2024). <em>Edge Functions Documentation</em>. https://vercel.com/docs</p>
                            <p>Supabase Inc. (2024). <em>PostgreSQL Row Level Security Guide</em>. https://supabase.com/docs</p>
                            <p>Google DeepMind. (2024). <em>Gemini API Documentation</em>. https://ai.google.dev</p>
                        </div>
                    </div>

                    <div className="mb-12">
                        <Leaf className="w-24 h-24 mx-auto text-orange-400 mb-6 animate-pulse" />
                        <h1 className="text-6xl font-black text-white mb-4">¡Muchas Gracias!</h1>
                        <p className="text-2xl text-blue-200">AgroConnect - Innovación que Conecta</p>
                    </div>

                    <div className="flex justify-center gap-8 text-blue-200">
                        <div className="flex items-center gap-2">
                            <Globe className="w-6 h-6" />
                            <span>agroconnect.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Package className="w-6 h-6" />
                            <span>24h Delivery</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="w-6 h-6" />
                            <span>Premio Innovación 2024</span>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default VideoPresentation;
