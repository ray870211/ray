import React, { useLayoutEffect, useState } from "react";
//modules
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { motion } from "framer-motion";
//sass
import "../sass/style.sass";
import "../sass/page/home.sass";
import "../sass/components/skills.sass";
import "../sass/components/projects.sass";
import "../sass/components/introduction.sass";
import "../sass/components/menu.sass";
//components
import Header from "../components/Header";
import AddProject from "../components/Home/Projects";
import ProjectsModal from "../components/Home/ProjectModal";
import Menu from "../components/Home/Menu";
//assets
import github_icon from "../assets/images/github 1.svg";
import gmail_icon from "../assets/images/gmail-icon.svg";
import { ReactComponent as DownArrow } from "../assets/images/down-arrow.svg";
//data
import { SkillsData } from "../data/SkillsData";
import { ProjectsData } from "../data/ProjectsData";

function Home() {
  const [isScroll, setIsScroll] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(0);
  const [show, setShow] = useState(false);
  const [project, setProject] = useState(0);
  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const onScroll = () => {
    const scrollPos = window.scrollY;
    console.log(scrollPos);
  };
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
    <div className='main-content'>
      <Header></Header>
      <div className='introduction d-flex  align-items-center justify-content-center'>
        <Container fluid className='p-0 '>
          <Row className='m-0'>
            <Col md={6} className='title text-center'>
              <motion.div
                transition={{ duration: 1.5 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}>
                <h1>
                  Ray<br></br> Web Developer
                </h1>

                <p>對前端開發充滿興趣，喜歡鑽研各種不同的技術。</p>
              </motion.div>
            </Col>

            <Col md={6} className='myself d-flex align-items-center'>
              <motion.div
                transition={{ duration: 0.5, delay: 1 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}>
                <img className='myphoto' src={require("../assets/images/ray.png")}></img>
              </motion.div>
            </Col>
          </Row>
          <Row className='m-0 mt-4'>
            <Col className='button-group d-flex'>
              <motion.div
                className='social-icons'
                animate={{ x: 10, y: 0 }}
                initial={{ x: 1000 }}
                transition={{ duration: 1.5 }}>
                <img className='social-icon' src={github_icon} alt='' />
                <img className='social-icon' src={gmail_icon}></img>
              </motion.div>
            </Col>
            <Col className='mail'>
              <p>ray870211@gmail.com</p>
              <p>github.com/ray870211</p>
            </Col>
          </Row>
          <DownArrow className='down-arrow' fill='#ffffff' />
        </Container>
      </div>
      <div className='skills p-4 d-flex justify-content-center align-items-center'>
        <motion.div
          transition={{ duration: 0.5 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}>
          <Container>
            <Row>
              <Col>
                <h1>SKILLS</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row></Row>
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
        </motion.div>
      </div>
      <div containerId='project' className='projects'>
        <AddProject></AddProject>
        <ProjectsModal project={project} show={show} setShow={setShow}></ProjectsModal>
      </div>
      <div className='menu'>
        <Menu SkillsData={SkillsData} selectSkills={selectSkills}></Menu>
      </div>
    </div>
  );
}

export default Home;
