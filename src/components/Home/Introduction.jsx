import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import github_icon from "../../images/github 1.svg";
import gmail_icon from "../../images/gmail-icon.svg";
import "../../sass/components/introduction.sass";
function Introduction() {
  return (
    <div className='introduction d-flex  align-items-center justify-content-center'>
      <Container fluid className='p-0 '>
        <Row className='m-0'>
          <Col md={6} className='title text-center'>
            <h1>
              Ray<br></br> Front end Developer
            </h1>

            <p>對前端開發充滿興趣，喜歡鑽研各種不同的技術。</p>
          </Col>
          <Col md={6} className='myself d-flex align-items-center'>
            <img className='myphoto' src={require("../../images/ray.png")}></img>
          </Col>
        </Row>
        <Row className='m-0 mt-4'>
          <Col className='button-group d-flex'>
            <div className='social-icons'>
              <img className='social-icon' src={github_icon} alt='' />
              <img className='social-icon' src={gmail_icon}></img>
            </div>
          </Col>
          <Col className='mail'>
            <p>ray870211@gmail.com</p>
            <p>github.com/ray870211</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Introduction;
