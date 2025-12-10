import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Send, MessageCircle } from "lucide-react";
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

  // ======================
  // Flux WhatsApp
  // ======================
  const whatsappPhoneNumber = "237652845101"; // ton numéro WhatsApp Business
  const initialWhatsAppMessage = encodeURIComponent("Bonjour ! Je veux continuer la conversation avec SecureHer.");
  const whatsappLink = `https://wa.me/${whatsappPhoneNumber}?text=${initialWhatsAppMessage}`;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ======================
  // Flux React / Frontend
  // ======================
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
      // ======================
      // Workflow n8n React uniquement
      // ======================
      const res = await fetch("https://broom.ledom.space/webhook-test/chatbot-frontend", { // <-- workflow React
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
        { id: Date.now() + 2, sender: "bot", text: "Erreur de connexion au coach. Vérifiez votre workflow n8n." }
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
      <header className="p-4 border-b bg-white/70 backdrop-blur-lg flex items-center justify-between">
  <div className="flex gap-3 items-center">
    {/* Bouton de retour avec taille responsive */}
    <Link to="/">
      <Button
        variant="ghost"
        size="sm"
        className="p-1 sm:p-2" // padding plus petit sur mobile
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /> {/* taille icon responsive */}
      </Button>
    </Link>

    {/* Titre/logo */}
    <h1 className="hidden lg:block font-bold text-base sm:text-lg text-primary">Coach SecureHer</h1>
    <h1 className="lg:hidden font-bold  sm:text-lg text-primary">Coach </h1>
  </div>

  {/* Bouton WhatsApp responsive */}
  <Button
    variant="outline"
    className="flex items-center justify-center gap-2 border-green-500 text-green-600 hover:bg-green-800 px-2 py-1 sm:px-4 sm:py-2"
    onClick={() => window.open(whatsappLink, "_blank")}
  >
    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
    <span className="text-xs sm:text-base">Continuer sur WhatsApp</span>
  </Button>
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
      <footer className="p-4 border-t bg-white/70 backdrop-blur-lg flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <input
            className="flex-1 px-4 py-3 rounded-xl border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Écrivez votre message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button size="icon" className="rounded-xl bg-primary" onClick={sendMessage}>
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
