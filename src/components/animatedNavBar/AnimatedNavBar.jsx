// File: animatedNavBar/AnimatedNavBar.jsx

import React, { useState, useEffect } from 'react';
import './animatedNavBar.css';

const AnimatedNavBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          // We'll treat one viewport height of scrolling as going from 0 -> 1 in scrollProgress
          const progress = Math.min(1, currentScroll / viewportHeight);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [viewportHeight]);

  /**
   * 1) Container (nav bar) height:
   *    from full-screen (100vh) at scrollProgress=0
   *    to 60px at scrollProgress=1
   */
  const finalNavHeight = 60; // px
  const initialNavHeight = viewportHeight; // px, full-screen
  const currentNavHeight =
    (1 - scrollProgress) * initialNavHeight + scrollProgress * finalNavHeight;

  /**
   * 2) Animated text (your name) interpolation:
   *    - Font size: from 50vw -> 3vw
   *    - Letter spacing: from -10vw -> 0
   *    - Vertical position: from 50% of container -> about 50% of final nav height
   */
  const initialFontSize = 50; // vw
  const finalFontSize = 3;    // vw
  const fontSize =
    (1 - scrollProgress) * initialFontSize + scrollProgress * finalFontSize;

  const initialLetterSpacing = -10; // vw
  const finalLetterSpacing = 0;     // vw
  const letterSpacing =
    (1 - scrollProgress) * initialLetterSpacing + scrollProgress * finalLetterSpacing;

  // For vertical alignment, we can keep it centered initially.
  // Then it transitions to (finalNavHeight / 2), so it ends up centered in the shrunk nav bar.
  const initialTop = initialNavHeight * 0.5; // halfway down full screen
  const finalTop = finalNavHeight * 0.5;     // halfway down the small nav bar
  const currentTop = (1 - scrollProgress) * initialTop + scrollProgress * finalTop;

  /**
   * 3) Nav bar logo + nav items appear after, say, 70% scroll. You can tweak this threshold.
   */
  const appearThreshold = 0.7;
  const appearProgress =
    scrollProgress < appearThreshold
      ? 0
      : (scrollProgress - appearThreshold) / (1 - appearThreshold);

  // For a neat fade/slide effect:
  const navOpacity = appearProgress; // 0 -> 1
  const navTranslate = (1 - appearProgress) * 20; // slide down 20px initially

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <div
      className="navbar-container"
      style={{
        height: currentNavHeight // dynamic container height
      }}
    >
      <div className="navbar-content">
        {/* Portfolio Logo (left) */}
        <div
          className="navbar-logo"
          style={{
            opacity: navOpacity,
            transform: `translateY(${navTranslate}px)`
          }}
        >
          <img src="/images/portfolio-logo.png" alt="Portfolio Logo" />
        </div>

        {/* Nav Items (right) */}
        <div className="navbar-items">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="nav-item"
              style={{
                opacity: navOpacity,
                transform: `translateY(${navTranslate}px)`,
                transitionDelay: `${0.2 * idx}s`
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* The big, animated text: "Alex Russell" */}
        <div
          className="navbar-header-text"
          style={{
            fontSize: `${fontSize}vw`,
            letterSpacing: `${letterSpacing}vw`,
            top: currentTop
          }}
        >
          A L E X  R U S S E L L
        </div>
      </div>
    </div>
  );
};

export default AnimatedNavBar;
