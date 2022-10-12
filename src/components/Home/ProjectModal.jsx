import React, { useState, useEffect } from "react";
import Api from "../../services/Api";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";
import { ProjectsData } from "../../data/ProjectsData";
import "../../scss/project_modal.scss";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

function ProjectsModal(props) {
  const PAGE_ID = ProjectsData[props.project].pageId;
  const [loading, setLoading] = useState(false);
  const [notionPageData, setNotionPageData] = useState(null);
  useEffect(() => {
    Api.loadNotionContent(PAGE_ID)
      .then((res) => {
        console.log(res.data);
        setNotionPageData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setLoading(false);
      });
  }, [props.show]);
  const modalOnHide = () => {
    props.setShow(false);
    setLoading(false);
    setNotionPageData(null);
    console.log(123);
  };
  return (
    <div className='projectsModal'>
      <Modal show={props.show} onHide={() => modalOnHide()}>
        <Modal.Header closeButton>
          <Modal.Title>{ProjectsData[props.project].title}</Modal.Title>
        </Modal.Header>
        <div className='notion-content'>
          {loading && <NotionRenderer blockMap={notionPageData}></NotionRenderer>}
        </div>
      </Modal>
    </div>
  );
}
export default ProjectsModal;
