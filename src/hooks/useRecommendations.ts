import { useState } from 'react';
import { Product } from '../services/products';
import { recommendationsService } from '../services/recommendations';

interface UseRecommendationsResult {
  highlyRecommended: Product[];
  recommended: Product[];
  loading: boolean;
  error: string | null;
  hasInteracted: boolean;
  trackProductView: (productId: number) => Promise<void>;
}

export const useRecommendations = (products: Product[]): UseRecommendationsResult => {
  const [highlyRecommended, setHighlyRecommended] = useState<Product[]>([]);
  const [recommended, setRecommended] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const fetchRecommendations = async () => {
    try {
      setLoading(true);
      const [highlyRecommendedData, recommendedData] = await Promise.all([
        recommendationsService.getRecommendationsByType('highly_recommended'),
        recommendationsService.getRecommendationsByType('recommended')
      ]);

      setHighlyRecommended(
        highlyRecommendedData
          .map(rec => products.find(p => p.id === rec.product_id))
          .filter((p): p is Product => p !== undefined)
      );

      setRecommended(
        recommendedData
          .map(rec => products.find(p => p.id === rec.product_id))
          .filter((p): p is Product => p !== undefined)
      );

      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch recommendations');
    } finally {
      setLoading(false);
    }
  };

  const trackProductView = async (productId: number) => {
    try {
      await recommendationsService.trackProductView(productId);
      if (!hasInteracted) {
        setHasInteracted(true);
        await fetchRecommendations();
      }
    } catch (err) {
      console.error('Failed to track product view:', err);
    }
  };

  return {
    highlyRecommended,
    recommended,
    loading,
    error,
    hasInteracted,
    trackProductView
  };
}; 