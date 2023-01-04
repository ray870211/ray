/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../sass/layout/header.sass";
import { Link } from "react-router-dom";
function Header() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 405) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={isScroll ? "header header-change" : "header"}>
      <div className='logo'>Ray</div>
      {/* <img alt='' className='logo'></img> */}
      <Link to='/' className='navigation'>
        HOME
      </Link>

      <Link to='/a000f85cddca4cfc83b0ab048bbddbc6' className='navigation'>
        文章
      </Link>
      <a href='' className='navigation'></a>
    </div>
  );
}
export default Header;
