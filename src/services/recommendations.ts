import { api } from './api';

export type RecommendationType = 'highly_recommended' | 'recommended' | 'not_recommended';

export interface ProductRecommendation {
  product_id: number;
  recommendation_type: RecommendationType;
  score: number;
  updated_at: string;
}

export const recommendationsService = {
  async trackProductView(productId: number): Promise<void> {
    await api.post(`/recommendations/track/view/${productId}`);
  },

  async getProductRecommendation(productId: number): Promise<ProductRecommendation> {
    const response = await api.get<ProductRecommendation>(`/recommendations/product/${productId}`);
    return response;
  },

  async getRecommendationsByType(type: RecommendationType): Promise<ProductRecommendation[]> {
    const response = await api.get<ProductRecommendation[]>(`/recommendations/type/${type}`);
    return response;
  },

  async updateRecommendation(
    productId: number, 
    data: Pick<ProductRecommendation, 'recommendation_type' | 'score'>
  ): Promise<ProductRecommendation> {
    const response = await api.put<ProductRecommendation>(`/recommendations/product/${productId}`, data);
    return response;
  }
}; 