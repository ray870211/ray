import React from "react";
import "../scss/skills.scss";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { SkillsData } from "../data/SkillsData";
import { useState } from "react";

function Skills() {
  const [selectedTitle, setSelectedTitle] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(0);

  function guidGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
  }
  const selectSkills = (id) => {
    setSelectedTitle(id);
    setSelectedSkill(0);
  };

  return (
    <div className='skills p-4 d-flex justify-content-center align-items-center'>
      <Container>
        <Row>
          <Col>
            <h1>SKILLS</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col className='skill-title-button'>
                <button onClick={() => selectSkills(SkillsData[0].id)}>
                  {SkillsData[0].title}
                </button>
                <button onClick={() => selectSkills(SkillsData[1].id)}>
                  {SkillsData[1].title}
                </button>
                <button onClick={() => selectSkills(SkillsData[2].id)}>
                  {SkillsData[2].title}
                </button>
                <button onClick={() => selectSkills(SkillsData[3].id)}>
                  {SkillsData[3].title}
                </button>
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col className='skill-button'>
                {SkillsData[selectedTitle].skills.map((element) => (
                  <button key={guidGenerator()} onClick={() => setSelectedSkill(element.id)}>
                    {element.name}
                  </button>
                ))}
              </Col>
            </Row>
          </Col>
          <Col className='skill-content' key={guidGenerator()}>
            <h3>{SkillsData[selectedTitle].skills[selectedSkill].name}</h3>
            <p>{SkillsData[selectedTitle].skills[selectedSkill].text}</p>
          </Col>
        </Row>
        <Row className='d-flex justify-content-around mt-2'>
          {SkillsData[selectedTitle].skills[selectedSkill].images.map((element) => (
            <Col xl={4} lg={4} md={4} className='skill-img'>
              <img key={guidGenerator()} src={element.url}></img>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Skills;
