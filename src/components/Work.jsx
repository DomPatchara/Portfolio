import { workData } from "../../assets/assets";
import useSectionInview from "../hook/useInView";
import Card from "./ui/Card";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";


const Work = ({ isDarkMode }) => {

  const { ref: Projectref } = useSectionInview("Projects", 0.1);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div  ref={Projectref} id="projects" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full px-[12%] py-10"
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
          My latest projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        >
          Welcome to my web development porfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </motion.p>

        <main ref={container}  className="relative mt-[1vh] sm:mt-[5vh] ">
          {workData.map((work, index) => {
            const targetScale = 1 - (workData.length - index) * 0.05;
            return (
              <Card
                key={index}
                i={index}
                progress={scrollYProgress}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
                title={work.title}
                desc={work.description}
                image={work.bgImage}
                url={work.link}
                git={work.git}
                isDarkMode={isDarkMode}
                techs={work.techs}
              />
            );
          })}
        </main>
      </motion.div>
    </div>
  );
};

export default Work;
