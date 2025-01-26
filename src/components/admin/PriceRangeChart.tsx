import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useProducts } from '../../hooks/useProducts';
import { Loader } from '../common/Loader';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const PriceRangeChart: FC = () => {
  const { products, loading } = useProducts();

  if (loading) return <Loader />;

  const ranges = [
    { label: '$0-$100', min: 0, max: 100 },
    { label: '$100-$500', min: 100, max: 500 },
    { label: '$500-$1000', min: 500, max: 1000 },
    { label: '$1000+', min: 1000, max: Infinity }
  ];

  const distribution = ranges.map(range => ({
    ...range,
    count: products.filter(p => p.price >= range.min && p.price < range.max).length
  }));

  const data = {
    labels: distribution.map(d => d.label),
    datasets: [
      {
        label: 'Products',
        data: distribution.map(d => d.count),
        backgroundColor: 'rgba(133, 150, 202, 0.7)',
        borderColor: 'rgba(133, 150, 202, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-primary-dark mb-4">Price Distribution</h2>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}; 