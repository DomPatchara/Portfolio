import { assets } from "../../assets/assets";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const Card = ({
  title,
  desc,
  url,
  image,
  git,
  bgcolor,
  i,
  progress,
  range,
  targetScale,
  isDarkMode,
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [3, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer">
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
                style={{ scale: imageScale }}
              />
            </div>
          </div>

          {/** Body */}
          <div className="w-full h-1/3  md:w-1/2 md:h-full flex flex-col items-center justify-center gap-4">

            {/**Descripton */}
            <p>{desc}</p>

            {/**Teck Stack */}
            <div>Teck Stack</div>

            {/**Button */}
            <div className="flex gap-5">
              <a
                href={url}
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 rounded-2xl"
              >
                <img src={assets.arrow_icon_dark} className="size-3" />
                Demo
              </a>
              <a
                href={git}
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 rounded-2xl"
              >
                <img src={assets.git} className="size-5" />
                Github
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
