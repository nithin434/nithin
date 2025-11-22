import { Bot, User } from "lucide-react"

interface AvatarProps {
  isBot: boolean
}

export function Avatar({ isBot }: AvatarProps) {
  return (
    <div
      className={`w-8 h-8 rounded-sm flex items-center justify-center shrink-0 ${isBot ? "bg-[#19c37d]" : "bg-[#5436DA]"}`}
    >
      {isBot ? <Bot size={18} className="text-white" /> : <User size={18} className="text-white" />}
    </div>
  )
}
