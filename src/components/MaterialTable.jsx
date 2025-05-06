// src/components/MaterialTable.jsx
import React from 'react';

export default function MaterialTable({ materials = [], fetchMaterials }) {
  if (!Array.isArray(materials) || materials.length === 0) {
    return <p className="text-gray-500">ยังไม่มีข้อมูลวัสดุ</p>;
  }

  return (
    <table className="w-full mt-4 border text-sm">
      <thead className="bg-gray-200">
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
            <td className="p-2 border">{mat.name || '-'}</td>
            <td className="p-2 border">฿{mat.buy}</td>
            <td className="p-2 border">฿{mat.sell}</td>
            <td className="p-2 border">฿{(mat.sell - mat.buy).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}



