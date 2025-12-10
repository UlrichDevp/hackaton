import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Loader2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Réponses simples basées sur des patterns - modifiable pour n8n
const getBotResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();

  // Salutations
  if (lowerMessage.match(/^(hello|hi|bonjour|salut|coucou)/)) {
    return "Bonjour ! 👋 Je suis ici pour vous aider. Comment puis-je vous assister aujourd'hui ?";
  }

  // Questions sur le service
  if (lowerMessage.includes("aide") || lowerMessage.includes("help")) {
    return "Je peux vous aider avec des questions sur les espaces sûrs en ligne, les ressources, et bien d'autres sujets. Qu'aimeriez-vous savoir ?";
  }

  // Questions sur les espaces sûrs
  if (
    lowerMessage.includes("espace") ||
    lowerMessage.includes("sûr") ||
    lowerMessage.includes("safe")
  ) {
    return "Les espaces sûrs en ligne sont des environnements où les gens peuvent s'exprimer sans crainte de jugement ou de harcèlement. Avez-vous une question spécifique à ce sujet ?";
  }

  // Remerciements
  if (lowerMessage.match(/^(merci|thanks|thank you)/)) {
    return "De rien ! 😊 N'hésitez pas à me poser d'autres questions.";
  }

  // Response par défaut
  return "C'est une bonne question ! Je suis encore en apprentissage. Pourriez-vous me donner plus de détails ?";
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Bonjour ! 👋 Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll vers le dernier message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    // Ajouter le message de l'utilisateur
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simuler un délai de réponse du bot
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4 sm:p-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs sm:max-w-md lg:max-w-lg px-4 py-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-gradient-primary text-white rounded-br-none"
                      : "bg-white text-slate-900 shadow-sm border border-slate-200 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm sm:text-base leading-relaxed">
                    {message.text}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "user"
                        ? "text-blue-100"
                        : "text-slate-500"
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-slate-900 shadow-sm border border-slate-200 px-4 py-3 rounded-lg rounded-bl-none">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">écrit...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={scrollRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="bg-white border-t border-slate-200 shadow-lg md:w-1/2 w-4/5 m-6 rounded-lg max-w-3xl mx-auto">
          <div className="max-w-4xl mx-auto p-2 sm:p-6">
            <form onSubmit={handleSendMessage} className="flex gap-3">
              <Input
                type="text"
                placeholder="Tapez votre message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 text-base"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="gap-2 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Envoyer</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
