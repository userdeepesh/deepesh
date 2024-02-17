// "  npm install framer-motion " for motion 
// " motion.h1 " to motion fram h1 tag
// " initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear",repeat:Infinity, duration:5}} " for animateion in under the tag


import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div className='w-full py-20 rounded-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear",repeat:Infinity, duration:5}} className='text-[17vw] leading-none font-["Founders_Grotest_X-Condensed"] uppercase pt-10 -mb-5 font-semibold'>We are Devloper</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear",repeat:Infinity, duration:5}} className='text-[17vw] leading-none font-["Founders_Grotest_X-Condensed"] uppercase pt-10 -mb-5 first-line:font-semibold'>We are Devloper</motion.h1>
        

      </div>

    </div>
  )
}

export default Marquee