import React from "react";
import ArticleContent from "../components/Article/ArticleContent";
import Sidebar from "../components/Article/Sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
function ArticleWrapper() {
  return (
    <div className='main-wrapper'>
      <Header></Header>
      <Row className='m-0'>
        <Col className='p-0' xl={1} lg={1} md={2}>
          <Sidebar></Sidebar>
        </Col>
        <Col className='p-0' xl={11} lg={11} md={10}>
          <ArticleContent></ArticleContent>
        </Col>
      </Row>
    </div>
  );
}
export default ArticleWrapper;
