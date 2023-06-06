import React from 'react';
import { User } from '~/types';

interface Props {
  children: React.ReactNode;
  user: User | null;
}

const Layout: React.FC<Props> = ({ children, user }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              App Logo
            </div>
            {user && (
              <div className="text-gray-600">
                {user.name}
              </div>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-3">{children}</main>
    </div>
  );
};

export default Layout;