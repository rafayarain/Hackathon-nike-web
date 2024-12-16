import Image from "next/image";
import Navbar from './components/Page1/Navbar'
import ProductHighlight from "./components/Page1/Producthighlight"
import ProductCard from './components/Page1/Productcard'
import FeaturedSection from "./components/Page1/FeaturedSection";
import GearUpSection from "./components/Page1/gearupsection";
import FlightEssentials from "./components/Page1/FlightEssentials";
import EssentialsSection from "./components/Page1/EssentialSection";
import NavMenu from "./components/Page1/NavMenu";
import LastMenu from './components/Page1/LastMenu'

export default function Home() {
  return (
  <div> 
     <Navbar/>
     <ProductHighlight/> 
     <ProductCard/>
     <FeaturedSection/>
     <GearUpSection/>
     <FlightEssentials/>
     <EssentialsSection/>
     <NavMenu/>
     <LastMenu/>
     
    
  </div>
  );
}
