import React, { useState, useEffect } from "react";
import Api from "../../services/Api";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";
import { ArticleData } from "../../data/ArticleData";
import { useParams } from "react-router-dom";

function ArticleContent(props) {
  const PAGE_ID = useParams().notionCode;
  const [loading, setLoading] = useState(false);
  const [notionPageData, setNotionPageData] = useState(null);
  console.log(PAGE_ID.notionCode);
  useEffect(() => {
    setNotionPageData(false);
    Api.loadNotionContent(PAGE_ID)
      .then((res) => {
        setNotionPageData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setLoading(false);
      });
  }, [window.location.pathname]);
  return (
    <>
      <div className='notion-content'>
        {loading && <NotionRenderer blockMap={notionPageData}></NotionRenderer>}
      </div>
    </>
  );
}
export default ArticleContent;
