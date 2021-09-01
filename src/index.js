// import built-in stuff
import React from "react";
import ReactDOM from "react-dom";
import TimeLoggingApp from "./App";



// import css files
import ("./css/tailwind.css");


class App extends React.Component {
  render() {
    return (
      <TimeLoggingApp />
    )
  }
}


ReactDOM.render(
  <TimeLoggingApp />,
  document.getElementById("root")
)