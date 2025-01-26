import { FC } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { Loader } from '../common/Loader';

export const StockMetrics: FC = () => {
  const { products, loading } = useProducts();

  if (loading) return <Loader />;

  const metrics = {
    total: products.length,
    lowStock: products.filter(p => p.stock < 5).length,
    outOfStock: products.filter(p => p.stock === 0).length,
    averageStock: Math.round(products.reduce((acc, p) => acc + p.stock, 0) / products.length)
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-primary-dark mb-4">Stock Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-purple/10 rounded-xl p-4">
          <p className="text-sm text-primary-dark/70">Total Products</p>
          <p className="text-2xl font-bold text-primary-purple">{metrics.total}</p>
        </div>
        <div className="bg-gradient-red/10 rounded-xl p-4">
          <p className="text-sm text-primary-dark/70">Low Stock</p>
          <p className="text-2xl font-bold text-red-500">{metrics.lowStock}</p>
        </div>
        <div className="bg-gradient-green/10 rounded-xl p-4">
          <p className="text-sm text-primary-dark/70">Average Stock</p>
          <p className="text-2xl font-bold text-primary-green">{metrics.averageStock}</p>
        </div>
        <div className="bg-gradient-blue/10 rounded-xl p-4">
          <p className="text-sm text-primary-dark/70">Out of Stock</p>
          <p className="text-2xl font-bold text-primary-blue">{metrics.outOfStock}</p>
        </div>
      </div>
    </div>
  );
}; 