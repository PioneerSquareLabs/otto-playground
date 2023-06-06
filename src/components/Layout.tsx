import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full bg-gray-800 text-white">
        {/* Add application logo and navigation links here */}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="fixed bottom-0 w-full bg-gray-800 text-white">
        {/* Add copyright information or additional links here */}
      </footer>
    </div>
  );
};

export default Layout;