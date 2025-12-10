import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Bonjour ! Je suis votre coach SecureHer. Comment puis-je vous aider aujourd'hui ?" }
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);

  // Scroll auto vers le bas
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      // *** API N8N ***
      const res = await fetch("https://TON_WORKFLOW_N8N_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMsg.text })
      });

      const data = await res.json();

      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: data.reply || "Je n'ai pas compris, pouvez-vous reformuler ?"
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 2,
          sender: "bot",
          text: "Erreur de connexion au coach. Vérifiez votre workflow n8n."
        }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-white relative">

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* HEADER */}
      <header className="p-4 border-b bg-white/70 backdrop-blur-lg flex items-center gap-3">
        <Link to="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h1 className="font-bold text-lg text-primary">Coach SecureHer</h1>
      </header>

      {/* CHAT WINDOW */}
      <main className="flex-1 overflow-y-auto px-4 py-6 space-y-4 scrollbar-hide">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-[85%] md:max-w-[60%] p-3 rounded-2xl shadow-sm ${
              msg.sender === "user"
                ? "bg-primary text-white ml-auto"
                : "bg-white text-gray-800 border"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-20 bg-white border rounded-2xl p-3 text-gray-500"
          >
            ...
          </motion.div>
        )}

        <div ref={chatEndRef} />
      </main>

      {/* INPUT BAR */}
      <footer className="p-4 border-t bg-white/70 backdrop-blur-lg">
        <div className="flex items-center gap-3">
          <input
            className="flex-1 px-4 py-3 rounded-xl border bg-white shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Écrivez votre message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <Button
            size="icon"
            className="rounded-xl bg-primary"
            onClick={sendMessage}
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
