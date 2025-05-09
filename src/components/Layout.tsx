
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  allowedUserTypes?: string[];
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  requireAuth = false,
  allowedUserTypes = []
}) => {
  const { currentUser, isLoading } = useAuth();

  // If auth is required and user is not logged in, redirect to login
  if (requireAuth && !isLoading && !currentUser) {
    return <Navigate to="/login" />;
  }

  // If specific user types are allowed and user is not one of them, redirect to dashboard
  if (
    requireAuth && 
    !isLoading && 
    currentUser && 
    allowedUserTypes.length > 0 && 
    !allowedUserTypes.includes(currentUser.userType)
  ) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
