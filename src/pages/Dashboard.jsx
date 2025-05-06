// src/pages/Dashboard.jsx
import React from 'react';
import SummaryCards from '../components/SummaryCards';
import MaterialForm from '../components/MaterialForm';
import MaterialTable from '../components/MaterialTable';

export default function Dashboard({ materials = [], form, setForm, handleAdd, fetchMaterials }) {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-xl font-bold mb-4">📊 ENKO Dashboard</h1>

      {/* Summary */}
      {Array.isArray(materials) && materials.length > 0 ? (
        <SummaryCards materials={materials} />
      ) : (
        <p className="text-sm text-gray-500">ไม่มีข้อมูลวัสดุ</p>
      )}

      {/* Form */}
      <div className="mt-6">
        <MaterialForm form={form} setForm={setForm} handleAdd={handleAdd} />
      </div>

      {/* Table */}
      <div className="mt-6">
        {Array.isArray(materials) ? (
          <MaterialTable materials={materials} fetchMaterials={fetchMaterials} />
        ) : (
          <p className="text-sm text-red-500">ไม่สามารถโหลดตารางวัสดุได้</p>
        )}
      </div>
    </div>
  );
}

