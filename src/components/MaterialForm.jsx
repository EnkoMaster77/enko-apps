import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";

const defaultForm = {
  name: "",
  category: "โลหะ",
  profit: "",
  risk: false,
};

export default function MaterialForm({ onAddSuccess }) {
  const [form, setForm] = useState(defaultForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newMaterial = {
        ...form,
        profit: parseFloat(form.profit),
      };
      await addDoc(collection(db, "materials"), newMaterial);
      setForm(defaultForm);
      onAddSuccess(); // reload dashboard
    } catch (err) {
      console.error("เกิดข้อผิดพลาด:", err);
      alert("บันทึกไม่สำเร็จ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold">➕ เพิ่มวัสดุใหม่</h2>

      <div>
        <label className="block text-sm font-medium">ชื่อวัสดุ</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">หมวดหมู่</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
        >
          <option value="โลหะ">โลหะ</option>
          <option value="สายไฟ">สายไฟ</option>
          <option value="พลาสติก">พลาสติก</option>
          <option value="อื่นๆ">อื่นๆ</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">กำไร (บาท)</label>
        <input
          type="number"
          name="profit"
          value={form.profit}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          name="risk"
          checked={form.risk}
          onChange={handleChange}
          className="mr-2"
        />
        <label>วัสดุนี้ขายยาก / เสี่ยง</label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "กำลังบันทึก..." : "บันทึกวัสดุ"}
      </button>
    </form>
  );
}



