// import built-in stuff
import React from "react";
import ReactDOM from "react-dom";

// importing components
import Timer from "./timer_app/components/Timer";
import TimerForm from "./timer_app/components/TimerForm";

// import css files
import ("./css/tailwind.css");


// components
class TimeLoggingApp extends React.Component {
  render() {
    return (
      <div className="flex justify-around">
        
        <div className="mx-10 md:w-1/2">
          <h1 className="text-3xl font-bold mt-5 text-center">Timers</h1>
          <hr className="text-gray-300 mb-5"/>

          <Timer 
            title="Mob the floor"
            project="Office Chores"
          />

          <TimerForm />

          <Timer 
            title="Clean the dishes"
            project="House Chores"
          />

          <div class="flex justify-around py-5">
            <button 
              className="py-2 px-6 text-green-600 font-bold border-2 border-green-800 hover:bg-black hover:text-white">
              Add New
            </button>
          </div>

        </div>

      </div>
    );
  }
};


ReactDOM.render(
  <TimeLoggingApp />,
  document.getElementById("root")
)