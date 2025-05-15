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
        style={{
          scale: cardScale,
          backgroundColor: isDarkMode ? bgcolor : "#ffffff",
          top: `calc(-5vh + ${i * 15}px)`,
        }}
      >
        {/** Project Name */}
        <h1 className="text-center font-bold text-2xl pb-3">{title}</h1>

        <div className="flex flex-col md:flex-row items-center justify-between h-[90%] w-full">
          {/** Image */}
          <div className="w-full h-2/3 md:w-1/2 md:h-full flex flex-col items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-400 dark:border-none">
              <motion.img
                alt="Image"
                src={image}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/** Body */}
          <div className="w-full h-1/3  md:w-1/2 md:h-full flex flex-col items-center justify-around gap-4">
            {/**Descripton */}
            <p className="text-md text-gray-800 dark:text-white/80 font-Outfit">{desc}</p>

            {/**Teck Stack */}
            <div className="w-full space-y-4">
              <h2 className="text-xl font-semibold">Tech Stack</h2>
              <div className="flex gap-2">
                {techs.map((tech, index) => (
                  <motion.li
                    whileHover={{ scale: 1.05 }}
                    key={index}
                    className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-full
                                      duration-500 hover:-translate-y-1 dark:bg-transparent relative group"
                  >
                    <img src={isDarkMode ? tech.icon_dark : tech.icon} alt="Tool" className="w-5 sm:w-7" />
                    <div className="min-w-max opacity-0 group-hover:opacity-100  absolute bottom-0  translate-y-6">
                      <p className="text-gray-600 dark:text-white/60 text-sm">
                        {tech.title}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </div>
            </div>

            {/**Button */}
            <div className="flex gap-5">
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
