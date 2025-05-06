// src/components/LossAlertMaterials.jsx
import React from 'react';

export default function LossAlertMaterials({ materials }) {
  const lossList = materials
    .map((mat) => {
      const buy = parseFloat(mat.buy);
      const sell = parseFloat(mat.sell);
      const loss = sell < buy;
      return loss ? { ...mat, lossAmount: buy - sell } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.lossAmount - a.lossAmount);

  return (
    <div className="bg-red-50 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-xl p-4 mt-6 shadow-sm">
      <h2 className="text-lg font-bold text-red-700 dark:text-red-300 mb-4">⚠️ รายการวัสดุที่ขายขาดทุน</h2>
      {lossList.length === 0 ? (
        <p className="text-sm text-red-600 dark:text-red-200">ไม่มีรายการขาดทุนในขณะนี้ 🎉</p>
      ) : (
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b dark:border-red-700">
              <th className="p-2 font-semibold">ชื่อวัสดุ</th>
              <th className="p-2 font-semibold">ราคาซื้อ</th>
              <th className="p-2 font-semibold">ราคาขาย</th>
              <th className="p-2 font-semibold text-red-600">ขาดทุน</th>
            </tr>
          </thead>
          <tbody>
            {lossList.map((mat) => (
              <tr key={mat.id} className="border-b dark:border-red-800">
                <td className="p-2">{mat.name}</td>
                <td className="p-2">{mat.buy}</td>
                <td className="p-2">{mat.sell}</td>
                <td className="p-2 text-red-600">-{mat.lossAmount.toFixed(2)} บาท</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

