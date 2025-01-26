import { Product } from './products';

export const searchService = {
  filterProducts(products: Product[], searchTerm: string): Product[] {
    const term = searchTerm.toLowerCase().trim();
    
    if (!term) return products;

    return products.filter(product => {
      return (
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.labels.some(label => label.toLowerCase().includes(term))
      );
    });
  }
}; 