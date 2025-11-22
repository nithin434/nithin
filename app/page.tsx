"use client"

import { useState, useEffect, useRef } from "react"
import { Sidebar } from "@/components/sidebar"
import { ChatArea } from "@/components/chat-area"

interface Message {
  role: "user" | "assistant"
  content: string
  type?: string
  suggestions?: string[]
}

export default function Portfolio() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const generateResponse = (query: string) => {
    const lowerQuery = query.toLowerCase()

    if (
      lowerQuery.includes("experience") ||
      lowerQuery.includes("work") ||
      lowerQuery.includes("job") ||
      lowerQuery.includes("intern") ||
      lowerQuery.includes("air centre") ||
      lowerQuery.includes("vulcan")
    ) {
      return {
        type: "experience",
        text: "I'm a Machine Learning Engineer with hands-on research and industry experience in neuro-symbolic AI and autonomous robotics.",
        suggestions: ["Tell me about EchoSight", "What is 16fps?", "Show my skills"],
      }
    }

    if (
      lowerQuery.includes("project") ||
      lowerQuery.includes("built") ||
      lowerQuery.includes("make") ||
      lowerQuery.includes("portfolio") ||
      lowerQuery.includes("echosight") ||
      lowerQuery.includes("16fps") ||
      lowerQuery.includes("deepshield") ||
      lowerQuery.includes("woat") ||
      lowerQuery.includes("screenautomate")
    ) {
      return {
        type: "projects",
        text: "I've engineered advanced systems ranging from autonomous agents to computer vision solutions. Here are my key projects:",
        suggestions: ["Tell me about EchoSight", "Explain 16fps project", "View all experience"],
      }
    }

    if (
      lowerQuery.includes("echosight") &&
      (lowerQuery.includes("tell") || lowerQuery.includes("about") || lowerQuery.includes("explain"))
    ) {
      return {
        type: "text",
        text: "EchoSight is a patent-pending wearable assistive navigation system for the visually impaired. It uses YOLOv8 for real-time object detection (45+ FPS on Raspberry Pi) and provides spatial audio feedback through Bluetooth earbuds. The system includes 50+ custom object classes with depth estimation and contextual alerting. It won the Vikas 2024 Innovation Challenge Award for its innovative approach to accessibility.",
        suggestions: ["Show my projects", "What about 16fps?", "Download CV"],
      }
    }

    if (
      lowerQuery.includes("16fps") &&
      (lowerQuery.includes("tell") || lowerQuery.includes("about") || lowerQuery.includes("explain"))
    ) {
      return {
        type: "16fps_special",
        text: "16fps is a multi-video generation agent I built using LangChain and Stable Video Diffusion. It's an autonomous system that generates consistent 1+ minute videos from text prompts. The self-correcting pipeline maintains character consistency, scene continuity, and narrative flow across 60+ second clips at 16 FPS. I sold the commercial rights to a media production company with zero-downtime cloud infrastructure.",
        suggestions: ["Open 16fps App", "My experience", "Contact info"],
      }
    }

    if (
      lowerQuery.includes("skill") ||
      lowerQuery.includes("stack") ||
      lowerQuery.includes("python") ||
      lowerQuery.includes("tech") ||
      lowerQuery.includes("pytorch") ||
      lowerQuery.includes("tensorflow")
    ) {
      return {
        type: "skills",
        text: "I have a robust technical stack specializing in LLMs, Computer Vision, Agentic AI, and Embedded Systems:",
        suggestions: ["Show certifications", "View education", "Contact info"],
      }
    }

    if (
      lowerQuery.includes("contact") ||
      lowerQuery.includes("email") ||
      lowerQuery.includes("hire") ||
      lowerQuery.includes("reach") ||
      lowerQuery.includes("linkedin") ||
      lowerQuery.includes("github")
    ) {
      return {
        type: "contact",
        text: "I'm available for opportunities and collaborations. Here's how you can reach me:",
        suggestions: ["View projects", "Download CV", "My skills"],
      }
    }

    if (
      lowerQuery.includes("education") ||
      lowerQuery.includes("degree") ||
      lowerQuery.includes("university") ||
      lowerQuery.includes("school") ||
      lowerQuery.includes("vit") ||
      lowerQuery.includes("college")
    ) {
      return {
        type: "education",
        text: "Here's my academic background:",
        suggestions: ["Show certifications", "View experience", "Contact me"],
      }
    }

    if (
      lowerQuery.includes("cert") ||
      lowerQuery.includes("award") ||
      lowerQuery.includes("achievement") ||
      lowerQuery.includes("prize") ||
      lowerQuery.includes("recogn")
    ) {
      return {
        type: "certifications",
        text: "I've been recognized for innovation and technical expertise across AI, robotics, and security:",
        suggestions: ["View projects", "Show my skills", "Contact info"],
      }
    }

    if (lowerQuery.includes("cv") || lowerQuery.includes("resume") || lowerQuery.includes("pdf")) {
      return {
        type: "cv_prompt",
        text: "Download my full CV to see detailed information about my experience, projects, and achievements.",
        suggestions: ["View projects", "Show skills", "Contact me"],
      }
    }

    if (lowerQuery === "CV opened successfully") {
      return {
        type: "terminal",
        text: "CV OPENED IN NEW TAB\n\n✓ Successfully opened CV.pdf\n✓ File loaded from /public/CV.pdf\n\nReady for next command...",
        suggestions: ["View projects", "My skills", "Contact info"],
      }
    }

    if (lowerQuery.includes("gallery")) {
      return {
        type: "gallery",
        text: "Here's a visual showcase of my work and achievements:",
        suggestions: ["View projects", "My experience", "Contact info"],
      }
    }

    return {
      type: "text",
      text: "I can provide details on my Agentic AI research, Robotics projects, Technical Skills, Education, or Certifications. What would you like to explore?",
      suggestions: ["View experience", "Show projects", "My skills", "Contact info"],
    }
  }

  const handleSend = (text: string = input) => {
    if (!text.trim()) return

    const userMessage: Message = { role: "user", content: text }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsSidebarOpen(false)
    setIsTyping(true)

    const delay = Math.min(1000, Math.max(500, text.length * 20))

    setTimeout(() => {
      const response = generateResponse(text)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.text,
          type: response.type,
          suggestions: response.suggestions,
        },
      ])
      setIsTyping(false)
    }, delay)
  }

  return (
    <div className="flex h-screen bg-[#343541] text-gray-100 font-sans overflow-hidden selection:bg-[#19c37d] selection:text-white">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNewChat={() => setMessages([])}
        onSendMessage={handleSend}
      />
      <ChatArea
        input={input}
        onInputChange={setInput}
        onSendMessage={() => handleSend()}
        onSendMessageWithText={handleSend}
        messages={messages}
        isTyping={isTyping}
        messagesEndRef={messagesEndRef}
        onMobileMenuClick={() => setIsSidebarOpen(true)}
      />
    </div>
  )
}
