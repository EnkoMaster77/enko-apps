
// src/components/MaterialForm.jsx
import React from 'react';

export default function MaterialForm({ form, setForm, handleAdd }) {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <h2 className="text-lg font-bold mb-4">➕ เพิ่มข้อมูลวัสดุ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <input
          className="border p-2 rounded"
          placeholder="ชื่อวัสดุ"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="ราคาซื้อ"
          type="number"
          value={form.buy}
          onChange={(e) => setForm({ ...form, buy: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="ราคาขาย"
          type="number"
          value={form.sell}
          onChange={(e) => setForm({ ...form, sell: e.target.value })}
        />
      </div>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        onClick={handleAdd}
      >
        บันทึกข้อมูล
      </button>
    </div>
  );
}
