import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";
import useSectionInview from "../hook/useInView";
import { ActiveContext } from "../context/active-section";

const Hero = () => {
  const { ref } = useSectionInview("Home", 0.5)
  const { setIsClick } = useContext(ActiveContext)
  return (
    <div className="w-11/12 max-w-3xl h-screen mx-auto flex flex-col  items-center justify-center text-center">
      <motion.div
        ref={ref}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <img src={assets.profile_img} className="w-32 mt-9 sm:mt-0 sm:w-40 rounded-full" />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex gap-2 items-start text-xl md:text-2xl mb-3 font-Ovo mt-4"
      >
        Hi! I'm Patchara Yakiaw <img src={assets.hand_icon} className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-4xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        frontend web developer.
      </motion.h1>
      <motion.p
        initial={{ yopacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto text-base/7 mt-2"
      >
        I&apos;m an entry-level frontend developer from Thailand, passionate about
        creating user-friendly and responsive websites. I'm eager to apply my
        skills and begin my career as a frontend developer.
      </motion.p>

      <div className="flex flex-col md:flex-row items-center gap-2 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          onClick={()=>setIsClick(true)}
          className="px-10 py-2 border border-white bg-black text-white rounded-full flex items-center gap-2 dark:bg-transparent"
        >
          contact me <img src={assets.right_arrow_white} className="w-4 mt-1" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href={assets.resume}
          download={assets.resume}
          className="px-10 py-2 border border-gray-500 rounded-full flex items-center gap-2  dark:text-black dark:bg-gray-200"
        >
          my resume <img src={assets.download_icon} className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
