import { useState } from "react";
import AIChat from "./AIChat";
import { Bot } from "lucide-react";

const FloatingAIChat = ({ sensor }: any) => {

  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      onMouseLeave={() => setOpen(false)}
    >

      {/* Chat Window */}

      {open && (
        <div className="mb-3 w-80 animate-fade-in">
          <AIChat sensor={sensor} />
        </div>
      )}

      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110 animate-pulse"
      >
        <Bot size={22}/>
      </button>

    </div>
  );
};

export default FloatingAIChat;