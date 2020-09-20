import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

class App extends Component {
  componentDidMount() {}
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
