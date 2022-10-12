import React, { useEffect, useState } from "react";
import Header from "../Header";
import "../../scss/content.scss";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Projects from "./Projects";
function Content() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const style = {
    backgroundColor: backgroundColor,
  };
  return (
    <div style={style} className='main-content'>
      <Header></Header>
      <Introduction setBackgroundColor={setBackgroundColor}></Introduction>
      <Skills setBackgroundColor={setBackgroundColor}></Skills>
      <Projects setBackgroundColor={setBackgroundColor}></Projects>
    </div>
  );
}
export default Content;
