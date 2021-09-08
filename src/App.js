import "./App.css";
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {

  let pageSize = 9;

  const [Progress, setProgress] = useState(0);

  return (
    <Router>
      <Navbar />
      <LoadingBar
        color="#f11946"
        height={4}
        Progress={Progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Switch>
        <Route exact path="/">
          <News
            setProgress={setProgress}
            key="General"
            category="general"
            country="in"
            pageSize={pageSize}
          />
        </Route>
        <Route exact path="/general">
          <News
            setProgress={setProgress}
            key="General"
            category="general"
            country="in"
            pageSize={pageSize}
          />
        </Route>
        <Route exact path="/business">
          <News
            setProgress={setProgress}
            key="Business"
            category="business"
            country="in"
            pageSize={pageSize}
          />
        </Route>
        <Route exact path="/entertainment">
          <News
            setProgress={setProgress}
            key="Entertainment"
            category="entertainment"
            country="in"
            pageSize={pageSize}
          />
        </Route>
        <Route exact path="/health">
          <News
            setProgress={setProgress}
            key="Health"
            category="health"
            country="in"
            pageSize={pageSize}
          />
        </Route>
        <Route exact path="/science">
          <News
            setProgress={setProgress}
            key="Science"
            category="science"
            country="in"
            pageSize={pageSize}
          />
        </Route>
        <Route exact path="/sports">
          <News
            setProgress={setProgress}
            key="Sports"
            category="sports"
            country="in"
            pageSize={pageSize}
          />
        </Route>
        <Route exact path="/technology">
          <News
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
