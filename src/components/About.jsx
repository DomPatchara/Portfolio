import { assets, infoList, toolsData } from "../../assets/assets";
import { motion } from "framer-motion";
import useSectionInview from "../hook/useInView";
import { useState } from "react";
import clsx from "clsx";



const Tablists = ["Frontend", "Backend", "Dev Tools"]

const About = ({ isDarkMode }) => {
  const threshold = window.innerWidth <= 768 ? 0.4 : 0.5;
  const { ref } = useSectionInview("About me", threshold);

  const [currentTab, setCurrentTab] = useState("Frontend")

  return (
    <div ref={ref} id="about" className="scroll-mt-20 ">
    <motion.div
      ref={ref}
      className="w-full  px-10 md:px-[12%] py-10 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        className="flex w-full flex-col lg:flex-row items-center lg:items-start  gap-20 my-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <img
            src={assets.profile_img}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-3xl font-Ovo">
            I&apos;m a 24-year-old an entry-level frontend developer, passionate
            about creating user-friendly and responsive websites. I enjoy
            solving problems and learning new tools to build better web
            experiences. While my focus is on front-end development, I&apos;m also
            excited to grow into full-stack work and contribute to a creative,
            collaborative team.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ sacle: 1.05 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-default duration-500
                             hover:bg-lightHover hover:-translate-y-1 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-DarkHover/50"
              >
                <img
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-gray-700 dark:text-white font-bold mt-6 mb-2 text-xl text-center"
          >
            🛠️ Tech Stack
          </motion.h4>

          <motion.div
           initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          className="flex bg-gray-200 dark:bg-gray-700/40 max-w-fit rounded-xl mx-auto  items-center justify-center py-2 px-2 gap-2 mb-4 ">
            {Tablists.map((tab)=>(
              <button 
              onClick={()=>setCurrentTab(tab)}
              className={clsx("font-semibold px-4 py-2 dark:bg-[#6b4e8393] rounded-2xl bg-gray-200 hover:opacity-100 hover:scale-105  cursor-pointer transition-all duration-500", currentTab === tab ? "bg-white shadow-gray-sm dark:shadow-none pointer-events-none" : "opacity-40" )}>
                {tab}
              </button>
            ))}
          </motion.div>


          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center  gap-y-2 gap-2 "
          >
            {toolsData.filter(tool => tool.category === currentTab).map((tool, i) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={i}
                className="flex  gap-2   items-center justify-center h-10 px-3 border border-gray-400 rounded-lg cursor-default
                                      duration-500 hover:-translate-y-1 dark:bg-DarkTheme"
              >
                <img
                  src={isDarkMode ? tool.darkMode : tool.lightMode}
                  alt="Tool"
                  className="w-5 "
                />
                <div className="min-w-max">
                  <p className="text-gray-600  dark:text-white/60 text-md">
                    {tool.title}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default About;
