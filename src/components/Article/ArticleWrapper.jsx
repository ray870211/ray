import React, { useState } from "react";
import ArticleContent from "./ArticleContent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
function ArticleWrapper() {
  const [notionId, setNotionId] = useState(0);
  return (
    <div className='main-wrapper'>
      <Row className='m-0'>
        <Col className='p-0' xl={11} lg={11} md={10}>
          <ArticleContent notionId={notionId}></ArticleContent>
        </Col>
      </Row>
    </div>
  );
}
export default ArticleWrapper;
