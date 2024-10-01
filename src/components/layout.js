import React from 'react';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="bg-white flex-grow w-full">
        <div className="container mx-auto mt-8 p-4">
          {children}
        </div>
      </main>
      <footer className="bg-white text-center p-4 w-full">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Ruebena Dawes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;