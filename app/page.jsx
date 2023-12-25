import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Mission from "./components/Mission/Mission";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Service from "./components/Service/Service";
import Team from "./components/Team/Team";

export default function Home() {
  return (
    <div className="bg-primaryColor">
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Team/>
      <Mission/>
      <Portfolio/>
      <Contact/>
     <div className="bg-black">
     <Footer/>
     </div>
    </div>
  )
}
