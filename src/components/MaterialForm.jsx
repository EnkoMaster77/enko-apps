// src/components/MaterialForm.jsx
import React from 'react';

export default function MaterialForm({ form, setForm, handleAdd }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleAdd();
      }}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm mb-1">ชื่อวัสดุ</label>
        <input
          type="text"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="เช่น ทองแดง, เหล็กหนา"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">ราคาซื้อ (บาท/กก.)</label>
        <input
          type="number"
          step="0.01"
          value={form.buy}
          onChange={e => setForm({ ...form, buy: e.target.value })}
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="เช่น 42.50"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">ราคาขาย (บาท/กก.)</label>
        <input
          type="number"
          step="0.01"
          value={form.sell}
          onChange={e => setForm({ ...form, sell: e.target.value })}
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="เช่น 48.00"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow w-full"
      >
        ➕ เพิ่มวัสดุ
      </button>
    </form>
  );
}


