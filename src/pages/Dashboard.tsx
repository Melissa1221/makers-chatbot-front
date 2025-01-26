import { FC } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { StockMetrics } from '../components/admin/StockMetrics';
import { CategoryDistribution } from '../components/admin/CategoryDistribution';
import { PriceRangeChart } from '../components/admin/PriceRangeChart'
import { RecentProducts } from '../components/admin/RecentProducts';

export const Dashboard: FC = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-primary-dark mb-8">
          Dashboard
          <div className="h-1 w-20 bg-gradient-to-r from-primary-purple to-primary-green rounded-full mt-2" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stock Overview */}
          <StockMetrics />
          
          {/* Category Distribution */}
          <CategoryDistribution />
          
          {/* Price Range Distribution */}
          <PriceRangeChart />
          
          {/* Recent Products */}
          <RecentProducts />
        </div>
      </div>
    </MainLayout>
  );
}; 