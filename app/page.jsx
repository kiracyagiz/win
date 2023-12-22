import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Mission from "./components/Mission/Mission";
import Navbar from "./components/Navbar/Navbar";
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
    </div>
  )
}
