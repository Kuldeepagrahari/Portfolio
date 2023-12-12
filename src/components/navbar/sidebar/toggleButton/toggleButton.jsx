import React from 'react';
import "./toggleButton.css";
import { motion } from "framer-motion";

const variant = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const ToggleButton = ({ setOpen }) => {
  return (
    <div className='toggle'>
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        variants={variant}
        animate={setOpen ? "open" : "closed"}
      >
        <div>
          {setOpen? (
            <img src="https://img.icons8.com/?size=160&id=niQ21T50r0K5&format=png" alt="open" />
          ) : (
            <img src="https://img.icons8.com/?size=100&id=8113&format=png" alt="closed" />
          )}
        </div>
      </motion.button>
    </div>
  );
};

export default ToggleButton;
// import React, { useState } from 'react';
// import "./toggleButton.css";

// const ToggleButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = ({setOpen}) => {
//     setOpen((prev) => !prev);
//     // setIsOpen((prev) => !prev);
//   };

//   return (
//     <div className='toggle'>
//       <button onClick={toggleMenu}  onClick={({setOpen}) => setOpen((prev) => !prev)}>
//         <div>
//           {isOpen ? (
//             <img
//               src="https://img.icons8.com/?size=160&id=niQ21T50r0K5&format=png"
//               alt="open"
//             />
//           ) : (
//             <img
//               src="https://img.icons8.com/?size=100&id=8113&format=png"
//               alt="closed"
//             />
//           )}
//         </div>
//       </button>
//     </div>
//   );
// };

// export default ToggleButton;
