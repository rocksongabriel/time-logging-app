// import built-in stuff
import React from "react";
import ReactDOM from "react-dom";

// import css files
import ("./css/tailwind.css");


// components
class TimeLoggingApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Time Logging App</h1>
      </div>
    );
  }
};


ReactDOM.render(
  <TimeLoggingApp />,
  document.getElementById("root")
)