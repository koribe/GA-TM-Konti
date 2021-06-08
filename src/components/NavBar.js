import React, { useState } from "react";
import "./styles/NavBar.css";
import NavBarLogo from "../images/navbar-logo.png";
import CostForm from "../components/CostForm";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const [isOpenCost, setIsOpenCost] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleCostForm = () => setIsOpenCost(!isOpenCost);
  // const openCostForm = () => setIsOpenCost(true);
  const closeCostForm = () => setIsOpenCost(false);

  const arkalkulator = () => {
    handleCostForm();
    closeMobileMenu();
  };
  return (
    <>
      <nav className='navbar strong'>
        <div className='navbar-container'>
          <a href='/' className='navbar-logo'>
            <img
              alt='kontener logo'
              className='navbar-logo-image'
              src={NavBarLogo}
            />
            <div className='navbar-logo-text'>
              <p>TM</p>
              <p>KONTI</p>
            </div>
          </a>
          <div
            className='menu-icon'
            role='button'
            aria-label='Menu handler'
            tabIndex='0'
            onClick={handleClick}
            onKeyPress={handleClick}>
            <div
              className={
                click ? "burger-container menu-opened" : "burger-container"
              }>
              <div
                className={
                  click ? "bar topBar menu-opened" : "bar topBar"
                }></div>
              <div
                className={
                  click ? "bar btmBar menu-opened" : "bar btmBar"
                }></div>
            </div>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li key='arkalkulator' className='nav-item'>
              <span
                role='button'
                className='nav-links'
                onClick={arkalkulator}
                onKeyPress={arkalkulator}
                tabIndex='0'>
                Árkalkulátor
              </span>
            </li>

            <li key='rendeles' className='nav-item'>
              <a href='#order' className='nav-links' onClick={closeMobileMenu}>
                Rendelés
              </a>
            </li>

            <li key='products' className='nav-item'>
              <a href='tel:+36-70-428-7596' className='nav-links'>
                <FaPhone />
              </a>
            </li>

            <li key='facebook' className='nav-item'>
              <a
                href='https://www.facebook.com/tmkonti'
                target='_blank'
                rel='noreferrer'
                aria-label='Facebook'
                className='nav-links'>
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={isOpenCost ? "cost-form cost-form--Visible" : "cost-form"}>
        <CostForm closeCostForm={closeCostForm} />
      </div>
    </>
  );
}

export default Navbar;
