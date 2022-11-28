import React from "react";
import Row from "react-bootstrap/esm/Row";
import "../../sass/components/sidebar.sass";

function Sidebar() {
  return (
    <div className='sidebar d-flex'>
      <a activeClass='active' to='project' href=''>
        ABOUT
      </a>
      <a href=''>SKILLS</a>
      <a href=''>PORJECTS</a>
    </div>
  );
}
export default Sidebar;
