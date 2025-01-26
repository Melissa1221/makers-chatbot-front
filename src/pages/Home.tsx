import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HeroSection } from '../components/sections/HeroSection';
import { ProductsSection } from '../components/sections/ProductsSection';
import { Button } from '../components/common/Button';
import { useProducts } from '../hooks/useProducts';
import { useSearch } from '../hooks/useSearch';

export const Home: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { products, loading, error } = useProducts();
  const { searchTerm, handleSearch } = useSearch(products);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <MainLayout>
      <HeroSection 
        isLoaded={isLoaded} 
        searchTerm={searchTerm}
        onSearch={handleSearch}
      />
      {error ? (
        <div className="text-center text-red-500 py-10">
          {error}
        </div>
      ) : (
        <ProductsSection 
          isLoaded={isLoaded && !loading} 
        />
      )}
      
      {/* Chat Bot Prompt */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link to="/chat">
          <Button 
            className="p-6 shadow-xl hover:shadow-2xl animate-morphing group"
            withGradient
          >
            <span className="flex items-center gap-3">
              <span className="text-lg">Habla con MakeBot!</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:rotate-12 transition-transform duration-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </span>
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
}; 