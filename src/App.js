import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  let pageSize = 9;

  const [Progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const [searchQuery, setSearchQuery] = useState("");

  const changeMode = (m) => {
    if (m === "dark") {
      setMode("dark");
      document.body.style.backgroundColor = "#303031";
      document.getElementById("searchbox").classList.add("searchbox");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ececec";
      document.getElementById("searchbox").classList.remove("searchbox");
    }
  };

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Navbar
        mode={mode}
        changeMode={changeMode}
        handleSearchQuery={handleSearchQuery}
      />
      <LoadingBar
        color="#f11946"
        height={4}
        Progress={Progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path="/search" element={
          <News
            key={searchQuery}
            searchQuery={searchQuery}
            mode={mode}
            setProgress={setProgress}
            pageSize={pageSize}
          />
        }>
        </Route>
        <Route exact path="/" element={
          <News
            mode={mode}
            setProgress={setProgress}
            key="General"
            category="general"
            country="in"
            pageSize={pageSize}
          />
        }>
        </Route>
        <Route exact path="/general" element={
          <News
            mode={mode}
            setProgress={setProgress}
            key="General"
            category="general"
            country="in"
            pageSize={pageSize}
          />
        }>
        </Route>
        <Route exact path="/business" element={
          <News
            mode={mode}
            setProgress={setProgress}
            key="Business"
            category="business"
            country="in"
            pageSize={pageSize}
          />
        }>
        </Route>
        <Route exact path="/entertainment" element={
          <News
            mode={mode}
            setProgress={setProgress}
            key="Entertainment"
            category="entertainment"
            country="in"
            pageSize={pageSize}
          />
        }>
        </Route>
        <Route exact path="/health" element={
          <News
            mode={mode}
            setProgress={setProgress}
            key="Health"
            category="health"
            country="in"
            pageSize={pageSize}
          />
        }>
        </Route>
        <Route exact path="/science" element={
          <News
            mode={mode}
            setProgress={setProgress}
            key="Science"
            category="science"
            country="in"
            pageSize={pageSize}
          />
        }>
        </Route>
        <Route exact path="/sports" element={
          <News
            mode={mode}
            setProgress={setProgress}
            key="Sports"
            category="sports"
            country="in"
            pageSize={pageSize}
          />
        }>
        </Route>
        <Route exact path="/technology" element={
          <News
            mode={mode}
            setProgress={setProgress}
            key="Technology"
            category="technology"
            country="in"
            pageSize={pageSize}
          />
        }>
        </Route>
      </Routes>
    </>
  );
}
