// นำเข้า React และ useEffect/useState
import React, { useEffect, useState } from 'react';

// นำเข้าการเชื่อมต่อ Firebase ที่เราสร้างไว้ใน firebase.js
import { db } from './firebase';

// นำเข้าฟังก์ชัน Firestore ที่ใช้ดึงข้อมูล
import { collection, getDocs } from 'firebase/firestore';

function App() {
  // ตัวแปรเก็บรายการวัสดุจาก Firestore
  const [materials, setMaterials] = useState([]);

  // โหลดข้อมูลจาก Firestore ตอนเปิดหน้าเว็บ
  useEffect(() => {
    const fetchData = async () => {
      try {
        // ดึงข้อมูลทั้งหมดจาก collection ชื่อ 'materials'
        const querySnapshot = await getDocs(collection(db, 'materials'));

        // สร้าง array ของรายการวัสดุจาก document ที่ได้
        const items = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(), // รวม name, buy, sell เข้ามา
          };
        });

        // บันทึกลง state
        setMaterials(items);
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>📋 ENKO - ระบบบันทึกราคาวัสดุ</h2>

      {/* ตารางแสดงข้อมูลวัสดุ */}
      <table width="100%" border="1" cellPadding="8" style={{ borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ชื่อวัสดุ</th>
            <th>ราคาซื้อ (บาท/กก.)</th>
            <th>ราคาขาย (บาท/กก.)</th>
            <th>กำไร/ขาดทุน</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((item) => {
            const buy = parseFloat(item.buy);
            const sell = parseFloat(item.sell);
            const profit = sell - buy;
            const profitText = profit >= 0 ? `+${profit.toFixed(2)}` : `-${Math.abs(profit).toFixed(2)}`;
            const color = profit >= 0 ? 'green' : 'red';

            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{buy.toFixed(2)}</td>
                <td>{sell.toFixed(2)}</td>
                <td style={{ color }}>{profitText} บาท</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
