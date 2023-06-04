import React, { ReactNode } from 'react';
import { User } from '~/types';

interface LayoutProps {
  children: ReactNode;
  user: User;
}

const Layout: React.FC<LayoutProps> = ({ children, user }) => {
  return (
    <div>
      <header>
        <h1>Welcome, {user.name}</h1>
        <p>{user.email}</p>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} - Otto</p>
      </footer>
    </div>
  );
};

export default Layout;