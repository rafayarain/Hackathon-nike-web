import Image from "next/image";
import React from "react";
import Navbar from './components/Navbar'
import ProductPage from './components/Productpage'
import RelatedCatg from './components/RelatedCatogegories'
import Footer from './components/Footer'
export default function Home() {
  return (
  <div> 
     <Navbar/>
     
     <ProductPage/>
     <RelatedCatg/>
     <Footer/>
     
     
    
  </div>
  );
}