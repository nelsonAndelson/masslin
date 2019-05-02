import React, { Component } from "react";
import NavBar from "./NavBar";
import { SplashScreen } from "./SplashScreen";
import Footer from "./Footer";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SplashScreen />
        <>{this.props.children}</>
        <Footer />
      </div>
    );
  }
}
