import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

function MainWrapper() {
  const style = {
    backgroundColor: "#ff9d50",
  };
  return (
    <div className='main-wrapper'>
      <Row className='m-0'>
        <Col style={style} className='p-0' xl={1} lg={1} md={2}>
          <Sidebar></Sidebar>
        </Col>
        <Col className='p-0' xl={11} lg={11} md={10}>
          <Content></Content>
        </Col>
      </Row>
    </div>
  );
}
export default MainWrapper;
