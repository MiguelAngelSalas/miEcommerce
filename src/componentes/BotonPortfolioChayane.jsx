import React from "react"

export default function Boton({ className = "", texto, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`font-[MiFuente] bg-[#882686] rounded m-2 py-2 px-4 text-center text-black text-sm sm:text-base md:text-lg sm:px-6 md:px-8 hover:bg-[#b150ad] transition-colors duration-300 ${className}`}
    >
      {texto}
    </button>
  )
}