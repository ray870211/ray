import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../sass/style.sass";
import "../sass/page/home.sass";
import Introduction from "../components/Home/Introduction";
import Skills from "../components/Home/Skills";
import Projects from "../components/Home/Projects";
function Home() {
  return (
    <div className='main-content'>
      <Header></Header>
      <Introduction></Introduction>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}
export default Home;
