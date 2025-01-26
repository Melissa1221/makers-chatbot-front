import { FC } from 'react';
import { ProductCard } from '../products/ProductCard';
import { useRecommendations } from '../../contexts/RecommendationContext';

interface ProductsSectionProps {
  isLoaded: boolean;
}

export const ProductsSection: FC<ProductsSectionProps> = ({ isLoaded }) => {
  const { 
    highlyRecommended, 
    recommended, 
    notRecommended,
    recentlyViewed,
    loading, 
    hasInteracted,
    currentSection,
    trackProductView,
    changeSection
  } = useRecommendations();

  const sections = [
    { id: 'all' as const, name: 'Todos los Productos' },
    { id: 'highly_recommended' as const, name: 'Altamente Recomendados' },
    { id: 'recommended' as const, name: 'Recomendados para ti' },
    { id: 'others' as const, name: 'Otros Productos' }
  ] as const;

  const renderProducts = (products: typeof highlyRecommended) => (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {products.map((product, index) => (
        <div 
          key={product.id}
          className={`opacity-0 ${isLoaded && !loading ? 'opacity-100' : ''}`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <ProductCard 
            id={product.id}
            title={product.name}
            price={product.price}
            image_url={product.image_url}
            onClick={() => trackProductView(product)}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 space-y-16">
        {/* Navigation Tabs - Always visible */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => changeSection(section.id)}
              className={`px-6 py-3 rounded-full transition-all whitespace-nowrap
                ${currentSection === section.id
                  ? 'bg-gradient-to-r from-primary-purple to-primary-green text-white shadow-lg'
                  : 'bg-gradient-purple/10 text-primary-dark hover:bg-gradient-purple/20'
                }`}
            >
              {section.name}
            </button>
          ))}
        </div>

        {/* Recently Viewed */}
        {recentlyViewed.length > 0 && (
          <section className="bg-gradient-purple/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-8 text-primary-dark">
              Vistos Recientemente
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {recentlyViewed.map(product => (
                <div key={product.id}>
                  <ProductCard 
                    id={product.id}
                    title={product.name}
                    price={product.price}
                    image_url={product.image_url}
                    onClick={() => trackProductView(product)}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Main Content */}
        <section>
          {currentSection === 'all' && (
            <>
              <h2 className="text-4xl font-bold mb-12 text-primary-dark">
                Todos los Productos
                <div className="h-1.5 w-24 bg-gradient-to-r from-primary-purple to-primary-green rounded-full mt-3 animate-pulse" />
              </h2>
              {renderProducts([...highlyRecommended, ...recommended, ...notRecommended])}
            </>
          )}
          
          {currentSection === 'highly_recommended' && highlyRecommended.length > 0 && (
            <>
              <h2 className="text-4xl font-bold mb-12 text-primary-dark">
                Altamente Recomendados
                <div className="h-1.5 w-24 bg-gradient-to-r from-primary-purple to-primary-green rounded-full mt-3 animate-pulse" />
              </h2>
              {renderProducts(highlyRecommended)}
            </>
          )}
          
          {currentSection === 'recommended' && recommended.length > 0 && (
            <>
              <h2 className="text-4xl font-bold mb-12 text-primary-dark">
                Recomendados para ti
                <div className="h-1.5 w-24 bg-gradient-to-r from-primary-purple to-primary-green rounded-full mt-3 animate-pulse" />
              </h2>
              {renderProducts(recommended)}
            </>
          )}
          
          {currentSection === 'others' && notRecommended.length > 0 && (
            <>
              <h2 className="text-4xl font-bold mb-12 text-primary-dark">
                Otros Productos
                <div className="h-1.5 w-24 bg-gradient-to-r from-primary-purple to-primary-green rounded-full mt-3 animate-pulse" />
              </h2>
              {renderProducts(notRecommended)}
            </>
          )}
        </section>
      </div>
    </div>
  );
}; 