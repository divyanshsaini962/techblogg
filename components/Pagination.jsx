// components/Pagination.js

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center my-4">
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`${
                currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              } px-3 py-1 rounded-md`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
