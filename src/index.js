// import built-in stuff
import React from "react";
import ReactDOM from "react-dom";
import TimeLoggingApp from "./App";



// import css files
import ("./css/index.css");


class App extends React.Component {
  render() {
    return (
      <TimeLoggingApp />
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
)