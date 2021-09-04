import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><News key="General" category="general" country="in" pageSize={9} /></Route>
          <Route exact path="/general"><News key="General" category="general" country="in" pageSize={9} /></Route>
          <Route exact path="/business"><News key="Business" category="business" country="in" pageSize={9} /></Route>
          <Route exact path="/entertainment"><News key="Entertainment" category="entertainment" country="in" pageSize={9} /></Route>
          <Route exact path="/health"><News key="Health" category="health" country="in" pageSize={9} /></Route>
          <Route exact path="/science"><News key="Science" category="science" country="in" pageSize={9} /></Route>
          <Route exact path="/sports"><News key="Sports" category="sports" country="in" pageSize={9} /></Route>
          <Route exact path="/technology"><News key="Technology" category="technology" country="in" pageSize={9} /></Route>
        </Switch>
      </Router>
    );
  }
}