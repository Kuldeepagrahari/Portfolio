import React from 'react'
import {motion} from "framer-motion"
const Test = () => {
    const variants={
        visible:{opacity:1},
        hidden:{opacity:0}
    }
  return (
    <div className='course'>
      <motion.div initial={{opacity:0.5,scale:0.5}}className="box" transition={{duration:1}}whileInView={{opacity:1,scale:2}} drag></motion.div>
    </div>
  )
}

export default Test
