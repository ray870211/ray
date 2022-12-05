/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../sass/layout/header.sass";
import { Link } from "react-router-dom";
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
      {/* <img alt='' className='logo'></img> */}
      <Link to='/' className='navigation'>
        HOME
      </Link>

      <Link to='/a58be80e9490460babefc359634a1b90' className='navigation'>
        文章
      </Link>

      <a href='' className='navigation'></a>
    </div>
  );
}
export default Header;
