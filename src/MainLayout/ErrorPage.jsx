import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
              <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center px-4">
      <AlertTriangle className="w-20 h-20 text-red-500 mb-6 animate-bounce" />
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Oops! The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-2xl text-lg font-semibold transition duration-300 shadow-md"
      >
        Go Back Home
      </Link>
    </div>
        </div>
    );
};

export default ErrorPage;