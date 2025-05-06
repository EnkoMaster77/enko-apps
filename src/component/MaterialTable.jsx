// src/components/MaterialTable.jsx
import React from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function MaterialTable({ materials, fetchMaterials }) {
  const handleDelete = async (id) => {
    const confirm = window.confirm('คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?');
    if (!confirm) return;
    try {
      await deleteDoc(doc(db, 'materials', id));
      fetchMaterials();
    } catch (error) {
      console.error('Error deleting material:', error);
    }
  };

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
              <th className="p-2 border">จัดการ</th>
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
                <td className="p-2 border">
                  <button
                    onClick={() => handleDelete(mat.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
            {materials.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-400">
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

