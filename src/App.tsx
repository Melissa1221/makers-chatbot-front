import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CategoryProvider } from './contexts/CategoryContext';
import { RecommendationProvider } from './contexts/RecommendationContext';
import { useProducts } from './hooks/useProducts';
import { AppRoutes } from './routes/AppRoutes';

export const App: FC = () => {
  const { products } = useProducts();

  return (
    <BrowserRouter>
      <CategoryProvider>
        <RecommendationProvider products={products}>
          <AppRoutes />
        </RecommendationProvider>
      </CategoryProvider>
    </BrowserRouter>
  );
};
