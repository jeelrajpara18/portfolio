import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { project1 } from "../../utils/project1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>
              <FontAwesomeIcon icon={faGithub} />
              Github Link
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {project1.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;
