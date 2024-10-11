import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <nav className='gap-3'>
          <Link to="/" className="mr-4 bg-slate-200 text-black font-sans p-1 rounded-md">Home</Link>
          <Link to="/scroll" className="mr-4">
          <button className='btn rounded-md bg-slate-200 text-black font-sans p-1'>Scroll</button>
          </Link>
        </nav>
      </header>
      <main className="flex-grow p-4">
        {children}
      </main>
      <footer className="bg-gray-200 text-center p-4">
        © 2024 Your Website. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;