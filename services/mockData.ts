import { Product, Recommendation, SubscriptionPlan, Farmer } from '../types';

export const featuredFarmers: Farmer[] = [
  {
    id: 'f1',
    name: 'Don José',
    location: 'Limache, Valparaíso',
    story: '30 años cultivando tomates con semillas ancestrales. Su fundo utiliza riego por goteo para maximizar la eficiencia hídrica.',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    rating: 4.8,
    mainCrop: 'Tomates y Hortalizas',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80'
  },
  {
    id: 'f2',
    name: 'María González',
    location: 'Curacaví, RM',
    story: 'Pionera en hidroponía sustentable. María fundó su cooperativa para apoyar a mujeres rurales en la tecnología agrícola.',
    avatarUrl: 'https://i.pravatar.cc/150?img=47',
    rating: 4.9,
    mainCrop: 'Lechugas Hidropónicas',
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80'
  },
  {
    id: 'f3',
    name: 'Fundo El Sol',
    location: 'Mallarauco',
    story: 'Agricultura familiar de 4ta generación. Especialistas en cítricos orgánicos sin pesticidas.',
    avatarUrl: 'https://i.pravatar.cc/150?img=33',
    rating: 4.7,
    mainCrop: 'Cítricos y Frutas',
    imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Tomate Limachino Premium',
    category: 'Verdura',
    price: 1500,
    unit: 'kg',
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=80',
    farmer: featuredFarmers[0],
    isSubscriptionAvailable: true,
    harvestDate: '2023-10-25',
    traceabilityId: 'QR-8821'
  },
  {
    id: '2',
    name: 'Lechuga Costina Hidropónica',
    category: 'Verdura',
    price: 990,
    unit: 'un',
    imageUrl: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=800&q=80',
    farmer: featuredFarmers[1],
    isSubscriptionAvailable: true,
    harvestDate: '2023-10-26',
    traceabilityId: 'QR-9932'
  },
  {
    id: '3',
    name: 'Naranjas de Mesa Dulces',
    category: 'Fruta',
    price: 2200,
    unit: 'malla 2kg',
    imageUrl: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=800&q=80',
    farmer: featuredFarmers[2],
    isSubscriptionAvailable: false,
    harvestDate: '2023-10-20',
    traceabilityId: 'QR-1123'
  },
  {
    id: '4',
    name: 'Pack Albahaca Fresca',
    category: 'Verdura',
    price: 1200,
    unit: 'ramo',
    imageUrl: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=800&q=80',
    farmer: featuredFarmers[0],
    isSubscriptionAvailable: true,
    harvestDate: '2023-10-26',
    traceabilityId: 'QR-8825'
  },
  {
    id: '5',
    name: 'Zapallo Camote Trozado',
    category: 'Verdura',
    price: 1800,
    unit: 'kg',
    imageUrl: 'https://images.unsplash.com/photo-1600454811205-56c551caaabb?w=800&q=80',
    farmer: {
        id: 'f4',
        name: 'Pedro "El Huaso"',
        location: 'Limache, Valparaíso',
        story: 'Especialista en tubérculos y hortalizas de guarda.',
        avatarUrl: 'https://i.pravatar.cc/150?img=15',
        rating: 4.8,
        mainCrop: 'Tubérculos',
        imageUrl: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=800&q=80'
    },
    isSubscriptionAvailable: true,
    harvestDate: '2023-10-22',
    traceabilityId: 'QR-7765'
  }
];

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 's1',
    title: 'Canasta Básica',
    price: 15990,
    frequency: 'semanal',
    description: 'Ideal para parejas o consumo individual.',
    features: ['5-6kg de verduras de estación', '2 tipos de frutas', 'Huevos de campo (6 un)', 'Recetas incluidas'],
    imageUrl: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80'
  },
  {
    id: 's2',
    title: 'Canasta Familiar',
    price: 28990,
    frequency: 'semanal',
    description: 'Pensada para familias de 4 personas.',
    features: ['8-10kg de verduras variadas', '4 tipos de frutas', 'Huevos de campo (12 un)', 'Regalo sorpresa del agricultor'],
    recommendedTag: 'Más Popular',
    imageUrl: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=800&q=80'
  },
  {
    id: 's3',
    title: 'Canasta Vegetariana',
    price: 24990,
    frequency: 'semanal',
    description: 'Selección premium solo vegetales y procesados.',
    features: ['8kg de verduras premium', 'Queso de cabra artesanal', 'Mermelada casera', 'Sin productos animales'],
    recommendedTag: 'Tu Recomendación IA (K-Means)',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80'
  }
];

export const aiFeatures: Recommendation[] = [
  {
    id: 'knn',
    title: 'Recomendaciones Inteligentes (KNN)',
    description: 'Basado en tu historial (ej: compraste Tomates), nuestro algoritmo K-Nearest Neighbors identifica patrones de compra similares y te sugiere "Albahaca" y "Queso Fresco" con un 95% de afinidad.',
    algorithm: 'KNN'
  },
  {
    id: 'kmeans',
    title: 'Segmentación de Clientes (K-Means)',
    description: 'El algoritmo agrupa comportamientos de compra sin etiquetas previas. Si compras muchas verduras y cero carne, te clasificamos en el clúster "Vegetariano" para personalizar tus ofertas.',
    algorithm: 'K-Means'
  }
];