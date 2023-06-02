import React from 'react';
import '~/styles/globals.css';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        {/* Add header content here, such as a logo and navigation links */}
      </header>
      
      <main className="main">
        {children}
      </main>
      
      <footer className="footer">
        {/* Add footer content here, such as copyright information and social media links */}
      </footer>
    </div>
  );
};

export default Layout;