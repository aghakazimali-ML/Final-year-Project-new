import React, { useState, useEffect, useRef } from 'react';
import { Send, X, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const SYSTEM_PROMPT = `
You are AIMS Assistant, the AI chatbot for AIMS — Pakistan's free event vendor directory, serving Lahore only.

You help users find event vendors in Lahore for weddings, birthdays, corporate events, and cultural events.

Available vendor categories in Lahore:
- Photography & Film (e.g. Sublime Photography, Captured by Farhan)
- Decoration & Florals (e.g. Elegance Events)
- Catering & Food (e.g. Café Aylanto Catering, Butt Karahi & Events)
- Venues & Halls (e.g. Faletti's Hotel, Alhamra Arts Council)
- Bridal Makeup (e.g. Depilex Beauty)
- Music & Entertainment (e.g. Sain Zahoor Events)
- Cakes & Bakery (e.g. Cakery & Co.)

Rules:
1. Only mention Lahore vendors. Never mention Karachi or Islamabad.
2. You do NOT book events. Direct users to call or email vendors directly.
3. AIMS is completely free. No commission, no booking fee.
4. Be friendly, helpful, and respond in the same language the user writes in (Urdu or English).
5. Keep responses concise — use bullet points when listing vendors.
6. If asked something outside event planning, politely redirect to event-related help.
`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm the AIMS Assistant. How can I help you find event vendors in Lahore?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const msgsEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    msgsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (text: string = input) => {
    const msgText = text.trim();
    if (!msgText || isLoading) return;

    const newUserMsg: Message = {
      role: 'user',
      content: msgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInput('');
    setIsLoading(true);

    try {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY environment variable is not defined");
      }
      
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const modelName = "gemini-3-flash-preview";
      
      // Transform messages into the format expected by the SDK
      const history = messages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      const response = await ai.models.generateContent({
        model: modelName,
        contents: [
          ...history,
          { role: 'user', parts: [{ text: msgText }] }
        ],
        config: {
          systemInstruction: SYSTEM_PROMPT,
        }
      });

      const data = response.text || "I'm sorry, I couldn't process that.";
      
      const newBotMsg: Message = {
        role: 'assistant',
        content: data,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, newBotMsg]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting. Please try again.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const chips = [
    { label: "💍 Wedding vendors", value: "Find wedding vendors in Lahore" },
    { label: "🎂 Birthday party", value: "Help me plan a birthday party in Lahore" },
    { label: "📸 Photographers", value: "Best photographers in Lahore" },
    { label: "🍽️ Caterers", value: "Top catering services in Lahore" },
    { label: "🏛️ Venues", value: "Event venues and halls in Lahore" }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-[26px] right-[26px] z-[997] w-[54px] h-[54px] rounded-full border-none cursor-pointer bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] shadow-[0_6px_20px_rgba(79,142,247,0.4)] flex items-center justify-center text-[22px] text-white hover:scale-110 transition-transform"
      >
        {isOpen ? <X size={24} /> : <Bot size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-[92px] right-[26px] z-[996] w-[356px] h-[495px] bg-[var(--surface)] border border-[var(--border2)] rounded-[22px] flex flex-col overflow-hidden shadow-[0_20px_56px_rgba(0,0,0,0.3)]"
          >
            <div className="p-[16px_17px_13px] bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] flex items-center gap-2.5">
              <div className="w-9 h-9 bg-white/20 rounded-[10px] flex items-center justify-center text-lg">🤖</div>
              <div className="flex-1">
                <div className="font-bold text-white text-sm">AIMS Assistant</div>
                <div className="text-[11px] text-white/80 flex items-center gap-1">
                  <span className="w-[5px] h-[5px] bg-green-400 rounded-full animate-pulse" /> Online — Powered by AI
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-[27px] h-[27px] bg-white/20 border-none rounded-[7px] cursor-pointer text-white flex items-center justify-center"
              >
                <X size={14} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3.5 flex flex-col gap-2.75 custom-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex gap-2", msg.role === 'user' && "flex-row-reverse")}>
                  <div className={cn(
                    "w-[27px] h-[27px] rounded-lg flex items-center justify-center text-[13px] shrink-0",
                    msg.role === 'assistant' ? "bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] text-white" : "bg-[var(--bg3)]"
                  )}>
                    {msg.role === 'assistant' ? <Bot size={14} /> : <User size={14} />}
                  </div>
                  <div>
                    <div className={cn(
                      "max-w-[215px] p-[9px_12px] rounded-xl text-[13.5px] leading-relaxed",
                      msg.role === 'assistant' 
                        ? "bg-[var(--bg2)] border border-[var(--border)] rounded-bl-[4px]" 
                        : "bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] text-white rounded-br-[4px]"
                    )}>
                      {msg.content}
                    </div>
                    <div className={cn("text-[10px] text-[var(--text3)] mt-0.5", msg.role === 'user' && "text-right")}>
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2">
                  <div className="w-[27px] h-[27px] rounded-lg bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] text-white flex items-center justify-center shrink-0">
                    <Loader2 size={14} className="animate-spin" />
                  </div>
                  <div className="max-w-[215px] p-[9px_12px] rounded-xl bg-[var(--bg2)] border border-[var(--border)] rounded-bl-[4px]">
                    <div className="flex gap-1 items-center h-4">
                      <span className="w-1.5 h-1.5 bg-[var(--text3)] rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-[var(--text3)] rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-[var(--text3)] rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={msgsEndRef} />
            </div>

            <div className="p-[0_14px_9px] flex gap-1.5 flex-wrap">
              {chips.map((chip, i) => (
                <button
                  key={i}
                  disabled={isLoading}
                  onClick={() => handleSend(chip.value)}
                  className="px-2.5 py-1.25 bg-[var(--bg2)] border border-[var(--border)] rounded-[9px] text-[12px] text-[var(--text2)] cursor-pointer hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            <div className="p-[11px_13px] border-t border-[var(--border)] flex gap-2 items-center">
              <input
                className="flex-1 p-[8px_11px] bg-[var(--bg2)] border border-[var(--border)] rounded-[9px] text-[var(--text)] text-[13.5px] font-sans outline-none focus:border-[var(--accent)] transition-colors"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                disabled={isLoading}
                onClick={() => handleSend()}
                className="w-8 h-8 bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] border-none rounded-lg cursor-pointer text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 3px; }
      `}</style>
    </>
  );
};

export default Chatbot;
