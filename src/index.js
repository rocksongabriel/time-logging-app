import React from "react";
import ReactDOM from "react-dom";


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