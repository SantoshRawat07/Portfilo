import React from 'react';
import { Link } from 'react-router-dom'; // Use <a href="/"> if not using React Router

const Notfound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-extrabold tracking-widest text-white">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
        <p className="text-base md:text-lg max-w-xl mx-auto text-gray-400">
          The page you’re looking for doesn’t exist or has been moved. Let’s get you back to safety.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 text-base font-semibold border border-white hover:bg-white hover:text-black transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
