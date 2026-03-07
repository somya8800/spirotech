import { useState, useRef, useEffect } from "react";
import { Bot, User } from "lucide-react";

type SensorData = {
  temperature?: number;
  humidity?: number;
  light?: number;
  airQuality?: number;
  phLevel?: number;
  growthRate?: number;
};

type ChatMessage = {
  role: "user" | "ai";
  text: string;
};

const AIChat = ({ sensor }: { sensor: SensorData }) => {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  /* AUTO SCROLL */

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, loading]);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMsg: ChatMessage = { role: "user", text: message };

    setChat((prev) => [...prev, userMsg]);
    setMessage("");
    setLoading(true);

    try {

      const res = await fetch("/.netlify/functions/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message,
          sensor
        })
      });

      const data = await res.json();

      const aiMsg: ChatMessage = {
        role: "ai",
        text: data.reply
      };

      setChat((prev) => [...prev, aiMsg]);

    } catch {

      setChat((prev) => [
        ...prev,
        { role: "ai", text: "AI service error." }
      ]);

    }

    setLoading(false);
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-5 max-w-sm">

      {/* HEADER */}

      <div className="flex items-center gap-2 mb-3 font-semibold text-gray-800">
        <Bot className="text-emerald-500" size={20}/>
        Spirulina AI Assistant
      </div>

      {/* CHAT AREA */}

      <div className="h-64 overflow-y-auto space-y-3 mb-4">

        {chat.map((c, i) => (

          <div
            key={i}
            className={`flex items-start gap-2 ${
              c.role === "user" ? "justify-end" : "justify-start"
            }`}
          >

            {c.role === "ai" && (
              <Bot size={18} className="text-emerald-600 mt-1"/>
            )}

            <div
              className={`px-4 py-2 text-sm max-w-xs ${
                c.role === "user"
                  ? "bg-emerald-500 text-white rounded-2xl rounded-br-md"
                  : "bg-gray-100 text-gray-700 rounded-2xl rounded-bl-md"
              }`}
            >
              {c.text}
            </div>

            {c.role === "user" && (
              <User size={18} className="text-gray-500 mt-1"/>
            )}

          </div>

        ))}

        {/* AI TYPING */}

        {loading && (
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Bot size={16}/>
            AI typing...
          </div>
        )}

        <div ref={chatEndRef}></div>

      </div>

      {/* INPUT */}

      <div className="flex gap-2">

        <input
          className="flex-1 border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
          placeholder="Ask about spirulina..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}

          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}

        />

        <button
          onClick={sendMessage}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl transition"
        >
          Send
        </button>

      </div>

    </div>
  );
};

export default AIChat;