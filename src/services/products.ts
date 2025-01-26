import { api } from './api';

interface ProductSpecs {
  ram?: string;
  storage?: string;
  processor?: string;
  screen?: string;
  camera?: string;
  battery?: string;
  connectivity?: string;
  features?: string[];
  sensors?: string[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  category_id: number;
  image_url: string;
  specs: ProductSpecs;
  labels: string[];
  created_at: string;
  updated_at: string;
}

export const productsService = {
  async getAllProducts(): Promise<Product[]> {
    const response = await api.get<Product[]>('/products');
    return response;
  },

  async getProduct(id: string): Promise<Product> {
    const response = await api.get<Product>(`/products/${id}`);
    return response;
  },

  async getProductsByCategory(categoryId: number): Promise<Product[]> {
    const response = await api.get<Product[]>(`/products/category/${categoryId}`);
    return response;
  }
}; 