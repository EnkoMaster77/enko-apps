// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [materials, setMaterials] = useState([]);
  const [form, setForm] = useState({ name: '', buy: '', sell: '' });

  // ดึงข้อมูลจาก Firestore
  const fetchMaterials = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'materials'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMaterials(data);
    } catch (error) {
      console.error('⚠️ ไม่สามารถดึงข้อมูลได้:', error);
    }
  };

  // เพิ่มข้อมูลใหม่เข้า Firestore
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
      fetchMaterials(); // อัปเดตข้อมูลใหม่
    } catch (error) {
      console.error('❌ เพิ่มข้อมูลล้มเหลว:', error);
    }
  };

  // โหลดข้อมูลครั้งแรกเมื่อเปิดหน้าเว็บ
  useEffect(() => {
    fetchMaterials();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              materials={materials}
              form={form}
              setForm={setForm}
              handleAdd={handleAdd}
              fetchMaterials={fetchMaterials}
            />
          }
        />
      </Routes>
    </Router>
  );
}

