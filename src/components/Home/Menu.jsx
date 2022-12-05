import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

function Menu(props) {
  return (
    <div className='menu-wrapper'>
      <div className='menu-buttons'>
        <button className='primary'>primary</button>
        <div className='select-button'>
          {/* <p>text</p> */}

          <button onClick={() => props.selectSkills(props.SkillsData[0].id)}>
            {props.SkillsData[0].title}
          </button>
          <button onClick={() => props.selectSkills(props.SkillsData[1].id)}>
            {props.SkillsData[1].title}
          </button>
          <button onClick={() => props.selectSkills(props.SkillsData[2].id)}>
            {props.SkillsData[2].title}
          </button>
          <button onClick={() => props.selectSkills(props.SkillsData[3].id)}>
            {props.SkillsData[3].title}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Menu;
