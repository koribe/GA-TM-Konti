import React, { useState, useEffect } from 'react';
import './NavBar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
        closeMobileMenu();
  }};

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton );

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <div className="navbar-logo">PAGE<i class='fas fa-code' /></div>
          <div className='menu-icon' onClick={handleClick}>
            <div className={click ? "burger-container menu-opened" : "burger-container"}>
              <div className={click ? "bar topBar menu-opened" : "bar topBar"}></div>
              <div className={click ? "bar btmBar menu-opened" : "bar btmBar"}></div>
            </div>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li key="home" className='nav-item'>
                <a className="nav-links">Home</a>
            </li>

            <li key="services" className='nav-item'>
            <a className="nav-links">Services</a>
            </li>

            <li key="products" className='nav-item'>
            <a className="nav-links">Products</a>
            </li>

            <li key="sign-up" className='nav-item'>
            <a className="nav-links">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
