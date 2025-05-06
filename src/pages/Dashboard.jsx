// src/pages/Dashboard.jsx
import React from 'react';
import SummaryCards from '../components/SummaryCards';
import MaterialForm from '../components/MaterialForm';
import MaterialTable from '../components/MaterialTable';

export default function Dashboard({ materials, form, setForm, handleAdd, fetchMaterials }) {
  return (
    <div className="p-4 max-w-6xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">📦 ระบบบันทึกราคาวัสดุ (ENKO)</h1>

      {/* สรุปรายการแบบ Card */}
      <SummaryCards materials={materials} />

      {/* ฟอร์มเพิ่มข้อมูล */}
      <MaterialForm form={form} setForm={setForm} handleAdd={handleAdd} />

      {/* ตารางข้อมูล พร้อมปุ่มลบ */}
      <MaterialTable materials={materials} fetchMaterials={fetchMaterials} />
    </div>
  );
}

