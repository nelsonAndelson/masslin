import React, { Component } from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./components/Services/Services";
import Interior from "./components/Interior/Interior";
import Exterior from "./components/Interior/Exterior";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/interior" component={Interior} />
        <Route exact path="/exterior" component={Exterior} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
      </Router>
    );
  }
}
