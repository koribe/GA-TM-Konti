import React from 'react';
import './styles/HeroSection.css';
import HeroImage from '../images/hero-image.jpg';
import HeroVideo from '../images/hero-video.mp4';

function HeroSection() {
    return (
        <div className="hero-container">
            <div className="hero-image-container">
                <div className="hero-image">
                <video src={HeroVideo} autoPlay/>
                    {/* <img src={HeroImage} /> */}
                </div>
            </div>
            <div className="hero-text-container">
                <div className="hero-text">
                    <h1>
                        <p>Telefonos konténer rendelését</p>
                        <p>azonnal tudjuk fogadni</p>
                        <a href="tel:+36-70-428-7596" className="phone-num">+36/70 428 7596</a>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
