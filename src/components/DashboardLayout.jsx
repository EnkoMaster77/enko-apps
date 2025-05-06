// src/pages/DashboardLayout.jsx
import React from 'react';
import SummaryCards from '../components/SummaryCards';
import MaterialForm from '../components/MaterialForm';
import MaterialTable from '../components/MaterialTable';

export default function DashboardLayout({ materials, form, setForm, handleAdd, fetchMaterials }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          📊 ENKO Dashboard
        </h1>

        {/* สรุปรายการแบบการ์ด */}
        <div className="mb-6">
          <SummaryCards materials={materials} />
        </div>

        {/* แบบฟอร์มเพิ่มข้อมูล */}
        <div className="mb-6">
          <MaterialForm form={form} setForm={setForm} handleAdd={handleAdd} />
        </div>

        {/* ตารางแสดงข้อมูล */}
        <div>
          <MaterialTable materials={materials} fetchMaterials={fetchMaterials} />
        </div>
      </div>
    </div>
  );
}

