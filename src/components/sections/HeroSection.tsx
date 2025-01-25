import { FC } from 'react';
import { SearchBar } from '../common/SearchBar';

interface HeroSectionProps {
  isLoaded: boolean;
}

export const HeroSection: FC<HeroSectionProps> = ({ isLoaded }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gradient-purple via-white to-gradient-green">
      <div className="absolute inset-0 bg-gradient-morphing from-gradient-purple via-primary-blue to-gradient-green animate-gradient-xy opacity-10" />
      
      {/* Floating shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-purple/10 rounded-full animate-float blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary-green/10 rounded-full animate-float delay-1000 blur-3xl" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-primary-blue/10 rounded-full animate-float delay-2000 blur-3xl" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-dark text-center">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-primary-purple via-primary-blue to-primary-green bg-shine animate-shine bg-clip-text text-transparent">
                Makers Tech
              </span>
            </h1>
            <p className="text-xl text-center text-primary-dark/70 max-w-2xl mx-auto">
              Discover the future of technology with our curated selection of premium products
            </p>
          </div>

          <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}; 