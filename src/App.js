import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

function App() {
  const [materials, setMaterials] = useState([]);
  const [newMaterial, setNewMaterial] = useState({ name: '', buy: '', sell: '' });

  // โหลดข้อมูลจาก Firebase
  const fetchMaterials = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'materials'));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMaterials(data);
    } catch (error) {
      console.error('เกิดข้อผิดพลาด:', error);
    }
  };

  // เพิ่มข้อมูลเข้า Firestore
  const handleAdd = async () => {
    const { name, buy, sell } = newMaterial;
    if (!name || !buy || !sell) {
      alert('กรุณากรอกให้ครบทุกช่อง');
      return;
    }

    try {
      await addDoc(collection(db, 'materials'), {
        name,
        buy,
        sell,
      });
      setNewMaterial({ name: '', buy: '', sell: '' });
      fetchMaterials();
    } catch (error) {
      console.error('ไม่สามารถเพิ่มข้อมูล:', error);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  // ฟังก์ชันคำนวณกำไร
  const getProfit = (buy, sell) => {
    const b = parseFloat(buy);
    const s = parseFloat(sell);
    const diff = s - b;
    const percent = ((diff / b) * 100).toFixed(1);
    return {
      text: `${diff.toFixed(2)} บาท (${percent}%)`,
      color: diff >= 0 ? 'green' : 'red',
    };
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>📦 ENKO - ระบบบันทึกราคาวัสดุ</h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          placeholder="ชื่อวัสดุ เช่น เหล็กบาง"
          value={newMaterial.name}
          onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })}
        />
        <input
          placeholder="ราคาซื้อ"
          value={newMaterial.buy}
          onChange={(e) => setNewMaterial({ ...newMaterial, buy: e.target.value })}
        />
        <input
          placeholder="ราคาขาย"
          value={newMaterial.sell}
          onChange={(e) => setNewMaterial({ ...newMaterial, sell: e.target.value })}
        />
        <button onClick={handleAdd}>➕ เพิ่ม</button>
      </div>

      <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#f0f0f0' }}>
          <tr>
            <th>ชื่อวัสดุ</th>
            <th>ราคาซื้อ</th>
            <th>ราคาขาย</th>
            <th>กำไร/ขาดทุน</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((item) => {
            const profit = getProfit(item.buy, item.sell);
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.buy}</td>
                <td>{item.sell}</td>
                <td style={{ color: profit.color }}>{profit.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
