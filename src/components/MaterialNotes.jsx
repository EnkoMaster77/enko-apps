// src/components/MaterialNotes.jsx
import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function MaterialNotes({ material }) {
  const [note, setNote] = useState(material.note || '');
  const [saving, setSaving] = useState(false);

  const handleSaveNote = async () => {
    try {
      setSaving(true);
      await updateDoc(doc(db, 'materials', material.id), { note });
    } catch (err) {
      console.error('Error saving note:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mt-2">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={2}
        className="w-full text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded p-2 focus:outline-none focus:ring focus:ring-blue-400"
        placeholder="📝 เพิ่มหมายเหตุ เช่น แหล่งที่มาหรือเหตุผลในการตั้งราคา"
      ></textarea>
      <div className="text-right mt-1">
        <button
          onClick={handleSaveNote}
          className="text-xs px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          disabled={saving}
        >
          💾 {saving ? 'กำลังบันทึก...' : 'บันทึกหมายเหตุ'}
        </button>
      </div>
    </div>
  );
}

