import React from 'react'
import { assets, workData } from '../../assets/assets'
import { motion } from 'motion/react'

const Work = () => {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      id='work' className='w-full px-[12%] py-10 scroll-mt-25'>

      <motion.h4 
       initial={{opacity:0, y:-20}}
       whileInView={{opacity:1, y: 0}}
       transition={{duration:0.3, delay:0.5}}
       className='text-center mb-2 text-lg font-Ovo'>
        My portfolio
      </motion.h4>

      <motion.h2 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration:0.5, delay:0.5}}
        className='text-center text-5xl font-Ovo'>
        My latest works
      </motion.h2>

      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.7, delay:0.5}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Welcome to my web development porfolio! Explore a collection
            of projects showcasing my expertise in front-end development.
      </motion.p>

      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1, delay:0.6}}
      className='grid-cols-auto my-10 gap-5 dark:text-black'>
        {workData.map((project, index) => (
          <motion.div 
          whileHover={{scale: 1.05}}
          transition={{ duration: 0.3}}
          key={index} 
                style={{backgroundImage: `url(${project.bgImage})`}} 
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'>

            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
            py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>

              <div className='flex flex-col justify-center border-1 p-2 
              rounded-full group-hover:bg-lime-200 transition shadow-[2px_2px_2px_#000]'>
                <img src={assets.send_icon} alt="send icon" className='w-5'/>
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  )
}

export default Work