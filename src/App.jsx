
import CursorNew from "./components/CursorNew";
import  About  from "./sections/About";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import Hero from "./sections/Hero";
import  NavbarDemo  from "./sections/Navbar";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <div className="font-mono container">
        {/* <CursorNew/> */}
        <NavbarDemo/>
        <Hero/>
        <About/>
        <Projects/>
        <Experiences/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
