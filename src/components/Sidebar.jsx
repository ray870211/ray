import React from "react";
import Row from "react-bootstrap/esm/Row";
import "../scss/sidebar.scss";
function Sidebar() {
  return (
    <div className='sidebar d-flex'>
      <a href=''>ABOUT</a>
      <a href=''>SKILLS</a>
      <a href=''>PORJECTS</a>
    </div>
  );
}
export default Sidebar;
