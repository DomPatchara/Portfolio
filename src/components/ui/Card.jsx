import { assets } from "../../../assets/assets";
import { motion, useTransform } from "framer-motion";

const Card = ({
  title,
  desc,
  url,
  image,
  git,
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
        style={{
          scale: cardScale,
          backgroundColor: isDarkMode ? "#11001F" : "#ffffff",
          top: `calc(-5vh + ${i * 15}px)`,
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center h-full w-full gap-5">
          {/** Image */}
          <div className="group w-full sm:w-1/2 sm:h-full flex flex-col items-center justify-center hover:scale-95 transition-transform duration-300">
            <a
              href={url}
              target="_blank"
              className="relative w-full aspect-square overflow-hidden rounded-2xl border border-gray-400 dark:border-none"
            >
              <motion.img alt="Image" src={image} className="object-contain " />
            </a>
          </div>

          {/** Body */}
          <div className="w-full  sm:w-1/2 sm:h-full flex flex-col items-center gap-4 lg:gap-y-8 ">
            <div>
              {/** Project Name */}
              <h1 className="text-center text-gray-800 dark:text-white/80 font-bold text-2xl text-nowrap mb-2 md:text-[28px] lg:text-4xl lg:mb-5">
                {title}
              </h1>

              {/**Descripton */}
              <p className="line-clamp-3 indent-4 text-sm sm:text-base text-gray-800 dark:text-white/50 font-Outfit lg:text-[17px]">
                {desc}
              </p>
            </div>

            {/**Teck Stack */}
            <div className="hidden w-full lg:flex flex-col sm:pl-0 sm:items-start  items-center justify-start ml-5 gap-5">
              
              <div className="flex flex-wrap pl-2 sm:pl-0 gap-x-1 gap-y-2">
                {techs.map((tech, index) => (
                  <li
                    key={index}
                    className="flex gap-2 hover:scale-105 px-3 py-1  items-center justify-center   border border-gray-400 rounded-full
                                      duration-500 hover:-translate-y-1 dark:bg-transparent relative group cursor-default "
                  >
                    <img
                      src={isDarkMode ? tech.icon_dark : tech.icon}
                      alt="Tool"
                      className="w-5"
                    />
                    <div className="min-w-max">
                      <p className="text-gray-600   dark:text-white/60 text-[12px]  sm:text-sm">
                        {tech.title}
                      </p>
                    </div>
                  </li>
                ))}
              </div>
            </div>

            {/**Button */}
            <div className="flex gap-2 lg:gap-4 mt-1 ">
              <a
                href={url}
                target="_blank"
                className="flex items-center justify-center gap-3 px-4 py-2 lg:px-5  dark:bg-transparent  border dark:border-white/50 dark:text-white bg-black text-white  rounded-2xl group hover:scale-105 transition-transform duration-300 active:bg-gray-600"
              >
                <img
                  src={assets.arrow_icon_dark}
                  className="size-4 group-hover:rotate-45 transition-all duration-300"
                />
                <span className="font-semibold lg:text-xl">Demo</span>
              </a>
              <a
                href={git}
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-2 lg:px-5  dark:bg-gray-300 dark:text-black dark:border-none border  rounded-2xl hover:scale-105 transition-transform duration-300 active:bg-gray-600"
              >
                <img src={assets.git} className="size-5" />
                <span className="font-semibold lg:text-xl">Github</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
