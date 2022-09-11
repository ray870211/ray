import React, { useState, useEffect } from "react";
import Api from "../services/Api";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";
import { ProjectsData } from "../data/ProjectsData";
import "../scss/project_modal.scss";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
// import response from "https://www.notion.so/3b46badf1f7440dabc776b08c233e32c"; // https://www.notion.so/3b46badf1f7440dabc776b08c233e32c

function ProjectsModal(props) {
  const PAGE_ID = ProjectsData[props.project].pageId;
  const [loading, setLoading] = useState(false);
  const [notionPageData, setNotionPageData] = useState(null);
  useEffect(() => {
    if (!loading) {
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
    }
  });
  const modalOnHide = () => {
    props.setShow(false);
    setLoading(false);
    setNotionPageData(null);
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
