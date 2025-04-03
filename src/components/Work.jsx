import React from "react";
import { assets, workData } from "../../assets/assets";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-25"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest works
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my web development porfolio! Explore a collection of projects
        showcasing my expertise in front-end development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="grid-cols-auto my-10 gap-5 "
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="relative border-1 hover:shadow-black  border-gray-300 dark:border-2 dark:border-gray-800 shadow-2xl rounded-3xl px-2 pt-2 space-y-2 group duration-500 cursor-pointer"
          >
            {/**Text */}
            <div className="pl-3">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white/80">
                {project.title}
              </h1>
              <p className="text-[14px] text-gray-500  dark:text-white/50">
                {project.description}
              </p>
            </div>

            {/** Image */}
            <div>
              <img
                src={project.bgImage}
                alt=""
                className="aspect-square rounded-2xl object-cover"
              />
            </div>

            <div
              className={` absolute bottom-4 right-4 ${(index === 0 || index === 3) && 'border-gray-700 shadow-[2px_2px_2px_#303030]'}  border-1 p-2
              rounded-full group-hover:bg-lime-200 transition shadow-[2px_2px_2px_#000]`} 
            >
              <img src={assets.send_icon} alt="send icon" className="w-5 group-hover:rotate-45 transition duration-500" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
