import React, { Component } from "react";
import "./App.css";
import Split from "react-split";
import Header from "./Header.js";
import Editorside from "./Editorside";
import Rendererside from "./Rendererside";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TreeCon">
        <Header />
        <Split>
          <Editorside />
          <Rendererside />
        </Split>
      </div>
    );
  }
}

export default App;
