import * as React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import '../components/styles/global.css';
import Home from "../components/Home";
import {Helmet} from 'react-helmet';
import Card from '../components/Cards';
import Footer from '../components/Footer';
import Order from "../components/Order";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Card />
      <Order />
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage
