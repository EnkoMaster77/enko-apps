// src/components/MaterialSearch.jsx
import React from 'react';

export default function MaterialSearch({ search, setSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="🔍 ค้นหาวัสดุ เช่น ทองแดง เหล็ก"
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
