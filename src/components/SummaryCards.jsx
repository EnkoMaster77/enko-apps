// src/components/SummaryCards.jsx
import React from 'react';

export default function SummaryCards({ materials }) {
  const totalItems = materials.length;
  const avgProfit =
    totalItems > 0
      ? (
          materials.reduce((sum, m) => sum + (m.sell - m.buy), 0) / totalItems
        ).toFixed(2)
      : 0;

  const topProfit = [...materials]
    .sort((a, b) => b.sell - b.buy - (a.sell - a.buy))
    .slice(0, 1)[0];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded shadow border">
        <p className="text-gray-500 text-sm">จำนวนวัสดุทั้งหมด</p>
        <p className="text-2xl font-bold">{totalItems} รายการ</p>
      </div>
      <div className="bg-white p-4 rounded shadow border">
        <p className="text-gray-500 text-sm">กำไรเฉลี่ย/กก.</p>
        <p className="text-2xl font-bold">฿ {avgProfit}</p>
      </div>
      <div className="bg-white p-4 rounded shadow border">
        <p className="text-gray-500 text-sm">วัสดุกำไรสูงสุด</p>
        <p className="text-lg font-semibold">
          {topProfit ? `${topProfit.name} (${(topProfit.sell - topProfit.buy).toFixed(2)} บ./กก.)` : '—'}
        </p>
      </div>
    </div>
  );
}

