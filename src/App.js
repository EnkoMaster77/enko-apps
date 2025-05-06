import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import DashboardLayout from './components/DashboardLayout';

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
        sell: parseFloat(sell),
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
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <DashboardLayout 
        materials={materials} 
        form={form} 
        setForm={setForm} 
        handleAdd={handleAdd} 
        fetchMaterials={fetchMaterials}
      />
    </main>
  );
}


