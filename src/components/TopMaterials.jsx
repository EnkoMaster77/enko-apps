// src/components/TopMaterials.jsx
import React from 'react';

export default function TopMaterials({ materials }) {
  const withProfit = materials.map((mat) => ({
    ...mat,
    profit: parseFloat(mat.sell) - parseFloat(mat.buy),
  }));

  const sorted = withProfit.sort((a, b) => b.profit - a.profit);
  const top5 = sorted.slice(0, 5);

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-4 mt-6 shadow-sm">
      <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">🏆 วัสดุกำไรสูงสุด 5 อันดับ</h2>
      {top5.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">ยังไม่มีข้อมูล</p>
      ) : (
        <ol className="list-decimal pl-5 space-y-2">
          {top5.map((mat, idx) => (
            <li key={mat.id} className="text-sm text-gray-800 dark:text-gray-200">
              <span className="font-medium">{mat.name}</span> — กำไร {mat.profit.toFixed(2)} บาท (ซื้อ {mat.buy} / ขาย {mat.sell})
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

