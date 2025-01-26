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
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  category: string;
  labels: string[];
  specs: ProductSpecs;
}

interface ProductsResponse {
  products: Product[];
}

interface SingleProductResponse {
  product: Product;
}

export const productsService = {
  async getAllProducts(): Promise<Product[]> {
    const response = await api.get<ProductsResponse>('/products');
    return response.products;
  },

  async getProduct(id: string): Promise<Product> {
    const response = await api.get<SingleProductResponse>(`/products/${id}`);
    return response.product;
  },

  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    const response = await api.get<ProductsResponse>(`/categories/${categoryId}/products`);
    return response.products;
  }
}; 