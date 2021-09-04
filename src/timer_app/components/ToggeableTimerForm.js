import React from "react";
import TimerForm from "./TimerForm";


class ToggeableTimerForm extends React.Component {
  state = {
    isOpen: false,
  }

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  }

  render() {
    console.log(this.props);
    if (this.state.isOpen) {
      return (
        <TimerForm />
      )
    } else {
      return (
        <div className="flex justify-around py-5">
          <button 
            className="py-2 px-6 text-green-600 font-bold border-2 border-green-800 hover:bg-black hover:text-white"
            onClick={this.handleFormOpen}>
            Add New
          </button>
        </div>
      )
    }
  }
}


export default ToggeableTimerForm;