import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import CategoryFilter from "@/components/CategoryFilter";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import MaterialForm from "@/components/MaterialForm";
import { doc, deleteDoc } from "firebase/firestore";

export default function Dashboard() {
  const [materials, setMaterials] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");

  useEffect(() => {
    const fetchData = async () => {
      const colRef = collection(db, "materials");
      const snapshot = await getDocs(colRef);
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMaterials(items);
    };
    fetchData();
  }, []);

  const filteredMaterials = materials.filter(
    (m) => selectedCategory === "ทั้งหมด" || m.category === selectedCategory
  );

  const top5 = [...filteredMaterials]
    .filter((m) => m.profit > 0)
    .sort((a, b) => b.profit - a.profit)
    .slice(0, 5);

  const lossList = filteredMaterials.filter((m) => m.profit < 0 || m.risk);

  const priceTrends = [
    { date: "01/05", price: 110 },
    { date: "02/05", price: 115 },
    { date: "03/05", price: 117 },
    { date: "04/05", price: 113 },
    { date: "05/05", price: 120 },
  ]; // ← Mock สำหรับกราฟ (ต่อไปจะดึงจาก Firestore ได้)
  
  const handleDelete = async (id, name) => {
  const confirmDelete = window.confirm(`ยืนยันลบ "${name}" หรือไม่?`);
  if (!confirmDelete) return;

  try {
    await deleteDoc(doc(db, "materials", id));
    setMaterials((prev) => prev.filter((m) => m.id !== id));
  } catch (err) {
    console.error("ลบไม่สำเร็จ:", err);
    alert("เกิดข้อผิดพลาดขณะลบ");
  }
};
  const totalValue = materials.reduce((sum, m) => {
  const weight = parseFloat(m.weight);
  const profit = parseFloat(m.profit);
  const value = !isNaN(weight) && !isNaN(profit) ? weight * profit : 0;
  return sum + value;
}, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">📊 ENKO Dashboard</h1>
<p className="text-md text-gray-700 dark:text-gray-300 mb-4">
  📦 รวมมูลค่าวัสดุในคลัง: <span className="font-semibold text-blue-600">{totalValue.toLocaleString()}฿</span>
</p>
      <h1 className="text-2xl font-bold mb-4">📊 ENKO Dashboard</h1>
      <CategoryFilter selected={selectedCategory} setSelected={setSelectedCategory} />
      <MaterialForm onAddSuccess={() => window.location.reload()} />

      <ul className="space-y-1">
  {top5.map((m, i) => (
    <li key={i} className="flex justify-between items-center">
      <span>{i + 1}. {m.name}</span>
      <div className="flex items-center gap-2">
        <span className="text-green-600 font-semibold">
          +{m.profit.toLocaleString()}฿
        </span>
        <button
          onClick={() => handleDelete(m.id, m.name)}
          className="text-red-500 text-sm"
        >
          🗑
        </button>
      </div>
    </li>
  ))}
</ul>
          )}
        </CardContent>
      </Card>

      {/* ขาดทุน / เสี่ยง */}
      <Card className="mb-4">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">⚠️ วัสดุขาดทุนหรือเสี่ยง</h2>
          {lossList.length === 0 ? (
            <p className="text-sm text-gray-500">ไม่มีรายการที่ต้องระวัง</p>
          ) : (
            <ul className="space-y-1">
              {lossList.map((m, i) => (
                <li key={i} className="flex justify-between">
                  <span>{m.name}</span>
                  <span className="text-red-500 font-medium">
                    {m.profit < 0 ? `${m.profit.toLocaleString()}฿` : "ขายยาก"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* กราฟราคา */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">📈 กราฟราคาย้อนหลัง</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={priceTrends}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}



