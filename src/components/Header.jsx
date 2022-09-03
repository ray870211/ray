/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../scss/header.scss";

function Header() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 50) {
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
    <div className={isScroll ? "header change" : "header"}>
      <img alt='' className='logo'></img>
      <a href='' className='navigation'>
        HOME
      </a>
      <a href='' className='navigation'>
        關於我
      </a>
      <a href='' className='navigation'>
        文章
      </a>
      <a href='' className='navigation'>
        作品
      </a>

      <a href='' className='navigation'></a>
    </div>
  );
}
export default Header;