import React from "react";
import { Link } from "react-router-dom";
export default function NotionButton(props) {
  const style = {
    border: "0.1rem solid rgb(85,120,170)",
    margin: "0.4rem",
    padding: "0.1rem 0.16rem",
    borderRadius: "5rem",
    fontSize: "1.3rem",
    color: "rgb(85,120,170)",
    fontWeight: "600",
    textDecoration: "none",
  };
  return (
    <React.Fragment>
      <Link to={"/" + props.notionId} style={style}>
        {props.text}
      </Link>
    </React.Fragment>
  );
}
