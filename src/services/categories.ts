import { api } from './api';

export interface Category {
  id: string;
  name: string;
  description: string;
}

interface CategoriesResponse {
  categories: Category[];
}

export const categoriesService = {
  async getCategories(): Promise<Category[]> {
    const response = await api.get<CategoriesResponse>('/categories');
    return response.categories;
  }
}; 