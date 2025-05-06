// src/components/MaterialForm.jsx
import React from 'react';

export default function MaterialForm({ form, setForm, handleAdd }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="ชื่อวัสดุ"
        className="border p-2 rounded"
      />
      <input
        name="buy"
        value={form.buy}
        onChange={handleChange}
        placeholder="ราคาซื้อ"
        type="number"
        className="border p-2 rounded"
      />
      <input
        name="sell"
        value={form.sell}
        onChange={handleChange}
        placeholder="ราคาขาย"
        type="number"
        className="border p-2 rounded"
      />
      <button
        onClick={handleAdd}
        className="col-span-3 bg-blue-600 text-white py-2 rounded mt-2"
      >
        ➕ เพิ่มข้อมูล
      </button>
    </div>
  );
}

