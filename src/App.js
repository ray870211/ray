import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./page/Home.jsx";
import Article from "./page/Article.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='Article' element={<Article></Article>}></Route>
        <Route path='/:notionCode' element={<Article></Article>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
