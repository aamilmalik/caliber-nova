import { useEffect } from "react";
import Navbar from "../src/components/NavBar";
import AboutUs from "./components/AboutUs";
import Aniversary from "./components/Aniversary";
import Course from "./components/Course";
import Footer from "./components/Footer";
import SpinWheel from "./components/SpinWheel";
import Aos from "aos";
import "aos/dist/aos.css";



function App() {

  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 450,
      easing: 'ease-in-sine',
      delay: 10,
    });
   },[])

  return (
    <div className="main-app">
      <Navbar />
      <SpinWheel />
      <AboutUs />
      <Course />
      <Aniversary />
      <Footer />

    </div>
  )
}

export default App;
