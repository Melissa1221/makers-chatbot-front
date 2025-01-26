import { FC } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useProducts } from '../../hooks/useProducts';
import { useCategories } from '../../hooks/useCategories';
import { Loader } from '../common/Loader';

ChartJS.register(ArcElement, Tooltip, Legend);

export const CategoryDistribution: FC = () => {
  const { products, loading } = useProducts();
  const { categories } = useCategories();

  if (loading) return <Loader />;

  const distribution = categories.map(category => ({
    name: category.name,
    count: products.filter(p => p.category_id === category.id).length
  }));

  const data = {
    labels: distribution.map(d => d.name),
    datasets: [
      {
        data: distribution.map(d => d.count),
        backgroundColor: [
          'rgba(147, 51, 234, 0.7)',  // purple
          'rgba(109, 190, 165, 0.7)', // green
          'rgba(133, 150, 202, 0.7)', // blue
          'rgba(249, 115, 22, 0.7)',  // orange
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-primary-dark mb-4">Category Distribution</h2>
      <div className="h-64">
        <Pie data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
}; 