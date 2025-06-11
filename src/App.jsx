
import Cursor from "./components/cursor";
import  About  from "./sections/About";
import Hero from "./sections/Hero";
import  NavbarDemo  from "./sections/Navbar";

function App() {
  return (
    <>
      <div className="container">
        <Cursor/>
        <NavbarDemo/>
        <Hero/>
        <About/>
        <section className="min-h-screen" />
        <section className="min-h-screen" />
        <section className="min-h-screen" />
      </div>
    </>
  );
}

export default App;
