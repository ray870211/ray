import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import MainWrapper from "./components/Home/MainWrapper";
import ArticleWrapper from "./components/Article/ArticleWrapper";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainWrapper></MainWrapper>}></Route>
        <Route path='Article' element={<ArticleWrapper></ArticleWrapper>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
