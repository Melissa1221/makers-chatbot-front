import { FC } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { useCategories } from '../../hooks/useCategories';
import { Loader } from '../common/Loader';

const LOW_STOCK_THRESHOLD = 5;

export const LowStockTable: FC = () => {
  const { products, loading } = useProducts();
  const { categories } = useCategories();

  if (loading) return <Loader />;

  const lowStockProducts = products
    .filter(p => p.stock < LOW_STOCK_THRESHOLD)
    .map(p => ({
      ...p,
      categoryName: categories.find(c => c.id === p.category_id)?.name
    }));

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-primary-dark mb-4">Low Stock Alert</h2>
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gradient-purple/10">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-primary-dark">Product</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-primary-dark">Category</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-primary-dark">Stock</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary-dark/10">
            {lowStockProducts.map(product => (
              <tr key={product.id} className="hover:bg-gradient-purple/5">
                <td className="px-4 py-2 text-sm text-primary-dark">{product.name}</td>
                <td className="px-4 py-2 text-sm text-primary-dark">{product.categoryName}</td>
                <td className="px-4 py-2 text-sm text-red-500 font-medium">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}; 