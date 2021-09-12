import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    <Router>
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
      <Switch>
        <Route exact path="/search">
        <News
            key={searchQuery}
            searchQuery={searchQuery}
            mode={mode}
            setProgress={setProgress}
            pageSize={pageSize}
          />
        </Route>
        <Route exact path="/">
          <News
            mode={mode}
            setProgress={setProgress}
            key="General"
            category="general"
            country="in"
            pageSize={pageSize}
          />
        </Route>
        <Route exact path="/general">
          <News
            mode={mode}
            setProgress={setProgress}
            key="General"
            category="general"
            country="in"
            pageSize={pageSize}
          />
        </Route>
        <Route exact path="/business">
          <News
            mode={mode}
            setProgress={setProgress}
            key="Business"
            category="business"
            country="in"
            pageSize={pageSize}
          />
        </Route>
        <Route exact path="/entertainment">
          <News
            mode={mode}
            setProgress={setProgress}
            key="Entertainment"
            category="entertainment"
            country="in"
            pageSize={pageSize}
          />
        </Route>
        <Route exact path="/health">
          <News
            mode={mode}
            setProgress={setProgress}
            key="Health"
            category="health"
            country="in"
            pageSize={pageSize}
          />
        </Route>
        <Route exact path="/science">
          <News
            mode={mode}
            setProgress={setProgress}
            key="Science"
            category="science"
            country="in"
            pageSize={pageSize}
          />
        </Route>
        <Route exact path="/sports">
          <News
            mode={mode}
            setProgress={setProgress}
            key="Sports"
            category="sports"
            country="in"
            pageSize={pageSize}
          />
        </Route>
        <Route exact path="/technology">
          <News
            mode={mode}
            setProgress={setProgress}
            key="Technology"
            category="technology"
            country="in"
            pageSize={pageSize}
          />
        </Route>
      </Switch>
    </Router>
  );
}
