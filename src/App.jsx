import "./app.scss";
import Contact from "./components/contact/contact";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/parallax";
import Project from "./components/projects/project";
import Skills from "./components/skills/skills";
function App() {
  return (
    <>
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      <section>
        <Skills/>
      </section>
      <section id="Project">
        <Parallax type="project" />
      </section>
      <Project />
      <section id="Contact">
        <Contact />
      </section>
    </div>
    </>
  );
}

export default App;
