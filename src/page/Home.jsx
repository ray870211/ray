import React, { useEffect, useState, useRef } from "react";
//modules
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { motion, useScroll, useAnimationControls } from "framer-motion";
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
  const [view, setView] = useState("introduction");
  //區塊高度

  //動畫
  const controls = useAnimationControls();
  useEffect(() => {});
  //高度與滾動
  const { scrollY } = useScroll();
  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest);
      if (latest < 200) {
        document.body.style.backgroundColor = "#000";
        setView("introduction");
      }
      if (latest > 200) {
        document.body.style.backgroundColor = "#fff";
        setView("skills");
      }
      if (latest > 1200) {
        setView("projects");
      }
    });
  }, []);

  const View = (view) => {
    view = view.view;
    switch (view) {
      case "introduction":
        return (
          <div className='introduction d-flex  align-items-center justify-content-center'>
            <Container fluid className='p-0 '>
              <Row className='m-0'>
                <Col md={6} className='title text-center'>
                  <motion.div animate={controls}>
                    <h1>
                      Ray<br></br> Web Developer
                    </h1>
                    <p>對前端開發充滿興趣，喜歡鑽研各種不同的技術。</p>
                  </motion.div>
                </Col>

                <Col md={6} className='myself d-flex '>
                  <motion.div
                    transition={{ duration: 0.5, delay: 0.2 }}
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
                  <div className='details'>
                    <strong>Details:</strong>
                    <br></br>
                    <br></br>
                    <p>李崑睿，24歲，目前居住在台中。</p>
                  </div>
                </Col>
              </Row>
              <DownArrow className='down-arrow' fill='#ffffff' />
            </Container>
          </div>
        );
      case "skills":
        return (
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
                          <button
                            key={guidGenerator()}
                            onClick={() => setSelectedSkill(element.id)}>
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
        );
      case "projects":
        return (
          <div containerId='project' className='projects'>
            <AddProject></AddProject>
            <ProjectsModal project={project} show={show} setShow={setShow}></ProjectsModal>
          </div>
        );
      default:
    }
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
    <div className='main'>
      <div className='main-content'>
        <Header></Header>
        <View view={view}></View>
        <div className='menu'>
          <Menu SkillsData={SkillsData} selectSkills={selectSkills}></Menu>
        </div>
      </div>
    </div>
  );
}

export default Home;
