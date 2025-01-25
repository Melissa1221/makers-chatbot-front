import { FC } from 'react';
import { ProductCard } from '../products/ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  imageUrl: string;
}

interface ProductsSectionProps {
  products: Product[];
  isLoaded: boolean;
}

export const ProductsSection: FC<ProductsSectionProps> = ({ products, isLoaded }) => {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4">
        <h2 className="text-4xl font-bold mb-12 text-primary-dark">
          Recomendado para ti
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary-purple to-primary-green rounded-full mt-3 animate-pulse" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`opacity-0 ${isLoaded ? 'opacity-100' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 