import React from 'react';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="bg-white flex-grow w-full">
        <div className="mx-auto mt-4 p-10 w-full max-w-4xl">
          {children}
        </div>
      </main>
      <footer className="bg-white text-center p-6 w-full border-t border-gray-100">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Ruebena Dawes &nbsp;·&nbsp;
          <a href="https://orcid.org/0000-0003-2135-0117" target="_blank" rel="noreferrer">ORCID</a>
          &nbsp;·&nbsp;
          <a href="https://scholar.google.com/citations?user=S2rkx9wAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
          &nbsp;·&nbsp;
          <a href="https://github.com/RubyDawes" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;