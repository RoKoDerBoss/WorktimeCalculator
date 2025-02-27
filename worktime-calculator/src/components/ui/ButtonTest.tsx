"use client";

interface ButtonProps{
    text: string;
    onClick: () => void
}

export function Button({text, onClick}: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-blue-700"
        >
            {text}
        </button>
    )
}