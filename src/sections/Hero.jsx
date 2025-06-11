/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import { styles } from "../styles";
import  ComputersCanvas  from "../components/Astrounaut";
import HeroText from "@/components/HeroText";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[10px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div>
          <h1 className={` text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Jeel Rajpara</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div> */}
        <HeroText/>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;  