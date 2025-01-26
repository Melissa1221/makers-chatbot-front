import { FC } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { Loader } from '../common/Loader';

export const RecentProducts: FC = () => {
  const { products, loading } = useProducts();

  if (loading) return <Loader />;

  const recentProducts = [...products]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 5);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-primary-dark mb-4">Recent Products</h2>
      <div className="space-y-3">
        {recentProducts.map(product => (
          <div key={product.id} className="flex justify-between items-center p-3 bg-gradient-purple/5 rounded-xl">
            <div>
              <p className="font-medium text-primary-dark">{product.name}</p>
              <p className="text-sm text-primary-dark/70">${product.price}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-primary-green">Stock: {product.stock}</p>
              <p className="text-xs text-primary-dark/50">
                {new Date(product.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 