import React from "react";
import { assets, workData } from "../../assets/assets";
import { motion } from "motion/react";
import useSectionInview from "../hook/useInView";

const Work = ({ isDarkMode }) => {
  const { ref } = useSectionInview("Work")
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      ref={ref}
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="relative border-1 hover:shadow-black  border-gray-300 dark:border-2 dark:border-gray-800 shadow-2xl rounded-3xl  group duration-500 cursor-pointer"
          >
            <a href={project.link} target="_blank" className=" h-full w-full p-2 flex flex-col justify-between space-y-3">
                {/**Text */}
                <div className="pl-3 ">
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
            </a>
            

            <div
              className={` absolute bottom-4 right-4 ${(index === 0 || index === 3) && 'border-gray-700 shadow-[2px_2px_2px_#303030]'} hidden md:block  border-1 p-2
              rounded-full group-hover:bg-lime-200 transition shadow-[2px_2px_2px_#000]`} 
            >
              <img src={assets.send_icon} alt="send icon" className="w-5 group-hover:rotate-45  transition duration-500" />
            </div>

            
              <a href={project.git} target="_blank" className="absolute bottom-3 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:bottom-3 md:left-3 md:opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-2 rounded-2xl px-4 py-2 shadow-[2px_2px_5px_#000] 
                                bg-gradient-to-br from-gray-200 to-white
                                dark:bg-gradient-to-br dark:from-[#11001F] dark:to-gray-600 hover:scale-105  transition-all duration-500">
                  <img src={`${isDarkMode ? assets.github_for_darkmode : assets.git}`} alt="" className="w-5"/>
                  <span className="text-sm font-normal text-black dark:text-gray-300">View Code</span>
                </div>
              </a>
          </motion.div>
        ))}

      </motion.div>
    </motion.div>
  );
};

export default Work;
