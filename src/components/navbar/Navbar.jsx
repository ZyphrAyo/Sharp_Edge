import React, { useEffect, useState } from 'react';

function Navbar() {
  const [navbarShrink, setNavbarShrink] = useState(false);
  const [togglerActive, setTogglerActive] = useState(false);

  useEffect(() => {
    const handleNavbarShrink = () => {
      if (window.scrollY === 0) {
        setNavbarShrink(false);
      } else {
        setNavbarShrink(true);
      }
    };

    handleNavbarShrink();

    window.addEventListener('scroll', handleNavbarShrink);

    return () => {
      window.removeEventListener('scroll', handleNavbarShrink);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleTogglerClick = () => {
    setTogglerActive(true);

    setTimeout(() => {
      setTogglerActive(false);
    }, 2000); // 1000 milliseconds (1 second)

    // Additional logic for handling other click events if needed
  };

  const navbarStyle = {
    width: '100%',
    paddingLeft: '4px',
    paddingRight: '30px',
  };

  return (
    <div>
      <nav
        style={navbarStyle}
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${
          navbarShrink ? 'navbar-shrink' : ''
        }`}
        id="mainNav"
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="#page-top"
            onClick={scrollToTop}
          >
            <img
              src="https://i.postimg.cc/Pxp36qLq/white-logo.png"
              alt="Logo"
              style={{ height: '40px', marginBottom: '5px' }}
            />
            <span style={{ color: 'white' }}> The </span>
            <span>Sharp Edge</span>
          </a>
          <button
            className={`navbar-toggler ${togglerActive ? 'collapsed' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleTogglerClick}
          >
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${
              togglerActive ? 'show' : ''
            }`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
              
              {/* <li className="nav-item">
                <a className="nav-link" href="#newsroom">
                  News Room
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Gallery
                </a>
              </li> */}
              
              {/* <li className="nav-item">
                <a className="nav-link" href="#digitalmarketing">
                  Digital Marketing
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
