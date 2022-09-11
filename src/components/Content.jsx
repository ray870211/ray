import React, { useRef } from "react";
import Header from "./Header";
import "../scss/content.scss";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Projects from "./Projects";
function Content() {
  const headerRef = useRef(undefined);
  const introductionRef = useRef(undefined);
  const skillsRef = useRef(undefined);
  const projectRef = useRef(undefined);
  console.log(headerRef);
  return (
    <div className='main-content'>
      <Header ref={headerRef}></Header>
      <Introduction ref={introductionRef}></Introduction>
      <Skills ref={skillsRef}></Skills>
      <Projects ref={projectRef}></Projects>
    </div>
  );
}
export default Content;
