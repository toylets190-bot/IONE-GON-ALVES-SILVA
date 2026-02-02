
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot, Sparkles } from 'lucide-react';
import { getAssistantStream } from '../services/gemini';

interface Message {
  text: string;
  isBot: boolean;
}

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Olá! Como posso auxiliar sua gestão municipal hoje?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setInputValue("");
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setIsLoading(true);

    // Add empty bot message for streaming
    setMessages(prev => [...prev, { text: "", isBot: true }]);

    try {
      const stream = await getAssistantStream(userMsg);
      let fullText = "";
      
      for await (const chunk of stream) {
        const chunkText = chunk.text;
        fullText += chunkText;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullText;
          return newMessages;
        });
      }
    } catch (error) {
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].text = "Desculpe, ocorreu um erro na conexão. Tente novamente em instantes.";
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
          isOpen ? 'bg-slate-900 rotate-90' : 'bg-blue-700 hover:scale-110 active:scale-95'
        }`}
      >
        {isOpen ? <X size={28} className="text-white" /> : <MessageSquare size={28} className="text-white" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[420px] h-[550px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 animate-fade-in-up">
          <div className="bg-slate-900 p-5 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Bot size={22} />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-none mb-1">Assistente Ione</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-blue-300 font-bold uppercase tracking-widest">IA Especializada</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.isBot 
                    ? 'bg-white text-slate-800 rounded-tl-none border border-slate-200 shadow-sm' 
                    : 'bg-blue-700 text-white rounded-tr-none shadow-md'
                }`}>
                  {m.text === "" && m.isBot ? (
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  ) : m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Dúvidas sobre convênios ou gestão?"
                className="w-full pl-4 pr-12 py-3.5 rounded-2xl bg-slate-100 border-none text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              />
              <button 
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 p-2 bg-slate-900 text-white rounded-xl hover:bg-blue-700 disabled:opacity-30 transition-all shadow-md"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="mt-3 flex items-center justify-center gap-1.5 text-[9px] text-slate-400 font-medium uppercase tracking-tighter">
              <Sparkles size={10} className="text-blue-500" />
              Respostas geradas por inteligência artificial treinada em gestão pública
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIChatAssistant;
