import React, { ReactNode } from 'react';
import '~/styles/globals.css';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1>Application Title</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer">
        <p>Copyright © 2022. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;