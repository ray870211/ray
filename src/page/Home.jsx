import React, { useEffect, useState, useRef } from "react";
//modules
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import { motion, useScroll, useAnimationControls } from "framer-motion";
//sass
import "../sass/style.sass";
import "../sass/page/home.sass";
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
import { ReactComponent as WebDevelopmentIcon } from "../assets/images/basic-webpage-img-txt_97846.svg";
import { ReactComponent as Tools } from "../assets/images/tool_120757.svg";
//data
import { SkillsData } from "../data/SkillsData";
import { ProjectsData } from "../data/ProjectsData";
import CardHeader from "react-bootstrap/esm/CardHeader";
import NotionButton from "../components/Home/NotionButton";

function Home() {
  const [show, setShow] = useState(false);
  const [project, setProject] = useState(0);
  const [view, setView] = useState("introduction");
  //section background image
  const sectionBackgroundImg = [require("../assets/images/pexels-veeterzy-303383.jpg")];
  //區塊高度
  const [sectionOffsetTop, setSectionOffsetTop] = useState([]);
  const [pageScrollY, setPageScrollY] = useState(0);
  const introductionRef = useRef();
  const skillsRef = useRef();
  const autobiographyRef = useRef();
  const projectRef = useRef();
  useEffect(() => {
    setSectionOffsetTop([
      introductionRef.current.offsetTop,
      skillsRef.current.offsetTop,
      autobiographyRef.current.offsetTop,
      projectRef.current.offsetTop,
    ]);
  }, [projectRef]);
  //動畫
  const controls = useAnimationControls();
  useEffect(() => {});
  //高度與滾動
  const { scrollY } = useScroll();
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setPageScrollY(latest);
      // console.log("Page scroll: ", (latest + window.innerHeight) / document.body.scrollHeight);
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

  function guidGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
  }

  return (
    <div className='main'>
      <div className='main-content'>
        <Header></Header>
        <div
          ref={introductionRef}
          className='introduction d-flex  align-items-center justify-content-center'>
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
        <div ref={skillsRef} className='skills d-flex '>
          <motion.div
            transition={{ duration: 0.5 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}>
            <section
              className='section_skills'
              style={{ backgroundImage: `url(${sectionBackgroundImg[0]})` }}>
              <div className='transform_reset'>
                <Row className='skills-contents'>
                  <Col>
                    <Card className='skills-card'>
                      <CardHeader className='d-flex justify-content-center align-items-center'>
                        <h3>PROGRAMMING LANGUAGES & OTHERS</h3>
                      </CardHeader>
                      <ul>
                        <li>abc</li>
                      </ul>
                    </Card>
                  </Col>
                  <Col>
                    <Card className='skills-card'>
                      <CardHeader className='d-flex justify-content-center align-items-center'>
                        <WebDevelopmentIcon></WebDevelopmentIcon>
                        <h3 className='text-center'>WEB DEVELOPMENT</h3>
                      </CardHeader>
                      <ul className='web-development m-1  '>
                        <li>- HTML5</li>
                        <li>- CSS</li>
                        <li>- Javascript</li>
                        <li>- Python</li>
                        <li>- PHP</li>
                        <li>- JAVA</li>
                        <li>- Swift</li>
                        <li>- Bootstrap</li>
                        <li>- React</li>
                        <li>- Redux</li>
                        <li>- MySQl</li>
                        <li>- Netlify</li>
                        <li>- Sass</li>
                        <li>- NodeJS</li>
                        <li>- NPM</li>
                        <li>- Webpack</li>
                        <li>- Git(Hub)</li>
                      </ul>
                    </Card>
                  </Col>
                  <Col>
                    <Card className='skills-card'>
                      <CardHeader className='d-flex justify-content-center align-items-center'>
                        <Tools></Tools>
                        <h3>TOOLS</h3>
                      </CardHeader>
                      <ul className='tools'>
                        <li>- VS CODE</li>
                        <li>- Figma</li>
                        <li>- Notion</li>
                        <li>- XCode</li>
                      </ul>
                    </Card>
                  </Col>
                </Row>
              </div>
            </section>
          </motion.div>
        </div>
        <div ref={autobiographyRef} className='autobiography'>
          <section>
            <Row>
              <Col md={6}>
                <h3>喜歡學習，挑戰自我</h3>
                <p>
                  我叫李崑睿，亞洲大學，原就讀於財金系，在大三的時後對程式非常有興趣，因而轉到資工系，在學校的人工智慧實驗時中負責前端網站開發。
                  <br />
                  我喜歡React這個框架並且正在精進學習中，我可以與後端工程師討論API規格並且串接，我也擅長用PHP來撰寫後端程式。也喜歡Swift這個程式語言，希望未來有機會精進它。
                  <br />
                  平日中我會透過Udemy自學各種技能，參加FB各種前後端社團，訂閱許多電子報來學習新知，我期許自己可以成為一個人就能完成大部分事情的全端工程師。
                </p>
              </Col>
              <Col md={6}>
                <img src={require("../assets/images/ray.jpeg")}></img>
              </Col>
            </Row>
          </section>
        </div>

        <div ref={projectRef} containerId='project' className='projects'>
          <AddProject></AddProject>
          <ProjectsModal project={project} show={show} setShow={setShow}></ProjectsModal>
        </div>
      </div>
      <div className='menu'>
        <Menu sectionOffsetTop={sectionOffsetTop}></Menu>
      </div>
    </div>
  );
}

export default Home;
