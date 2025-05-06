// src/components/CategoryFilter.jsx
import React from 'react';

const categories = ['ทั้งหมด', 'เหล็ก', 'ทองแดง', 'อะลูมิเนียม', 'พลาสติก', 'อื่นๆ'];

export default function CategoryFilter({ selected, setSelected }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-4 py-1 rounded border text-sm font-medium transition duration-150 ${
            selected === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

