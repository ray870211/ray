import React from "react";
import Header from "./Header";
import "../scss/content.scss";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Projects from "./Projects";
function Content() {
  return (
    <div className='content'>
      <Header></Header>
      <Introduction></Introduction>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}
export default Content;
