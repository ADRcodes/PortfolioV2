import './StickyTop.css'

const StickyTop = () => {
  return (
    <div className='sticky-container'>
      <div className='sticky-top relative'>Alex Russell
        <p className='absolute text-black bottom-3 tracking-normal text-base font-extralight '>Scroll Down</p>
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
            className="nav-item py-2 px-4 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-600 hover:text-white transition"
          >
            Contact
          </a>

        </div>
      </div>
    </div>
  )
}

export default StickyTop