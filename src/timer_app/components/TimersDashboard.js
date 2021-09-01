import React from "react";

// importing components
import EditableTimerList from "./EditableTimerList";
import ToggeableTimerForm from "./ToggeableTimerForm";


class TimersDashboard extends React.Component {
  render() {
    return (
      <div>
        <EditableTimerList />
        <ToggeableTimerForm 
          isOpen={true}
        />
      </div>
    )
  }
}


export default TimersDashboard;