import { useState } from "react";

function App() {
  const [materials, setMaterials] = useState([]);
  const [newMaterial, setNewMaterial] = useState({ name: "", buy: "", sell: "" });

  const addMaterial = () => {
    if (newMaterial.name && newMaterial.buy && newMaterial.sell) {
      setMaterials([...materials, newMaterial]);
      setNewMaterial({ name: "", buy: "", sell: "" });
    }
  };

  const calculateProfit = (buy, sell) => {
    const profit = parseFloat(sell) - parseFloat(buy);
    const percent = (profit / parseFloat(buy)) * 100;
    return `${profit.toFixed(2)} บาท (${percent.toFixed(1)}%)`;
  };

  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold" }}>📦 ENKO - ระบบบันทึกราคาวัสดุ</h1>

      <div style={{ marginTop: 30, display: "flex", gap: 10 }}>
        <input
          placeholder="ชื่อวัสดุ เช่น เหล็กบาง"
          value={newMaterial.name}
          onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })}
        />
        <input
          placeholder="ราคาซื้อ (บาท/กก.)"
          value={newMaterial.buy}
          onChange={(e) => setNewMaterial({ ...newMaterial, buy: e.target.value })}
        />
        <input
          placeholder="ราคาขาย (บาท/กก.)"
          value={newMaterial.sell}
          onChange={(e) => setNewMaterial({ ...newMaterial, sell: e.target.value })}
        />
        <button onClick={addMaterial}>➕ เพิ่ม</button>
      </div>

      <table border="1" style={{ marginTop: 30, width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ชื่อวัสดุ</th>
            <th>ราคาซื้อ</th>
            <th>ราคาขาย</th>
            <th>กำไร/ขาดทุน</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((m, i) => (
            <tr key={i}>
              <td>{m.name}</td>
              <td>{m.buy} บาท</td>
              <td>{m.sell} บาท</td>
              <td>{calculateProfit(m.buy, m.sell)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
