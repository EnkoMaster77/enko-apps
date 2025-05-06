// src/components/SummaryCards.jsx
import React from 'react';

export default function SummaryCards({ materials = [] }) {
  if (!Array.isArray(materials) || materials.length === 0) return null;

  const totalItems = materials.length;
  const avgBuy = (materials.reduce((sum, m) => sum + (m.buy || 0), 0) / totalItems).toFixed(2);
  const avgSell = (materials.reduce((sum, m) => sum + (m.sell || 0), 0) / totalItems).toFixed(2);
  const avgProfit = (avgSell - avgBuy).toFixed(2);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white p-4 shadow rounded">
        <p className="text-gray-500 text-sm">จำนวนวัสดุทั้งหมด</p>
        <h2 className="text-xl font-bold">{totalItems}</h2>
      </div>
      <div className="bg-white p-4 shadow rounded">
        <p className="text-gray-500 text-sm">ราคาซื้อเฉลี่ย</p>
        <h2 className="text-xl font-bold">฿{avgBuy}</h2>
      </div>
      <div className="bg-white p-4 shadow rounded">
        <p className="text-gray-500 text-sm">กำไรเฉลี่ยต่อกก.</p>
        <h2 className="text-xl font-bold">฿{avgProfit}</h2>
      </div>
    </div>
  );
}


