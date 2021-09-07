import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  pageSize = 9;

  constructor() {
    super();
    this.state = {
      progress: 0
    }
  }

  changeProgress = (value) => {
    this.setState({progress: value});
  }

  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
        onLoaderFinished={() => this.setState({progress: 0})}
      />
        <Switch>
          <Route exact path="/"><News changeProgress={this.changeProgress} key="General" category="general" country="in" pageSize={this.pageSize} /></Route>
          <Route exact path="/general"><News changeProgress={this.changeProgress} key="General" category="general" country="in" pageSize={this.pageSize} /></Route>
          <Route exact path="/business"><News changeProgress={this.changeProgress} key="Business" category="business" country="in" pageSize={this.pageSize} /></Route>
          <Route exact path="/entertainment"><News changeProgress={this.changeProgress} key="Entertainment" category="entertainment" country="in" pageSize={this.pageSize} /></Route>
          <Route exact path="/health"><News changeProgress={this.changeProgress} key="Health" category="health" country="in" pageSize={this.pageSize} /></Route>
          <Route exact path="/science"><News changeProgress={this.changeProgress} key="Science" category="science" country="in" pageSize={this.pageSize} /></Route>
          <Route exact path="/sports"><News changeProgress={this.changeProgress} key="Sports" category="sports" country="in" pageSize={this.pageSize} /></Route>
          <Route exact path="/technology"><News changeProgress={this.changeProgress} key="Technology" category="technology" country="in" pageSize={this.pageSize} /></Route>
        </Switch>
      </Router>
    );
  }
}