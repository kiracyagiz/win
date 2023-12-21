import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";

export default function Home() {
  return (
    <div className="bg-primaryColor">
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
    </div>
  )
}
