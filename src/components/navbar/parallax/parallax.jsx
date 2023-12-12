import React from 'react'
import {motion} from "framer-motion"
import "./parallax.css";
/* The line `const Parallax = ({type}) => {` is defining a functional component named `Parallax` that
accepts a single prop called `type`. The prop `type` is destructured from the props object passed to
the component. */
const Parallax = ({type}) => {
  return (
//   <div>
     <div className="parallax"   style={{background:
    type==='services' ? "linear-gradient(180deg,#111132,#0c0c1d)":
    "linear-gradient(180deg , #111132,#505064)"
    }}>

<h1>{type==="services" ? "What we Do" : "What we Did"}</h1>
    <div className="mountains">  </div>
    <div className="planets"></div>
    <div className="stars"></div>
    </div>
  )
}

export default Parallax;
