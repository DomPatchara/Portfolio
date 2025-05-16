import { div } from "framer-motion/client";
import { assets } from "../../assets/assets";
import { motion, useTransform } from "framer-motion";

const Card = ({
  title,
  desc,
  url,
  image,
  git,
  bgcolor,
  techs,
  i,
  progress,
  range,
  targetScale,
  isDarkMode,
}) => {
  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="cardContainer">
      <motion.div
        className="card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          scale: cardScale,
          backgroundColor: isDarkMode ? bgcolor : "#ffffff",
          top: `calc(-5vh + ${i * 15}px)`,
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between h-full w-full gap-5">
          {/** Image */}
          <div className="group w-full h-[60%] md:w-1/2 md:h-full flex flex-col items-center justify-center hover:scale-95 transition-transform duration-300">
            <a
              href={url}
              target="_blank"
              className="relative w-full overflow-hidden rounded-2xl border border-gray-400 dark:border-none"
            >
              <motion.img alt="Image" src={image} className="object-contain" />
            </a>
          </div>

          {/** Body */}
          <div className="w-full h-[40%] md:w-1/2 md:h-full flex flex-col items-center justify-around gap-4">
            <div>
              {/** Project Name */}
              <h1 className="text-center text-gray-800 dark:text-white/80 font-bold text-2xl pb-3">
                {title}
              </h1>

              {/**Descripton */}
              <p className="line-clamp-2 indent-4 md:line-clamp-none text-md text-gray-800 dark:text-white/50 font-Outfit">
                {desc}
              </p>
            </div>

            {/**Teck Stack */}
            <div className="w-full flex md:flex-col md:pl-0 md:items-start  items-center justify-start ml-5 gap-5">
              <h2 className="text-sm text-nowrap  md:text-md font-Outfit px-2 py-1 dark:bg-blue-700/30  dark:text-white/80 text-gray-600  bg-gray-100 shadow-lg rounded-2xl cursor-default">
                Tech Stack
              </h2>
              <div className="flex gap-1">
                {techs.map((tech, index) => (
                  <motion.li
                    whileHover={{ scale: 1.05 }}
                    key={index}
                    className="flex items-center justify-center w-10  sm:w-14 aspect-square border border-gray-400 rounded-full
                                      duration-500 hover:-translate-y-1 dark:bg-transparent relative group "
                  >
                    <img
                      src={isDarkMode ? tech.icon_dark : tech.icon}
                      alt="Tool"
                      className="w-5 sm:w-7"
                    />
                    <div className="min-w-max opacity-0 group-hover:opacity-100  absolute bottom-0  translate-y-5">
                      <p className="text-gray-600   dark:text-white/60 text-[12px]  sm:text-sm">
                        {tech.title}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </div>
            </div>

            {/**Button */}
            <div className="flex gap-4 mt-1 ">
              <a
                href={url}
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-2 dark:bg-transparent  border dark:border-white/50 dark:text-white bg-black text-white  rounded-2xl group hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={assets.arrow_icon_dark}
                  className="size-3 group-hover:rotate-45 transition-all duration-300"
                />
                <span className="font-semibold">Demo</span>
              </a>
              <a
                href={git}
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-2 dark:bg-gray-300 dark:text-black dark:border-none border  rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                <img src={assets.git} className="size-5" />
                <span className="font-semibold">Github</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
