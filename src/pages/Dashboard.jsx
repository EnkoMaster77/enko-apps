// src/pages/Dashboard.jsx
import React from 'react';
import SummaryCards from '../components/SummaryCards';
import MaterialTable from '../components/MaterialTable';
import MaterialForm from '../components/MaterialForm';

export default function Dashboard({ materials, form, setForm, handleAdd }) {
  return (
    <div className="p-4 max-w-6xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">📦 ระบบภาพรวมวัสดุ (ENKO)</h1>

      {/* สรุปข้อมูลแบบ Card */}
      <SummaryCards materials={materials} />

      {/* ฟอร์มเพิ่มข้อมูล */}
      <MaterialForm form={form} setForm={setForm} handleAdd={handleAdd} />

      {/* ตารางวัสดุทั้งหมด */}
      <MaterialTable materials={materials} />
    </div>
  );
}

