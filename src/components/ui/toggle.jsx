import React from 'react'
import clsx from 'clsx'


const Toggle = ({currentColor}) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
  <input className="sr-only peer" value="" type="checkbox" />
    <div className={clsx(currentColor, "peer rounded-full outline-none  duration-100   after:transition-all after:duration-500 w-20 h-10 peer-focus:outline-none  ring-gray-500 ring-1  after:content-['UI'] after:text-sm  after:absolute after:outline-none after:bg-gradient-to-br peer-checked:after:bg-gradient-to-tl  after:to-transparent  after:rounded-full after:h-8 after:w-8 after:top-1 after:left-1 after:flex after:justify-center after:items-center after:text-white/70  dark:after:text-black/70 after:from-black dark:after:from-white  after:font-bold peer-checked:after:translate-x-10 peer-checked:after:content-['UX'] ")} >
  </div>
</label>
  )
}

export default Toggle