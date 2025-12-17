import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, ChefHat } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- Markdown Renderer Component ---
const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const parseBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const lines = content.split('\n');

  return (
    <div className="text-sm leading-relaxed space-y-1">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        
        // Headers (### Title)
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={i} className="font-bold text-agro-green text-sm mt-3 mb-1 block">
              {parseBold(trimmed.replace('### ', ''))}
            </h3>
          );
        }

        // List items (* Item or - Item)
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
          return (
            <div key={i} className="flex items-start gap-2 pl-1 my-1">
              <span className="text-agro-green mt-1.5 text-[6px] flex-shrink-0">●</span>
              <span className="text-gray-700">{parseBold(trimmed.substring(2))}</span>
            </div>
          );
        }

        // Ordered List (1. Item)
        if (/^\d+\.\s/.test(trimmed)) {
           const number = trimmed.split(' ')[0];
           const text = trimmed.substring(trimmed.indexOf(' ') + 1);
           return (
             <div key={i} className="flex items-start gap-2 pl-1 my-1">
               <span className="font-bold text-agro-green text-xs mt-0.5 flex-shrink-0">{number}</span>
               <span className="text-gray-700">{parseBold(text)}</span>
             </div>
           )
        }

        // Horizontal Rule
        if (trimmed === '---' || trimmed === '___') {
            return <hr key={i} className="my-3 border-green-100" />;
        }

        // Empty lines
        if (!trimmed) return <div key={i} className="h-2" />;

        // Standard text
        return <p key={i} className="text-gray-700">{parseBold(line)}</p>;
      })}
    </div>
  );
};

export const AIChef: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: '¡Hola! Soy tu Chef AgroIA. 🥦🍅\n\nDime qué ingredientes tienes y te daré una receta deliciosa.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = "gemini-2.5-flash";
      
      const systemInstruction = "Eres un chef experto en cocina saludable y sustentable llamado 'Chef AgroIA'. Tu objetivo es fomentar el consumo de verduras y frutas locales. Responde SIEMPRE usando formato Markdown para que sea legible: usa '###' para títulos de recetas, negritas '**' para ingredientes importantes, y listas '*' para los pasos. Usa emojis. Sé conciso.";

      const response = await ai.models.generateContent({
        model: model,
        contents: [
            ...messages.map(m => ({ 
                role: m.role, 
                parts: [{ text: m.text }] 
            })),
            { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
        }
      });

      const text = response.text || "Lo siento, tuve un problema pensando en una receta. ¿Intentamos de nuevo?";
      
      setMessages(prev => [...prev, { role: 'model', text: text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Hubo un error de conexión. Por favor intenta más tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-agro-green text-white p-4 rounded-full shadow-2xl hover:bg-agro-darkGreen transition-all transform hover:scale-110 flex items-center gap-2 group"
        >
          <ChefHat className="h-6 w-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">
            Chef IA
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300 h-[500px]">
          {/* Header */}
          <div className="bg-agro-green p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Sparkles className="h-5 w-5 text-yellow-300" />
              </div>
              <div>
                <h3 className="font-bold">Chef AgroIA</h3>
                <p className="text-xs text-green-100">Asistente Culinario</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-agro-green text-white rounded-br-none' 
                      : 'bg-white border border-gray-100 rounded-bl-none'
                  }`}
                >
                  {msg.role === 'model' ? (
                    <MarkdownRenderer content={msg.text} />
                  ) : (
                    <p className="whitespace-pre-wrap text-sm">{msg.text}</p>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-agro-green rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-agro-green rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-agro-green rounded-full animate-bounce delay-200" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe un ingrediente..."
                className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agro-green focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-2 bg-agro-green text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-agro-darkGreen transition"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-center text-[10px] text-gray-400 mt-2">
              Potenciado por Gemini 2.5 Flash
            </p>
          </div>
        </div>
      )}
    </>
  );
};