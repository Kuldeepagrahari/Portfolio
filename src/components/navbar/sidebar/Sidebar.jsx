import React, { useState } from 'react';
import "./sidebar.css";
import { motion } from "framer-motion";
import Links from './links/links';
import ToggleButton from './toggleButton/toggleButton';

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const sidebarVariants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    return (
        <motion.div className='sidebar' animate={open ? "open" : "closed"}>
            <motion.div className="hammenu" variants={sidebarVariants}>
                <div className='side-links'>
                    <Links />
                </div>
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    );
}

export default Sidebar;
