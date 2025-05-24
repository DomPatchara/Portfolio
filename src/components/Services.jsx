import { Fragment } from "react";
import { serviceData, serviceIcon } from "../../assets/assets";
import { motion } from "framer-motion";
import useSectionInview from "../hook/useInView";
import React,{ useState } from "react";
import Toggle from "./ui/toggle";
import clsx from "clsx";
import CircleColor from "./ui/circle-color";

const Services = ({ isDarkMode }) => {
  const { ref } = useSectionInview("Service");

  const [currentColor, setCurrentColr] = useState("");

  return (
    <div ref={ref} id="services" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-screen overflow-x-hidden px-[12%] py-10"
      >
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          What I offer
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          My Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        >
          I am passionate about creating responsive and user-friendly websites.
          I focus on clean, efficient code and smooth user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="grid grid-cols-1 gap-6 my-10 sm:grid-cols-4 lg:grid-cols-3 "
        >
          {serviceData.map(({ title, description }, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className={`${
                index === 2 && "sm:col-start-2"
              } sm:col-span-2 lg:col-span-1 border border-gray-400 rounded-lg px-7 py-6
             hover:shadow-black  hover:bg-lightHover hover:-translate-y-1 cursor-default
             duration-500 dark:hover:bg-gradient-to-br dark:hover:from-DarkHover/90 dark:hover:via-DarkHover/60  dark:hover:to-DarkHover/40 dark:hover:from-[50%] dark:hover:via-[90%] dark:hover:to-[100%] dark:hover:shadow-white`}
            >
              {index === 0 && (
                <div className=" fading-icon">
                  <motion.div
                    animate={{
                      x: ["35%", "-100%"],
                    }}
                    transition={{
                      duration: 15,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="min-w-max h-30  flex flex-row gap-6  items-center"
                  >
                    {Array.from({ length: 2 }).map((_, i) => (
                      <Fragment key={i}>
                        {serviceIcon.map((item, index) => (
                          <img
                            key={index}
                            src={`${isDarkMode ? item.darkMode : item.icon}`}
                            alt="icon"
                            className="size-15 border border-gray-300 dark:border-white/30 p-3 rounded-lg"
                          />
                        ))}
                      </Fragment>
                    ))}
                  </motion.div>
                </div>
              )}
              {index === 1 && (
                <div className="w-full h-30 flex gap-2 text-white dark:text-white/60 text-sm">
                  <div className="w-[70%] border border-gray-300 dark:border-white/20 rounded-lg grid grid-cols-3 grid-rows-4  gap-2 p-5">
                    <div className="bg-blue-700/70  rounded-lg col-span-2 row-span-2 flex items-center justify-center">
                      1
                    </div>
                    <div className="bg-green-700/70 rounded-lg row-span-4 flex items-center justify-center">
                      2
                    </div>
                    <div className="bg-red-700/70 rounded-lg col-span-2 row-span-2 flex items-center justify-center">
                      3
                    </div>
                  </div>
                  <div className="w-[30%] border border-gray-300 dark:border-white/20 rounded-lg flex flex-col items-center justify-center gap-2 py-2">
                    <div className="size-8 bg-blue-700/70 rounded-lg flex items-center justify-center">
                      1
                    </div>
                    <div className="size-8 bg-green-700/70 rounded-lg  flex items-center justify-center">
                      2
                    </div>
                    <div className="size-8 bg-red-700/70 rounded-lg flex items-center justify-center">
                      3
                    </div>
                  </div>
                </div>
              )}

              {index === 2 && (
                <div className="w-full h-30">
                  <div className="flex flex-col items-center justify-center h-full border border-gray-400 rounded-xl gap-5">
                     <Toggle currentColor={currentColor}/>
                     <CircleColor currentColor={currentColor} setCurrentColor={setCurrentColr}/>
                  </div>
                </div>
              )}

              {/** Title Text */}
              <h3 className=" font-medium text-lg my-4 text-gray-700 dark:text-white ">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
