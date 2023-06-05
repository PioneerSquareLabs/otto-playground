import React from 'react';
import { User } from '~/types';

interface Props {
  user: User;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ user, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-4 px-6">
        {/* header content */}
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">AppName</div>
          <div>
            {user ? (
              <span className="mr-4">{user.name}</span>
            ) : (
              <a href="/api/auth/signin" className="text-white">
                Sign in
              </a>
            )}
          </div>
        </div>
      </header>
      <main className="flex-grow bg-gray-100 py-8 px-6">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-4 px-6">
        {/* footer content */}
        <div className="text-center">
          &copy; {new Date().getFullYear()} AppName. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;