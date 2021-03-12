import React, { useState, useEffect } from 'react';
import './styles/NavBar.css';
import NavBarLogo from '../images/navbar-logo.png';
import CostForm from "../components/CostForm";

function Navbar() {
  const [click, setClick] = useState(false);
  const [isOpenCost, setIsOpenCost] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const openCostForm = () => setIsOpenCost(true);
  const closeCostForm = () => setIsOpenCost(false);

  const arkalkulator = () => {
    openCostForm();
    closeMobileMenu();
  }

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
            <div className="navbar-logo">TM KONTI<img alt="kontener logo" src={NavBarLogo}/></div>
          <div className='menu-icon' onClick={handleClick}>
            <div className={click ? "burger-container menu-opened" : "burger-container"}>
              <div className={click ? "bar topBar menu-opened" : "bar topBar"}></div>
              <div className={click ? "bar btmBar menu-opened" : "bar btmBar"}></div>
            </div>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li key="home" className='nav-item'>
                <a href="/" className="nav-links">Home</a>
            </li>

            <li key="arkalkulator" className='nav-item' onClick={arkalkulator}>
            <span href="/" className="nav-links">Árkalkulátor</span>
            </li>

            <li key="products" className='nav-item'>
            <a href="/" className="nav-links">Products</a>
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
