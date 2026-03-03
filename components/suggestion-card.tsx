"use client"

import type { LucideIcon } from "lucide-react"

interface SuggestionCardProps {
  title: string
  subtitle: string
  icon: LucideIcon
  onClick: () => void
}

export function SuggestionCard({ title, subtitle, icon: Icon, onClick }: SuggestionCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-start p-3 border border-gray-700/50 bg-gray-800/30 rounded-xl hover:bg-gray-800 transition-all text-left group w-full hover:border-gray-600"
    >
      <div className="flex items-center gap-2 mb-1 text-gray-200 font-medium group-hover:text-white">
        <Icon size={16} className="text-[#19c37d]" />
        {title}
      </div>
      <div className="text-xs text-gray-400 line-clamp-1">{subtitle}</div>
    </button>
  )
}
