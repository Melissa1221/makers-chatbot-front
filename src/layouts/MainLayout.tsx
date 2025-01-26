import { FC, ReactNode } from 'react';
import { Navbar } from '../components/navigation/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-public-sans">
      <Navbar />
      {children}
    </div>
  );
}; 