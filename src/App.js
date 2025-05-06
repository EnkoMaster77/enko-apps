// src/App.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [materials, setMaterials] = useState([]);
  const [form, setForm] = useState({ name: '', buy: '', sell: '' });

  const fetchMaterials = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'materials'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMaterials(data);
    } catch (error) {
      console.error('Error fetching materials:', error);
    }
  };

  const handleAdd = async () => {
    const { name, buy, sell } = form;
    if (!name || !buy || !sell) return alert('กรุณากรอกข้อมูลให้ครบ');
    try {
      await addDoc(collection(db, 'materials'), {
        name,
        buy: parseFloat(buy),
        sell: parseFloat(sell)
      });
      setForm({ name: '', buy: '', sell: '' });
      fetchMaterials();
    } catch (error) {
      console.error('Error adding material:', error);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Dashboard
        materials={materials}
        form={form}
        setForm={setForm}
        handleAdd={handleAdd}
      />
    </div>
  );
}

