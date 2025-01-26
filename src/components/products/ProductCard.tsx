import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image_url: string;
}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  price,
  image_url
}) => {
  return (
    <Link to={`/product/${id}`} className="block group">
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-purple to-primary-green rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
        <div className="relative bg-white rounded-2xl p-4">
          <div className="aspect-square bg-gradient-to-br from-gradient-purple/20 to-gradient-green/20 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <img 
              src={image_url} 
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-primary-dark group-hover:text-primary-purple transition-colors">
              {title}
            </h3>
            <p className="text-primary-green font-bold mt-2">${price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}; 