import { api } from './api';

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categoriesService = {
  async getCategories(): Promise<Category[]> {
    const response = await api.get<Category[]>('/categories');
    return response;
  }
}; 