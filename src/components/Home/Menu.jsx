import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { animate, motion, useScroll } from "framer-motion";
function Menu(props) {
  const headerOffsetTop = 42;
  //progress
  const { scrollYProgress } = useScroll();
  //hamburger
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
  const scrollToSectionHandler = (height) => {
    window.scrollTo(0, height - headerOffsetTop);
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
              <a>Home</a>
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
              <motion.div className='progress' style={{ scaleX: scrollYProgress }}></motion.div>

              <button onClick={() => scrollToSectionHandler(props.sectionOffsetTop[0])}>
                About
              </button>
              <button onClick={() => scrollToSectionHandler(props.sectionOffsetTop[1])}>
                Skills
              </button>
              <button onClick={() => scrollToSectionHandler(props.sectionOffsetTop[2])}>
                autobiography
              </button>
              <button onClick={() => scrollToSectionHandler(props.sectionOffsetTop[3])}>
                Projects
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
export default Menu;
