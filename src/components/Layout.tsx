import React, { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';
import { User } from '~/types';

interface Props {
  children: ReactNode;
  user: User;
}

const Layout: React.FC<Props> = ({ children, user }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <img
              src={user.avatar_url || 'https://via.placeholder.com/40'}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-4 text-lg font-semibold">
              {user.name || 'Anonymous'}
            </span>
          </div>
        </div>
      </header>
      <main className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children || <div />}
      </main>
    </div>
  );
};

export default Layout;