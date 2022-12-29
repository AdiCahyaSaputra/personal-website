import React from 'react'

const Test = () => {
  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <div className="relative group overflow-hidden">
        <button className="
          py-2 px-4 bg-transparent border-2 border-white text-white
          group-hover:text-black z-10 relative
          ">
          Hey There
        </button>
        <div className="z-0 transition-all -translate-x-full group-hover:translate-x-0 absolute top-0 left-0 w-full h-full bg-white"/>
      </div>
    </div>
  )
}

export default Test
