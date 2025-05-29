import React, { useState, useEffect } from 'react';
import './AnimatedHeader.css';

const AnimatedHeader = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Use one viewport height as the threshold – adjust if needed.
          const maxScroll = viewportHeight
          const progress = Math.min(1, scrollY / maxScroll);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    }
  }, [viewportHeight]);

  // Interpolate the animated text's styles based on scrollProgress.
  // Font size: from a huge 50vw down to a small 3vw.
  const fontSize = (1 - scrollProgress) * 60 + scrollProgress * 3; // in vw
  // Letter spacing: from a jumbled -10vw to 0.
  const letterSpacing = (1 - scrollProgress) * -20; // in vw
  // Vertical position: from center of viewport (50vh) to a final value that aligns with the nav bar.
  const initialTop = viewportHeight * 0.5;
  const finalTop = 30; // px – adjust if you want it higher or lower in the nav bar
  const topPosition = (1 - scrollProgress) * initialTop + scrollProgress * finalTop;

  const headerStyle = {
    fontSize: `${fontSize}vw`,
    letterSpacing: `${letterSpacing}vw`,
    top: `${topPosition}px`,
    left: '50vw',
    transform: 'translate(-50%, -50%)',
    transition: 'font-size 0.1s, letter-spacing 0.1s, top 0.1s'
  };

  const navItemOpacity = scrollProgress > 0.7 ? 1 : 0;

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <div className="animated-header-wrapper">
      <div className="nav-bar">
        <div className="nav-left">
          <img src="/images/portfolio-logo.png" alt="Portfolio" className="portfolio-logo" />
        </div>
        <div className="nav-center">
          {/* The animated text will pass behind the nav bar as it moves up. */}
        </div>
        <div className="nav-right">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="nav-item"
              style={{
                opacity: navItemOpacity,
                transitionDelay: `${(index + 1) * 0.2}s`
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="header-text" style={headerStyle}>
        A L E X  R U S S E L L
      </div>
    </div>
  );
};

export default AnimatedHeader;
