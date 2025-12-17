import { Product, Recommendation, SubscriptionPlan, Farmer } from '../types';

export const featuredFarmers: Farmer[] = [
  {
    id: 'f1',
    name: 'Don José',
    location: 'Limache, Valparaíso',
    story: '30 años cultivando tomates con semillas ancestrales. Su fundo utiliza riego por goteo para maximizar la eficiencia hídrica.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150',
    rating: 4.8,
    mainCrop: 'Tomates y Hortalizas',
    imageUrl: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?fit=crop&w=800&q=80'
  },
  {
    id: 'f2',
    name: 'María González',
    location: 'Curacaví, RM',
    story: 'Pionera en hidroponía sustentable. María fundó su cooperativa para apoyar a mujeres rurales en la tecnología agrícola.',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=150&h=150',
    rating: 4.9,
    mainCrop: 'Lechugas Hidropónicas',
    imageUrl: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?fit=crop&w=800&q=80'
  },
  {
    id: 'f3',
    name: 'Fundo El Sol',
    location: 'Mallarauco',
    story: 'Agricultura familiar de 4ta generación. Especialistas en cítricos orgánicos sin pesticidas.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=150&h=150',
    rating: 4.7,
    mainCrop: 'Cítricos y Frutas',
    imageUrl: 'https://images.unsplash.com/photo-1621459529362-e6490bb598ba?fit=crop&w=800&q=80'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Tomate Limachino Premium',
    category: 'Verdura',
    price: 1500,
    unit: 'kg',
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1618375531912-867984bdfdfc?fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1570586437263-ab629fhdca6?fit=crop&w=800&q=80',
    farmer: {
        id: 'f4',
        name: 'Pedro "El Huaso"',
        location: 'Limache, Valparaíso',
        story: 'Especialista en tubérculos y hortalizas de guarda.',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150',
        rating: 4.8,
        mainCrop: 'Tubérculos',
        imageUrl: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?fit=crop&w=800&q=80'
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
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?fit=crop&w=800&q=80'
  },
  {
    id: 's2',
    title: 'Canasta Familiar',
    price: 28990,
    frequency: 'semanal',
    description: 'Pensada para familias de 4 personas.',
    features: ['8-10kg de verduras variadas', '4 tipos de frutas', 'Huevos de campo (12 un)', 'Regalo sorpresa del agricultor'],
    recommendedTag: 'Más Popular',
    imageUrl: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?fit=crop&w=800&q=80'
  },
  {
    id: 's3',
    title: 'Canasta Vegetariana',
    price: 24990,
    frequency: 'semanal',
    description: 'Selección premium solo vegetales y procesados.',
    features: ['8kg de verduras premium', 'Queso de cabra artesanal', 'Mermelada casera', 'Sin productos animales'],
    recommendedTag: 'Tu Recomendación IA (K-Means)',
    imageUrl: 'https://images.unsplash.com/photo-1595855709915-3977535ec83d?fit=crop&w=800&q=80'
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