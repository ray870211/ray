import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { ProjectsData } from "../data/ProjectsData";
function Projects() {
  const AddProject = (data) => {
    data = data.data;
    // eslint-disable-next-line default-case
    switch (data.template) {
      case 1:
        return (
          <Row className='m-0 p-5'>
            <Col
              style={data.style.title}
              className=' d-flex justify-content-center align-items-center'
              xl={data.col[0]}
              lg={data.col[0]}
              md={data.col[0]}>
              <h2>{data.title}</h2>
            </Col>
            <Col xl={data.col[1]} lg={data.col[1]} md={data.col[1]}>
              <img style={data.style.img} className='w-100' src={data.preview}></img>
            </Col>
          </Row>
        );
        break;
      case 2:
        return (
          <Row className='m-0 p-5'>
            <Col xl={data.col[1]} lg={data.col[1]} md={data.col[1]}>
              <img style={data.style.img} className='w-100' src={data.preview}></img>
            </Col>
            <Col
              style={data.style.title}
              className='d-flex justify-content-center align-items-center'
              xl={data.col[0]}
              lg={data.col[0]}
              md={data.col[0]}>
              <h2>{data.title}</h2>
            </Col>
          </Row>
        );
        break;
      case 3:
        return (
          <Row className='m-3 p-2' style={data.style.title}>
            <h3>{data.title}</h3>
            {data.images.map((element) => (
              <Col xl={data.col[1]} lg={data.col[1]} md={data.col[1]}>
                <img style={data.style.img} className='w-100' src={element.url}></img>
              </Col>
            ))}
          </Row>
        );
        break;
    }
  };
  return (
    <div className='projects'>
      {ProjectsData.map((element) => (
        <AddProject data={element}></AddProject>
      ))}
    </div>
  );
}
export default Projects;
