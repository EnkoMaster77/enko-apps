// src/components/DashboardLayout.jsx
import React from 'react';
import SummaryCards from './SummaryCards';
import MaterialForm from './MaterialForm';
import MaterialTable from './MaterialTable';

export default function DashboardLayout({ materials, form, setForm, handleAdd, fetchMaterials }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 px-4 py-8">
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">📊 ENKO Dashboard</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          ระบบบริหารจัดการราคาวัสดุรีไซเคิล พร้อมคำนวณกำไรอย่างแม่นยำ
        </p>
      </div>

      {/* Summary Cards */}
      <div className="max-w-6xl mx-auto mb-10">
        <SummaryCards materials={materials} />
      </div>

      {/* Form & Table */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Form */}
        <div className="md:col-span-1 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4">➕ เพิ่มข้อมูลวัสดุ</h2>
          <MaterialForm form={form} setForm={setForm} handleAdd={handleAdd} />
        </div>

        {/* Table */}
        <div className="md:col-span-2 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4">📋 รายการวัสดุทั้งหมด</h2>
          <MaterialTable materials={materials} fetchMaterials={fetchMaterials} />
        </div>
      </div>
    </div>
  );
}


