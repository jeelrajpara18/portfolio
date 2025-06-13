
import CursorNew from "./components/CursorNew";
import  About  from "./sections/About";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import  NavbarDemo  from "./sections/Navbar";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <div className=" container overflow-hidden">
        <CursorNew/>
        <NavbarDemo/>
        <Hero/>
        <About/>
        <Projects/>
        <Experiences/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
