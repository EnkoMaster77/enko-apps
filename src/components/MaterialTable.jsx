// src/components/MaterialTable.jsx
import React from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function MaterialTable({ materials, fetchMaterials }) {
  const handleDelete = async (id) => {
    if (!window.confirm('คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?')) return;
    try {
      await deleteDoc(doc(db, 'materials', id));
      fetchMaterials();
    } catch (err) {
      console.error('⚠️ ลบข้อมูลล้มเหลว:', err);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border border-gray-300 dark:border-gray-700">
        <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-100">
          <tr>
            <th className="px-4 py-2 border">ชื่อวัสดุ</th>
            <th className="px-4 py-2 border">ราคาซื้อ</th>
            <th className="px-4 py-2 border">ราคาขาย</th>
            <th className="px-4 py-2 border">กำไร/กก.</th>
            <th className="px-4 py-2 border text-center">ลบ</th>
          </tr>
        </thead>
        <tbody>
          {materials.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500 dark:text-gray-400">
                ไม่มีข้อมูล
              </td>
            </tr>
          ) : (
            materials.map((mat) => (
              <tr key={mat.id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <td className="px-4 py-2 border">{mat.name}</td>
                <td className="px-4 py-2 border">{parseFloat(mat.buy).toFixed(2)} บาท</td>
                <td className="px-4 py-2 border">{parseFloat(mat.sell).toFixed(2)} บาท</td>
                <td className={`px-4 py-2 border ${mat.sell - mat.buy >= 0 ? 'text-green-600' : 'text-red-500'}`}>{(mat.sell - mat.buy).toFixed(2)} บาท</td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() => handleDelete(mat.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    🗑️ ลบ
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="text-right mt-3">
        <button
          onClick={fetchMaterials}
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          🔄 โหลดข้อมูลล่าสุด
        </button>
      </div>
    </div>
  );
}



