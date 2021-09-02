import React from "react";

import uuid from "react-uuid";

// importing components
import EditableTimerList from "./EditableTimerList";
import ToggeableTimerForm from "./ToggeableTimerForm";


class TimersDashboard extends React.Component {

  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym chores',
        id: uuid(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuid(),
        elapsed: 1273998,
        runningSince: null,
      },
    ]
  };

  render() {
    console.log(this.state.timers);
    return (
      <div>
        <EditableTimerList 
          timers={this.state.timers}
        />
        <ToggeableTimerForm isOpen={false}/>
      </div>
    )
  }
}


export default TimersDashboard;