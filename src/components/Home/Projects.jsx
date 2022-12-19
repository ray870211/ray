import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../../sass/components/projects.sass";
import { motion } from "framer-motion";
//icon
import { ReactComponent as ArrowRight } from "../../assets/icon/arrow-right.svg";
function Projects(props) {
  const [isHovered, setHovered] = useState(false);
  const projectData = props.projectData.projectData;
  console.log("project");
  const showProject = () => {
    props.changeProjectState({ type: "modalShow", setShow: true });
    props.changeProjectState({ type: "modalData", modalData: projectData });
  };
  return (
    <React.Fragment>
      <div
        className='project'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <div className='project-image'>
          <motion.div transition={{ duration: 0.4 }} animate={{ opacity: isHovered ? 1 : 0 }}>
            <div className='bg-mask'></div>
          </motion.div>
          <img src={projectData.preview} alt='' />
          <motion.div animate={{ opacity: isHovered ? 1 : 0 }}>
            <div className='project-image-text'>
              <div className='left'>
                <div>WEBSIDE</div>
                <div>{projectData.title}</div>
              </div>
              <div className='right'>
                <div>
                  <motion.div>
                    <ArrowRight onClick={showProject} />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Projects;
