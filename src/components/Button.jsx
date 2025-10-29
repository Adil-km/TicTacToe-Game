import React from 'react'

export default function Button({ children:text, onClick}) {
  return (
    <button onClick={onClick} className="relative bg-gradient-to-b from-orange-400 to-orange-500 rounded-2xl text-2xl py-5 px-16 font-bold text-white shadow-[0_5px_15px_rgba(0,0,0,0.25)] transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
        {text}
        <span className="absolute inset-0 rounded-2xl border border-white/30"></span>
    </button>
  )
}
