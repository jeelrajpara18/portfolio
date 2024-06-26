import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./hero.scss";
import Pdf from "../../assets/jeel_resume.pdf";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <div className="hero">
        <div className="wrapper">
          <motion.div
            variants={textVariants}
            className="textContainer"
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants} className="heading">
              Welcome to my Portfolio
            </motion.h2>
          <div>
            <button className="btn">
              <a href={Pdf} target="_blank">Open my Resume</a>
            </button>
          </div>
            <motion.h1 variants={textVariants}>
              {`Hi! I'm Jeel`}{" "}
              <span
                className="txt-rotate"
                // eslint-disable-next-line react/no-unknown-property
                dataPeriod="1000"
                data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </motion.h1>
            <motion.div variants={textVariants}>
              As a passionate developer, I specialize in creating visually
              stunning and highly functional web experiences. With a strong
              background in web development, design, and user experience, I
              bring ideas to life through code. Let’s explore my work and
              connect to turn your vision into reality.
            </motion.div>
          </motion.div>
        
        </div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Frontend Developer
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
