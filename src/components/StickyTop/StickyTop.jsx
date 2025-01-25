import { useEffect, useState } from 'react'
import './StickyTop.css'

const StickyTop = () => {

  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='sticky-container'>
      <div className='sticky-top relative'>Alex Russell

        {isVisible && (
          <p className='scroll-down absolute text-gray-500 bottom-3 tracking-normal text-base font-extralight '>Scroll Down</p>
        )}
      </div>
      <div className="navbar">
        <img className="nav-logo" src='src/assets/images/PixelProfile2.jpg' alt='Logo' />
        <div className="nav-container relative">
          <div className="nav-item relative group inline-block">
            <button
              className="p-2 text-white rounded transition-all duration-300 ease-in-out  hover:bg-blue-700"
            >
              Blog
            </button>
            {/* Tooltip - hidden by default, appears on hover */}
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-black text-white text-xs rounded hidden group-hover:block">
              Coming soon
            </div>
          </div>
          <a
            href="#contact"
            className="nav-item py-1 px-4 border border-blue-500 text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white transition"
          >
            Contact
          </a>

        </div>
      </div>
    </div>
  )
}

export default StickyTop