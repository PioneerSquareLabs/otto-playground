import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <header className="bg-gray-800">
        <nav className="container mx-auto px-4 py-2">
          {/* Logo and navigation links here */}
        </nav>
      </header>
      <main className="bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default Layout;