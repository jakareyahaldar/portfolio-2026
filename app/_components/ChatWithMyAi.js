"use client"

import { MessageCircle, X, Send, Loader2, Bot, User } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function ChatWithMyAi() {
  const [chatOpen, setChatOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hi there! I'm an AI assistant. Ask me anything about my skills, experience, or projects!",
      sender: 'agent',
    },
    {
      id: '2',
      text: "What stack do you specialize in?",
      sender: 'user',
    },
    {
      id: '3',
      text: "I specialize in the MERN stack, Next.js, React, Tailwind CSS, and Node.js!",
      sender: 'agent',
    },
  ])

  const chatContainerRef = useRef(null)

  // Auto scroll to bottom whenever messages change or loading state changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages, isLoading])

  const handleSendMessage = () => {
    if (!input.trim() || isLoading) return

    const userMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response after delay
    setTimeout(() => {
      const agentResponse = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for reaching out! This is a dummy automated response.",
        sender: 'agent',
      }
      setMessages((prev) => [...prev, agentResponse])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!chatOpen) {
    return (
      <button
        onClick={() => setChatOpen(true)}
        className="flex gap-2 items-center bg-blue-600 text-white rounded-2xl px-4 py-2 fixed bottom-10 right-10 z-50 shadow-2xl hover:bg-blue-700 hover:scale-105 transition duration-300 font-medium"
      >
        Ask about me! <MessageCircle size={18} />
      </button>
    )
  }

  return (
    <div className="h-[480px] w-80 sm:w-96 bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-100 rounded-2xl fixed bottom-10 right-10 z-100 shadow-2xl flex flex-col border border-zinc-200 dark:border-zinc-800">
      
      {/* Header */}
      <div className="relative flex justify-center font-semibold py-3 items-center px-6 border-b border-zinc-200 dark:border-zinc-800">
        <h2>Ask About ME</h2>
        <button 
          onClick={() => setChatOpen(false)}
          className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:scale-110 hover:rotate-90 transition duration-300"
          aria-label="Close chat"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages Scrollable Area */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth text-sm"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2 ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'agent' && (
              <div className="p-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full">
                <Bot size={14} />
              </div>
            )}
            <div
              className={`max-w-[75%] px-3.5 py-2 rounded-2xl break-words ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-tr-none'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tl-none'
              }`}
            >
              {msg.text}
            </div>
            {msg.sender === 'user' && (
              <div className="p-1.5 bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-full">
                <User size={14} />
              </div>
            )}
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs italic">
            <div className="p-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full">
              <Bot size={14} />
            </div>
            <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800 px-3 py-2 rounded-2xl rounded-tl-none">
              <Loader2 size={14} className="animate-spin text-blue-500" />
              <span>AI is thinking...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Field & Send Button */}
      <div className="p-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          className="flex-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-zinc-400 disabled:opacity-50"
        />
        <button
          onClick={handleSendMessage}
          disabled={!input.trim() || isLoading}
          className="p-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 text-white rounded-xl transition duration-200 flex items-center justify-center"
        >
          <Send size={16} />
        </button>
      </div>

    </div>
  )
}