import { useEffect, useState } from 'react'
import './stickyTop.css'
import Nav from '../Nav'


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

      <Nav />
    </div>
  )
}

export default StickyTop