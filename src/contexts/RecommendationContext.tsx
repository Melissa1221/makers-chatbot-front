import { createContext, useContext, FC, ReactNode, useState, useCallback, useEffect } from 'react';
import { Product } from '../services/products';
import { recommendationsService } from '../services/recommendations';

interface RecommendationContextType {
  highlyRecommended: Product[];
  recommended: Product[];
  notRecommended: Product[];
  recentlyViewed: Product[];
  loading: boolean;
  error: string | null;
  hasInteracted: boolean;
  currentSection: 'all' | 'recommended' | 'highly_recommended' | 'others';
  trackProductView: (product: Product) => Promise<void>;
  changeSection: (section: 'all' | 'recommended' | 'highly_recommended' | 'others') => void;
}

const RecommendationContext = createContext<RecommendationContextType | null>(null);

export const useRecommendations = () => {
  const context = useContext(RecommendationContext);
  if (!context) {
    throw new Error('useRecommendations must be used within RecommendationProvider');
  }
  return context;
};

interface RecommendationProviderProps {
  children: ReactNode;
  products: Product[];
}

export const RecommendationProvider: FC<RecommendationProviderProps> = ({ children, products }) => {
  const [highlyRecommended, setHighlyRecommended] = useState<Product[]>([]);
  const [recommended, setRecommended] = useState<Product[]>([]);
  const [notRecommended, setNotRecommended] = useState<Product[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentSection, setCurrentSection] = useState<'all' | 'recommended' | 'highly_recommended' | 'others'>('all');

  const fetchRecommendations = useCallback(async () => {
    try {
      setLoading(true);
      const [highlyRecommendedData, recommendedData] = await Promise.all([
        recommendationsService.getRecommendationsByType('highly_recommended'),
        recommendationsService.getRecommendationsByType('recommended')
      ]);

      // Map recommendation data to actual products
      const highlyRecommendedProducts = highlyRecommendedData
        .map(rec => products.find(p => p.id === rec.product_id))
        .filter((p): p is Product => p !== undefined);

      const recommendedProducts = recommendedData
        .map(rec => products.find(p => p.id === rec.product_id))
        .filter((p): p is Product => p !== undefined);

      // Not recommended are products that aren't in either category
      const notRecommendedProducts = products.filter(
        p => !highlyRecommendedProducts.some(hr => hr.id === p.id) &&
            !recommendedProducts.some(r => r.id === p.id)
      );

      setHighlyRecommended(highlyRecommendedProducts);
      setRecommended(recommendedProducts);
      setNotRecommended(notRecommendedProducts);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch recommendations');
    } finally {
      setLoading(false);
    }
  }, [products]);

  const trackProductView = useCallback(async (product: Product) => {
    try {
      // Send post request to track the view
      await recommendationsService.trackProductView(product.id);
      
      // Add to recently viewed
      setRecentlyViewed(prev => {
        const newViewed = [product, ...prev.filter(p => p.id !== product.id)].slice(0, 4);
        return newViewed;
      });

      if (!hasInteracted) {
        setHasInteracted(true);
      }
    } catch (err) {
      console.error('Failed to track product view:', err);
    }
  }, [hasInteracted]);

  const changeSection = useCallback((section: 'all' | 'recommended' | 'highly_recommended' | 'others') => {
    setCurrentSection(section);
  }, []);

  // Initial fetch of recommendations if there are products
  useEffect(() => {
    if (products.length > 0) {
      fetchRecommendations();
    }
  }, [products, fetchRecommendations]);

  return (
    <RecommendationContext.Provider
      value={{
        highlyRecommended,
        recommended,
        notRecommended,
        recentlyViewed,
        loading,
        error,
        hasInteracted,
        currentSection,
        trackProductView,
        changeSection
      }}
    >
      {children}
    </RecommendationContext.Provider>
  );
}; 