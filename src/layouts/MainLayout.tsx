import { FC, ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-public-sans">
      <nav className="bg-primary-dark text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Makers Tech</h1>
          <div className="flex gap-6">
            <button className="hover:text-primary-green">Home</button>
            <button className="hover:text-primary-green">Products</button>
            <button className="hover:text-primary-green">Categories</button>
            <button className="hover:text-primary-green">About</button>
            <button className="hover:text-primary-green">Contact</button>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}; 