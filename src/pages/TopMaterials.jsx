// src/pages/TopMaterials.jsx
import React from 'react';

export default function TopMaterials({ materials }) {
  const topMaterials = [...materials]
    .sort((a, b) => (b.sell - b.buy) - (a.sell - a.buy))
    .slice(0, 5);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">🏆 TOP 5 วัสดุทำกำไรสูงสุด (รายเดือน)</h1>
      <ol className="space-y-4">
        {topMaterials.map((mat, index) => (
          <li key={mat.id} className="bg-white shadow rounded p-4 border">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">
                #{index + 1} - {mat.name}
              </div>
              <div className="text-green-600 font-bold text-lg">
                กำไร: ฿ {(mat.sell - mat.buy).toFixed(2)} /กก.
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              ราคาซื้อ: ฿ {mat.buy} | ราคาขาย: ฿ {mat.sell}
            </p>
          </li>
        ))}
        {topMaterials.length === 0 && (
          <p className="text-gray-400 text-center">ไม่มีข้อมูลวัสดุ</p>
        )}
      </ol>
    </div>
  );
}

