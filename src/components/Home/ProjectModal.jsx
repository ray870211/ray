import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import NotionButton from "./NotionButton";
//notion
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";
import Api from "../../services/Api";
import "../../sass/components/project_modal.sass";
import { ReactComponent as CancelButton } from "../../assets/icon/cancel_96921.svg";
import Spinner from "react-bootstrap/Spinner";

function ProjectModal(props) {
  const modalData = props.modalData;
  console.log(modalData);
  //notion
  const PAGE_ID = modalData.pageId;
  const [loading, setLoading] = useState(false);
  const [notionPageData, setNotionPageData] = useState(null);
  useEffect(() => {
    setLoading(false);
    if (props.modalShow) {
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
  }, [PAGE_ID]);
  const projectOnHide = () => {
    props.changeProjectState({ type: "modalShow", setShow: false });
    console.log("ass");
  };
  return (
    <>
      <Modal
        className='project-modal-content'
        show={props.modalShow}
        fullscreen={true}
        scrollable={true}
        onHide={() => projectOnHide()}>
        <Modal.Body>
          {loading ? (
            // <NotionRenderer blockMap={notionPageData}></NotionRenderer>
            <>
              <p className='time'>{modalData.time}</p>
              <div className='project-title'>
                <h3>{modalData.title}</h3>
                <span></span>
              </div>
              <div className='project-content'>
                <div className='project-detail'>
                  <h5 className='project-detail-title'></h5>
                  <NotionRenderer blockMap={notionPageData}></NotionRenderer>
                  <div className='project-detail-button'>
                    {modalData.button.map((element) => (
                      <NotionButton text={element.text} notionId={element.notionId}></NotionButton>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Spinner animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          )}
        </Modal.Body>
        <CancelButton onClick={projectOnHide} className='cancel-button'></CancelButton>
      </Modal>
    </>
  );
}

export default ProjectModal;
