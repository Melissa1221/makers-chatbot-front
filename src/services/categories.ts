import { api } from './api';

export interface Category {
  id: number;
  name: string;
  description: string;
  created_at: string;
}

export const categoriesService = {
  async getCategories(): Promise<Category[]> {
    const response = await api.get<Category[]>('/categories');
    return response;
  }
}; 