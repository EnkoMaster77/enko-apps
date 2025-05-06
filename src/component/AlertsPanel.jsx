// src/components/AlertsPanel.jsx
import React from 'react';

export default function AlertsPanel({ materials }) {
  const alerts = [];

  materials.forEach((mat) => {
    const profit = mat.sell - mat.buy;

    if (profit < 0) {
      alerts.push({ type: 'loss', message: `ขาดทุน: ${mat.name} ขายต่ำกว่าราคาซื้อ (฿${profit.toFixed(2)})` });
    }

    // ตัวอย่าง: ถ้าราคาซื้อซ้ำกับวัสดุอื่น
    const sameBuy = materials.filter(m => m.name !== mat.name && m.buy === mat.buy);
    if (sameBuy.length > 0) {
      alerts.push({ type: 'duplicate', message: `ราคาซื้อซ้ำ: ${mat.name} ซื้อราคาเดียวกับวัสดุอื่น` });
    }

    // เตือนถ้าราคาขายต่ำกว่าค่าเฉลี่ย sell ทั้งหมด
    const avgSell = materials.reduce((sum, m) => sum + m.sell, 0) / materials.length;
    if (mat.sell < avgSell * 0.9) {
      alerts.push({ type: 'belowAvg', message: `ราคาขายต่ำกว่าค่าเฉลี่ย: ${mat.name} (ขาย ฿${mat.sell} < avg ฿${avgSell.toFixed(2)})` });
    }
  });

  return (
    <div className="bg-yellow-50 border border-yellow-300 p-4 rounded mb-6">
      <h2 className="font-bold text-yellow-800 mb-2">🔔 แจ้งเตือนวัสดุ</h2>
      {alerts.length === 0 ? (
        <p className="text-gray-500">ไม่มีสิ่งที่ต้องกังวล 🎉</p>
      ) : (
        <ul className="list-disc ml-5 space-y-1 text-sm text-yellow-700">
          {alerts.map((alert, index) => (
            <li key={index}>{alert.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

