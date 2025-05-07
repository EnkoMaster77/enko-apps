// src/components/CategoryFilter.jsx
import React from "react";

const categories = ["ทั้งหมด", "โลหะ", "พลาสติก", "สายไฟ", "อื่นๆ"];

export default function CategoryFilter({ selected, setSelected }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-4 py-1 rounded border text-sm font-medium transition duration-150 ${
            selected === cat
              ? "bg-blue-600 text-white"
              : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-zinc-700 hover:bg-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
