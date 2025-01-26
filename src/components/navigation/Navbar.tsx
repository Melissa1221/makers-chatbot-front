import { FC, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCategories } from '../../hooks/useCategories';

export const Navbar: FC = () => {
  const { categories } = useCategories();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number>();

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    const isLeavingMenu = !relatedTarget?.closest('.menu-container');
    
    if (isLeavingMenu) {
      timeoutRef.current = window.setTimeout(() => {
        setIsOpen(false);
      }, 150);
    }
  }, []);

  return (
    <nav className="bg-primary-dark text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Makers Tech
        </Link>
        
        <div className="flex gap-6">
          <Link to="/" className="hover:text-primary-green transition-colors">
            Home
          </Link>
          
          <div 
            className="relative menu-container" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="hover:text-primary-green transition-colors flex items-center gap-1"
            >
              Categories
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div 
              className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-1 text-primary-dark transform transition-all duration-200 ${
                isOpen 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}
            >
              {categories.map(category => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="block px-4 py-2 hover:bg-gradient-purple/10 transition-colors font-medium"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/products" className="hover:text-primary-green transition-colors">
            Products
          </Link>
          <Link to="/about" className="hover:text-primary-green transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-primary-green transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}; 