"use client"

import type React from "react"

import { Send, Menu, FileText, Bot, Terminal, Cpu, Code, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Avatar } from "./avatar"
import { CV_DATA } from "@/lib/cv-data"
import { SuggestionCard } from "./suggestion-card"
import { MessageContent } from "./message-content"

interface ChatAreaProps {
  input: string
  onInputChange: (value: string) => void
  onSendMessage: () => void
  onSendMessageWithText: (text: string) => void
  messages: any[]
  isTyping: boolean
  messagesEndRef: React.RefObject<HTMLDivElement | null>
  onMobileMenuClick: () => void
}

export function ChatArea({
  input,
  onInputChange,
  onSendMessage,
  onSendMessageWithText,
  messages,
  isTyping,
  messagesEndRef,
  onMobileMenuClick,
}: ChatAreaProps) {
  return (
    <div className="flex-1 flex flex-col relative h-full w-full bg-[#343541]">
      {/* MOBILE HEADER */}
      <div className="flex items-center justify-between p-4 md:hidden border-b border-white/10 text-gray-100 bg-[#343541] z-10">
        <button onClick={onMobileMenuClick} className="p-1 -ml-1 text-gray-300">
          <Menu size={24} />
        </button>
        <span className="font-medium">Portfolio GPT</span>
        <a href={CV_DATA.profile.cv_link} target="_blank" rel="noreferrer">
          <FileText size={20} className="text-gray-400" />
        </a>
      </div>

      {/* CHAT HISTORY */}
      <div className="flex-1 overflow-y-auto w-full scroll-smooth">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full px-4 text-center animate-in fade-in duration-500">
            <div className="bg-white/5 p-4 rounded-full mb-6 backdrop-blur-sm">
              <Bot size={48} className="text-gray-200" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Nithin Jambula <span className="text-[#19c37d]">GPT</span>
            </h2>
            
            {/* Animated Social Icons */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <a
                href={CV_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-gray-800/50 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 group animate-pulse"
                style={{animationDelay: '0s'}}
              >
                <Github size={16} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href={CV_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-gray-800/50 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 group animate-pulse"
                style={{animationDelay: '0.2s'}}
              >
                <Linkedin size={16} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <button
                onClick={() => {
                  const subject = encodeURIComponent("Hello Nithin - Portfolio Inquiry")
                  const body = encodeURIComponent("Hi Nithin,\n\nI visited your portfolio and would love to connect!\n\nBest regards")
                  window.open(`mailto:${CV_DATA.profile.email}?subject=${subject}&body=${body}`, '_blank')
                }}
                className="p-1.5 rounded-full bg-gray-800/50 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 group animate-pulse"
                style={{animationDelay: '0.4s'}}
              >
                <Mail size={16} className="text-gray-400 group-hover:text-[#19c37d] transition-colors" />
              </button>
              <a
                href={CV_DATA.profile.website}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-gray-800/50 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 group animate-pulse"
                style={{animationDelay: '0.6s'}}
              >
                <ExternalLink size={16} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              I'm Nithin's custom AI agent, built from his GitHub data (including private repos). This portfolio auto-updates from his latest commits. Yeah, I basically stalk his code for a living. 🤖
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
              <SuggestionCard
                title="Experience"
                subtitle="AIR Centre & Vulcan EV"
                icon={Terminal}
                onClick={() => onSendMessageWithText("Tell me about your experience")}
              />
              <SuggestionCard
                title="Tech Stack"
                subtitle="LLMs, ROS, Python, YOLO"
                icon={Cpu}
                onClick={() => onSendMessageWithText("What are your technical skills?")}
              />
              <SuggestionCard
                title="Key Projects"
                subtitle="16fps, EchoSight, ScreenAutomate"
                icon={Code}
                onClick={() => onSendMessageWithText("Show me your key projects")}
              />
              <SuggestionCard
                title="Download CV"
                subtitle="Get the PDF file"
                icon={FileText}
                onClick={() => onSendMessageWithText("Give me the CV link")}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col pb-36 pt-0">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`w-full py-8 px-4 border-b border-black/10 ${msg.role === "assistant" ? "bg-[#444654]" : "bg-[#343541]"}`}
              >
                <div className="max-w-3xl mx-auto flex gap-4 md:gap-6">
                  <Avatar isBot={msg.role === "assistant"} />
                  <div className="flex-1 min-w-0 overflow-hidden prose prose-invert max-w-none">
                    {msg.role === "assistant" ? (
                      <MessageContent msg={msg} onSendMessage={onSendMessageWithText} />
                    ) : (
                      <p className="text-gray-100 whitespace-pre-wrap">{msg.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="w-full py-8 px-4 bg-[#444654] border-b border-black/10">
                <div className="max-w-3xl mx-auto flex gap-4 md:gap-6">
                  <Avatar isBot={true} />
                  <div className="flex items-center gap-1 h-6">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} className="h-4" />
          </div>
        )}
      </div>

      {/* INPUT AREA */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#343541] via-[#343541] to-transparent pt-10 pb-6 px-4 z-10">
        <div className="max-w-3xl mx-auto relative">
          <div className="relative flex items-center bg-[#40414F] rounded-xl shadow-lg border border-black/10 overflow-hidden focus-within:border-gray-500/50 focus-within:shadow-xl transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSendMessage()}
              placeholder="Ask about specific projects like 'EchoSight'..."
              className="w-full bg-transparent text-white px-4 py-4 pr-12 focus:outline-none placeholder-gray-400"
            />
            <button
              onClick={onSendMessage}
              disabled={!input.trim()}
              className={`absolute right-2 p-2 rounded-md transition-all duration-200 ${input.trim() ? "bg-[#19c37d] text-white hover:bg-[#15a066]" : "text-gray-500 bg-transparent cursor-default"}`}
            >
              <Send size={16} />
            </button>
          </div>
          <p className="text-[11px] text-gray-500 text-center mt-2 font-light">
            AI Agent simulating Nithin's Portfolio. Content derived from CV data.
          </p>
        </div>
      </div>
    </div>
  )
}
