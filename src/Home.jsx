import React from 'react'
import Header from "./Header";
import Sliders from "./Sliders";
import Dummycards from './Dummycards';
import Discountpage from './Discountpage';
import Arrivalspage from './Arrivalspage';
import Sales from './Sales';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
    <Header />
    <Sliders />
    <Dummycards />
    <Discountpage />
    <Arrivalspage />
    <Sales />
    <Footer />
    </div>
  )
}

export default Home;