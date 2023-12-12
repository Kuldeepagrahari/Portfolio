import React from 'react'
import {motion} from "framer-motion"
import "./nav.css"
import Sidebar from './sidebar/Sidebar'
const NAV = () => {
  return (
    <div className='nav'>
       <div className='side'> <Sidebar></Sidebar></div>
      <div className="wrapper">
        <motion.span  initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>My Portfolio</motion.span>
        <div className='social'>
            <a href="#"><img src="https://www.freepnglogos.com/uploads/linkedin-logo-transparent-picture-31.png" alt="" /></a>
            <a href="#"><img src="/instagram.png" alt="" /></a>
            <a href="#"><img src="/facebook.png" alt="" /></a>
            <a href="#"><img src="https://img.icons8.com/?size=128&id=52539&format=png" alt="hey" /></a>
        </div> </div>
    </div>
  )
}

export default NAV;
