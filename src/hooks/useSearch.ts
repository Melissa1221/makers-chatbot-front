import { useState, useCallback, useEffect } from 'react';
import { Product } from '../services/products';
import { searchService } from '../services/search';

export const useSearch = (products: Product[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Update filtered products when products change
  useEffect(() => {
    const filtered = searchService.filterProducts(products, searchTerm);
    setFilteredProducts(filtered);
  }, [products, searchTerm]);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  return {
    searchTerm,
    filteredProducts,
    handleSearch
  };
}; 