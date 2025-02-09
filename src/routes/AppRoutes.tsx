import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Chat } from '../pages/Chat';
import { CategoryPage } from '../pages/CategoryPage';
import { Dashboard } from '../pages/Dashboard';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      
      {/* Protected admin route */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />

      {/* User routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}; 