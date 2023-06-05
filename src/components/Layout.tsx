import React from "react";
import { User } from "~/types";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gray-800 px-6 py-4 text-white">
        {/* header content */}
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">AppName</div>
        </div>
      </header>
      <main className="flex-grow bg-gray-100 px-6 py-8">{children}</main>
      <footer className="bg-gray-800 px-6 py-4 text-white">
        {/* footer content */}
        <div className="text-center">
          &copy; {new Date().getFullYear()} AppName. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
