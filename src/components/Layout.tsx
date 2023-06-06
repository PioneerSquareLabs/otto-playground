import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">Otto</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:underline">
                  Dashboard
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow bg-gray-100 py-8 px-6">{children}</main>
      <footer className="bg-gray-800 text-white py-4 px-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Otto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;