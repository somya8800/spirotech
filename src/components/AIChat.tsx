import { useState } from "react";

const AIChat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<any[]>([]);

  const sendMessage = async () => {
    if (!message) return;

    const userMsg = { role: "user", text: message };
    setChat([...chat, userMsg]);

    const res = await fetch("/.netlify/functions/ai-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    const aiMsg = { role: "ai", text: data.reply };

    setChat((prev) => [...prev, aiMsg]);

    setMessage("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-3">

      <h2 className="font-bold text-lg">
        🤖 Spirulina AI Assistant
      </h2>

      <div className="h-60 overflow-y-auto space-y-2">

        {chat.map((c, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              c.role === "user"
                ? "bg-green-100 text-right"
                : "bg-gray-100"
            }`}
          >
            {c.text}
          </div>
        ))}

      </div>

      <div className="flex gap-2">

        <input
          className="border flex-1 p-2 rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about spirulina..."
        />

        <button
          onClick={sendMessage}
          className="bg-emerald-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>

      </div>

    </div>
  );
};

export default AIChat;