// src/pages/DashboardLayout.jsx
import React from 'react';
import SummaryCards from '../components/SummaryCards';
import MaterialForm from '../components/MaterialForm';
import MaterialTable from '../components/MaterialTable';

export default function DashboardLayout({ materials, form, setForm, handleAdd, fetchMaterials }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">ENKO Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">ระบบวิเคราะห์วัสดุรีไซเคิลแบบเรียลไทม์</p>
        </header>

        {/* สรุปรายการแบบ Card */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SummaryCards materials={materials} />
        </section>

        {/* ฟอร์มเพิ่มข้อมูล */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">เพิ่มวัสดุใหม่</h2>
          <MaterialForm form={form} setForm={setForm} handleAdd={handleAdd} />
        </section>

        {/* ตารางวัสดุ */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">ตารางข้อมูลวัสดุ</h2>
          <MaterialTable materials={materials} fetchMaterials={fetchMaterials} />
        </section>
      </div>
    </div>
  );
}



