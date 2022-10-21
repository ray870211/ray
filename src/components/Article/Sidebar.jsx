import React from "react";
import "../../scss/sidebar.scss";
import { ArticleData } from "../../data/ArticleData";
function Sidebar(props) {
  const setId = (id) => {
    props.setNotionId(id);
  };
  return (
    <div className='sidebar d-flex bg-black'>
      {ArticleData.map((Element) => (
        <li onClick={() => setId(Element.id)}>{Element.id}</li>
      ))}
    </div>
  );
}
export default Sidebar;
