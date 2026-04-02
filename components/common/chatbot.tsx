"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X } from "lucide-react";
import { chatbotReplies } from "@/content/chatbot-data";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const getReply = (text: string) => {
    const lower = text.toLowerCase();

    for (let item of chatbotReplies) {
      if (item.keywords.some((k) => lower.includes(k))) {
        return item.reply;
      }
    }

    return "Please contact me for detailed information.";
  };

  const sendMessage = (customText?: string) => {
    const messageText = customText || input;
    if (!messageText) return;

    const userMsg = { role: "user", content: messageText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botReply = {
        role: "bot",
        content: getReply(messageText),
      };
      setMessages((prev) => [...prev, botReply]);
      setTyping(false);
    }, 700);
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 right-6.5 z-50 bg-foreground text-background p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        {open ? <X size={20} /> : <MessageSquare size={20} />}
      </button>

      {open && (
        <div className="fixed bottom-35 right-6.5 w-78.75 h-117.5 bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-3 border-b text-sm font-semibold">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Portfolio Assistant
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={clearChat}
                className="text-xs text-muted-foreground hover:text-foreground transition"
              >
                Clear
              </button>

              <button onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>
          </div>

          {/* EMPTY STATE */}
          {messages.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6 space-y-4">
              <h3 className="text-lg font-semibold">Welcome</h3>

              <p className="text-sm text-muted-foreground">
                Ask anything about my services, experience, or projects.
              </p>

              <div className="text-xs text-muted-foreground">Try asking:</div>

              <div className="flex flex-col gap-2 w-full">
                {[
                  "What services do you offer?",
                  "Tell me about your projects",
                  "What are your skills?",
                  "How can I contact you?",
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs px-3 py-2 border border-border rounded-full hover:bg-muted transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* MESSAGES */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`px-4 py-2 rounded-xl max-w-[80%] ${
                        msg.role === "user"
                          ? "bg-foreground text-background"
                          : "bg-muted"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {typing && (
                  <div className="text-xs text-muted-foreground">typing...</div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </>
          )}

          {/* INPUT */}
          <div className="p-3 border-t">
            <div className="relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && input.trim() !== "") {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                className="w-full border border-border rounded-full px-4 py-2 pr-10 text-sm focus:outline-none"
                placeholder="Ask something..."
              />

              <button
                onClick={() => {
                  if (input.trim() !== "") sendMessage();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
