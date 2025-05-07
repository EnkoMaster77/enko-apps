import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const [topMaterials, setTopMaterials] = useState([]);
  const [lossMaterials, setLossMaterials] = useState([]);
  const [priceTrends, setPriceTrends] = useState([]);

  useEffect(() => {
    // Mock data ชั่วคราว - เปลี่ยนเป็น API จริงได้ภายหลัง
    setTopMaterials([
      { name: "ทองแดง", profit: 4500 },
      { name: "เหล็กหนา", profit: 3200 },
      { name: "อลูมิเนียม", profit: 2100 },
      { name: "สายไฟเบอร์", profit: 1800 },
      { name: "ทองแดงฝอย", profit: 1600 },
    ]);
    setLossMaterials([
      { name: "เหล็กบาง", loss: -800 },
      { name: "BECU25", warning: "ขายยาก" },
    ]);
    setPriceTrends([
      { date: "01/05", price: 110 },
      { date: "02/05", price: 115 },
      { date: "03/05", price: 117 },
      { date: "04/05", price: 113 },
      { date: "05/05", price: 120 },
    ]);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      <h1 className="text-2xl font-bold col-span-1 md:col-span-2">📊 ENKO Dashboard</h1>

      {/* TOP 5 กำไร */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">🏆 TOP 5 วัสดุกำไรสูงสุด</h2>
          <ul className="space-y-1">
            {topMaterials.map((m, i) => (
              <li key={i} className="flex justify-between">
                <span>{i + 1}. {m.name}</span>
                <span className="text-green-600 font-semibold">+{m.profit.toLocaleString()}฿</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* วัสดุขาดทุน / เสี่ยง */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">⚠️ วัสดุขาดทุนหรือเสี่ยง</h2>
          <ul className="space-y-1">
            {lossMaterials.map((m, i) => (
              <li key={i} className="flex justify-between">
                <span>{m.name}</span>
                <span className="text-red-500 font-medium">
                  {m.loss ? `${m.loss.toLocaleString()}฿` : m.warning}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* กราฟราคา */}
      <Card className="col-span-1 md:col-span-2">
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


