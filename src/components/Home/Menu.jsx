import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import { motion } from "framer-motion";
function Menu() {
  const [hamburgerIsClick, setHamburgerIsClick] = useState(false);
  const hamburgerClick = () => {
    setHamburgerIsClick(true);
  };
  const cancelButtonClick = () => {
    setHamburgerIsClick(false);
    console.log("");
  };
  const primaryAnimate = {
    open: {},
    closed: {
      width: "100%",
      transition: {
        duration: 1,
      },
    },
  };
  const selectButtonAnimate = {
    open: { opacity: 1, x: 0, display: "block" },
    closed: { transitionEnd: { display: "none" } },
  };
  return (
    <motion.div>
 <div className='menu-wrapper'>
      <div className='menu-top'>
        <div className='menu-main'>
          <div className={hamburgerIsClick ? "menu-content" : "menu-content is-show"}></div>
        </div>
      </div>
      <div className='menu-buttons'>
        <motion.div animate={hamburgerIsClick ? "closed" : "open"} variants={primaryAnimate}>
          <div className={hamburgerIsClick ? "primary" : "primary"}>
            <a>primary</a>
            {hamburgerIsClick ? (
              <div className='cancel_button' onClick={() => cancelButtonClick()}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <div className='menu_hamburger' onClick={hamburgerClick}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div animate={hamburgerIsClick ? "closed" : "open"} variants={selectButtonAnimate}>
          <div className='select-button'>
            {/* <p>text</p> */}
            <button>About</button>
            <button>Skills</button>
            <button>Projects</button>
            <button>Something</button>
          </div>
        </motion.div>
      </div>
    </div>
    </motion.div>
   
  );
}
export default Menu;
