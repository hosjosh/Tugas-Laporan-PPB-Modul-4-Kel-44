import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center mt-8 mb-4 gap-2">
      <button
        className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &lt;
      </button>
      {pages.map(page => (
        <button
          key={page}
          className={`px-3 py-1 rounded ${page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &gt;
      </button>
    </div>
  );
}