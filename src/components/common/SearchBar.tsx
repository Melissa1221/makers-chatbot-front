import { FC, ChangeEvent } from 'react';
import { Input } from './Input';

interface SearchBarProps {
  onSearch: (term: string) => void;
  value: string;
}

export const SearchBar: FC<SearchBarProps> = ({ onSearch, value }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Search products..."
        value={value}
        onChange={handleChange}
        withGradientBorder
      />
      <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-opacity duration-200 ${
        value ? 'opacity-0' : 'opacity-100'
      }`}>
        <svg 
          className="w-6 h-6 text-primary-blue animate-bounce-slow" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
}; 