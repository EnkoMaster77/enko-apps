// src/components/MaterialChart.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function MaterialChart({ materials }) {
  // แปลงข้อมูลให้อยู่ในรูปแบบสำหรับกราฟ (เช่นเรียงตามชื่อหรือแนวโน้มราคา)
  const chartData = materials.map((mat, index) => ({
    name: mat.name,
    buy: parseFloat(mat.buy),
    sell: parseFloat(mat.sell),
    index: index + 1
  }));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 border border-gray-200 dark:border-gray-700 mt-6">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">📈 แนวโน้มราคาซื้อ-ขาย (เรียงตามลำดับที่เพิ่ม)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="index" tickFormatter={(val) => chartData[val - 1]?.name || val} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="buy" stroke="#8884d8" name="ราคาซื้อ" />
          <Line type="monotone" dataKey="sell" stroke="#82ca9d" name="ราคาขาย" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}


