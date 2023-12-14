import './home.css';
import {motion} from "framer-motion"
const textvariant={
    initial:{
        x:-500,
        opacity:0
    },
    animate:{
x:0,
opacity:1,
transition:{
    duration:1,
    staggerChildren:0.1
}
    },
    scroller:{
      opacity:0,
      y:10,
      transition:{
        duration:1,
        delay:2,
        repeat:Infinity
      }
    }
};

const slidervariant={
  initial:{
      x:0,
      // opacity:0
  },
  animate:{
x:"-400%",
// opacity:1,
transition:{
  duration:20,
  repeatType:"mirror"
,  repeat:Infinity
  // staggerChildren:0.1
}
  },
 
};
const Home = () => {
  return (
    <div className='home'>
      {/* <h1> sam</h1> */}
      <div className="wrapper">
      <motion.div className='content'  variants={textvariant} initial="initial" animate="animate">
        <motion.h2 variants={textvariant}>Hey I'm<br></br> <motion.span variants={textvariant}>KULDEEP AGRAHARI</motion.span></motion.h2>
        <motion.h1 variants={textvariant}>Web Developer</motion.h1>
        <motion.div className="btns" variants={textvariant}>
            <motion.button variants={textvariant} className='b1'>See the Latest Works</motion.button>
            
            <motion.button variants={textvariant} className='b2'>Contact Me</motion.button>
        </motion.div>
       <motion.div variants={textvariant} animate="scroller" className='scroll'> <img src="https://img.icons8.com/?size=160&id=kZ8cCNztjcoE&format=png" ></img></motion.div>
      </motion.div></div>
      <motion.div className="sliding-cont" variants={slidervariant} initial="initial" animate="animate">
        Problem Solver Mentor Learner
        </motion.div>
        <div className='my'>
      <motion.img variants={textvariant} src="/myphoto.png" alt="4"></motion.img>
    </div></div>
  )
}

export default Home
