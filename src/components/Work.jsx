import { workData } from "../../assets/assets";
import useSectionInview from "../hook/useInView";
import Card from "./Card";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const Work = ({ isDarkMode }) => {
  const { ref } = useSectionInview("Work");

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20 "
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

      <main ref={container} className="relative mt-[1vh] sm:mt-[5vh]">
        {workData.map((work, index) => {

          const targetScale = 1 - ((workData.length - index) * 0.05)
          return (
            <Card
              key={index}
              i={index}
              progress={scrollYProgress}
              range={[index * 0.25 ,1]}
              targetScale={targetScale}
              title={work.title}
              desc={work.description}
              image={work.bgImage}
              url={work.link}
              git={work.git}
              bgcolor={work.color}
              isDarkMode={isDarkMode}
              techs={work.techs}
            />
          );
        })}
      </main>
    </motion.div>
  );
};

export default Work;
