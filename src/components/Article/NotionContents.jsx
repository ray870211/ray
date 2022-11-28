import React, { useState, useEffect } from "react";
import Api from "../../services/Api";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";
import { ArticleData } from "../../data/ArticleData";
import { useParams } from "react-router-dom";

function NotinContents(props) {
  const PAGE_ID = ArticleData[props.notionId].postId;
  const [loading, setLoading] = useState(false);
  const [notionPageData, setNotionPageData] = useState(null);

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
  }, [props.notionId]);
  return <></>;
}
export default NotinContents;
