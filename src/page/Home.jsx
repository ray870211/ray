import React, { useEffect, useState, useRef, useReducer } from "react";
//modules
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import { motion, useScroll, useAnimationControls, animate } from "framer-motion";
import { Link } from "react-router-dom";

//sass
import "../sass/style.sass";
import "../sass/page/home.sass";
import "../sass/components/projects.sass";
import "../sass/components/introduction.sass";
import "../sass/components/menu.sass";
//components
import Header from "../components/Header";
import Menu from "../components/Home/Menu";
import ProjectsModal from "../components/Home/ProjectModal";
//assets
import github_icon from "../assets/images/github 1.svg";
import gmail_icon from "../assets/images/gmail-icon.svg";
import { ReactComponent as WebDevelopmentIcon } from "../assets/images/basic-webpage-img-txt_97846.svg";
import { ReactComponent as Tools } from "../assets/images/tool_120757.svg";
//data
import { ProjectsData } from "../data/ProjectsData";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Projects from "../components/Home/Projects";

const initialState = {
  modalShow: false,
  projectsData: {},
  modalData: {},
};
function reducer(state, action) {
  switch (action.type) {
    //取得文字按鈕等資料
    case "projectData":
      return { ...state, projectsData: action.projectData };
    //當前modal
    case "modalShow":
      return { ...state, modalShow: action.setShow };
    case "modalData":
      return { ...state, modalData: action.modalData };
    default:
      return state;
  }
}
function Home() {
  //section background image
  const sectionBackgroundImg = [require("../assets/images/pexels-veeterzy-303383.jpg")];
  //
  const [menuMessage, setMenuMessage] = useState(false);
  //區塊高度
  const [sectionOffsetTop, setSectionOffsetTop] = useState([]);
  const introductionRef = useRef();
  const skillsRef = useRef();
  const autobiographyRef = useRef();
  const projectRef = useRef();
  const [arriveBottom, setArriveBottom] = useState(false);
  const [overTopView, setOverTopView] = useState(false);
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
  const menuDisplay = {
    open: { opacity: 1, x: 0, display: "block" },
    closed: {
      opacity: 0,
      y: "100%",
      transitionEnd: {
        display: "none",
      },
    },
  };
  //高度與滾動
  const { scrollY } = useScroll();
  useEffect(() => {
    document.body.style.backgroundColor = "#000";
    return scrollY.onChange((latest) => {
      console.log(sectionOffsetTop[3]);

      document.body.style.backgroundColor = "#000";
      setOverTopView(false);
      if (latest > sectionOffsetTop[0]) {
        document.body.style.backgroundColor = "#fff";
        setOverTopView(true);
      }
      if (latest > sectionOffsetTop[3] - 200) {
        setArriveBottom(true);
      } else {
        setArriveBottom(false);
      }
    });
  }, [scrollY, sectionOffsetTop]);
  //modal
  const [projectState, changeProjectState] = useReducer(reducer, initialState);
  function guidGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
  }
  //
  const copyGmail = () => {
    navigator.clipboard.writeText("ray870211@gmail.com");
    setMenuMessage("已複製");
    setTimeout(() => {
      setMenuMessage(false);
    }, 3000);
  };
  return (
    <div className='main'>
      <div className='main-content'>
        <Header headerIsScroll={overTopView}></Header>
        <section
          className='introduction d-flex  align-items-center justify-content-center'
          ref={introductionRef}>
          <Container fluid className='p-0 '>
            <Row className='m-0'>
              <Col md={6} className='title text-center'>
                <motion.div animate={controls}>
                  <h1 className={overTopView ? "p-change" : ""}>
                    Ray<br></br> Web Developer
                  </h1>
                  <p>對前端開發充滿興趣，喜歡鑽研各種不同的技術。</p>
                </motion.div>
              </Col>

              <Col sm={12} md={6} className='myself d-flex '>
                <motion.div
                  transition={{ duration: 0.5, delay: 0.2 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  initial={{ x: 100, opacity: 0 }}>
                  <img className='myphoto' src={require("../assets/images/ray.png")}></img>
                </motion.div>
              </Col>
            </Row>
            <Row className='m-0 mt-4'>
              <Col md={6} className='button-group  d-flex'>
                <motion.div
                  className='social-icons '
                  animate={{ x: 10, y: 0 }}
                  initial={{ x: 1000 }}
                  transition={{ duration: 1.5 }}>
                  <a href='https://github.com/ray870211'>
                    <img className='social-icon' src={github_icon} alt='' />
                  </a>
                  <img onClick={() => copyGmail()} className='social-icon' src={gmail_icon}></img>
                </motion.div>
              </Col>
              <Col md={6} className='mail'>
                <div className='details'>
                  <strong>Details:</strong>
                  <br></br>
                  <br></br>
                  <p className={overTopView ? "p-change" : ""}>李崑睿，24歲，目前居住在台中。</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section
          ref={skillsRef}
          className='section_skills'
          style={{ backgroundImage: `url(${sectionBackgroundImg[0]})` }}>
          <motion.div
            transition={{ duration: 0.5 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            viewport={{ once: true }}>
            <div className='skills d-flex '>
              <div className='transform_reset'>
                <Row className='skills-contents'>
                  <Col>
                    <Card className='skills-card'>
                      <CardHeader className='d-flex justify-content-center align-items-center'>
                        <h3>DOCUMENT PROCESSING</h3>
                      </CardHeader>
                      <ul>
                        <li>- Word</li>
                        <li>- PowerPoint</li>
                        <li>- Excel</li>
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
            </div>
          </motion.div>
        </section>
        <motion.div
          transition={{ duration: 0.5 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          initial={{ y: 40, opacity: 0.5 }}
          viewport={{ once: true }}>
          <section ref={autobiographyRef} className='autobiography'>
            <div>
              <Row>
                <Col md={6}>
                  <h3>喜歡學習，挑戰自我</h3>
                  <p className='autobiography-text'>
                    我叫李崑睿，亞洲大學，原就讀於財金系，在大三的時後對程式非常有興趣，因而轉到資工系，在學校的人工智慧實驗時中負責前端網站開發。
                  </p>
                  <p className='autobiography-text'>
                    與後端工程師共同架構後台系統，API規格及串接，獨自完成UI/UX，也可以勝任後台開發，目前在學習Node.js，目前主要學習React、Redux，以及React
                    Hook應用等。
                  </p>
                  <p className='autobiography-text'>
                    平日中我會透過Udemy自學各種技能，參加FB各種前後端社團，訂閱許多電子報來學習新知，我期許自己可以成為一名可靠的全端工程師。
                  </p>
                </Col>
                <Col md={6}>
                  <img src={require("../assets/images/ray.jpeg")}></img>
                </Col>
              </Row>
            </div>
          </section>
        </motion.div>

        <section ref={projectRef} className='projects'>
          {ProjectsData.map((Data) => (
            <Projects
              projectData={{ type: "projectData", projectData: ProjectsData[Data.id] }}
              changeProjectState={changeProjectState}
              key={Data.id}></Projects>
          ))}
        </section>
      </div>

      <ProjectsModal
        modalData={projectState.modalData}
        changeProjectState={changeProjectState}
        modalShow={projectState.modalShow}></ProjectsModal>
      <div className='menu'>
        <motion.div animate={arriveBottom ? "closed" : "open"} variants={menuDisplay}>
          <Menu menuMessage={menuMessage} sectionOffsetTop={sectionOffsetTop}></Menu>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
