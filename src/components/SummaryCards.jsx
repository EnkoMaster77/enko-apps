// src/components/SummaryCards.jsx
import React from 'react';

export default function SummaryCards({ materials }) {
  const totalItems = materials.length;
  const totalBuy = materials.reduce((sum, m) => sum + parseFloat(m.buy), 0);
  const totalSell = materials.reduce((sum, m) => sum + parseFloat(m.sell), 0);
  const avgBuy = totalItems > 0 ? totalBuy / totalItems : 0;
  const avgSell = totalItems > 0 ? totalSell / totalItems : 0;
  const avgProfit = avgSell - avgBuy;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 border border-gray-200 dark:border-gray-700">
        <h3 className="text-sm text-gray-500">จำนวนวัสดุทั้งหมด</h3>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalItems}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 border border-gray-200 dark:border-gray-700">
        <h3 className="text-sm text-gray-500">กำไรเฉลี่ย/กก.</h3>
        <p className={`text-2xl font-bold ${avgProfit >= 0 ? 'text-green-600' : 'text-red-500'}`}>
          {avgProfit.toFixed(2)} บาท
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 border border-gray-200 dark:border-gray-700">
        <h3 className="text-sm text-gray-500">ราคาขายเฉลี่ย</h3>
        <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{avgSell.toFixed(2)} บาท</p>
      </div>
    </div>
  );
}


