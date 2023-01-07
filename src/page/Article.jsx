import React, { useState, useEffect } from "react";
import Api from "../services/Api";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Header";
import "../sass/components/sidebar.sass";
import "bootstrap/dist/css/bootstrap.css";
//notion
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting

function ArticleWrapper() {
  const PAGE_ID = useParams().notionCode;
  const [loading, setLoading] = useState(false);
  const [notionPageData, setNotionPageData] = useState(null);
  // const location = useLocation();

  console.log(PAGE_ID);
  useEffect(() => {
    setNotionPageData(false);
    Api.loadNotionContent(PAGE_ID)
      .then((res) => {
        setNotionPageData(res.data);
        setLoading(true);
        document.body.style.backgroundColor = "rgb(255,255,255)";
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setLoading(false);
      });
  }, [PAGE_ID]);
  return (
    <div className='main-wrapper'>
      <Header></Header>
      <Row className='m-0'>
        <Col className='p-0' xl={12} lg={12} md={12}>
          <div className='notion-content'>
            {loading && (
              <NotionRenderer
                hideHeader={true}
                blockMap={notionPageData}
                fullPage={true}
                darkMode={false}
              />
              // <>abb</>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default ArticleWrapper;
