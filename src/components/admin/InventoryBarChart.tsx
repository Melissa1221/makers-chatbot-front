import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { useProducts } from '../../hooks/useProducts';
import { useCategories } from '../../hooks/useCategories';
import { Loader } from '../common/Loader';

export const InventoryBarChart: FC = () => {
  const { products, loading } = useProducts();
  const { categories } = useCategories();

  if (loading) return <Loader />;

  const inventoryByCategory = categories.map(category => ({
    name: category.name,
    stock: products
      .filter(p => p.category_id === category.id)
      .reduce((acc, p) => acc + p.stock, 0)
  }));

  const data = {
    labels: inventoryByCategory.map(c => c.name),
    datasets: [{
      label: 'Stock Available',
      data: inventoryByCategory.map(c => c.stock),
      backgroundColor: 'rgba(147, 51, 234, 0.7)',
      borderColor: 'rgba(147, 51, 234, 1)',
      borderWidth: 1,
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Inventory by Category'
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-primary-dark mb-4">Stock Distribution</h2>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}; 