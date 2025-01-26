import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { ProductsSection } from '../components/sections/ProductsSection';
import { productsService } from '../services/products';
import { useCategories } from '../hooks/useCategories';
import { Loader } from '../components/common/Loader';
import type { Product } from '../services/products';

export const CategoryPage: FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const numericCategoryId = Number(categoryId);
  const { categories } = useCategories();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = categories.find(c => c.id === numericCategoryId);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!categoryId) return;
      try {
        setLoading(true);
        const data = await productsService.getProductsByCategory(numericCategoryId);
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId, numericCategoryId]);

  if (loading) return <Loader />;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
  if (!category) return <div className="text-center py-10">Category not found</div>;

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-primary-dark mb-2">
          {category.name}
        </h1>
        <p className="text-primary-dark/70 mb-8">{category.description}</p>

        <ProductsSection 
          products={products} 
          isLoaded={!loading} 
        />
      </div>
    </MainLayout>
  );
}; 