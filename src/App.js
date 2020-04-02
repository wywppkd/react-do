import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Apple from "./Pages/Apple";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Apple} />
      </BrowserRouter>
    );
  }
}

export default App;
