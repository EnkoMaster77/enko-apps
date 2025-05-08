// src/utils/telegram.js
export const sendTelegramMessage = async (text) => {
  const chatId = "6534762863"; // ✅ ใช้ Chat ID ของคุณ
  const token = "7426364576:AAFOmj4a3I0L7jD8mJ83to1ZNDNUIJApE1g";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    });
    console.log("✅ ส่ง Telegram สำเร็จ");
  } catch (err) {
    console.error("❌ ส่ง Telegram ไม่ได้:", err);
  }
};

