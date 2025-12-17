export interface Farmer {
  id: string;
  name: string;
  location: string;
  story: string;
  avatarUrl: string;
  rating: number;
  mainCrop?: string;
  imageUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Fruta' | 'Verdura' | 'Procesado';
  price: number;
  unit: string;
  imageUrl: string;
  farmer: Farmer;
  isSubscriptionAvailable: boolean;
  harvestDate: string;
  traceabilityId: string;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  algorithm: 'KNN' | 'K-Means';
}

export interface SubscriptionPlan {
  id: string;
  title: string;
  price: number;
  frequency: string;
  description: string;
  features: string[];
  recommendedTag?: string; // For AI/K-Means highlighting
  imageUrl: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}