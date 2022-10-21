import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Api from "../../services/Api";
import { NotionRenderer } from "react-notion";
import { ArticleData } from "../../data/ArticleData";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import Header from "../Header";
function ArticleContent(props) {
  const PAGE_ID = ArticleData[props.notionId].postId;
  const [loading, setLoading] = useState(false);
  const [notionPageData, setNotionPageData] = useState(null);
  console.log(props.notionId);

  useEffect(() => {
    setNotionPageData(false);
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
  }, [props.notionId]);
  return (
    <>
      <Header></Header>
      <div className='notion-content'>
        {loading && <NotionRenderer blockMap={notionPageData}></NotionRenderer>}
      </div>
    </>
  );
}
export default ArticleContent;
