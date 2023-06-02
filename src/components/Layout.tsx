import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">My Website</h1>
        </div>
      </header>
      <main className="container mx-auto flex-grow">
        {children}
      </main>
      <footer className="bg-gray-200 text-gray-700 py-4">
        <div className="container mx-auto">
          <p className="text-sm">&copy; 2022 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;