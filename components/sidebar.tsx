"use client"

import { FileText, User, MessageSquare, ExternalLink, Mail, Github, Linkedin, Image } from "lucide-react"
import { CV_DATA } from "@/lib/cv-data"
import { useState } from "react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  onNewChat: () => void
  onSendMessage: (text: string) => void
}

export function Sidebar({ isOpen, onClose, onNewChat, onSendMessage }: SidebarProps) {
  const [showProfilePopup, setShowProfilePopup] = useState(false)

  return (
    <>
      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-20 md:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
        fixed md:static inset-y-0 left-0 z-30 w-[280px] bg-[#202123] flex flex-col transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 border-r border-white/5
      `}
      >
        <div className="p-3 pb-0">
          <button
            onClick={() => {
              onNewChat()
              onClose()
            }}
            className="flex items-center gap-3 px-3 py-3 w-full rounded-md border border-white/20 hover:bg-[#2A2B32] transition-colors text-sm text-white mb-4"
          >
            <span className="text-xl">+</span>
            New chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3">
          <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Shortcuts</div>
          <div className="space-y-1">
            {["Experience", "Robotics Projects", "Certifications", "Full CV Analysis", "Gallery"].map((item, i) => (
              <button
                key={i}
                onClick={() => onSendMessage(item)}
                className="flex items-center gap-3 px-3 py-3 w-full rounded-md hover:bg-[#2A2B32] transition-colors text-sm text-gray-300 group truncate"
              >
                <MessageSquare size={14} className="text-gray-500 group-hover:text-gray-300" />
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="p-3 border-t border-white/10 space-y-2">
          <a
            href={CV_DATA.profile.cv_link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-3 py-3 w-full rounded-md hover:bg-[#2A2B32] transition-colors text-sm text-gray-300 group"
          >
            <FileText size={16} className="text-gray-400 group-hover:text-white" />
            <span>View Original CV</span>
            <ExternalLink size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <div className="relative">
            <button
              onClick={() => setShowProfilePopup(!showProfilePopup)}
              className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-[#2A2B32] transition-colors text-sm w-full bg-gray-800/30 border border-gray-700/50"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-[#19c37d] to-[#15a066] rounded-full flex items-center justify-center text-white font-bold text-sm">
                {CV_DATA.profile.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-medium text-white">{CV_DATA.profile.name}</span>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available
                </span>
              </div>
            </button>

            {showProfilePopup && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-[#2A2B32] border border-white/10 rounded-lg shadow-lg overflow-hidden">
                <div className="p-2 space-y-1">
                  <button
                    onClick={() => {
                      const subject = encodeURIComponent("Hello Nithin - Happy to Connect!")
                      const body = encodeURIComponent("Hi Nithin,\n\nI came across your portfolio and would love to connect with you.\n\nBest regards")
                      window.open(`mailto:${CV_DATA.profile.email}?subject=${subject}&body=${body}`, '_blank')
                      setShowProfilePopup(false)
                    }}
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#343541] transition-colors text-sm text-gray-300 group w-full text-left"
                  >
                    <Mail size={14} className="text-[#19c37d]" />
                    <span>Email</span>
                  </button>
                  <a
                    href={CV_DATA.profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#343541] transition-colors text-sm text-gray-300 group w-full"
                    onClick={() => setShowProfilePopup(false)}
                  >
                    <Linkedin size={14} className="text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={CV_DATA.profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#343541] transition-colors text-sm text-gray-300 group w-full"
                    onClick={() => setShowProfilePopup(false)}
                  >
                    <Github size={14} className="text-purple-400" />
                    <span>GitHub</span>
                  </a>
                  <button
                    onClick={() => {
                      onSendMessage("Gallery")
                      setShowProfilePopup(false)
                    }}
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#343541] transition-colors text-sm text-gray-300 group w-full text-left"
                  >
                    <Image size={14} className="text-yellow-400" />
                    <span>Gallery</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
