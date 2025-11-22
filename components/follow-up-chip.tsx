"use client"

interface FollowUpChipProps {
  text: string
  onClick: () => void
}

export function FollowUpChip({ text, onClick }: FollowUpChipProps) {
  return (
    <button
      onClick={onClick}
      className="text-xs sm:text-sm bg-[#343541] border border-gray-600 hover:bg-[#40414F] hover:border-gray-500 text-gray-300 px-3 py-2 rounded-lg transition-colors text-left"
    >
      {text}
    </button>
  )
}
