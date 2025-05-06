// src/components/MaterialTable.jsx
import React from 'react';

export default function MaterialTable({ materials }) {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <h2 className="text-lg font-bold mb-4">📋 ตารางวัสดุทั้งหมด</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2 border">ชื่อวัสดุ</th>
              <th className="p-2 border">ราคาซื้อ</th>
              <th className="p-2 border">ราคาขาย</th>
              <th className="p-2 border">กำไร/กก.</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((mat) => (
              <tr key={mat.id} className="hover:bg-gray-50">
                <td className="p-2 border">{mat.name}</td>
                <td className="p-2 border">฿ {mat.buy}</td>
                <td className="p-2 border">฿ {mat.sell}</td>
                <td className="p-2 border text-green-600 font-semibold">
                  ฿ {(mat.sell - mat.buy).toFixed(2)}
                </td>
              </tr>
            ))}
            {materials.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-400">
                  ไม่มีข้อมูลวัสดุ
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

