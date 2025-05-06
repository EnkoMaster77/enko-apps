// src/components/PriceHistoryChart.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

// Mock data: ควรเปลี่ยนเป็นข้อมูลจริงจาก Firebase ในอนาคต
const mockData = [
  { date: '01 พ.ค.', price: 12.3 },
  { date: '02 พ.ค.', price: 12.5 },
  { date: '03 พ.ค.', price: 12.4 },
  { date: '04 พ.ค.', price: 12.8 },
  { date: '05 พ.ค.', price: 13.0 },
  { date: '06 พ.ค.', price: 13.4 },
  { date: '07 พ.ค.', price: 13.2 },
];

export default function PriceHistoryChart({ materialName = "ทองแดง" }) {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <h2 className="text-lg font-bold mb-4">📈 ราคาย้อนหลัง 7 วัน ({materialName})</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip formatter={(value) => `฿ ${value}`} />
          <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

