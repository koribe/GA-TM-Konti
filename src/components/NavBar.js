import React, { useState} from 'react';
import './styles/NavBar.css';
import NavBarLogo from '../images/navbar-logo.png';
import CostForm from "../components/CostForm";
import {FaFacebook} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);
  const [isOpenCost, setIsOpenCost] = useState(false);
  const [logoText, setLogoText] = useState("TM KONTI");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const openCostForm = () => setIsOpenCost(true);
  const closeCostForm = () => setIsOpenCost(false);

  const arkalkulator = () => {
    openCostForm();
    closeMobileMenu();
  }

  const handleLogoText = () => {
    if (window.innerWidth <= 960) setLogoText("TM")
    else setLogoText("TM KONTI")
  };

  React.useEffect(() => {
    handleLogoText();
    window.addEventListener('resize', handleLogoText);
  })
  return (
    <>
      <nav className='navbar strong'>
        <div className='navbar-container'>
            <div className="navbar-logo">{logoText}<img alt="kontener logo" src={NavBarLogo}/></div>
          <div className='menu-icon' role='button' aria-label='Menu handler' onClick={handleClick} onKeyPress={handleClick} tabIndex={0}>
            <div className={click ? "burger-container menu-opened" : "burger-container"}>
              <div className={click ? "bar topBar menu-opened" : "bar topBar"}></div>
              <div className={click ? "bar btmBar menu-opened" : "bar btmBar"}></div>
            </div>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li key="arkalkulator" className='nav-item'>
            <span role='button' className="nav-links" onClick={arkalkulator} onKeyPress={arkalkulator} tabIndex={0}>Árkalkulátor</span>
            </li>

            <li key="products" className='nav-item'>
            <a href="tel:+36-70-428-7596" className="nav-links">+36/70 428 7596 <FaPhone/></a>
            </li>

            <li key="facebook" className='nav-item'>
            <a href="https://www.facebook.com/tmkonti"
                  target='_blank'
                  rel="noreferrer"
                  aria-label='Facebook'
                  className="nav-links">
                  <FaFacebook/>
            </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={isOpenCost ? 'cost-form cost-form--Visible' : 'cost-form'}>
      <CostForm  closeCostForm={closeCostForm}/>
      </div>
    </>
  );
}

export default Navbar;
