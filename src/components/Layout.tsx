import React from 'react';
import '~/styles/globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        {/* Header content goes here */}
      </header>
      
      {children}
      
      <footer className="footer">
        {/* Footer content goes here */}
      </footer>
    </div>
  );
};

export default Layout;