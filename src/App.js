import React from "react";
import TimersDashboard from "./timer_app/components/TimersDashboard";


class TimeLoggingApp extends React.Component {
  render() {
    return (
      <div className="flex justify-around">
        
        <div className="mx-10 md:w-1/2">
          <h1 className="text-3xl font-bold mt-5 text-center">Timers</h1>
          <hr className="text-gray-300 mb-5"/>

          <TimersDashboard />

        </div>

      </div>
    );
  }
};


export default TimeLoggingApp;