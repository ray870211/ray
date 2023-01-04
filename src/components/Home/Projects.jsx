import React, { useState } from "react";
import "../../sass/components/projects.sass";
import { motion } from "framer-motion";
//icon
import { ReactComponent as ArrowRight } from "../../assets/icon/arrow-right.svg";
function Projects(props) {
  const [isHovered, setHovered] = useState(false);
  const projectData = props.projectData.projectData;
  console.log("project" + projectData.id);
  const showProject = () => {
    props.changeProjectState({ type: "modalShow", setShow: true });
    props.changeProjectState({ type: "modalData", modalData: projectData });
  };
  return (
    <React.Fragment>
      <div className='project'>
        <div
          className='project-image'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
          <motion.div transition={{ duration: 0.4 }} animate={{ opacity: isHovered ? 1 : 0 }}>
            <div className='bg-mask'></div>
          </motion.div>
          <img src={projectData.preview} alt='' />
          <motion.div animate={{ opacity: isHovered ? 1 : 0 }}>
            <div className='project-image-text'>
              <div className='left'>
                <div>{projectData.system}</div>
                <div>{projectData.title}</div>
              </div>
              <div className='right'>
                <div>
                  <ArrowRight onClick={showProject} />
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
