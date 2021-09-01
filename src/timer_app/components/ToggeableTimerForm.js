import React from "react";
import TimerForm from "./TimerForm";


class ToggeableTimerForm extends React.Component {
  render() {
    if (this.props.isOpen) {
      return (
        <TimerForm />
      )
    } else {
      return (
        <div class="flex justify-around py-5">
          <button 
            className="py-2 px-6 text-green-600 font-bold border-2 border-green-800 hover:bg-black hover:text-white">
            Add New
          </button>
        </div>
      )
    }
  }
}