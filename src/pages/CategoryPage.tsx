import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { ProductsSection } from '../components/sections/ProductsSection';
import { productsService } from '../services/products';
import type { Product } from '../services/products';

export const CategoryPage: FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!categoryId) return;
      
      try {
        setLoading(true);
        const data = await productsService.getProductsByCategory(categoryId);
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    setIsLoaded(true);
  }, [categoryId]);

  return (
    <MainLayout>
      {error ? (
        <div className="text-center text-red-500 py-10">
          {error}
        </div>
      ) : (
        <ProductsSection 
          products={products.map(p => ({
            id: Number(p.id),
            title: p.name,
            price: p.price,
            category: p.category_id,
            imageUrl: `/placeholder-${p.category_id}.jpg`
          }))} 
          isLoaded={isLoaded && !loading} 
        />
      )}
    </MainLayout>
  );
}; 