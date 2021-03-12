import * as React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import '../components/styles/global.css';
import Home from "../components/Home";
import {Helmet} from 'react-helmet';




// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet>
      <title>Konténer rendelés - TM Konti</title>
      </Helmet>
      <NavBar/>
      <div className='page-container'>
      <HeroSection />
      <Home />
      </div>
    </main>
  )
}

export default IndexPage
