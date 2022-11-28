import React from "react";
import "../../sass/components/sidebar.sass";
import { ArticleData } from "../../data/ArticleData";
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className='sidebar d-flex bg-black'>
      {ArticleData.map((Element) => (
        // <li onClick={() => setId(Element.id)}>{Element.name}</li>
        <Link to={"/" + Element.postId} className='navigation'>
          {Element.name}
        </Link>
      ))}
    </div>
  );
}
export default Sidebar;
