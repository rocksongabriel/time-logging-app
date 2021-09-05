import React from "react";
import TimerForm from "./TimerForm";


class ToggeableTimerForm extends React.Component {
  state = {
    isOpen: false,
  }

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  }

  // handle closing of the form
  handleFormClose = () => {
    this.setState({ isOpen: false });
  }

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.handleFormClose();
  }

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm 
          onFormClose={this.handleFormClose}
          onFormSubmit={this.handleFormSubmit}
        />
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