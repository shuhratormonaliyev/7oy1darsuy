
import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Sahifa topilmadi</h2>
        <p className="mt-2 text-gray-600">Kechirasiz, siz qidirayotgan sahifa mavjud emas.</p>
        <a href="/" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Bosh sahifaga qaytish
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;