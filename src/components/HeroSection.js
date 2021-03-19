import React, {useRef} from 'react';
import './styles/HeroSection.css';
import HeroImage from '../images/hero-image.jpg';
import HeroVideo from '../images/hero-video.mp4';
import ReactPlayer from 'react-player';



function HeroSection(props) {
    const ended = useRef(null)
    return (
        <div className="hero-container">
            <div className="hero-image-container">
                <div className="hero-image">
                <ReactPlayer 
                className='hero-video'
                url={HeroVideo}
                playing 
                controls   
                width='100%'
                height='100%'
                light={HeroImage}
                ref={ended}
                onEnded={() => ended.current.showPreview()} />
                </div>
            </div>
            <div className="hero-text-container">
                <div className="hero-text">
                    <h1>
                        <p>Telefonos konténer rendelését</p>
                        <p>azonnal tudjuk fogadni</p>
                        <a href="tel:+36-70-428-7596" className="phone-num"><p>+36/70 428 7596</p></a>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
