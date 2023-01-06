/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../sass/layout/header.sass";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className={props.headerIsScroll ? "header header-change" : "header"}>
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
