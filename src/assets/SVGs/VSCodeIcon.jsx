import React from "react"

const VSCodeIcon = ({ size }) => {
  let width = "20px"
  let height = "20px"

  if (size) {
    width = size + "px"
    height = size + "px"
  }
  return (
    <div className="flex flex-col items-center justify-center group">
      <svg
        className="hover:scale-125 transition-all duration-300 ease-in-out"
        style={{ width: width, height: height }}
        viewBox="0 0 144 144">
        <path d="M95 2.3l30.5 12.3v98.7L94.8 125.7 45.8 77l-31 24.1L2.5 94.9V33.1l12.3-5.9 31 24.3ZM14.8 45.7V83.2l18.5-19Zm48.1 18.5L94.8 89.3V39Z" />
      </svg>
      <p className="icon-text text-center">VS Code</p>
    </div>
  )
}

export default VSCodeIcon
