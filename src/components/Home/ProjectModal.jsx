import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import NotionButton from "./NotionButton";
import { NotionRenderer } from "react-notion";
import Api from "../../services/Api";
import "../../sass/components/project_modal.sass";
import { ReactComponent as CancelButton } from "../../assets/icon/cancel_96921.svg";
import "react-notion/src/styles.css";
function ProjectModal(props) {
  const modalData = props.modalData;
  console.log(modalData);
  //notion
  const PAGE_ID = modalData.pageId;
  const [loading, setLoading] = useState(false);
  const [notionPageData, setNotionPageData] = useState(null);
  useEffect(() => {
    if (PAGE_ID) {
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
          <p className='time'>2021-6</p>
          <div className='project-title'>
            <h3>人臉辨識</h3>
            <span>span</span>
          </div>
          <div className='project-content'>
            <div className='project-detail'>
              <h5 className='project-detail-title'>前台頁面</h5>
              <p className='project-detail-content'>
                {modalData.text}
                <NotionRenderer blockMap={notionPageData}></NotionRenderer>
              </p>
              <div className='project-detail-button'>
                <NotionButton text={"標籤按鈕"}></NotionButton>
                <NotionButton text={"標籤按鈕"}></NotionButton>
                <NotionButton text={"標籤按鈕"}></NotionButton>
                <NotionButton text={"標籤按鈕"}></NotionButton>
                <NotionButton text={"標籤按鈕"}></NotionButton>
                <NotionButton text={"標籤按鈕"}></NotionButton>
              </div>
            </div>
          </div>
        </Modal.Body>
        <CancelButton onClick={projectOnHide} className='cancel-button'></CancelButton>
      </Modal>
    </>
  );
}

export default ProjectModal;
