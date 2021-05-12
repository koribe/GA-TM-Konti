import React from "react";
import "./styles/Footer.css";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Elérhetőség</h2>
            <a href='tel:+36-70-428-7596' aria-label='Telefon'>
              +36/70 428 7596
            </a>
            <a href='mailto:tmkonti@gmail.com' aria-label='E-mail'>
              tmkonti@gmail.com
            </a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <span className='social-logo strong'>TM KONTI</span>
          </div>
          <small className='website-rights'>
            TM KONTI © {new Date().getFullYear()}
          </small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/tmkonti'
              target='_blank'
              rel='noreferrer'
              aria-label='Facebook'>
              <FaFacebook />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
