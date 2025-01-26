import { FC } from 'react';
import { useRecommendations } from '../../contexts/RecommendationContext';

export const RecommendationMetrics: FC = () => {
  const { 
    highlyRecommended, 
    recommended, 
    notRecommended,
    recentlyViewed
  } = useRecommendations();

  const metrics = [
    {
      name: 'Altamente Recomendados',
      value: highlyRecommended.length,
      color: 'from-primary-purple to-primary-green'
    },
    {
      name: 'Recomendados',
      value: recommended.length,
      color: 'from-primary-green to-primary-purple'
    },
    {
      name: 'Otros Productos',
      value: notRecommended.length,
      color: 'from-primary-purple/70 to-primary-green/70'
    },
    {
      name: 'Vistos Recientemente',
      value: recentlyViewed.length,
      color: 'from-primary-green/70 to-primary-purple/70'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-primary-dark mb-6">Métricas de Recomendaciones</h2>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map(metric => (
          <div 
            key={metric.name}
            className="p-4 rounded-xl bg-gradient-purple/5"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-primary-purple to-primary-green bg-clip-text text-transparent">
              {metric.value}
            </div>
            <div className="text-sm text-primary-dark/70 mt-1">
              {metric.name}
            </div>
            <div 
              className={`h-1 w-full rounded-full mt-2 bg-gradient-to-r ${metric.color}`}
              style={{ width: `${(metric.value / Math.max(...metrics.map(m => m.value))) * 100}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}; 