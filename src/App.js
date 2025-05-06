import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import DashboardLayout from './pages/DashboardLayout';

export default function App() {
  // State สำหรับเก็บวัสดุ และฟอร์ม input
  const [materials, setMaterials] = useState([]);
  const [form, setForm] = useState({ name: '', buy: '', sell: '' });

  // ดึงข้อมูลจาก Firestore
  const fetchMaterials = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'materials'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMaterials(data);
    } catch (error) {
      console.error('⚠️ Error fetching materials:', error);
    }
  };

  // เพิ่มข้อมูลเข้า Firestore
  const handleAdd = async () => {
    const { name, buy, sell } = form;

    if (!name || !buy || !sell) {
      alert('❗ กรุณากรอกข้อมูลให้ครบ');
      return;
    }

    try {
      await addDoc(collection(db, 'materials'), {
        name,
        buy: parseFloat(buy),
        sell: parseFloat(sell),
      });

      setForm({ name: '', buy: '', sell: '' });
      fetchMaterials();
    } catch (error) {
      console.error('⚠️ Error adding material:', error);
    }
  };

  // โหลดข้อมูลเมื่อแอปเริ่ม
  useEffect(() => {
    fetchMaterials();
  }, []);

  return (
    <DashboardLayout
      materials={materials}
      form={form}
      setForm={setForm}
      handleAdd={handleAdd}
      fetchMaterials={fetchMaterials}
    />
  );
}



