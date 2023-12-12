import React from 'react'
import "./links.css"
import {motion} from "framer-motion"
const items=[
    "Homepage","Portfolio","Projects","About","Contact"
];

const variant={
  open:{
    transition:{
      /* `staggerChildren:0.1` is a property of the `transition` object in the `variant` object. It
      specifies the delay between animating each child element when the parent container is
      transitioning from the closed state to the open state. In this case, it means that each child
      element will start animating 0.1 seconds after the previous child element starts animating. */
      staggerChildren:0.1
    }
  },
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection:-1
    }
  }
}

const itemvariant={
  open:{
    y:0,
    opacity:1,
  },
  closed:{
   y:50,
   opacity:0
  }
}
const Links = () => {
  return (
    <motion.div className='links' variants={variant}>
      {
        items.map((item)=>(
            <motion.a href={`#${item}`} key={item} variants={itemvariant} whileHover={{scale:1.1, color:"rgb(77, 5, 172)"}} whileTap={{scale:0.9}}>{item}</motion.a>
        ))
      }
    </motion.div>
  )
}

export default Links
